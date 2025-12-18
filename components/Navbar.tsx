import React, { useState, useEffect } from 'react';
import { Menu, X, Hotel } from 'lucide-react';
import { NAV_LINKS, HOTEL_INFO } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Adjusted for header height + breathing room
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (href === '#') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const widgetProps = { "data-be-url": "https://us2.cloudbeds.com/reservation/GTtAu9" } as any;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Hotel className={`h-8 w-8 ${isScrolled ? 'text-brand-800' : 'text-white'}`} />
            <span className={`font-serif text-xl font-bold tracking-wide ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
              {HOTEL_INFO.name}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-brand-500 cursor-pointer ${isScrolled ? 'text-stone-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant={isScrolled ? 'primary' : 'secondary'} 
              size="sm"
              {...widgetProps}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-stone-800' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full top-full left-0 border-t border-stone-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-4 text-base font-medium text-stone-700 hover:text-brand-800 hover:bg-stone-50 border-b border-stone-50 last:border-0 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button fullWidth {...widgetProps}>Book Your Stay</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;