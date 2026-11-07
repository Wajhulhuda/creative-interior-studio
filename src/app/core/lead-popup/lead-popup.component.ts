import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SITE } from '../../shared/data/site.config';
import { LeadFormComponent } from '../../shared/ui/lead-form/lead-form.component';

@Component({
  selector: 'app-lead-popup',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, LeadFormComponent],
  templateUrl: './lead-popup.component.html',
  styleUrl: './lead-popup.component.scss',
})
export class LeadPopupComponent {
  readonly site = SITE;

  constructor(public dialogRef: MatDialogRef<LeadPopupComponent>) {}

  onSubmitted(): void {
    setTimeout(() => this.dialogRef.close(), 4000);
  }
}
