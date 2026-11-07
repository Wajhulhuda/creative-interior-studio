export type GalleryCategoryId =
  | 'kitchen'
  | 'wardrobe'
  | 'living'
  | 'pooja'
  | 'vanity'
  | 'kids-room'
  | 'foyer';

export interface GalleryCategory {
  id: GalleryCategoryId;
  label: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: 'kitchen', label: 'Kitchens' },
  { id: 'wardrobe', label: 'Wardrobes & Bedrooms' },
  { id: 'living', label: 'TV & Living Units' },
  { id: 'pooja', label: 'Pooja Units' },
  { id: 'kids-room', label: 'Kids Rooms' },
  { id: 'vanity', label: 'Vanity & Bathroom' },
  { id: 'foyer', label: 'Foyer & Entrance' },
];

export interface GalleryImage {
  id: string;
  category: GalleryCategoryId;
  title: string;
  alt: string;
  src: string;
  thumb: string;
}

function img(category: GalleryCategoryId, name: string, title: string, alt: string): GalleryImage {
  return {
    id: `${category}-${name}`,
    category,
    title,
    alt,
    src: `assets/images/${category}/${name}.webp`,
    thumb: `assets/images/${category}/${name}-thumb.webp`,
  };
}

export const GALLERY_IMAGES: GalleryImage[] = [
  img('kitchen', 'modular-kitchen-01', 'Glossy Modular Kitchen', 'Cream glossy U-shaped modular kitchen with backlit glass display cabinet'),
  img('kitchen', 'modular-kitchen-02', 'L-Shaped Modular Kitchen', 'White and grey L-shaped modular kitchen with black chimney hood and gold accents'),
  img('kitchen', 'modular-kitchen-03', 'Sage Green Modular Kitchen', 'Glossy sage green L-shaped kitchen with black countertop and geometric cove ceiling lighting'),
  img('kitchen', 'modular-kitchen-04', 'Teal & White Modular Kitchen', 'Teal and white L-shaped kitchen with a carved wooden Ganesh-motif pantry unit'),

  img('wardrobe', 'wardrobe-bedroom-01', 'Sliding Wardrobe & Window Seat', 'Grey and white sliding door wardrobe with built-in window seating and false ceiling lighting'),
  img('wardrobe', 'dresser-bedroom-01', 'Dresser with Peacock Wallpaper', 'Bedroom dressing unit with backlit mirror, window seat and peacock garden wallpaper'),
  img('wardrobe', 'wardrobe-bedroom-02', 'Pastel Blue Dressing Nook', 'Rounded pastel blue wall-mounted dressing unit with mirror in a bedroom corner'),
  img('wardrobe', 'wardrobe-bedroom-03', 'Marble Panel Bedroom Feature Wall', 'Grey marble-finish arched wall panelling with built-in window seat in a bedroom'),
  img('wardrobe', 'wardrobe-bedroom-04', 'Dual-Tone Wardrobe with Tufted Bed', 'Grey and walnut wardrobe with a gold velvet tufted bed headboard and study desk'),
  img('wardrobe', 'wardrobe-bedroom-05', 'Pink Themed Bedroom', 'Glossy pink wardrobe with tropical leaf wallpaper and an oval mirror dresser'),
  img('wardrobe', 'wardrobe-bedroom-06', 'Blue Wardrobe with Cherry Blossom Wall', 'Blue-grey wardrobe with wavy textured feature wall and cherry blossom bird wallpaper'),

  img('living', 'tv-unit-01', 'Marble TV Unit', 'White marble TV feature wall with gold inlay lines and backlit display shelving'),
  img('living', 'tv-unit-02', 'Marble TV Unit with Wood Slats', 'Beige marble TV unit with wood slat panelling and floating storage drawers'),
  img('living', 'tv-unit-03', 'Veined Marble TV Wall', 'Brown-veined marble TV wall with fluted wood side panel and amber-lit display tower'),
  img('living', 'tv-unit-04', 'Oval Marble TV Unit', 'White marble oval-profile TV unit with fluted panel backdrop and tall glass display cabinet'),
  img('living', 'tv-unit-05', 'Gold-Veined Marble TV Wall', 'Gold-veined marble TV wall with green-lit glass display cabinet and black fluted side panel'),
  img('living', 'crockery-unit-01', 'Crockery & Bar Unit', 'Black-framed glass crockery unit with amber lighting and mirrored diamond backsplash'),
  img('living', 'crockery-unit-02', 'Glass-Front Crockery Unit', 'Black glass-front upper cabinets with glossy grey lower storage and open display shelving'),
  img('living', 'crockery-unit-03', 'Wood & Glass Crockery Unit', 'Wood-framed glass display cabinets with warm lighting and a diamond mirror backsplash'),
  img('living', 'living-storage-01', 'Open Shelf Display Unit', 'Wood and grey open-shelf storage unit beside a cove-lit living room ceiling'),

  img('pooja', 'pooja-unit-01', 'Pooja Corner', 'Backlit pooja corner with traditional motif panel beside a balcony and kitchen counter'),
  img('pooja', 'pooja-collage-01', 'Pooja & Living Space', 'Carved white pooja unit, crockery display and washbasin vanity in an open living layout'),
  img('pooja', 'pooja-unit-02', 'Pooja Unit with Ganesh Motif', 'Wood-framed pooja cabinet with backlit Om and Swastik glass panels beside the kitchen'),
  img('pooja', 'pooja-unit-03', 'Traditional Mandir Unit', 'Ornate wood-framed mandir with deity backlit panel, bells and a marble offering shelf'),
  img('pooja', 'pooja-unit-04', 'White Carved Pooja Unit', 'White carved floral-pattern pooja doors with a backlit Om glass panel and drawer storage'),

  img('kids-room', 'kids-room-01', 'Frozen Themed Kids Room', 'Kids bedroom with Elsa-themed wall mural, pink bed and warm cove lighting'),
  img('kids-room', 'kids-room-02', 'World Map Kids Room', 'Kids bedroom with world map wall mural, blue and white wardrobe and star-patterned rug'),

  img('vanity', 'vanity-washbasin-01', 'Marble Vanity Unit', 'Backlit round mirror vanity with marble-finish wall cladding and glass display shelving'),
  img('vanity', 'vanity-washbasin-02', 'Gold-Trimmed Vanity', 'Wood and white vanity unit with stacked gold oval mirrors and marble countertop'),
  img('vanity', 'vanity-washbasin-03', 'Hexagon Panel Vanity', 'Backlit round mirror on a hexagon-pattern feature wall with a black marble washbasin'),

  img('foyer', 'foyer-entrance-01', 'Main Entrance Door', 'Carved wooden main door with console table, planters and a warm welcome plaque'),
  img('foyer', 'foyer-entrance-02', 'Foyer Console', 'Backlit mirror foyer console with palm-leaf wallpaper and brass wall sconces'),
  img('foyer', 'foyer-entrance-03', 'Oval Mirror Corner Dresser', 'Compact oval backlit mirror with a grey marble-finish drawer unit in a foyer corner'),
  img('foyer', 'foyer-entrance-04', 'Main Door with Ring Mirror Console', 'Wood-panelled main door beside a round ring-shaped backlit mirror console'),
  img('foyer', 'foyer-entrance-05', 'Main Door with Pichwai Ceiling Motif', 'Main entrance door with a decorative cut-pattern ceiling motif and round wood-ring mirror console'),
];
