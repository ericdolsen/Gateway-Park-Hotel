import React, { useEffect } from 'react';
import { HOTEL_INFO } from '../constants';
import Button from './Button';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-800 hover:text-brand-600 font-medium mb-12 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-8">Privacy Policy</h1>
        <p className="text-stone-500 mb-12 italic text-lg">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-stone max-w-none space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to {HOTEL_INFO.name}. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Identity Data:</strong> Name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> Email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">3. Booking & Third-Party Services</h2>
            <p>
              Our booking system is powered by <strong>Cloudbeds</strong>. When you click "Book Now", you are directed 
              to their secure platform. Cloudbeds collects and processes your payment information independently. 
              We also utilize <strong>Google Gemini AI</strong> for our Virtual Concierge service. Please do not 
              share sensitive personal information (like credit card numbers) within the chat interface.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">4. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal 
              data to process your reservation, manage your stay, and improve our website experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              Email: <a href={`mailto:${HOTEL_INFO.email}`} className="text-brand-700 underline">{HOTEL_INFO.email}</a>
              <br />
              Phone: {HOTEL_INFO.phone}
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-200 text-center">
          <Button onClick={onBack} variant="outline">Return to Gateway Park Hotel</Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;