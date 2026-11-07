import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NAV_LINKS, SITE, telLink, whatsappLink } from '../../../shared/data/site.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();
  // Emits instead of opening the dialog itself: HeaderComponent is part of
  // the eager root bundle (rendered directly by AppComponent, not a lazy
  // page), so it must stay free of any MatDialog import — AppComponent
  // already handles opening the dialog via a dynamic import for this reason.
  @Output() openLeadForm = new EventEmitter<void>();

  readonly navLinks = NAV_LINKS;
  readonly site = SITE;
  readonly primaryPhone = SITE.phones[0];
  readonly callHref = telLink(this.primaryPhone.raw);
  readonly whatsappHref = whatsappLink(this.primaryPhone.raw);
}
