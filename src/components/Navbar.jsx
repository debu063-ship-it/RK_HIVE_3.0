import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle, Phone, Calendar } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function Navbar({ activePage, setActivePage, onOpenInquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'lounge', label: 'The Lounge' },
    { id: 'auto', label: 'Automobile' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050507]/95 backdrop-blur-xl border-b border-white/10 py-3.5'
            : 'bg-gradient-to-b from-[#050507]/95 via-[#050507]/60 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark (No icon logo, big and clean) */}
          <button
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex flex-col text-left focus:outline-none group"
          >
            <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
              RK HIVE
            </span>
            <span className="hidden sm:block text-[11px] uppercase tracking-wider text-cerulean-400 font-mono">
              Lounge &amp; Automobiles • Asansol
            </span>
          </button>

          {/* Desktop Navigation Links — iOS Segmented Capsule */}
          <nav className="hidden md:flex items-center p-1.5 rounded-full bg-[#0A0D14]/90 backdrop-blur-2xl border border-white/15 shadow-lg">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              
              const pillBg = link.id === 'lounge' 
                ? 'bg-[#FF1376] text-white'
                : link.id === 'auto'
                  ? 'bg-[#0284C7] text-white'
                  : 'bg-white text-[#050507]';

              return (
                <motion.button
                  key={link.id}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  onClick={() => {
                    setActivePage(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative px-6 py-2.5 text-sm uppercase tracking-wider font-semibold transition-colors duration-200 rounded-full ${
                    isActive 
                      ? link.id === 'home' ? 'text-[#050507]' : 'text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className={`absolute inset-0 rounded-full ${pillBg}`}
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Direct WhatsApp Concierge */}
            <motion.a
              href={BRAND_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-cerulean-400" />
              <span>WhatsApp Us</span>
            </motion.a>

            {/* Inquire Modal Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF1376] hover:bg-[#E11D48] text-white text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Enquire / Book</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050507]/98 backdrop-blur-2xl pt-28 px-6 flex flex-col justify-between pb-12 md:hidden"
          >
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                Menu &amp; Sections
              </p>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setActivePage(link.id);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`text-left text-2xl font-editorial tracking-wide transition-colors py-2 border-b border-white/5 flex items-center justify-between ${
                      activePage === link.id
                        ? link.id === 'lounge'
                          ? 'text-[#FF1376]'
                          : link.id === 'auto'
                            ? 'text-cerulean-400'
                            : 'text-white'
                        : 'text-neutral-300'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-40" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 rounded-xl bg-[#E11D48] hover:bg-[#FF1376] text-white font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Table or Inquire</span>
              </button>

              <a
                href={BRAND_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-cerulean-700 hover:bg-cerulean-600 text-white text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat &amp; Inquiry</span>
              </a>

              <p className="text-center text-[11px] text-neutral-400 font-mono pt-2">
                {BRAND_INFO.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
