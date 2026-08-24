import React from 'react';
import { 
  Mountain, 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  Users, 
  Compass, 
  CheckCircle2,
  Leaf
} from 'lucide-react';
import { HeroBanner } from '../components/HeroBanner';
import { SafeImage } from '../components/SafeImage';

export const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Pemba Dorje Sherpa',
      role: 'Head of Mountain Operations & Lead UIAGM Guide',
      origin: 'Khumjung, Solukhumbu',
      summits: '8x Everest Summits & 14x Cho La Crossings',
      bio: 'Raised at 3,790m in Khumjung village, Pemba has spent 22 years leading international expeditions across the high Himalaya with an unblemished safety record.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Dr. Maya Sharma, MD',
      role: 'Expedition Medical Director (High Altitude Medicine)',
      origin: 'Kathmandu, Nepal',
      summits: 'Himalayan Rescue Association Volunteer',
      bio: 'Specialist in Acute Mountain Sickness (AMS), HAPE, and hyperbaric medicine. Oversees our twice-daily oximeter pulse monitoring protocols across all teams.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
    },
    {
      name: 'Tashi Tshering Sherpa',
      role: 'Chief Route Architect & Sustainable Logistics',
      origin: 'Namche Bazaar, Everest Region',
      summits: 'Manaslu & Annapurna Circuit Specialist',
      bio: 'Pioneered our low-impact teahouse partnerships and leads our annual Khumbu trail clean-up initiatives removing discarded single-use plastics.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="space-y-16 pb-24">
      <HeroBanner
        title="Our Story & Sherpa Heritage"
        subtitle="Born in the shadow of Mount Everest. We are a collective of native Sherpa mountain guides dedicated to ethical, safe, and transformative Himalayan journeys."
        badge="Heritage & Ethos"
        breadcrumbs={[{ label: 'About Us' }]}
        backgroundImage="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Origin Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
              Founding Philosophy
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-100 leading-tight">
              Trekking As It Was Meant To Be: Rooted in Community & Care
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Himalayan Trail Co. was founded in 2012 by native Sherpa guides who noticed that large Western agency conglomerates were cutting corners on porter treatment, rushing acclimatization schedules, and leaving trash along sacred mountain routes.
            </p>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              We decided to do things differently: 100% Sherpa ownership, generous acclimatization rest profiles that give our clients a 99.4% pass success rate, and an uncompromising ethical charter that protects every porter, yak herder, and teahouse family we work with.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 bg-stone-900 border border-stone-800 rounded-2xl">
                <span className="font-display font-bold text-2xl text-amber-400 block">14+</span>
                <span className="text-xs text-stone-400">Years of Himalayan Expeditions</span>
              </div>
              <div className="p-4 bg-stone-900 border border-stone-800 rounded-2xl">
                <span className="font-display font-bold text-2xl text-amber-400 block">4,200+</span>
                <span className="text-xs text-stone-400">Trekkers Safely Guided</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-950">
            <SafeImage
              src="https://images.unsplash.com/photo-1585409677983-0f6c41ca0c33?q=80&w=800&auto=format&fit=crop"
              alt="Sherpa Expedition Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-stone-950/80 backdrop-blur-md rounded-xl border border-stone-800 text-xs text-stone-200">
              <p className="font-semibold text-amber-400">"The mountains do not belong to us; we belong to the mountains."</p>
              <span className="text-[11px] text-stone-400 block mt-0.5">&mdash; Khumbu Sherpa Proverb</span>
            </div>
          </div>
        </div>

        {/* Ethical Charter 3 Pillars */}
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
              Our 3 Guiding Pillars
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-stone-100">
              The Himalayan Trail Co. Ethical Charter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-3">
              <HeartHandshake className="w-8 h-8 text-amber-400" />
              <h3 className="font-display font-bold text-base text-stone-100">
                1. Porter Welfare Priority
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                We strictly enforce the 20kg maximum baggage limit, provide 100% comprehensive medical insurance, furnish storm gear, and pay 30% above industry union rates.
              </p>
            </div>

            <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-3">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
              <h3 className="font-display font-bold text-base text-stone-100">
                2. Clinical Mountain Safety
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Every expedition team carries satellite Garmin inReach SOS communicators, clinical pulse oximeters, and hyperbaric emergency chambers.
              </p>
            </div>

            <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-3">
              <Leaf className="w-8 h-8 text-amber-400" />
              <h3 className="font-display font-bold text-base text-stone-100">
                3. Regenerative Ecology
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                We ban single-use plastic water bottles on our routes, support solar-powered teahouses, and donate $20 per booking to local Sherpa educational schools.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership & Guide Team */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
              Expedition Leadership
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-stone-100">
              Meet Our Mountain Masters
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              Our guides are not just leaders; they are native Himalayan custodians with decades of high-altitude mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-stone-950">
                  <SafeImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-amber-500 block uppercase">
                      {member.role}
                    </span>
                    <h4 className="font-display font-bold text-lg text-stone-100">
                      {member.name}
                    </h4>
                    <span className="text-[11px] text-stone-400 block font-medium">
                      {member.origin} &bull; {member.summits}
                    </span>
                    <p className="text-xs text-stone-300 pt-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations & Licenses Strip */}
        <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-wider text-stone-300 text-center">
            Official Accreditations & Government Licenses
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 font-semibold">
            <span className="flex items-center gap-1.5 text-stone-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Nepal Ministry of Tourism (License #1489/071)
            </span>
            <span className="flex items-center gap-1.5 text-stone-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Trekking Agencies' Association of Nepal (TAAN)
            </span>
            <span className="flex items-center gap-1.5 text-stone-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Nepal Mountaineering Association (NMA)
            </span>
            <span className="flex items-center gap-1.5 text-stone-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              IFMGA / UIAGM Certified Leaders
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
