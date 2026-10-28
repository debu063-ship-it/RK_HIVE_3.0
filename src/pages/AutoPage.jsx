import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bike, Car, ShieldCheck, ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { BRAND_INFO, AUTO_DATA } from '../data/mockData';
import IosCard from '../components/IosCard';

export default function AutoPage({ onOpenInquiry, onOpenLightbox }) {
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredCollection = filterCategory === 'all'
    ? AUTO_DATA.collection
    : filterCategory === 'bikes'
      ? AUTO_DATA.collection.filter(item => item.id.startsWith('bike'))
      : AUTO_DATA.collection.filter(item => item.id.startsWith('car'));

  return (
    <div className="relative w-full pt-28 pb-20">
      {/* 1. AUTOMOBILE HERO — APPLE SQUIRCLE RIM CONTAINER */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-20 sm:mb-28">
        <IosCard hoverable={false} className="min-h-[52vh] sm:min-h-[58vh] flex items-end p-8 sm:p-14" glowColor="cerulean">
          <img
            src={AUTO_DATA.heroImage}
            alt="Pre-owned Royal Enfield at Hive RK Enterprise Asansol"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/95 via-[#050507]/75 to-[#050507]/30" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-editorial font-bold text-white leading-tight tracking-tight">
              {AUTO_DATA.title}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-200 font-normal leading-relaxed">
              {AUTO_DATA.description} Trusted locally across Asansol for fair market valuation, verified paperwork, and certified mechanical checks.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={() => onOpenInquiry('auto')}
                className="px-8 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0EA5E9] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-md"
              >
                Inquire on Current Stock
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                href={BRAND_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#0B0E14] hover:bg-[#161922] text-cerulean-300 border border-white/15 text-sm uppercase font-semibold tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Inventory Inquiry</span>
              </motion.a>
            </div>
          </div>
        </IosCard>
      </section>

      {/* 2. THREE DISTINCT EDITORIAL SECTIONS (WITH SPECULAR SQUIRCLE PLACEHOLDERS) */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32 mb-24 sm:mb-32">
        {/* Section 1: Pre-Owned Two-Wheelers & Cruisers (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <IosCard
              onClick={() => onOpenLightbox(AUTO_DATA.heroImage, 'Pre-Owned Royal Enfield Classic 350')}
              glowColor="cerulean"
              className="h-80 sm:h-[420px]"
            >
              <img
                src={AUTO_DATA.heroImage}
                alt="Matte Black Royal Enfield Classic 350 at Hive RK Enterprise Asansol"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </IosCard>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-sm uppercase tracking-wider text-cerulean-400 font-mono font-bold">
                Two-Wheeler Division
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white mt-2 leading-tight">
                Pre-Owned Two-Wheelers &amp; Cruisers
              </h2>
            </div>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              We specialize in reliable, single-owner and low-kilometer motorcycles. Whether you are looking for an iconic Royal Enfield Classic 350 for highway rides, a sporty Yamaha FZ / R15, or a comfortable daily commuter scooter like the Honda Activa, every bike is road-tested and verified.
            </p>
            <div className="space-y-3 pt-2 text-base text-neutral-300 border-l-2 border-cerulean-500 pl-5">
              <p className="leading-relaxed">Curated selection of Royal Enfield, Yamaha, Bajaj Pulsar, and Honda scooters.</p>
              <p className="leading-relaxed">Complete chassis, fork, engine sound, and tyre tread inspection prior to listing.</p>
              <p className="leading-relaxed">Realistic Asansol pre-owned pricing starting from ₹45,000 to ₹1,65,000.</p>
            </div>
          </div>
        </div>

        {/* Subtle Separator */}
        <div className="editorial-divider border-t" />

        {/* Section 2: Budget Family Cars & Hatchbacks (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div>
              <span className="text-sm uppercase tracking-wider text-cerulean-400 font-mono font-bold">
                Four-Wheeler Division
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white mt-2 leading-tight">
                Reliable Family Hatchbacks &amp; Cars
              </h2>
            </div>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              For everyday families and daily commuting across West Bengal, we source dependable hatchbacks such as the Maruti Suzuki Swift, WagonR, and Hyundai i20. Every four-wheeler comes with clean title history, verifiable odometer readings, and chilled AC performance.
            </p>
            <div className="space-y-3 pt-2 text-base text-neutral-300 border-l-2 border-cerulean-500 pl-5">
              <p className="leading-relaxed">Tested petrol and factory CNG models delivering high fuel efficiency (20–25 km/l).</p>
              <p className="leading-relaxed">Detailed service records, non-accidental verification, and clean interior cabin.</p>
              <p className="leading-relaxed">Affordable family options ranging between ₹2,80,000 and ₹4,80,000.</p>
            </div>
            <div className="pt-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={() => onOpenInquiry('auto')}
                className="px-8 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0EA5E9] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-md"
              >
                Inquire on Available Cars
              </motion.button>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <IosCard
              onClick={() => onOpenLightbox(AUTO_DATA.carsImage, 'Pre-Owned Maruti Suzuki Swift')}
              glowColor="cerulean"
              className="h-80 sm:h-[420px]"
            >
              <img
                src={AUTO_DATA.carsImage}
                alt="Maruti Suzuki Swift at Hive RK Enterprise Asansol"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </IosCard>
          </div>
        </div>

        {/* Subtle Separator */}
        <div className="editorial-divider border-t" />

        {/* Section 3: Transparent Valuation & RTO Transfer Assistance */}
        <IosCard className="p-10 sm:p-14 space-y-6" glowColor="cerulean">
          <div className="max-w-3xl space-y-4">
            <span className="text-sm uppercase tracking-wider text-cerulean-400 font-mono font-bold">
              Dealership Guarantee
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white leading-tight">
              Transparent Valuation, Exchange &amp; RTO Transfer
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              We eliminate the stress of dealing with unverified individual sellers. At Hive RK Enterprise Automobiles on Shakespeare Sarani, every vehicle transaction is backed by clear legal paperwork and physical inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/[0.08] mt-8">
            <div className="space-y-3">
              <div className="font-editorial text-xl font-bold text-white">Fair Exchange Valuation</div>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Bring your current two-wheeler or car to our showroom for instant on-the-spot market assessment. Upgrade seamlessly.
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-editorial text-xl font-bold text-white">RTO Ownership Transfer</div>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                We handle the complete RC name transfer, NOC procurement, insurance endorsements, and road tax documentation.
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-editorial text-xl font-bold text-white">40-Point Mechanical Check</div>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Comprehensive testing of engine compression, battery health, suspension, transmission, and braking systems.
              </p>
            </div>
          </div>
        </IosCard>
      </section>

      {/* 3. CURRENT INVENTORY SHOWCASE — APPLE SQUIRCLE VEHICLE CARDS */}
      <section className="py-20 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="text-sm uppercase tracking-wider text-cerulean-400 font-mono font-bold">
              Current Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white">
              Featured Pre-Owned Models
            </h2>
            <p className="text-base text-neutral-300 max-w-lg">
              Stock changes regularly. Prices and model years below represent popular units frequently in stock at our Shakespeare Sarani showroom.
            </p>
          </div>

          {/* iOS Segmented Capsule Switcher */}
          <div className="flex items-center p-1.5 rounded-full bg-[#0A0D14]/90 backdrop-blur-2xl border border-white/15">
            {[
              { id: 'all', label: 'All Vehicles' },
              { id: 'bikes', label: 'Two-Wheelers' },
              { id: 'cars', label: 'Family Cars' }
            ].map((tab) => {
              const isActive = filterCategory === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  onClick={() => setFilterCategory(tab.id)}
                  className={`relative px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold rounded-full transition-colors ${
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="autoFilterPill"
                      className="absolute inset-0 rounded-full bg-[#0284C7] shadow-md"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Vehicle Cards Grid — Apple Squircle Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCollection.map((vehicle) => (
            <IosCard
              key={vehicle.id}
              className="flex flex-col justify-between"
              glowColor="cerulean"
            >
              <div>
                <div
                  onClick={() => onOpenLightbox(vehicle.image, `${vehicle.model} — ${vehicle.year}`)}
                  className="relative h-60 overflow-hidden cursor-pointer group bg-black/40"
                >
                  <img
                    src={vehicle.image}
                    alt={vehicle.model}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <div className="text-xs uppercase font-mono tracking-wider text-cerulean-400 font-semibold mb-1">
                      {vehicle.badge}
                    </div>
                    <h3 className="font-editorial text-2xl font-bold text-white">
                      {vehicle.model}
                    </h3>
                    <div className="text-base font-mono text-cerulean-400 mt-1 font-bold">
                      Est. {vehicle.priceRange}
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-white/[0.08] text-sm font-sans text-neutral-300">
                    <div className="flex justify-between py-1 border-b border-white/[0.04]">
                      <span className="text-neutral-400">Model Year</span>
                      <span className="text-white font-mono font-semibold">{vehicle.year}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/[0.04]">
                      <span className="text-neutral-400">Engine / Trim</span>
                      <span className="text-white font-medium">{vehicle.engine}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/[0.04]">
                      <span className="text-neutral-400">Fuel Economy</span>
                      <span className="text-white font-mono font-semibold">{vehicle.acceleration}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-neutral-400">Inspection</span>
                      <span className="text-neutral-200 font-medium">{vehicle.weight}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  onClick={() => onOpenInquiry('auto')}
                  className="flex-1 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0EA5E9] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Inquire Now
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  href={`https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=Hello%20RK%20Enterprise,%20is%20the%20${encodeURIComponent(vehicle.model)}%20available%20for%20inspection?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-cerulean-600 hover:bg-cerulean-500 text-white transition-colors shadow-md"
                  title="WhatsApp Inquiry"
                >
                  <MessageCircle className="w-4 h-4" />
                </motion.a>
              </div>
            </IosCard>
          ))}
        </div>
      </section>

      {/* 4. SELL OR EXCHANGE FORM TRIGGER — SQUIRCLE CARD */}
      <section className="py-20 px-6 sm:px-8 max-w-4xl mx-auto text-center">
        <IosCard className="p-10 sm:p-14 space-y-6" glowColor="rose">
          <span className="text-sm uppercase tracking-wider text-[#FF1376] font-mono font-bold">
            Trade-In &amp; Purchase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white">
            Looking to Sell or Trade Your Current Vehicle?
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Get an honest, transparent market evaluation on Shakespeare Sarani in Jyotinagar. Bring your vehicle registration papers for quick verification and fair cash or exchange settlement.
          </p>
          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => onOpenInquiry('auto')}
              className="px-8 py-3.5 rounded-full bg-[#FF1376] hover:bg-[#E11D48] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-md"
            >
              Request Vehicle Valuation
            </motion.button>
          </div>
        </IosCard>
      </section>
    </div>
  );
}



