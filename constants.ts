import { HotelInfo, Room, Amenity } from './types';

export const HOTEL_INFO: HotelInfo = {
  name: "Gateway Park Hotel & Suites",
  address: "830 Gateway Lane, Tea SD, 57064",
  phone: "(605) 213-1500",
  email: "Info@gatewayparkhotel.com",
  checkIn: "3:00 PM",
  checkOut: "11:00 AM"
};

export const BOOKING_URL = "https://us2.cloudbeds.com/reservation/GTtAu9";

export const ROOMS: Room[] = [
  {
    id: 'single-king',
    name: "Single King",
    description: "This room has a TV with cable channels, a closet, and a tea and coffee maker. There is one bed available in the unit.",
    capacity: 2,
    amenities: ["1 King Bed", "Free WiFi", "Microwave", "Mini-Fridge", "Work Desk"],
    imageUrl: "Media/GrandStay Tea-King.jpg"
  },
  {
    id: 'double-queen',
    name: "Double Queen",
    description: "This room includes a closet, a TV with cable channels, and a tea and coffee maker. There are two beds in the room",
    capacity: 4,
    amenities: ["2 Queen Beds", "Free WiFi", "Microwave", "Mini-Fridge", "Coffee Maker", "TV"],
    imageUrl: "https://picsum.photos/800/600?random=202"
  },
  {
    id: 'king-whirlpool-suite',
    name: "King Whirlpool Suite",
    description: "Indulge in relaxation with a king-sized bed and a private whirlpool tub. Ideally suited for romantic getaways.",
    capacity: 2,
    amenities: ["1 King Bed", "Whirlpool Tub", "Free WiFi", "Microwave", "Mini-Fridge", "Coffee Maker", "TV"],
    imageUrl: "https://picsum.photos/800/600?random=203"
  },
  {
    id: 'executive-king-sleeper',
    name: "Executive King w/Sleeper sofa",
    description: "Designed for business and leisure, featuring a king bed and a sleeper sofa for additional guests or relaxation space.",
    capacity: 4,
    amenities: ["1 King Bed", "Sofa Sleeper", "Work Desk", "Free WiFi", "Microwave", "Mini-Fridge", "Coffee Maker", "TV"],
    imageUrl: "https://picsum.photos/800/600?random=204"
  },
  {
    id: '1bd-king-sleeper',
    name: "One Bedroom King w/sleeper sofa",
    description: "Enjoy the privacy of a separate bedroom with a king bed, complemented by a sitting area with a sleeper sofa and second TV.",
    capacity: 4,
    amenities: ["1 King Bed", "Sofa Sleeper", "Separate Bedroom", "Two TVs", "Free WiFi", "Microwave", "Mini-Fridge", "Coffee Maker", "TV"],
    imageUrl: "https://picsum.photos/800/600?random=209"
  },
  {
    id: 'accessible-double-queen',
    name: "Accessible Double Queen",
    description: "Barrier-free comfort featuring two queen beds, and accessible bathroom facilities for ease of use. ",
    capacity: 4,
    amenities: ["2 Queen Beds", "Accessible Bath", "Visual Alarms", "Grab Bars", "Lowered Amenities", "Free WiFi", "Microwave", "Mini-Fridge", "Coffee Maker", "TV"],
    imageUrl: "https://picsum.photos/800/600?random=205"
  },
  {
    id: 'accessible-king-studio',
    name: "Accessible King Studio",
    description: "An open-layout studio designed for accessibility, featuring a king bed and ample maneuvering space.  You can prepare and store food in the room's kitchenette, which features a refrigerator, microwave and stovetop.",
    capacity: 4,
    amenities: ["1 King Bed", "Visual Alerts", "Studio Layout", "Accessible Vanity", "Free WiFi", "Kitchenette", "Coffee Maker", "TV"],
    imageUrl: "https://webbox.imgix.net/images/dvsnsscxkutjxwxc/734a7e44-6096-4922-bd77-b39830ff0b47.jpg?auto=format,compress&fit=crop&crop=entropy&w=1248"
  },
  {
    id: '1bd-king-suite-kitchenette',
    name: "One Bedroom King suite w/kitchenette & sofa",
    description: "A home away from home. Includes a private bedroom with a king bed, a separate living area with a sofa sleeper, and a kitchenette.",
    capacity: 4,
    amenities: ["1 King Bed", "Kitchenette", "Sofa Sleeper", "Separate Living Room", "Free WiFi",  "Two TV"],
    imageUrl: "https://picsum.photos/800/600?random=207"
  },
  {
    id: '1bd-king-deluxe-suite',
    name: "One Bedroom King deluxe suite w/ kitchenette & sofa",
    description: "Our largest suite offering a fully equipped kitchenette, and a spacious separate living room with a sofa bed.",
    capacity: 4,
    amenities: ["1 King Bed", "Kitchenette", "Living Area", "Sofa Sleeper", "Free WiFi", "Coffee Maker", "Two TV"],
    imageUrl: "https://picsum.photos/800/600?random=208"
  }
];

export const AMENITIES: Amenity[] = [
  {
    icon: 'Wifi',
    title: "High-Speed WiFi",
    description: "Stay connected seamlessly throughout the entire property with our complimentary high-speed internet access."
  },
  {
    icon: 'Coffee',
    title: "Complimentary Breakfast",
    description: "Start your day right with our complimentary breakfast."
  },
  {
    icon: 'Car',
    title: "Free Parking",
    description: "Enjoy the convenience of complimentary on-site parking for all registered guests."
  },
  {
    icon: 'MapPin',
    title: "Prime Location",
    description: "Situated in Tea, SD, offering easy access to Sioux Falls area local businesses, shopping and regional attractions."
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];