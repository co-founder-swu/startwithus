import React, { useState } from 'react';
import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Services from './components/Services';
import Pricing from './components/Pricing';
import StickyRequestQuoteButton from './components/StickyButton';
import RequestAQuote from './components/RequestAQuote';
import StarsCanvas from './components/canvas/Stars'; // Adjust import path if necessary
import StartWithUs from './components/StartWithUs';
import Approach from './components/HowWeDoIt';
import Contact from './components/Contact';

const App = () => {
  const [showRequestQuote, setShowRequestQuote] = useState(false);

  const toggleRequestQuote = () => {
    setShowRequestQuote(!showRequestQuote);
  };

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <StickyRequestQuoteButton onClick={toggleRequestQuote} />
        <div className='relative z-0'>
          <Header />
          <Hero />
          <StartWithUs />
          <Approach/>
          <Services />
          <Pricing />
          <Contact/>
          <StarsCanvas/>
          <Footer />
          {showRequestQuote && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
              <div className='relative bg-white p-4 rounded-lg shadow-lg max-w-lg w-full'>
                <button className='absolute top-4 right-4 text-gray-700' onClick={toggleRequestQuote}>
                  ✖
                </button>
                <RequestAQuote />
              </div>
            </div>
          )}
        </div>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
