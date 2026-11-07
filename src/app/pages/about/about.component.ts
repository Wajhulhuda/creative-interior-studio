import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { SITE } from '../../shared/data/site.config';
import { PageHeaderComponent } from '../../shared/ui/page-header/page-header.component';
import { CtaBandComponent } from '../../shared/ui/cta-band/cta-band.component';
import { StatRowComponent, Stat } from '../../shared/ui/stat-row/stat-row.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { fadeInPage } from '../../shared/animations/page.animation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatIconModule,
    MatChipsModule,
    PageHeaderComponent,
    CtaBandComponent,
    StatRowComponent,
    RevealDirective,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [fadeInPage],
  host: { '[@fadeInPage]': '' },
})
export class AboutComponent {
  readonly site = SITE;
  readonly processSteps = SITE.processSteps;
  readonly serviceAreas = SITE.serviceAreas;

  readonly promisePoints = [
    {
      icon: 'verified_user',
      title: 'Workmanship Warranty & After-Sales Support',
      description:
        "We stand behind our work after handover — not just until the final payment.",
    },
    {
      icon: 'groups',
      title: 'In-House Team, Not Subcontracted Strangers',
      description:
        'Our own carpenters, electricians and painters execute every project, so quality stays consistent.',
    },
    {
      icon: 'design_services',
      title: 'Free Site Visit & 3D Design Consultation',
      description:
        'See your space designed in 3D before a single cut is made — at no cost to you.',
    },
  ];

  readonly stats: Stat[] = [
    { value: `${SITE.yearsExperience}+`, label: 'Years of Experience' },
    { value: `${SITE.projectsCompleted}+`, label: 'Homes Delivered' },
    { value: `${SITE.serviceAreas.length}`, label: 'Areas Served' },
    { value: '18', label: 'Services Offered' },
  ];
}
