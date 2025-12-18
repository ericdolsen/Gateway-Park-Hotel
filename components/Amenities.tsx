import React from 'react';
import { AMENITIES } from '../constants';
import { Wifi, Coffee, Car, MapPin } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Wifi: <Wifi className="w-8 h-8" />,
  Coffee: <Coffee className="w-8 h-8" />,
  Car: <Car className="w-8 h-8" />,
  MapPin: <MapPin className="w-8 h-8" />
};

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 bg-brand-900 text-white relative overflow-hidden">
        {/* Abstract Pattern Background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-800 rounded-full mix-blend-overlay opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-700 rounded-full mix-blend-overlay opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Exceptional Comfort <br/>
              <span className="text-brand-300">Exceptional Service</span>
            </h2>
            <p className="text-brand-100 text-lg mb-8 max-w-lg">
              We believe the difference is in the details. From our welcoming staff to our carefully curated amenities, everything is designed to make your stay effortless.
            </p>
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-white/10">
                <img src="https://picsum.photos/800/400?random=5" alt="Hotel Interior" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {AMENITIES.map((amenity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 border border-white/10 hover:bg-white/20 transition-colors duration-300">
                <div className="text-brand-300 mb-4">
                  {iconMap[amenity.icon]}
                </div>
                <h3 className="font-bold text-xl mb-2">{amenity.title}</h3>
                <p className="text-brand-100 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;