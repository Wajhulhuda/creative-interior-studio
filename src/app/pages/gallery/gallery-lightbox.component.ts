import { Component, HostListener, Inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { GalleryImage } from '../../shared/data/gallery.data';

export interface GalleryLightboxData {
  images: GalleryImage[];
  startIndex: number;
}

@Component({
  selector: 'app-gallery-lightbox',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  template: `
    <div
      class="lightbox"
      (touchstart)="onTouchStart($event)"
      (touchend)="onTouchEnd($event)"
    >
      <button type="button" class="lightbox__close" (click)="dialogRef.close()" aria-label="Close">
        <mat-icon>close</mat-icon>
      </button>

      <button
        type="button"
        class="lightbox__nav lightbox__nav--prev"
        (click)="prev()"
        aria-label="Previous image"
      >
        <mat-icon>chevron_left</mat-icon>
      </button>

      <figure class="lightbox__figure">
        <img [src]="currentImage().src" [alt]="currentImage().alt" />
        <figcaption>{{ currentImage().title }}</figcaption>
        <div class="lightbox__counter">{{ index() + 1 }} / {{ data.images.length }}</div>
      </figure>

      <button
        type="button"
        class="lightbox__nav lightbox__nav--next"
        (click)="next()"
        aria-label="Next image"
      >
        <mat-icon>chevron_right</mat-icon>
      </button>
    </div>
  `,
  styleUrl: './gallery-lightbox.component.scss',
})
export class GalleryLightboxComponent {
  readonly index = signal(0);

  private touchStartX = 0;
  private touchStartY = 0;
  private static readonly SWIPE_THRESHOLD = 40;

  constructor(
    public dialogRef: MatDialogRef<GalleryLightboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GalleryLightboxData,
  ) {
    this.index.set(data.startIndex);
  }

  currentImage(): GalleryImage {
    return this.data.images[this.index()];
  }

  next(): void {
    this.index.set((this.index() + 1) % this.data.images.length);
  }

  prev(): void {
    this.index.set((this.index() - 1 + this.data.images.length) % this.data.images.length);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.prev();
    if (event.key === 'Escape') this.dialogRef.close();
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].clientX;
    this.touchStartY = event.changedTouches[0].clientY;
  }

  onTouchEnd(event: TouchEvent): void {
    const deltaX = event.changedTouches[0].clientX - this.touchStartX;
    const deltaY = event.changedTouches[0].clientY - this.touchStartY;

    if (Math.abs(deltaX) < GalleryLightboxComponent.SWIPE_THRESHOLD) return;
    if (Math.abs(deltaX) < Math.abs(deltaY)) return;

    if (deltaX < 0) {
      this.next();
    } else {
      this.prev();
    }
  }
}
