import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SITE, whatsappLink } from '../../../shared/data/site.config';

@Component({
  selector: 'app-whatsapp-fab',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <a
      class="whatsapp-fab"
      [href]="href"
      target="_blank"
      rel="noopener"
      aria-label="Chat with Creative Interior Design Studio on WhatsApp"
    >
      <mat-icon>chat</mat-icon>
    </a>
  `,
  styleUrl: './whatsapp-fab.component.scss',
})
export class WhatsappFabComponent {
  readonly href = whatsappLink(SITE.phones[0].raw);
}
