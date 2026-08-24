import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  ShieldCheck,
  Calendar,
  Mountain
} from 'lucide-react';
import { HeroBanner } from '../components/HeroBanner';
import { TREKS } from '../data/treks';
import { useApp } from '../context/AppContext';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialTrek = searchParams.get('trek') || '';
  const { showToast } = useApp();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestedTrek: initialTrek,
    travelMonth: 'Autumn 2026 (Oct-Nov)',
    groupSize: '2 Persons',
    experience: 'Intermediate',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      showToast('Inquiry sent! A Sherpa route architect will reply within 6 hours.');
    }, 1200);
  };

  return (
    <div className="space-y-12 pb-24">
      <HeroBanner
        title="Contact Our Mountain Basecamp"
        subtitle="Speak directly with our native Sherpa expedition architects in Kathmandu to design your custom route or request departure dates."
        badge="Direct Sherpa Communication"
        breadcrumbs={[{ label: 'Contact' }]}
        backgroundImage="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left: Contact Info & Emergency Dispatch (1 col) */}
          <div className="space-y-6">
            <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="font-display font-bold text-xl text-stone-100">
                Kathmandu Headquarters
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase text-[10px] block">Basecamp Office</span>
                    <strong className="text-stone-200 block text-sm font-semibold">
                      Chaksibari Marg, Thamel
                    </strong>
                    <span className="text-stone-400 text-xs">Kathmandu 44600, Nepal</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase text-[10px] block">Telephone / WhatsApp</span>
                    <strong className="text-stone-200 block text-sm font-semibold">
                      +977 1 470 1234
                    </strong>
                    <span className="text-amber-400 text-xs">WhatsApp: +977 98510 99881</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase text-[10px] block">Direct Email</span>
                    <strong className="text-stone-200 block text-sm font-semibold">
                      expeditions@himalayantrailco.com
                    </strong>
                    <span className="text-stone-400 text-xs">Average response time &lt; 6 hours</span>
                  </div>
                </div>
              </div>

              {/* Office hours */}
              <div className="pt-4 border-t border-stone-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-stone-300">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Sunday – Friday: 8:00 AM – 7:00 PM (NPT)</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Saturday: 9:00 AM – 3:00 PM (NPT)</span>
                </div>
              </div>
            </div>

            {/* 24/7 Mountain Emergency Dispatch Banner */}
            <div className="bg-gradient-to-br from-rose-950/40 to-stone-900 border border-rose-900/50 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>24/7 Mountain Emergency Hotline</span>
              </div>
              <p className="text-stone-300 text-xs leading-relaxed">
                For active expedition satellite inReach alerts and urgent helicopter rescue coordination:
              </p>
              <div className="font-mono font-bold text-base text-rose-300 bg-stone-950/80 p-2.5 rounded-xl border border-rose-900/40 text-center">
                +977 98010 91100
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form (2 cols) */}
          <div className="lg:col-span-2">
            <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                  Personalized Itinerary Consultation
                </span>
                <h3 className="font-display font-bold text-2xl text-stone-100 mt-1">
                  Plan Your Himalayan Journey
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm mt-1">
                  Fill out your details below and our lead Sherpa route architect will create a customized day-by-day proposal.
                </p>
              </div>

              {isSent ? (
                <div className="bg-stone-950 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-stone-100">
                    Inquiry Received with Gratitude!
                  </h4>
                  <p className="text-stone-400 text-xs max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-200">{formData.fullName}</strong>. We have assigned your request to our senior route architect. A full customized itinerary and gear plan will land in your inbox ({formData.email}) shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        interestedTrek: '',
                        travelMonth: 'Autumn 2026 (Oct-Nov)',
                        groupSize: '2 Persons',
                        experience: 'Intermediate',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-bold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-300 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-300 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="eleanor@example.com"
                        className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-300 block mb-1">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 392-1084"
                        className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-300 block mb-1">
                        Expedition Route of Interest
                      </label>
                      <select
                        value={formData.interestedTrek}
                        onChange={(e) => setFormData({ ...formData, interestedTrek: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                      >
                        <option value="">Custom Tailored / Unsure</option>
                        {TREKS.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-300 block mb-1">
                        Target Travel Window
                      </label>
                      <select
                        value={formData.travelMonth}
                        onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                      >
                        <option value="Spring 2026 (Mar - May)">Spring 2026 (Mar - May)</option>
                        <option value="Summer 2026 (Jun - Aug)">Summer 2026 (Mustang/Dolpo)</option>
                        <option value="Autumn 2026 (Sep - Nov)">Autumn 2026 (Prime High Season)</option>
                        <option value="Winter 2026/2027">Winter 2026 / 2027</option>
                        <option value="Spring 2027">Spring 2027</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-300 block mb-1">
                        Estimated Group Size
                      </label>
                      <select
                        value={formData.groupSize}
                        onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                        className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                      >
                        <option value="Solo Trekker (1)">Solo Trekker (1)</option>
                        <option value="Couple (2)">Couple (2)</option>
                        <option value="Small Group (3-5)">Small Group (3-5)</option>
                        <option value="Large Private Team (6+)">Large Private Team (6+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-300 block mb-1">
                      Tell Us About Your Goals & Mountain Experience *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your fitness level, previous high-altitude experience, desired pace, special celebration occasions (e.g. anniversary/birthday), or any dietary preferences..."
                      className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching to Basecamp...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Expedition Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
