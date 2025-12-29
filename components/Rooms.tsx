
import React from 'react';
import { ROOMS, BOOKING_URL } from '../constants';
import Button from './Button';
import { Users, Wifi, Maximize } from 'lucide-react';

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">Accommodations</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Designed for comfort and relaxation, each room offers a sanctuary after a busy day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <div key={room.id} className="bg-white group hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={room.imageUrl} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">{room.name}</h3>
                <p className="text-stone-600 text-sm mb-6 flex-grow">{room.description}</p>
                
                <div className="border-t border-stone-100 pt-4 mb-6">
                  <div className="flex items-center justify-between text-stone-500 text-sm">
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>Up to {room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Wifi size={16} />
                      <span>Free Wifi</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize size={16} />
                      <span>Spacious</span>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  fullWidth
                  href={BOOKING_URL}
                  target="_blank"
                  data-be-url={BOOKING_URL}
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
