import React, { useState } from 'react';
import { 
  BookOpen, 
  Sun, 
  Activity, 
  ShieldCheck, 
  FileText, 
  HeartHandshake, 
  CreditCard, 
  ThermometerSnowflake, 
  Compass,
  CheckCircle2
} from 'lucide-react';
import { HeroBanner } from '../components/HeroBanner';
import { AltitudeAdvisor } from '../components/AltitudeAdvisor';
import { InteractiveGearChecklist } from '../components/InteractiveGearChecklist';

export const TravelGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'altitude' | 'gear' | 'permits' | 'seasons' | 'etiquette' | 'money'>('altitude');

  const seasonsData = [
    {
      season: 'Autumn (October – November)',
      status: 'Prime High Season',
      temp: 'Day: 12°C to 18°C | Night: -10°C to 0°C',
      description: 'Post-monsoon crystal clarity. Crisp sapphire skies, unparalleled 360° mountain vistas, and ideal trekking temperatures. The most popular season for Everest and Annapurna.'
    },
    {
      season: 'Spring (March – May)',
      status: 'Prime High Season (Rhododendron Bloom)',
      temp: 'Day: 14°C to 22°C | Night: -5°C to 5°C',
      description: 'Warmer temperatures and vibrant forest trails blooming with red, pink, and white giant rhododendrons. Everest Base Camp is bustling with mountaineering expeditions.'
    },
    {
      season: 'Winter (December – February)',
      status: 'Cold & Clear (Low Crowds)',
      temp: 'Day: 5°C to 10°C | Night: -20°C to -10°C',
      description: 'Crisp dry days with intense sun and zero crowds on the trail. Passes like Thorong La or Cho La may close temporarily due to heavy snow; lower altitude treks like Mardi Himal are magical.'
    },
    {
      season: 'Monsoon / Summer (June – August)',
      status: 'Rain Shadow Season (Mustang & Dolpo only)',
      temp: 'Day: 18°C to 26°C | Night: 10°C to 15°C',
      description: 'Heavy rains in southern valleys. However, Upper Mustang and Dolpo lie in the Himalayan rain shadow behind Annapurna and receive virtually no rain, making them perfect in summer.'
    }
  ];

  return (
    <div className="space-y-12 pb-24">
      <HeroBanner
        title="Himalayan Expedition Travel Guide"
        subtitle="Expert medical guidelines, altitude preparation, interactive packing lists, and cultural wisdom compiled by veteran Sherpa expedition leaders."
        badge="Expedition Knowledge"
        breadcrumbs={[{ label: 'Travel Guide' }]}
        backgroundImage="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'altitude', label: 'Altitude & Health', icon: Activity },
            { id: 'gear', label: 'Gear & Packing', icon: ShieldCheck },
            { id: 'permits', label: 'Visas & Permits', icon: FileText },
            { id: 'seasons', label: 'Seasons & Weather', icon: Sun },
            { id: 'etiquette', label: 'Cultural Etiquette', icon: HeartHandshake },
            { id: 'money', label: 'Money & Logistics', icon: CreditCard }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeSection === tab.id
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                    : 'bg-stone-900 border border-stone-800 text-stone-300 hover:text-stone-100 hover:border-stone-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Section 1: Altitude & Health */}
        {activeSection === 'altitude' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <AltitudeAdvisor />
          </div>
        )}

        {/* Section 2: Gear & Packing List */}
        {activeSection === 'gear' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <InteractiveGearChecklist />
          </div>
        )}

        {/* Section 3: Visas & Permits */}
        {activeSection === 'permits' && (
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-8 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 pb-4 border-b border-stone-800">
              <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-stone-100">
                  Nepal Tourist Visas & Trekking Permits Guide
                </h3>
                <p className="text-stone-400 text-xs mt-0.5">
                  All permit logistics are 100% handled in advance by Himalayan Trail Co. as part of your expedition fee.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nepal Visa On Arrival */}
              <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-3 text-xs">
                <h4 className="font-bold text-sm text-stone-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Nepal Tourist Visa On Arrival
                </h4>
                <p className="text-stone-300 leading-relaxed">
                  Available at Tribhuvan International Airport (KTM) in Kathmandu. Ensure your passport has at least 6 months validity and 2 blank pages.
                </p>
                <div className="p-3 bg-stone-900 rounded-xl space-y-1.5 border border-stone-800/80">
                  <div className="flex justify-between text-stone-200">
                    <span>15 Days Single Entry:</span>
                    <strong className="text-amber-400">$30 USD</strong>
                  </div>
                  <div className="flex justify-between text-stone-200">
                    <span>30 Days Single Entry:</span>
                    <strong className="text-amber-400">$50 USD</strong>
                  </div>
                  <div className="flex justify-between text-stone-200">
                    <span>90 Days Multiple Entry:</span>
                    <strong className="text-amber-400">$125 USD</strong>
                  </div>
                </div>
              </div>

              {/* National Park & Conservation Permits */}
              <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-3 text-xs">
                <h4 className="font-bold text-sm text-stone-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  National Park & TIMS Permits
                </h4>
                <p className="text-stone-300 leading-relaxed">
                  Government regulations require mandatory TIMS (Trekkers' Information Management System) cards and park entry permits for every trekker:
                </p>
                <ul className="space-y-1.5 text-stone-300 list-disc list-inside">
                  <li><strong>Sagarmatha National Park Permit:</strong> ~NPR 3,000 (~$25) + Khumbu Pasang Lhamu tax</li>
                  <li><strong>Annapurna Conservation Area Permit (ACAP):</strong> ~NPR 3,000 (~$25)</li>
                  <li><strong>Restricted Area Permits (RAP):</strong> Manaslu ($100/wk) & Upper Mustang ($500/10 days) require registered agency accompaniment.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Section 4: Seasons & Himalayan Weather */}
        {activeSection === 'seasons' && (
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 pb-4 border-b border-stone-800">
              <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-stone-100">
                  Himalayan Seasons & Weather Patterns
                </h3>
                <p className="text-stone-400 text-xs mt-0.5">
                  Understand mountain temperature fluctuations, precipitation, and visibility conditions throughout the year.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {seasonsData.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-stone-950 border border-stone-800 rounded-2xl p-5 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="font-bold text-stone-100 text-sm">{s.season}</h4>
                    <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 font-bold text-[10px]">
                      {s.status}
                    </span>
                  </div>
                  <div className="text-amber-400 font-semibold text-[11px] pb-1">
                    {s.temp}
                  </div>
                  <p className="text-stone-300 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 5: Cultural Etiquette */}
        {activeSection === 'etiquette' && (
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 pb-4 border-b border-stone-800">
              <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-stone-100">
                  Cultural Etiquette in Sacred Himalayan Valleys
                </h3>
                <p className="text-stone-400 text-xs mt-0.5">
                  The Himalayas are spiritual sanctuaries inhabited by Tibetan Buddhist Sherpa, Gurung, and Tamang communities.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1.5">
                <h4 className="font-bold text-stone-100">1. Clockwise Rotation (Pradakshina)</h4>
                <p className="text-stone-400 leading-relaxed">
                  Always pass Mani stone walls, chortens (stupas), and prayer wheels with them on your RIGHT side (clockwise direction). Spin prayer wheels clockwise using your right hand.
                </p>
              </div>

              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1.5">
                <h4 className="font-bold text-stone-100">2. Monastery Protocol</h4>
                <p className="text-stone-400 leading-relaxed">
                  Remove shoes and hats before entering gompas (monasteries). Do not take flash photos of sacred statues or meditating monks without explicit permission. Leave a small donation (NPR 100-500).
                </p>
              </div>

              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1.5">
                <h4 className="font-bold text-stone-100">3. Namaste Greeting</h4>
                <p className="text-stone-400 leading-relaxed">
                  Greet locals and fellow trekkers by placing palms together at chest level and saying "Namaste" or "Tashi Delek" (Tibetan blessing).
                </p>
              </div>

              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1.5">
                <h4 className="font-bold text-stone-100">4. Modest Mountain Attire</h4>
                <p className="text-stone-400 leading-relaxed">
                  Dress respectfully in villages. Avoid revealing swimwear or tank tops inside local family-run teahouse dining rooms.
                </p>
              </div>

              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1.5">
                <h4 className="font-bold text-stone-100">5. Right Hand Usage</h4>
                <p className="text-stone-400 leading-relaxed">
                  Use your right hand to give or receive items, food, and money. Never point your feet directly at people, altars, or holy fires.
                </p>
              </div>

              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1.5">
                <h4 className="font-bold text-stone-100">6. Leave No Trace</h4>
                <p className="text-stone-400 leading-relaxed">
                  Pack out all non-biodegradable waste, batteries, and wet wipes. Never throw trash into traditional sacred cooking stoves.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section 6: Money & Teahouse Logistics */}
        {activeSection === 'money' && (
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 pb-4 border-b border-stone-800">
              <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-stone-100">
                  Money, Cash & On-Trail Teahouse Logistics
                </h3>
                <p className="text-stone-400 text-xs mt-0.5">
                  Credit cards are NOT accepted above Namche Bazaar or Pokhara. Cash in Nepalese Rupees (NPR) is required.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-3">
                <h4 className="font-bold text-sm text-stone-100">How Much Cash to Carry?</h4>
                <p className="text-stone-300 leading-relaxed">
                  While all main meals and lodge rooms are included in your expedition fee, you will need cash for personal extras:
                </p>
                <div className="space-y-2 text-stone-300">
                  <div className="flex justify-between border-b border-stone-800/80 pb-1">
                    <span>Hot Gas Shower:</span>
                    <strong className="text-amber-400">NPR 400 – 700 (~$3–$5)</strong>
                  </div>
                  <div className="flex justify-between border-b border-stone-800/80 pb-1">
                    <span>Device Battery Charging:</span>
                    <strong className="text-amber-400">NPR 300 – 600 (~$2–$5)</strong>
                  </div>
                  <div className="flex justify-between border-b border-stone-800/80 pb-1">
                    <span>Airalo / Everest Link Wi-Fi Card:</span>
                    <strong className="text-amber-400">NPR 1,000 (~$8 for 10GB)</strong>
                  </div>
                  <div className="flex justify-between border-b border-stone-800/80 pb-1">
                    <span>Ginger Lemon Honey Tea pot:</span>
                    <strong className="text-amber-400">NPR 500 – 800 (~$4–$6)</strong>
                  </div>
                </div>
                <p className="text-[11px] text-stone-500 pt-1">
                  We recommend withdrawing $25–$35 USD worth of NPR per day in Kathmandu before flying out.
                </p>
              </div>

              <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-3">
                <h4 className="font-bold text-sm text-stone-100">Tipping Guidelines for Sherpas & Porters</h4>
                <p className="text-stone-300 leading-relaxed">
                  Tipping is a customary Himalayan tradition acknowledging the arduous physical dedication of your mountain crew:
                </p>
                <div className="space-y-2 text-stone-300">
                  <div className="flex justify-between border-b border-stone-800/80 pb-1">
                    <span>Lead UIAGM Guide:</span>
                    <strong className="text-emerald-400">$12 – $15 USD / day (per group)</strong>
                  </div>
                  <div className="flex justify-between border-b border-stone-800/80 pb-1">
                    <span>Assistant Guide (Sherpa):</span>
                    <strong className="text-emerald-400">$8 – $10 USD / day (per group)</strong>
                  </div>
                  <div className="flex justify-between border-b border-stone-800/80 pb-1">
                    <span>Mountain Porter:</span>
                    <strong className="text-emerald-400">$6 – $8 USD / day (per group)</strong>
                  </div>
                </div>
                <p className="text-[11px] text-stone-400 pt-1">
                  A ceremonial tipping ceremony is held in the dining room on the final evening of the trek.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
