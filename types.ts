export interface Room {
  id: string;
  name: string;
  description: string;
  capacity: number;
  amenities: string[];
  imageUrl: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface HotelInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
}