import { animate, style, transition, trigger } from '@angular/animations';

/**
 * Plays once when a routed page component is first inserted into the DOM
 * (`:enter`), i.e. on every navigation to that route — giving each page a
 * soft fade/rise instead of snapping in instantly.
 */
export const fadeInPage = trigger('fadeInPage', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(18px)' }),
    animate('480ms cubic-bezier(0.2, 0.7, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
