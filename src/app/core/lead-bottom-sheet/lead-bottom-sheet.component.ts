import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { SITE } from '../../shared/data/site.config';
import { LeadFormComponent } from '../../shared/ui/lead-form/lead-form.component';

// Mobile counterpart to LeadPopupComponent — same form, but presented as a
// bottom sheet (slides up from the bottom, no side image) instead of a
// centered dialog, which reads better on small screens.
@Component({
  selector: 'app-lead-bottom-sheet',
  standalone: true,
  imports: [MatIconModule, LeadFormComponent],
  templateUrl: './lead-bottom-sheet.component.html',
  styleUrl: './lead-bottom-sheet.component.scss',
})
export class LeadBottomSheetComponent {
  readonly site = SITE;

  constructor(private bottomSheetRef: MatBottomSheetRef<LeadBottomSheetComponent>) {}

  close(): void {
    this.bottomSheetRef.dismiss();
  }

  onSubmitted(): void {
    setTimeout(() => this.bottomSheetRef.dismiss(), 4000);
  }
}
