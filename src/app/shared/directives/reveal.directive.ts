import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

/**
 * Fades/slides an element in once it scrolls into view. Applied once per
 * element (unobserves after revealing) rather than re-triggering on every
 * scroll in/out, which is the expected behaviour for a marketing page.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() appRevealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');

    if (this.appRevealDelay) {
      node.style.transitionDelay = `${this.appRevealDelay}ms`;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      node.classList.add('reveal--visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('reveal--visible');
            this.observer?.unobserve(node);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
