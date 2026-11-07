import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LeadPopupComponent } from '../../core/lead-popup/lead-popup.component';
import { LeadBottomSheetComponent } from '../../core/lead-bottom-sheet/lead-bottom-sheet.component';

// Only ever injected from lazy-loaded page components, so pulling in
// MatDialog + LeadPopupComponent here doesn't affect the eager root bundle
// (unlike AppComponent's own auto-popup trigger, which has to dynamic-import
// both specifically to avoid that).
@Injectable({ providedIn: 'root' })
export class LeadDialogService {
  private sheetOpen = false;

  constructor(
    private dialog: MatDialog,
    private bottomSheet: MatBottomSheet,
    private breakpointObserver: BreakpointObserver,
  ) {}

  open(): void {
    if (this.dialog.openDialogs.length > 0 || this.sheetOpen) return;

    const isMobile = this.breakpointObserver.isMatched('(max-width: 599px)');

    if (isMobile) {
      this.sheetOpen = true;
      const ref = this.bottomSheet.open(LeadBottomSheetComponent, {
        panelClass: 'lead-sheet-panel',
      });
      ref.afterDismissed().subscribe(() => (this.sheetOpen = false));
      return;
    }

    this.dialog.open(LeadPopupComponent, {
      panelClass: 'lead-popup-panel',
      maxWidth: '96vw',
      maxHeight: '92vh',
      autoFocus: false,
    });
  }
}
