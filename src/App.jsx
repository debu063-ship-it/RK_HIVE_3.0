import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import ImageLightbox from './components/ImageLightbox';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import LoungePage from './pages/LoungePage';
import AutoPage from './pages/AutoPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('lounge');
  const [lightboxData, setLightboxData] = useState({ src: null, caption: '' });

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'lounge' || hash === 'auto') {
        setActivePage(hash);
      } else if (hash === 'home' || hash === '') {
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top on active page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handlePageChange = (page) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  const handleOpenInquiry = (type = 'lounge') => {
    setInquiryType(type);
    setInquiryOpen(true);
  };

  const handleOpenLightbox = (src, caption = '') => {
    setLightboxData({ src, caption });
  };

  const handleCloseLightbox = () => {
    setLightboxData({ src: null, caption: '' });
  };

  return (
    <div className="min-h-screen bg-[#050507] text-neutral-100 flex flex-col selection:bg-[#FF1376]/25 selection:text-[#FFE4EE]">
      {/* Global Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={handlePageChange}
            onOpenInquiry={handleOpenInquiry}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
        {activePage === 'lounge' && (
          <LoungePage
            onOpenInquiry={handleOpenInquiry}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
        {activePage === 'auto' && (
          <AutoPage
            onOpenInquiry={handleOpenInquiry}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
      </main>

      {/* Global Luxury Footer */}
      <Footer
        setActivePage={handlePageChange}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Modals & Overlays */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialType={inquiryType}
      />

      <ImageLightbox
        imageSrc={lightboxData.src}
        caption={lightboxData.caption}
        onClose={handleCloseLightbox}
      />

      {/* Floating Direct Concierge WhatsApp Widget */}
      <WhatsAppButton />
    </div>
  );
}
