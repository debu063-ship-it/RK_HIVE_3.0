import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, UtensilsCrossed, Bike, Send, MapPin } from 'lucide-react';
import { BRAND_INFO, LOUNGE_DATA, AUTO_DATA } from '../data/mockData';

export default function InquiryModal({ isOpen, onClose, initialType = 'lounge' }) {
  const [inquiryType, setInquiryType] = useState(initialType || 'lounge');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guestsOrVehicle: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hello RK HIVE Asansol,\n\nI have an inquiry from your website:\nBusiness: ${
      inquiryType === 'lounge' ? 'Hive The Lounge RK 2.0' : 'Hive RK Enterprise Automobiles'
    }\nName: ${formData.name || 'Customer'}\nPhone: ${formData.phone || 'N/A'}\nPreferred Date/Time: ${
      formData.date || 'Flexible'
    }\nDetails/Vehicle: ${formData.guestsOrVehicle || 'General inquiry'}\nSpecial Requests: ${formData.notes || 'None'}`;

    window.open(`https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050507]/90 backdrop-blur-md"
        />

        {/* Modal Window — Apple iOS Squircle Glass Surface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          className="relative z-10 w-full max-w-lg ios-squircle p-7 sm:p-9"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-5 border-b border-white/10">
            <div>
              <span className={`text-xs uppercase font-mono tracking-wider font-bold ${inquiryType === 'lounge' ? 'text-[#FF1376]' : 'text-cerulean-400'}`}>
                Shakespeare Sarani, Asansol
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mt-1">
                {inquiryType === 'lounge' ? 'Table & Party Booking' : 'Vehicle & Exchange Inquiry'}
              </h3>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Toggle Type — iOS Segmented Capsule */}
          <div className="relative grid grid-cols-2 p-1.5 rounded-full bg-[#05070B]/90 border border-white/10 my-6">
            <button
              type="button"
              onClick={() => {
                setInquiryType('lounge');
                setSubmitted(false);
              }}
              className={`relative z-10 flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-wider font-bold rounded-full transition-colors ${
                inquiryType === 'lounge' ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {inquiryType === 'lounge' && (
                <motion.div
                  layoutId="inquiryTypePill"
                  className="absolute inset-0 rounded-full bg-[#FF1376] shadow-md"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <UtensilsCrossed className="w-4 h-4 relative z-10" />
              <span className="relative z-10">The Lounge</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setInquiryType('auto');
                setSubmitted(false);
              }}
              className={`relative z-10 flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-wider font-bold rounded-full transition-colors ${
                inquiryType === 'auto' ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {inquiryType === 'auto' && (
                <motion.div
                  layoutId="inquiryTypePill"
                  className="absolute inset-0 rounded-full bg-[#0284C7] shadow-md"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <Bike className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Automobiles</span>
            </button>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-5">
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-cerulean-400 font-bold">Confirmed</span>
                <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-white">Inquiry Received</h4>
                <p className="text-neutral-300 text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
                  Thank you! For immediate assistance, you can also send this inquiry directly to our team via WhatsApp.
                </p>
              </div>
              <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  onClick={handleWhatsAppSend}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cerulean-600 hover:bg-cerulean-500 text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp Now</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  onClick={onClose}
                  className="px-6 py-3.5 rounded-full bg-[#050507] hover:bg-[#161922] text-neutral-200 text-xs font-semibold tracking-wider uppercase transition-colors border border-white/10"
                >
                  Close
                </motion.button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 font-semibold mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-white/15 text-white text-sm focus:outline-none focus:border-cerulean-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 font-semibold mb-1.5">
                    Mobile / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98320 XXXXX"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-white/15 text-white text-sm focus:outline-none focus:border-cerulean-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 font-semibold mb-1.5">
                    Date &amp; Time
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-white/15 text-white text-sm focus:outline-none focus:border-cerulean-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 font-semibold mb-1.5">
                    {inquiryType === 'lounge' ? 'No. of Guests / Event' : 'Vehicle or Service'}
                  </label>
                  <input
                    type="text"
                    value={formData.guestsOrVehicle}
                    onChange={(e) => setFormData({ ...formData, guestsOrVehicle: e.target.value })}
                    placeholder={
                      inquiryType === 'lounge'
                        ? 'e.g. 4 People or Birthday Party'
                        : 'e.g. Royal Enfield Classic 350 or Swift'
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-white/15 text-white text-sm focus:outline-none focus:border-cerulean-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 font-semibold mb-1.5">
                  Notes or Questions
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={
                    inquiryType === 'lounge'
                      ? 'Party decoration request, food preferences, or timing...'
                      : 'Looking for exchange, finance options, or specific model...'
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-white/15 text-white text-sm focus:outline-none focus:border-cerulean-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  type="submit"
                  className={`flex-1 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-colors text-white flex items-center justify-center gap-2 shadow-md ${
                    inquiryType === 'lounge' ? 'bg-[#FF1376] hover:bg-[#E11D48]' : 'bg-[#0284C7] hover:bg-[#0EA5E9]'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="py-3.5 px-6 rounded-full bg-cerulean-600 hover:bg-cerulean-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Directly</span>
                </motion.button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 text-xs text-neutral-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-cerulean-400" />
                <span>Shakespeare Sarani, Asansol</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}


