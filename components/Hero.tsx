import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const widgetProps = { "data-be-url": "https://us2.cloudbeds.com/reservation/GTtAu9" } as any;

  const scrollToAmenities = () => {
    const element = document.getElementById('amenities');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://drive.google.com/uc?export=view&id=1abQxWCHbXieWraVDnig1PYWsBM7-Ujcu" 
          alt="Gateway Park Hotel Lobby" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          Welcome to <br />
          <span className="text-brand-300">Gateway Park</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-stone-100 mb-10 font-light leading-relaxed">
          Modern luxury meets natural tranquility. Experience the perfect blend of comfort and convenience at your premier destination.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            {...widgetProps}
          >
            Book Now
          </Button>
          <Button variant="secondary" size="lg" onClick={scrollToAmenities}>
            Explore Amenities
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;