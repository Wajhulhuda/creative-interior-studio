import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { SITE, whatsappLink } from '../../shared/data/site.config';
import { SERVICE_CATEGORIES, ServiceItem } from '../../shared/data/services.data';
import { GALLERY_IMAGES } from '../../shared/data/gallery.data';
import { CtaBandComponent } from '../../shared/ui/cta-band/cta-band.component';
import { StatRowComponent, Stat } from '../../shared/ui/stat-row/stat-row.component';
import { LeadDialogService } from '../../shared/services/lead-dialog.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { fadeInPage } from '../../shared/animations/page.animation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    CtaBandComponent,
    StatRowComponent,
    RevealDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeInPage],
  host: { '[@fadeInPage]': '' },
})
export class HomeComponent {
  readonly site = SITE;
  readonly phone = SITE.phones[0];
  readonly whatsappHref = whatsappLink(this.phone.raw);

  constructor(public leadDialog: LeadDialogService) {}

  readonly heroStats: Stat[] = [
    { value: `${SITE.yearsExperience}+`, label: 'Years of Experience' },
    { value: `${SITE.projectsCompleted}+`, label: 'Projects Completed' },
    { value: `${SITE.serviceAreas.length}`, label: 'Areas Served in Hyderabad' },
  ];

  readonly featuredServices: ServiceItem[] = SERVICE_CATEGORIES.flatMap((c) => c.items).slice(0, 8);

  // One strong shot per category (plus one extra) rather than a plain slice,
  // so the homepage preview represents the full breadth of work instead of
  // whichever categories happen to sit first in the data file.
  private static readonly FEATURED_IDS = [
    'kitchen-modular-kitchen-01',
    'wardrobe-wardrobe-bedroom-01',
    'living-tv-unit-01',
    'pooja-pooja-unit-03',
    'kids-room-kids-room-02',
    'vanity-vanity-washbasin-02',
    'foyer-foyer-entrance-01',
    'wardrobe-wardrobe-bedroom-06',
  ];
  readonly featuredGallery = HomeComponent.FEATURED_IDS.map((id) =>
    GALLERY_IMAGES.find((image) => image.id === id),
  ).filter((image): image is NonNullable<typeof image> => !!image);
  readonly trustPoints = SITE.trustPoints;
  readonly serviceAreas = SITE.serviceAreas;
}
