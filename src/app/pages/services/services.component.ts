import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SITE } from '../../shared/data/site.config';
import { SERVICE_CATEGORIES } from '../../shared/data/services.data';
import { PageHeaderComponent } from '../../shared/ui/page-header/page-header.component';
import { CtaBandComponent } from '../../shared/ui/cta-band/cta-band.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { fadeInPage } from '../../shared/animations/page.animation';
import { LeadDialogService } from '../../shared/services/lead-dialog.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatIconModule, PageHeaderComponent, CtaBandComponent, RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  animations: [fadeInPage],
  host: { '[@fadeInPage]': '' },
})
export class ServicesComponent {
  readonly site = SITE;
  readonly categories = SERVICE_CATEGORIES;

  constructor(public leadDialog: LeadDialogService) {}
}
