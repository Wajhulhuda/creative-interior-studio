import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LeadDialogService } from '../../services/lead-dialog.service';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: `
    <section class="page-header">
      @if (backgroundImage) {
        <div class="page-header__media">
          <img [src]="backgroundImage" [alt]="''" />
          <div class="page-header__overlay"></div>
        </div>
      }
      <div class="page-container page-header__inner">
        <span class="eyebrow">{{ eyebrow }}</span>
        <h1>{{ title }}</h1>
        @if (subtitle) {
          <p>{{ subtitle }}</p>
        }
        @if (showCta) {
          <button type="button" mat-flat-button class="btn-gold page-header__cta" (click)="leadDialog.open()">
            <mat-icon>design_services</mat-icon>
            Get Free Consultation
          </button>
        }
      </div>
    </section>
  `,
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  @Input() eyebrow = 'Creative Interior Design Studio';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() showCta = false;
  @Input() backgroundImage = '';

  constructor(public leadDialog: LeadDialogService) {}
}
