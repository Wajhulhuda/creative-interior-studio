export interface ServiceItem {
  name: string;
  icon: string;
  image: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'interior-furniture',
    title: 'Interior & Furniture',
    description:
      'The heart of your home — designed and built around how your family actually lives.',
    items: [
      {
        name: 'Complete Home Interior Solutions',
        icon: 'home',
        image: 'assets/images/wardrobe/wardrobe-bedroom-06.webp',
        description:
          'End-to-end interior planning and execution for apartments, villas and independent homes.',
      },
      {
        name: 'Modular Kitchen',
        icon: 'kitchen',
        image: 'assets/images/kitchen/modular-kitchen-01.webp',
        description:
          'Functional, premium modular kitchens designed around your cooking style and storage needs.',
      },
      {
        name: 'Wardrobes',
        icon: 'door_sliding',
        image: 'assets/images/wardrobe/wardrobe-bedroom-01.webp',
        description:
          'Sliding, hinged and walk-in wardrobes tailored to your wardrobe and storage requirements.',
      },
      {
        name: 'Bedroom & Living Room Interiors',
        icon: 'weekend',
        image: 'assets/images/wardrobe/wardrobe-bedroom-04.webp',
        description:
          'Comfortable, elegant bedroom and living space interiors that balance style and daily comfort.',
      },
      {
        name: 'TV Units',
        icon: 'tv',
        image: 'assets/images/living/tv-unit-01.webp',
        description:
          'Statement TV and media wall units in marble, veneer and laminate finishes with ambient lighting.',
      },
      {
        name: 'Pooja Units',
        icon: 'temple_hindu',
        image: 'assets/images/pooja/pooja-unit-03.webp',
        description:
          'Thoughtfully designed pooja units and mandir spaces that bring serenity to your home.',
      },
    ],
  },
  {
    id: 'ceiling-lighting-walls',
    title: 'Ceiling, Lighting & Walls',
    description:
      'The details that transform a house into a designed home — ceilings, light and texture.',
    items: [
      {
        name: 'False Ceiling',
        icon: 'roofing',
        image: 'assets/images/kitchen/modular-kitchen-03.webp',
        description:
          'Gypsum and POP false ceilings with cove and profile lighting designs for every room.',
      },
      {
        name: 'Lighting',
        icon: 'lightbulb',
        image: 'assets/images/living/tv-unit-03.webp',
        description:
          'Layered lighting design — ambient, task and accent — to set the mood of every space.',
      },
      {
        name: 'Wall Panelling',
        icon: 'view_week',
        image: 'assets/images/wardrobe/wardrobe-bedroom-03.webp',
        description:
          'Wood, PU and fluted wall panelling for feature walls that add depth and warmth.',
      },
      {
        name: 'Wallpaper',
        icon: 'wallpaper',
        image: 'assets/images/wardrobe/dresser-bedroom-01.webp',
        description:
          'Curated wallpaper designs to add personality to bedrooms, living rooms and kids\' rooms.',
      },
      {
        name: 'Glass Work',
        icon: 'window',
        image: 'assets/images/living/crockery-unit-02.webp',
        description:
          'Partitions, cabinet shutters and decorative glass work finished with precision.',
      },
    ],
  },
  {
    id: 'civil-mep',
    title: 'Civil & MEP Works',
    description:
      'The foundational trades, handled in-house so nothing is left to guesswork.',
    items: [
      {
        name: 'UPVC Work',
        icon: 'door_front',
        image: 'assets/images/wardrobe/wardrobe-bedroom-02.webp',
        description:
          'Durable, weather-resistant UPVC windows and doors for lasting performance.',
      },
      {
        name: 'Electrical',
        icon: 'electrical_services',
        image: 'assets/images/kitchen/modular-kitchen-02.webp',
        description:
          'Safe, code-compliant electrical wiring and fittings handled by experienced electricians.',
      },
      {
        name: 'Plumbing',
        icon: 'plumbing',
        image: 'assets/images/vanity/vanity-washbasin-01.webp',
        description:
          'Reliable plumbing work for kitchens, bathrooms and utility areas.',
      },
      {
        name: 'Painting',
        icon: 'format_paint',
        image: 'assets/images/wardrobe/wardrobe-bedroom-05.webp',
        description:
          'Premium interior and exterior painting with clean, long-lasting finishes.',
      },
      {
        name: 'Civil Work',
        icon: 'foundation',
        image: 'assets/images/foyer/foyer-entrance-05.webp',
        description:
          'Structural and civil modifications carried out safely and to specification.',
      },
    ],
  },
  {
    id: 'design-turnkey',
    title: 'Design & Turnkey',
    description:
      'Visualize it before it\'s built, then hand it all over to one accountable team.',
    items: [
      {
        name: '2D & 3D Interior Design',
        icon: 'architecture',
        image: 'assets/images/living/tv-unit-05.webp',
        description:
          'Detailed layouts and photorealistic 3D renders so you know exactly what you\'re getting.',
      },
      {
        name: 'Turnkey Interior Projects',
        icon: 'key',
        image: 'assets/images/foyer/foyer-entrance-01.webp',
        description:
          'From design to final finishing — a single studio managing every trade, start to handover.',
      },
    ],
  },
];

export const ALL_SERVICES: ServiceItem[] = SERVICE_CATEGORIES.flatMap((c) => c.items);
