import { Component, Input } from '@angular/core';

export interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-stat-row',
  standalone: true,
  template: `
    <div class="stat-row">
      @for (stat of stats; track stat.label) {
        <div class="stat-row__item">
          <span class="stat-row__value">{{ stat.value }}</span>
          <span class="stat-row__label">{{ stat.label }}</span>
        </div>
      }
    </div>
  `,
  styleUrl: './stat-row.component.scss',
})
export class StatRowComponent {
  @Input() stats: Stat[] = [];
}
