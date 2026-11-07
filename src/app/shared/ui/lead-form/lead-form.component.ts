import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LEAD_FORM, SITE, telLink, whatsappLink } from '../../data/site.config';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-lead-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './lead-form.component.html',
  styleUrl: './lead-form.component.scss',
})
export class LeadFormComponent {
  @Output() submitted = new EventEmitter<void>();

  readonly cityOptions = LEAD_FORM.cityOptions;
  readonly site = SITE;
  readonly state = signal<SubmitState>('idle');
  readonly callHref = telLink(SITE.phones[0].raw);
  readonly whatsappHref = whatsappLink(SITE.phones[0].raw);

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    city: ['', Validators.required],
    whatsappOptIn: [true],
  });

  constructor(private fb: FormBuilder) {}

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.state.set('submitting');
    const value = this.form.getRawValue();

    try {
      const response = await fetch(LEAD_FORM.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: LEAD_FORM.web3formsAccessKey,
          subject: `New website enquiry — ${value.name}`,
          from_name: SITE.companyName + ' Website',
          name: value.name,
          email: value.email,
          phone: `+91${value.phone}`,
          city: value.city,
          whatsapp_updates: value.whatsappOptIn ? 'Yes' : 'No',
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Submission failed');

      this.state.set('success');
      this.submitted.emit();
    } catch {
      this.state.set('error');
    }
  }

  resetForm(): void {
    this.form.reset({ whatsappOptIn: true });
    this.state.set('idle');
  }
}
