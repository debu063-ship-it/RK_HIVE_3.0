import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, ArrowUpRight, MessageCircle, MapPin, Clock } from 'lucide-react';
import { BRAND_INFO, LOUNGE_DATA } from '../data/mockData';
import IosCard from '../components/IosCard';

export default function LoungePage({ onOpenInquiry, onOpenLightbox }) {
  const [selectedBookingType, setSelectedBookingType] = useState('dining-1');

  // Categorized Menu Items based on verified Asansol restaurant offerings
  const menuCategories = [
    {
      categoryName: "Starters & Clay Oven Tandoor",
      items: [
        {
          name: "Crispy Chilli Baby Corn / Paneer",
          desc: "Fresh baby corn wok-tossed with green bell peppers, spring onions, and spicy garlic sauce",
          price: "₹180 – ₹230"
        },
        {
          name: "Tandoori Chicken / Reshmi Kebab",
          desc: "Tender chicken marinated in hung curd, Kashmiri chilies, and aromatic clay-oven roasted spices",
          price: "₹240 – ₹320"
        },
        {
          name: "Crispy Fried Chicken Momos",
          desc: "Steamed chicken dumplings deep-fried until golden, served with spicy red chili dip",
          price: "₹140 – ₹180"
        }
      ]
    },
    {
      categoryName: "Main Course & Indo-Chinese",
      items: [
        {
          name: "Butter Chicken & Garlic Naan",
          desc: "Charcoal-grilled chicken simmered in rich buttery tomato gravy with warm tandoori roti or naan",
          price: "₹260 – ₹340"
        },
        {
          name: "Schezwan Hakka Noodles & Manchurian",
          desc: "Wok-fried noodles tossed with fresh garden vegetables, cabbage, carrots, and savory Manchurian gravy",
          price: "₹190 – ₹250"
        },
        {
          name: "Kadhai Paneer / Mixed Vegetables",
          desc: "Fresh cottage cheese cooked with freshly ground coriander seeds, dry red chilies, and bell peppers",
          price: "₹210 – ₹270"
        }
      ]
    },
    {
      categoryName: "Mocktails & Chilled Refreshers",
      items: [
        {
          name: "Blue Lagoon Refresher",
          desc: "Chilled citrus blend with blue curacao syrup, sparkling soda, and crushed ice",
          price: "₹130 – ₹160"
        },
        {
          name: "Virgin Fresh Mint Mojito",
          desc: "Muddled fresh mint leaves, lime juice, simple syrup, and chilled soda water",
          price: "₹120 – ₹150"
        },
        {
          name: "Chocolate & KitKat Milkshake",
          desc: "Rich blended chocolate shake topped with crunchy wafer bars and chocolate drizzle",
          price: "₹140 – ₹180"
        }
      ]
    }
  ];

  return (
    <div className="relative w-full pt-28 pb-20">
      {/* 1. LOUNGE EDITORIAL HERO — APPLE SQUIRCLE RIM CONTAINER */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-20 sm:mb-28">
        <IosCard hoverable={false} className="min-h-[52vh] sm:min-h-[58vh] flex items-end p-8 sm:p-14" glowColor="rose">
          <img
            src={LOUNGE_DATA.heroImage}
            alt="Hive The Lounge RK 2.0 Dining Hall"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/95 via-[#050507]/75 to-[#050507]/30" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-editorial font-bold text-white leading-tight tracking-tight">
              {LOUNGE_DATA.title}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-200 font-normal leading-relaxed">
              {LOUNGE_DATA.description} Average dining cost is approx. ₹400 – ₹600 for two.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={() => onOpenInquiry('lounge')}
                className="px-8 py-3.5 rounded-full bg-[#FF1376] hover:bg-[#E11D48] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-md"
              >
                Reserve a Table
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                href={BRAND_INFO.ratings.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#0B0E14] hover:bg-[#161922] text-cerulean-300 border border-white/15 text-sm uppercase font-semibold tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Justdial Reviews &amp; Photos</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </IosCard>
      </section>

      {/* 2. THREE DISTINCT EDITORIAL SECTIONS (WITH SPECULAR SQUIRCLE PLACEHOLDERS) */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32 mb-24 sm:mb-32">
        {/* Section 1: Comfortable Booth Dining (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <IosCard
              onClick={() => onOpenLightbox(LOUNGE_DATA.heroImage, 'Comfortable Booth & Table Dining')}
              glowColor="rose"
              className="h-80 sm:h-[420px]"
            >
              <img
                src={LOUNGE_DATA.heroImage}
                alt="Comfortable Booth Dining Hall at Hive Lounge RK Asansol"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </IosCard>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white leading-tight">
              Comfortable Booth Dining
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Designed for relaxed dining away from the city traffic. Our dining hall features warm ambient pendant lighting and partitioned sofa booth seating that provides privacy and comfort for family lunches, friendly get-togethers, and couple dates.
            </p>
            <div className="space-y-3 pt-2 text-base text-neutral-300 border-l-2 border-[#FF1376] pl-5">
              <p className="leading-relaxed">Spacious cushioned high-back sofas accommodating groups of 2 to 8 guests.</p>
              <p className="leading-relaxed">Full air-conditioned hall with ambient background music and attentive table service.</p>
            </div>
          </div>
        </div>

        {/* Subtle Separator */}
        <div className="editorial-divider border-t" />

        {/* Section 2: Birthday & Party Celebrations (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white leading-tight">
              Birthday &amp; Party Celebrations
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Looking to celebrate a special milestone in Asansol? Hive The Lounge RK 2.0 offers a dedicated celebration zone equipped for birthdays, anniversaries, office get-togethers, and private celebrations without disrupting other diners.
            </p>
            <div className="space-y-3 pt-2 text-base text-neutral-300 border-l-2 border-[#FF1376] pl-5">
              <p className="leading-relaxed">Customizable balloon and banner decor setup upon advance booking.</p>
              <p className="leading-relaxed">Dedicated party food platters, starters, mocktails, and cake-cutting table.</p>
              <p className="leading-relaxed">Capacity for groups of 15 to 40 guests with dedicated serving attendants.</p>
            </div>
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onClick={() => onOpenInquiry('lounge')}
                className="px-8 py-3.5 rounded-full bg-[#FF1376] hover:bg-[#E11D48] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-md"
              >
                Plan a Party Booking
              </motion.button>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <IosCard
              onClick={() => onOpenLightbox(LOUNGE_DATA.ambianceImage, 'Party & Celebration Seating')}
              glowColor="rose"
              className="h-80 sm:h-[420px]"
            >
              <img
                src={LOUNGE_DATA.ambianceImage}
                alt="Celebration Tables and Seating Area at Hive Lounge Asansol"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </IosCard>
          </div>
        </div>

        {/* Subtle Separator */}
        <div className="editorial-divider border-t" />

        {/* Section 3: Multi-Cuisine Delights (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <IosCard
              onClick={() => onOpenLightbox(LOUNGE_DATA.detailImage, 'Fresh Clay Oven Tandoori Platter')}
              glowColor="rose"
              className="h-80 sm:h-[420px]"
            >
              <img
                src={LOUNGE_DATA.detailImage}
                alt="Authentic Plated Tandoori Kebab Platter at Hive The Lounge RK 2.0"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </IosCard>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white leading-tight">
              Multi-Cuisine Delights
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Every dish is freshly prepared to order by experienced cooks. Our menu balances rich North Indian and Mughlai curries, sizzling tandoor platters, beloved Indo-Chinese classics, and refreshing mocktails made with fresh ingredients.
            </p>
            <div className="space-y-3 pt-2 text-base text-neutral-300 border-l-2 border-[#FF1376] pl-5">
              <p className="leading-relaxed">Charcoal-marinated kebabs, crispy chilli baby corn, hakka noodles, and rich butter chicken.</p>
              <p className="leading-relaxed">Refreshing mocktails, mojitos, and cold shakes ideal for evening gatherings.</p>
              <p className="leading-relaxed">Clean preparation and genuine local pricing: ₹400 – ₹600 for two.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESTAURANT MENU — CLEAN & BIG */}
      <section className="py-20 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-editorial font-bold text-white">
            Popular Menu Selections &amp; Pricing
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Authentic favorites loved by regular diners across Asansol. Prices are transparent and reflect our standard dine-in menu on Shakespeare Sarani.
          </p>
        </div>

        {/* Clean Categorized Menu List with iOS spring row feedback */}
        <div className="space-y-14 max-w-4xl mx-auto">
          {menuCategories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <div className="pb-3 border-b border-[#FF1376]/40">
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                  {cat.categoryName}
                </h3>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group cursor-default"
                  >
                    <div className="space-y-1.5 max-w-xl">
                      <div className="font-editorial text-lg sm:text-xl font-semibold text-white group-hover:text-[#FF7BB3] transition-colors">
                        {item.name}
                      </div>
                      <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                    <div className="font-mono text-base sm:text-lg font-bold text-[#FF1376] shrink-0 text-left sm:text-right pt-1 sm:pt-0">
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-neutral-400 font-mono">
            * Items prepared fresh to order. For customized party catering and banquet combos, please speak with our manager.
          </p>
          <div className="mt-5">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href={BRAND_INFO.ratings.justdialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cerulean-400 hover:text-cerulean-300 font-mono transition-colors"
            >
              <span>View full community photos and reviews on Justdial</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* 4. RESERVATIONS — APPLE SQUIRCLE CONTAINERS */}
      <section className="py-20 px-6 sm:px-8 max-w-5xl mx-auto border-t border-white/[0.08]">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl font-editorial font-bold text-white">
            Table &amp; Celebration Reservations
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Reserve your sofa booth or party enclave in advance to ensure comfortable seating and zero wait times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Reservation Section A: Main Lounge & Booth Hall */}
          <IosCard className="p-8 sm:p-10 space-y-6 flex flex-col justify-between" glowColor="rose">
            <div className="space-y-4">
              <div className="pb-3 border-b border-white/[0.08]">
                <h3 className="font-editorial text-2xl font-bold text-white">Main Lounge &amp; Booth Hall</h3>
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF7BB3] mt-1 block">
                  Capacity: 2 to 8 Guests
                </span>
              </div>
              <p className="text-base text-neutral-300 leading-relaxed">
                Ideal for family lunches, dinner dates, and casual meetups with friends. Offers comfortable sofa seating, air conditioning, and full menu service.
              </p>
              <div className="space-y-2 text-sm text-neutral-300 pt-2">
                <p>• Immediate table allocation upon arrival</p>
                <p>• No minimum billing requirement for booth dining</p>
                <p>• Full multi-cuisine food &amp; mocktail service</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => onOpenInquiry('lounge')}
              className="w-full py-4 rounded-full bg-[#FF1376] hover:bg-[#E11D48] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-md"
            >
              Reserve Dining Table
            </motion.button>
          </IosCard>

          {/* Reservation Section B: Celebration & Party Enclave */}
          <IosCard className="p-8 sm:p-10 space-y-6 flex flex-col justify-between" glowColor="rose">
            <div className="space-y-4">
              <div className="pb-3 border-b border-white/[0.08]">
                <h3 className="font-editorial text-2xl font-bold text-white">Celebration &amp; Party Enclave</h3>
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF7BB3] mt-1 block">
                  Capacity: 15 to 40 Guests
                </span>
              </div>
              <p className="text-base text-neutral-300 leading-relaxed">
                Dedicated event space reserved exclusively for your group. Perfect for birthdays, anniversary gatherings, and celebrations in Asansol.
              </p>
              <div className="space-y-2 text-sm text-neutral-300 pt-2">
                <p>• Dedicated cake-cutting area and balloon decor</p>
                <p>• Customizable party platters and welcome mocktails</p>
                <p>• Dedicated service staff for your gathering</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => onOpenInquiry('lounge')}
              className="w-full py-4 rounded-full bg-[#FF1376] hover:bg-[#E11D48] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-md"
            >
              Book Party Enclave
            </motion.button>
          </IosCard>
        </div>

        {/* WhatsApp Fast Booking Callout */}
        <IosCard className="mt-10 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left" glowColor="cerulean">
          <div className="space-y-1.5">
            <div className="text-xl font-bold text-white">Need an Instant Reservation or Custom Party Quote?</div>
            <p className="text-base text-neutral-300">Our Shakespeare Sarani lounge staff will confirm table availability in real time.</p>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            href={BRAND_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-cerulean-600 hover:bg-cerulean-500 text-white font-bold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2 shrink-0 shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </motion.a>
        </IosCard>
      </section>
    </div>
  );
}

