import { Component, Injector, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { WhatsappFabComponent } from './core/layout/whatsapp-fab/whatsapp-fab.component';
import { NAV_LINKS, SITE, telLink, whatsappLink } from './shared/data/site.config';

const LEAD_POPUP_DELAY_MS = 20000;
const LEAD_POPUP_SESSION_KEY = 'cid_lead_popup_shown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    HeaderComponent,
    FooterComponent,
    WhatsappFabComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  readonly navLinks = NAV_LINKS;
  readonly site = SITE;
  readonly phone = SITE.phones[0];
  readonly callHref = telLink(this.phone.raw);
  readonly whatsappHref = whatsappLink(this.phone.raw);

  // The header is `position: fixed` with z-index 100, which sits BELOW the
  // CDK overlay backdrop (z-index 1000) — so a dialog does correctly block
  // clicks on it. But the backdrop is semi-transparent and dark, same as the
  // header's own background, so visually the header still reads as "on top"
  // of the dialog. Hiding it outright while any dialog is open is the fix.
  hasOpenOverlay = false;
  private sheetOpen = false;

  constructor(
    private injector: Injector,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit(): void {
    this.scheduleLeadPopup();
    this.watchForOpenOverlay();
  }

  private watchForOpenOverlay(): void {
    const update = () => {
      const container = document.querySelector('.cdk-overlay-container');
      this.hasOpenOverlay = !!container && container.childElementCount > 0;
    };
    update();
    new MutationObserver(update).observe(document.body, { childList: true, subtree: true });
  }

  private scheduleLeadPopup(): void {
    if (this.hasPopupAlreadyShown()) return;

    setTimeout(() => {
      if (this.router.url.startsWith('/contact')) return;
      this.markPopupShown();
      this.openLeadDialog();
    }, LEAD_POPUP_DELAY_MS);
  }

  // Public: bound to the header's "Get Free Consultation" button and the
  // mobile drawer's, both of which live in the eager root bundle (rendered
  // directly by AppComponent, not a lazy page) and so can't import MatDialog
  // / MatBottomSheet themselves without the same bundle cost this
  // dynamic-import avoids.
  async openLeadDialog(): Promise<void> {
    const isMobile = this.breakpointObserver.isMatched('(max-width: 599px)');

    if (isMobile) {
      if (this.sheetOpen) return;

      const [{ MatBottomSheet }, { LeadBottomSheetComponent }] = await Promise.all([
        import('@angular/material/bottom-sheet'),
        import('./core/lead-bottom-sheet/lead-bottom-sheet.component'),
      ]);
      const bottomSheet = this.injector.get(MatBottomSheet);

      this.sheetOpen = true;
      const ref = bottomSheet.open(LeadBottomSheetComponent, { panelClass: 'lead-sheet-panel' });
      ref.afterDismissed().subscribe(() => (this.sheetOpen = false));
      return;
    }

    // Dynamically import MatDialog (CDK overlay) AND the popup component
    // together, so the root bundle stays free of the dialog stack until a
    // dialog is actually needed — opening one from the app shell (rather than
    // from a lazy route) would otherwise force it in eagerly.
    const [{ MatDialog }, { LeadPopupComponent }] = await Promise.all([
      import('@angular/material/dialog'),
      import('./core/lead-popup/lead-popup.component'),
    ]);
    const dialog = this.injector.get(MatDialog);

    if (dialog.openDialogs.length > 0) return;

    dialog.open(LeadPopupComponent, {
      panelClass: 'lead-popup-panel',
      maxWidth: '96vw',
      maxHeight: '92vh',
      autoFocus: false,
    });
  }

  private hasPopupAlreadyShown(): boolean {
    try {
      return sessionStorage.getItem(LEAD_POPUP_SESSION_KEY) === '1';
    } catch {
      return false;
    }
  }

  private markPopupShown(): void {
    try {
      sessionStorage.setItem(LEAD_POPUP_SESSION_KEY, '1');
    } catch {
      // Ignore — private browsing / storage disabled. Worst case the popup
      // can show again later in the session, which is harmless.
    }
  }
}
