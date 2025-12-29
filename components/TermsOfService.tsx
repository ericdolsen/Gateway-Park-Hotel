import React, { useEffect } from 'react';
import { HOTEL_INFO } from '../constants';
import Button from './Button';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-8">Terms of Service</h1>
        <p className="text-stone-500 mb-12 italic text-lg">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-stone max-w-none space-y-8 text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website and making a reservation at {HOTEL_INFO.name}, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">2. Reservations and Check-in</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Check-in Time:</strong> {HOTEL_INFO.checkIn}</li>
              <li><strong>Check-out Time:</strong> {HOTEL_INFO.checkOut}</li>
              <li>Guests must be at least 21 years of age to check-in.</li>
              <li>A valid government-issued ID and a credit card are required at check-in for incidental charges.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">3. Cancellation Policy</h2>
            <p>
              Cancellation policies vary by rate type and booking channel. Please refer to your booking confirmation for 
              specific details regarding your reservation. Standard cancellations usually require 24 hours notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">4. Guest Conduct</h2>
            <p>
              {HOTEL_INFO.name} is a 100% non-smoking property. A recovery fee will be charged for smoking in guest rooms. 
              We reserve the right to evict guests who cause a disturbance to others or damage property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">5. Liability</h2>
            <p>
              The hotel is not responsible for any lost or stolen items. In-room safes or front-desk storage are 
              available for guest use. Our total liability for any claim arising out of your stay shall not 
              exceed the total amount paid by you for your reservation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the property and 
              website after such changes constitutes your acceptance of the new terms.
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

export default TermsOfService;