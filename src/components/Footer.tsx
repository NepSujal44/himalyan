import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mountain, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  HeartHandshake, 
  Leaf, 
  Award,
  Send,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useApp();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    showToast('Thank you for subscribing to The Himalayan Dispatch!');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800/80 pt-16 pb-8" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ethos Trust Badges Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-stone-800/80 text-sm">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-100 mb-0.5">100% UIAGM Sherpa Led</h4>
              <p className="text-stone-400 text-xs leading-relaxed">
                Native high-altitude leaders with deep cultural roots and international alpine safety credentials.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-100 mb-0.5">Porter Welfare Charter</h4>
              <p className="text-stone-400 text-xs leading-relaxed">
                20kg weight caps, full medical insurance, fair wages, and alpine storm apparel provided.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-100 mb-0.5">Leave No Trace & Clean Trails</h4>
              <p className="text-stone-400 text-xs leading-relaxed">
                100% carbon-offset expeditions, zero-single-use plastics, and teahouse solar partnerships.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-stone-100 mb-0.5">Garmin inReach 24/7 Satellite</h4>
              <p className="text-stone-400 text-xs leading-relaxed">
                Live location telemetry on every team with direct emergency medical helicopter dispatch.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-stone-800/80">
          {/* Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 font-bold">
                <Mountain className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg text-stone-100 tracking-wider">
                HIMALAYAN TRAIL CO.
              </span>
            </Link>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Crafting conscious, high-altitude expeditions across the sacred valleys of Nepal, Tibet, and Bhutan since 2008. Dedicated to technical precision, authentic cultural connection, and mountain stewardship.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Thamel Marg, Ward 26, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>24/7 Operations: +977-1-470-1234 / +977-98510-99881</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>expeditions@himalayantrailco.com</span>
              </div>
            </div>
          </div>

          {/* Expeditions Links */}
          <div className="space-y-3">
            <h5 className="font-display font-bold text-sm text-stone-100 tracking-wide uppercase text-amber-500">
              Expeditions
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link to="/trips/ebc-gokyo-chola" className="hover:text-amber-400 transition-colors">
                  Everest Base Camp & Gokyo
                </Link>
              </li>
              <li>
                <Link to="/trips/annapurna-circuit-tilicho" className="hover:text-amber-400 transition-colors">
                  Annapurna Circuit & Tilicho
                </Link>
              </li>
              <li>
                <Link to="/trips/manaslu-tsum-circuit" className="hover:text-amber-400 transition-colors">
                  Manaslu Circuit & Tsum
                </Link>
              </li>
              <li>
                <Link to="/trips/langtang-gosaikunda-lakes" className="hover:text-amber-400 transition-colors">
                  Langtang & Gosaikunda Lakes
                </Link>
              </li>
              <li>
                <Link to="/trips/upper-mustang-kingdom" className="hover:text-amber-400 transition-colors">
                  Upper Mustang Kingdom
                </Link>
              </li>
              <li>
                <Link to="/trips/mardi-himal-ridge" className="hover:text-amber-400 transition-colors">
                  Mardi Himal Scenic Ridge
                </Link>
              </li>
              <li>
                <Link to="/trips/bhutan-snowman-trek" className="hover:text-amber-400 transition-colors">
                  Bhutan Snowman Expedition
                </Link>
              </li>
            </ul>
          </div>

          {/* Regions & Guide */}
          <div className="space-y-3">
            <h5 className="font-display font-bold text-sm text-stone-100 tracking-wide uppercase text-amber-500">
              Resources
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link to="/destinations" className="hover:text-amber-400 transition-colors">
                  Himalayan Regions Map
                </Link>
              </li>
              <li>
                <Link to="/travel-guide" className="hover:text-amber-400 transition-colors">
                  Altitude & Acclimatization
                </Link>
              </li>
              <li>
                <Link to="/travel-guide#seasons" className="hover:text-amber-400 transition-colors">
                  Best Seasons & Weather Chart
                </Link>
              </li>
              <li>
                <Link to="/travel-guide#gear" className="hover:text-amber-400 transition-colors">
                  Packing Gear Checklist
                </Link>
              </li>
              <li>
                <Link to="/travel-guide#permits" className="hover:text-amber-400 transition-colors">
                  Nepal Visa & Permits Guide
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  Our Sherpa Guides & Ethos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Custom Tailor-Made Treks
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-3">
            <h5 className="font-display font-bold text-sm text-stone-100 tracking-wide uppercase text-amber-500">
              The Trail Dispatch
            </h5>
            <p className="text-stone-400 text-xs leading-relaxed">
              Get seasonal trail weather forecasts, newly opened passes, and early bird departure dates.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-950/40 border border-emerald-800/80 rounded-xl text-emerald-300 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>You are on the dispatch list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg text-xs font-bold transition-colors flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[11px] text-stone-500 block">
                  No spam. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright & certifications */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Himalayan Trail Co. Pvt. Ltd. (Govt. Reg. No. 12948/065/066). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Licensed by Ministry of Tourism & Civil Aviation</span>
            <span>&middot;</span>
            <span>TAAN Member</span>
            <span>&middot;</span>
            <span>NMA Associate</span>
            <span>&middot;</span>
            <span>Leave No Trace Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
