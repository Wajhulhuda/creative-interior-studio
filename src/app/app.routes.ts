import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Creative Interior Design Studio | Interior Designers in Patancheru, Hyderabad',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | Creative Interior Design Studio',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Our Services | Creative Interior Design Studio',
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
    title: 'Portfolio & Gallery | Creative Interior Design Studio',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us | Creative Interior Design Studio',
  },
  { path: '**', redirectTo: '' },
];
