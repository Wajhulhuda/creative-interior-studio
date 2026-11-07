import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SITE, whatsappLink } from '../../data/site.config';
import { LeadDialogService } from '../../services/lead-dialog.service';

@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: `
    <section class="cta-band">
      <div class="page-container cta-band__inner">
        <div>
          <h2>{{ heading }}</h2>
          <p>{{ subtext }}</p>
        </div>
        <div class="cta-band__actions">
          <button type="button" mat-flat-button class="btn-gold" (click)="leadDialog.open()">
            <mat-icon>design_services</mat-icon>
            Get Free Consultation
          </button>
          <a [href]="whatsappHref" target="_blank" rel="noopener" mat-stroked-button class="btn-outline-light">
            <mat-icon>chat</mat-icon>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './cta-band.component.scss',
})
export class CtaBandComponent {
  @Input() heading = 'Ready to design your dream home?';
  @Input() subtext =
    'Get a free site visit and 3D design consultation from Creative Interior Design Studio.';

  readonly phone = SITE.phones[0];
  readonly whatsappHref = whatsappLink(this.phone.raw);

  constructor(public leadDialog: LeadDialogService) {}
}
