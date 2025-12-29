import React from 'react';
import { HOTEL_INFO, NAV_LINKS } from '../constants';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
  onNavigate: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick, onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    onNavigate(sectionId || 'home');
  };

  const handleDiningClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('trigger-chat', { detail: 'What dining options are available nearby?' }));
  };

  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-white font-bold">{HOTEL_INFO.name}</h3>
            <p className="text-sm leading-relaxed text-stone-400">
              Modern luxury meets natural tranquility. Experience the perfect blend of comfort and convenience in Tea, SD.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-brand-400 transition-colors cursor-pointer"
                  >
                    {link.name === 'Home' ? 'Back to Top' : link.name}
                  </a>
                </li>
              ))}
              <li>
                <button 
                  onClick={handleDiningClick}
                  className="hover:text-brand-400 transition-colors cursor-pointer text-left"
                >
                  Dining & Local Recommendations
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-500 mt-0.5 flex-shrink-0" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500 flex-shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white">{HOTEL_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500 flex-shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-white">{HOTEL_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Map Area */}
          <div className="h-48 bg-stone-800 rounded-lg overflow-hidden relative">
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(HOTEL_INFO.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              className="hover:filter-none transition-all duration-500"
            >
            </iframe>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={onPrivacyClick} className="hover:text-stone-300 transition-colors">Privacy Policy</button>
            <button onClick={onTermsClick} className="hover:text-stone-300 transition-colors">Terms of Service</button>
            <a href="#" className="hover:text-stone-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;