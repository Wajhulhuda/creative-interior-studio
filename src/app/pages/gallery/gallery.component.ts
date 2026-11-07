import { Component, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  GALLERY_CATEGORIES,
  GALLERY_IMAGES,
  GalleryCategoryId,
  GalleryImage,
} from '../../shared/data/gallery.data';
import { PageHeaderComponent } from '../../shared/ui/page-header/page-header.component';
import { CtaBandComponent } from '../../shared/ui/cta-band/cta-band.component';
import { GalleryLightboxComponent } from './gallery-lightbox.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { fadeInPage } from '../../shared/animations/page.animation';

type FilterId = GalleryCategoryId | 'all';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    MatChipsModule,
    MatDialogModule,
    MatIconModule,
    PageHeaderComponent,
    CtaBandComponent,
    RevealDirective,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  animations: [fadeInPage],
  host: { '[@fadeInPage]': '' },
})
export class GalleryComponent {
  readonly categories = GALLERY_CATEGORIES;
  readonly activeFilter = signal<FilterId>('all');

  readonly filteredImages = computed<GalleryImage[]>(() => {
    const filter = this.activeFilter();
    return filter === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === filter);
  });

  constructor(
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    route: ActivatedRoute,
  ) {
    // Lets "View in Gallery" links from elsewhere on the site (e.g. the home
    // page portfolio preview) land here with the relevant category already
    // selected, via ?category=<id>.
    const requested = route.snapshot.queryParamMap.get('category');
    if (requested && this.categories.some((c) => c.id === requested)) {
      this.activeFilter.set(requested as FilterId);
    }
  }

  setFilter(filter: FilterId): void {
    this.activeFilter.set(filter);
  }

  openLightbox(index: number): void {
    const isMobile = this.breakpointObserver.isMatched('(max-width: 599px)');

    this.dialog.open(GalleryLightboxComponent, {
      data: { images: this.filteredImages(), startIndex: index },
      panelClass: isMobile ? 'gallery-lightbox-panel-fullscreen' : 'gallery-lightbox-panel',
      width: isMobile ? '100vw' : undefined,
      height: isMobile ? '100dvh' : undefined,
      maxWidth: isMobile ? '100vw' : '96vw',
      maxHeight: isMobile ? '100dvh' : '96vh',
    });
  }
}
