import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star, MapPin, MessageCircle, ChevronDown, Phone } from 'lucide-react';
import { BRAND_INFO, LOUNGE_DATA, AUTO_DATA } from '../data/mockData';
import IosCard from '../components/IosCard';

export default function HomePage({ setActivePage, onOpenInquiry, onOpenLightbox }) {
  return (
    <div className="relative w-full">
      {/* 1. OVERVIEW HERO — UNCLUTTERED, HEADLINE FOCUS, BIG & CLEAN */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
        {/* Genuine restaurant interior photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-real.jpg"
            alt="Hive The Lounge RK 2.0 Dining Hall"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#050507]/85" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
          {/* Location & Verified Rating — Clean, Unboxed */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-sm sm:text-base">
            <span className="flex items-center gap-1.5 text-cerulean-400 font-semibold">
              <MapPin className="w-4 h-4 text-cerulean-400" />
              <span>Shakespeare Sarani, Asansol</span>
            </span>
            <span className="text-white/30">•</span>
            <a
              href={BRAND_INFO.ratings.justdialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-200 hover:text-white transition-colors"
            >
              <Star className="w-4 h-4 text-[#FF1376] fill-[#FF1376]" />
              <span className="font-bold text-[#FF7BB3]">{BRAND_INFO.ratings.justdial}</span>
              <span className="text-neutral-400 font-medium">on Justdial ({BRAND_INFO.ratings.justdialReviews})</span>
            </a>
          </div>

          {/* Headline — High Craft Big & Clean */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-editorial font-bold text-white leading-tight tracking-tight max-w-4xl">
            Good Food &amp; <span className="text-[#FF1376]">Celebrations</span>, <br />
            Trusted <span className="text-cerulean-400">Automobiles</span> in Asansol
          </h1>

          {/* Concise, verified summary */}
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-neutral-200 font-normal max-w-3xl leading-relaxed">
            Welcome to <strong className="text-white font-semibold">RK HIVE</strong> on Shakespeare Sarani — uniting Asansol's neighborhood dining destination <strong className="text-[#FF7BB3] font-semibold">Hive The Lounge RK 2.0</strong> with <strong className="text-cerulean-300 font-semibold">Hive RK Enterprise Automobiles</strong> for verified pre-owned two-wheelers and family cars.
          </p>

          {/* Subtle scroll indicator */}
          <div className="mt-16 flex flex-col items-center text-neutral-400 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs uppercase font-mono tracking-wider mb-2">Scroll to Explore</span>
            <ChevronDown className="w-5 h-5 text-cerulean-400 animate-pulse" />
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW BUSINESS SECTIONS — WITH SPECULAR SQUIRCLE PLACEHOLDERS */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32">
        {/* Section A — Hive The Lounge RK 2.0 (Editorial: Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <IosCard
              onClick={() => onOpenLightbox(LOUNGE_DATA.heroImage, 'Hive The Lounge RK 2.0 — Family & Celebration Dining')}
              glowColor="rose"
              className="h-80 sm:h-[420px]"
            >
              <img
                src={LOUNGE_DATA.heroImage}
                alt="Hive The Lounge RK 2.0 Dining Hall, Asansol"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </IosCard>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-sm uppercase tracking-wider text-[#FF1376] font-mono font-bold">
                Hospitality &amp; Dining
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white mt-2 leading-tight">
                Hive The Lounge RK 2.0
              </h2>
            </div>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              A vibrant neighborhood restaurant and evening lounge located on Shakespeare Sarani. Renowned across Asansol for fresh Mughlai gravies, clay-oven tandoori kebabs, Indo-Chinese classics, and refreshing mocktails served in comfortable sofa booths.
            </p>

            <div className="space-y-3 pt-2 text-base text-neutral-300 border-l-2 border-[#FF1376] pl-5">
              <p className="leading-relaxed">Comfortable partitioned booth seating tailored for family meals and couple dates.</p>
              <p className="leading-relaxed">Multi-cuisine kitchen offering freshly prepared dishes averaging ₹400 – ₹600 for two.</p>
              <p className="leading-relaxed">Dedicated celebration space for birthdays, anniversaries, and private group gatherings.</p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={() => {
                  setActivePage('lounge');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-full bg-[#FF1376] hover:bg-[#E11D48] text-white font-bold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
              >
                <span>Explore Lounge &amp; Menu</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={() => onOpenInquiry('lounge')}
                className="px-6 py-3.5 rounded-full bg-[#0B0E14] hover:bg-[#161922] text-white border border-white/15 text-sm uppercase font-semibold tracking-wider transition-colors"
              >
                Reserve a Table
              </motion.button>
            </div>
          </div>
        </div>

        {/* Subtle Section Divider */}
        <div className="editorial-divider border-t" />

        {/* Section B — Hive RK Enterprise Automobiles (Editorial: Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div>
              <span className="text-sm uppercase tracking-wider text-cerulean-400 font-mono font-bold">
                Pre-Owned Dealership
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white mt-2 leading-tight">
                Hive RK Enterprise Automobiles
              </h2>
            </div>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Operating from Shakespeare Sarani in Jyotinagar, Hive RK Enterprise Automobiles is Asansol's trusted local center for purchasing, selling, and exchanging verified pre-owned two-wheelers and reliable family cars.
            </p>

            <div className="space-y-3 pt-2 text-base text-neutral-300 border-l-2 border-cerulean-500 pl-5">
              <p className="leading-relaxed">Popular motorcycle models including Royal Enfield Classic 350, Yamaha FZ, and commuter scooters.</p>
              <p className="leading-relaxed">Budget-friendly family cars (Maruti Suzuki Swift, WagonR, Hyundai i20) with verified service records.</p>
              <p className="leading-relaxed">Full assistance with fair valuation, RTO ownership transfer, and verified mechanical inspection.</p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={() => {
                  setActivePage('auto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0EA5E9] text-white font-bold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
              >
                <span>View Automobile Inventory</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={() => onOpenInquiry('auto')}
                className="px-6 py-3.5 rounded-full bg-[#0B0E14] hover:bg-[#161922] text-white border border-white/15 text-sm uppercase font-semibold tracking-wider transition-colors"
              >
                Vehicle Inquiry
              </motion.button>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <IosCard
              onClick={() => onOpenLightbox(AUTO_DATA.heroImage, 'Hive RK Enterprise Automobiles — Pre-owned Two-Wheelers')}
              glowColor="cerulean"
              className="h-80 sm:h-[420px]"
            >
              <img
                src={AUTO_DATA.heroImage}
                alt="Pre-owned Royal Enfield Classic 350 at Hive RK Enterprise Asansol"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </IosCard>
          </div>
        </div>
      </section>

      {/* 3. VERIFIED RATINGS & REPUTATION SECTION — APPLE SQUIRCLE */}
      <section className="py-20 px-6 sm:px-8 max-w-6xl mx-auto">
        <IosCard className="p-10 sm:p-14" glowColor="rose">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-1">
                <Star className="w-5 h-5 text-[#FF1376] fill-[#FF1376]" />
                <Star className="w-5 h-5 text-[#FF1376] fill-[#FF1376]" />
                <Star className="w-5 h-5 text-[#FF1376] fill-[#FF1376]" />
                <Star className="w-5 h-5 text-[#FF1376] fill-[#FF1376]" />
                <Star className="w-5 h-5 text-neutral-700" />
              </div>
              <div className="text-4xl font-editorial font-bold text-white">4.1 / 5 Stars</div>
              <p className="text-sm text-neutral-400">
                Over 450+ verified customer ratings on Justdial from Asansol diners.
              </p>
            </div>

            <div className="space-y-2 md:border-l md:border-white/10 md:pl-8 text-left">
              <span className="text-xs uppercase font-mono tracking-wider text-cerulean-400 font-bold">Customer Feedback</span>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                "Great ambiance for evening chillouts with friends. The crispy chili baby corn, momos, and mocktails are delicious and reasonably priced."
              </p>
              <span className="text-xs text-neutral-500 font-mono block pt-1">— Justdial Verified Review</span>
            </div>

            <div className="flex flex-col items-center md:items-end justify-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                href={BRAND_INFO.ratings.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-cerulean-500/15 hover:bg-cerulean-500/25 text-cerulean-300 text-sm font-semibold border border-cerulean-500/30 flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
              >
                <span>Read Verified Reviews</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                href={BRAND_INFO.ratings.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#0B0E14] hover:bg-[#161922] text-white text-sm font-semibold border border-white/15 flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
              >
                <span>Locate on Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </IosCard>
      </section>

      {/* 4. LOCAL LIAISON & INQUIRY — SQUIRCLE CARD */}
      <section className="py-20 px-6 sm:px-8 max-w-5xl mx-auto text-center">
        <IosCard className="p-10 sm:p-14 space-y-6" glowColor="cerulean">
          <span className="text-xs uppercase tracking-wider text-cerulean-400 font-mono font-bold">
            Direct Local Support
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white">
            Plan a Visit or Message Us on WhatsApp
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Located near Blessed Hospital on Shakespeare Sarani, Asansol. Reach out for table bookings, party arrangements, or used vehicle stock confirmation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF1376] hover:bg-[#E11D48] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-md"
            >
              Send Online Inquiry
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              href={BRAND_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cerulean-600 hover:bg-cerulean-500 text-white font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </motion.a>
          </div>

          <p className="text-sm text-neutral-400 font-mono pt-4">
            Address: {BRAND_INFO.location}
          </p>
        </IosCard>
      </section>
    </div>
  );
}


