import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NAV_LINKS, SITE, telLink, whatsappLink } from '../../../shared/data/site.config';
import { SERVICE_CATEGORIES } from '../../../shared/data/services.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly site = SITE;
  readonly navLinks = NAV_LINKS;
  readonly featuredServices = SERVICE_CATEGORIES.flatMap((c) => c.items).slice(0, 7);
  readonly currentYear = new Date().getFullYear();
  readonly telLink = telLink;
  readonly whatsappLink = whatsappLink;
}
