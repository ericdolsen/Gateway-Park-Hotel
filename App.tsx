import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

type View = 'home' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const navigateTo = (newView: View) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home view, switch to it first
    if (view !== 'home') {
      setView('home');
      // Give the DOM a moment to render the home view before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 50);
    } else {
      // Already on home view, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div className="font-sans text-stone-800 bg-stone-50 selection:bg-brand-200 selection:text-brand-900">
      <Navbar onHome={() => navigateTo('home')} onNavigate={scrollToSection} />
      
      <main>
        {view === 'home' && (
          <>
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
                        <p className="max-w-xl mx-auto text-lg mb-8">Conveniently located in the growing community of Tea, just minutes from Sioux Falls. Enjoy the quiet charm of Gateway Park while remaining close to the region's best shopping, dining, and parks.</p>
                    </div>
                 </div>
            </section>
          </>
        )}

        {view === 'privacy' && <PrivacyPolicy onBack={() => navigateTo('home')} />}
        {view === 'terms' && <TermsOfService onBack={() => navigateTo('home')} />}
      </main>
      
      <Footer 
        onPrivacyClick={() => navigateTo('privacy')} 
        onTermsClick={() => navigateTo('terms')} 
        onNavigate={scrollToSection}
      />
      <ChatWidget />
    </div>
  );
};

export default App;