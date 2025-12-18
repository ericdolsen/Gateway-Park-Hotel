import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-stone-800 bg-stone-50 selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        
        {/* Transitional Banner */}
        <div className="bg-stone-100 py-16 px-4 text-center">
             <h3 className="font-serif text-2xl text-stone-600 italic">"The perfect gateway to everything the city has to offer."</h3>
             <div className="w-16 h-1 bg-brand-500 mx-auto mt-6"></div>
        </div>

        <Amenities />
        
        {/* Location / Static Map Section */}
        <section id="location" className="relative h-96 bg-stone-200">
             <img src="https://picsum.photos/1920/600?random=8" alt="Nearby Park" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h2 className="font-serif text-4xl font-bold mb-4">Explore the Neighborhood</h2>
                    <p className="max-w-xl mx-auto text-lg mb-8">Located adjacent to the historic City Park and steps away from fine dining.</p>
                </div>
             </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;