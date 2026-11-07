export interface PhoneNumber {
  raw: string;
  display: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const SITE = {
  companyName: 'Creative Interior Design Studio',
  shortName: 'Creative Interior',
  tagline: 'We Design Your Dreams Into Reality',
  subTagline: 'Premium Interior Design & Turnkey Solutions in Hyderabad',
  founder: 'Najeeb Ahmad',
  yearsExperience: 7,
  projectsCompleted: 200,
  phones: [
    { raw: '9170729351', display: '+91 91707 29351' },
    { raw: '9511180062', display: '+91 95111 80062' },
  ] as PhoneNumber[],
  address: 'Patancheru, Hyderabad, Telangana',
  instagramUrl: 'https://www.instagram.com/creative_interior_ooo7/',
  instagramHandle: '@creative_interior_ooo7',
  serviceAreas: [
    'Patancheru',
    'Miyapur',
    'Nallagandla',
    'Narsingi',
    'Kukatpally',
    'Uppal',
    'Bachupally',
  ],
  mapsEmbedSrc:
    'https://maps.google.com/maps?q=Patancheru%2C%20Hyderabad%2C%20Telangana&t=&z=12&ie=UTF8&iwloc=&output=embed',
  whatsappDefaultMessage:
    "Hi, I'm interested in interior design services for my home.",
  trustPoints: [
    {
      icon: 'military_tech',
      title: '7+ Years of Experience',
      description:
        'Nearly a decade of hands-on design and execution experience across Hyderabad homes.',
    },
    {
      icon: 'home_work',
      title: '200+ Homes Delivered',
      description:
        'A growing portfolio of kitchens, wardrobes, living spaces and full turnkey homes.',
    },
    {
      icon: 'groups',
      title: 'In-House Skilled Team',
      description:
        'Carpenters, electricians, painters and designers under one roof — not outsourced strangers.',
    },
    {
      icon: 'verified_user',
      title: 'Workmanship Warranty',
      description:
        'Every project is backed by warranty coverage and dedicated after-sales support.',
    },
    {
      icon: 'design_services',
      title: 'Free Site Visit & 3D Design',
      description:
        'See your space come to life with a free consultation and 3D visualization before work begins.',
    },
    {
      icon: 'task_alt',
      title: 'Turnkey Execution',
      description:
        'From the first site visit to the final finishing touch — one studio, one accountable team.',
    },
  ],
  processSteps: [
    {
      step: '01',
      title: 'Free Consultation',
      description:
        'Share your requirement over a call or WhatsApp and get a free initial consultation.',
      icon: 'chat',
    },
    {
      step: '02',
      title: 'Site Visit & Measurement',
      description:
        'Najeeb personally visits your site to understand the space, layout and your lifestyle needs.',
      icon: 'straighten',
    },
    {
      step: '03',
      title: '2D & 3D Design',
      description:
        'Detailed 2D plans and realistic 3D visuals so you see exactly how your home will look.',
      icon: 'architecture',
    },
    {
      step: '04',
      title: 'Material Selection',
      description:
        'Guided selection of materials, finishes and fittings that balance style, durability and budget.',
      icon: 'texture',
    },
    {
      step: '05',
      title: 'Execution by In-House Team',
      description:
        'Our own carpenters, electricians and painters execute the work — no unknown subcontractors.',
      icon: 'handyman',
    },
    {
      step: '06',
      title: 'Handover & After-Sales Support',
      description:
        'A clean, finished home backed by workmanship warranty and ongoing after-sales support.',
      icon: 'key',
    },
  ],
};

export const LEAD_FORM = {
  // Get a free access key by entering the destination email at
  // https://web3forms.com — no account needed. Replace the placeholder below
  // once you have it; until then, submissions will fail with a clear error
  // shown to the user (who is pointed to WhatsApp/Call instead).
  web3formsAccessKey: 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY',
  endpoint: 'https://api.web3forms.com/submit',
  cityOptions: [...SITE.serviceAreas, 'Other'],
};

export function whatsappLink(phoneRaw: string, message: string = SITE.whatsappDefaultMessage): string {
  return `https://wa.me/91${phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function telLink(phoneRaw: string): string {
  return `tel:+91${phoneRaw}`;
}

export const PRIMARY_PHONE = SITE.phones[0];
