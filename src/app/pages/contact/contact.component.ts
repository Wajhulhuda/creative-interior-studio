import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SITE, telLink, whatsappLink } from '../../shared/data/site.config';
import { PageHeaderComponent } from '../../shared/ui/page-header/page-header.component';
import { LeadFormComponent } from '../../shared/ui/lead-form/lead-form.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { fadeInPage } from '../../shared/animations/page.animation';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, PageHeaderComponent, LeadFormComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [fadeInPage],
  host: { '[@fadeInPage]': '' },
})
export class ContactComponent {
  readonly site = SITE;
  readonly telLink = telLink;
  readonly whatsappLink = whatsappLink;
  readonly mapsUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.mapsUrl = sanitizer.bypassSecurityTrustResourceUrl(SITE.mapsEmbedSrc);
  }
}
