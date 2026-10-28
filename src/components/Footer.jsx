import React from 'react';
import { ArrowUpRight, MessageCircle, Phone, Mail, MapPin, Star } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function Footer({ setActivePage, onOpenInquiry }) {
  return (
    <footer className="relative bg-[#050507] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column (No icon logo, big and clean) */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-white block">
                RK HIVE
              </span>
              <span className="text-xs uppercase tracking-wider text-cerulean-400 font-mono">
                Lounge &amp; Automobiles • Shakespeare Sarani, Asansol
              </span>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-sm">
              {BRAND_INFO.description}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={BRAND_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cerulean-600 hover:bg-cerulean-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={BRAND_INFO.ratings.justdialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B0E14] border border-white/15 text-cerulean-300 text-xs font-mono font-semibold hover:border-cerulean-400 transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-cerulean-400 text-cerulean-400" />
                <span>{BRAND_INFO.ratings.justdial} on Justdial</span>
              </a>
            </div>
          </div>

          {/* Quick Verticals Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-300">
              The Businesses
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => {
                    setActivePage('lounge');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FF1376] transition-colors text-left flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Hive The Lounge RK 2.0</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF1376]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActivePage('auto');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-cerulean-400 transition-colors text-left flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Hive RK Enterprise Automobiles</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-cerulean-400" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry('lounge')}
                  className="hover:text-[#FF7BB3] transition-colors text-left"
                >
                  Table &amp; Birthday Party Reservations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInquiry('auto')}
                  className="hover:text-cerulean-300 transition-colors text-left"
                >
                  Used Bike &amp; Car Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-300">
              Visit Us in Asansol
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cerulean-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cerulean-400 shrink-0" />
                <span>{BRAND_INFO.contact.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cerulean-400 shrink-0" />
                <span>{BRAND_INFO.contact.email}</span>
              </li>
            </ul>
            <div className="pt-2 text-xs text-neutral-400 font-mono">
              {BRAND_INFO.contact.hours}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Real Local Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>
            © {new Date().getFullYear()} RK HIVE Asansol. All rights reserved.
          </div>
          <div className="text-[11px] font-mono text-neutral-500 text-center sm:text-right">
            [Shakespeare Sarani, Jyotinagar, Asansol – 713305]
          </div>
        </div>
      </div>
    </footer>
  );
}
