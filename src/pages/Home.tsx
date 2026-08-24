import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mountain, 
  Compass, 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  Star, 
  Clock, 
  MapPin, 
  HeartHandshake, 
  Leaf, 
  Users,
  Search,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { TREKS, REGIONS, REVIEWS } from '../data/treks';
import { TrekCard } from '../components/TrekCard';
import { TrekFinderQuiz } from '../components/TrekFinderQuiz';
import { SafeImage } from '../components/SafeImage';
import { useApp } from '../context/AppContext';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { formatPrice, formatAltitude } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const featuredTreks = TREKS.filter((t) => t.featured);
  const guaranteedDepartures = TREKS.flatMap((t) => 
    t.departures.map((d) => ({ ...d, trekId: t.id, trekName: t.name, durationDays: t.durationDays }))
  ).slice(0, 4);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/trips?search=${encodeURIComponent(searchQuery)}`);
    } else if (selectedRegion !== 'all') {
      navigate(`/trips?region=${selectedRegion}`);
    } else {
      navigate('/trips');
    }
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[88vh] flex items-center justify-center bg-stone-950 overflow-hidden border-b border-stone-800">
        {/* Background Backdrop with Gradient Wash */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1800&auto=format&fit=crop"
            alt="Himalayan Mountain Peaks"
            className="w-full h-full object-cover object-center opacity-40 scale-105 transform motion-safe:animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <Mountain className="w-3.5 h-3.5" />
            <span>Sherpa-Guided Himalayan Expeditions</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-stone-100 tracking-tight max-w-4xl leading-[1.08]">
            Walk Among the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Giants</span> of the Earth
          </h1>

          <p className="mt-6 text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Ethical high-altitude trekking across Everest, Annapurna, Manaslu, and Bhutan. Led by native UIAGM Sherpa mountaineers with guaranteed departures and 24/7 satellite safety.
          </p>

          {/* Fast Search & Filter Pill Widget */}
          <form
            onSubmit={handleHeroSearch}
            className="mt-10 w-full max-w-3xl bg-stone-900/90 backdrop-blur-md border border-stone-800 p-2 sm:p-2.5 rounded-2xl shadow-2xl shadow-black/80 flex flex-col sm:flex-row gap-2"
          >
            <div className="flex-1 flex items-center gap-2 bg-stone-950 px-3.5 py-2.5 rounded-xl border border-stone-800/80">
              <Search className="w-4 h-4 text-stone-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where do you want to trek? (e.g. Everest, Gokyo, Manaslu...)"
                className="w-full bg-transparent text-xs text-stone-100 placeholder-stone-500 focus:outline-none"
              />
            </div>

            <div className="sm:w-48 flex items-center bg-stone-950 px-3 py-2.5 rounded-xl border border-stone-800/80">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mr-1.5" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                aria-label="Select Himalayan Region"
                className="w-full bg-transparent text-xs text-stone-200 focus:outline-none"
              >
                <option value="all">All Regions</option>
                {REGIONS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <span>Search Treks</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Trust Stat Strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center pt-8 border-t border-stone-800/60 w-full max-w-4xl">
            <div>
              <span className="font-display font-bold text-2xl sm:text-3xl text-amber-400 block">100%</span>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider">Sherpa Native Leaders</span>
            </div>
            <div>
              <span className="font-display font-bold text-2xl sm:text-3xl text-amber-400 block">99.4%</span>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider">Pass Success Rate</span>
            </div>
            <div>
              <span className="font-display font-bold text-2xl sm:text-3xl text-amber-400 block">20 kg</span>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider">Strict Porter Weight Cap</span>
            </div>
            <div>
              <span className="font-display font-bold text-2xl sm:text-3xl text-amber-400 block">24/7</span>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider">Satellite inReach SOS</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Flagship Featured Expeditions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-widest mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Handpicked Itineraries</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-stone-100">
              Featured Flagship Expeditions
            </h2>
          </div>
          <Link
            to="/trips"
            className="flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition-colors"
          >
            <span>View All {TREKS.length} Expeditions</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTreks.slice(0, 3).map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </div>
      </section>

      {/* 3. Explore by Himalayan Region */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Iconic Mountain Valleys
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-stone-100 mt-1">
            Explore Himalayan Regions
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm mt-2">
            Each sacred valley carries its own distinct mountain culture, monastic heritage, and altitude terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REGIONS.map((region) => (
            <Link
              key={region.id}
              to={`/destinations?region=${region.id}`}
              className="group relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 aspect-[16/11] flex flex-col justify-end p-5 transition-all duration-300 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-black/70"
            >
              <SafeImage
                src={region.heroImage}
                alt={region.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-amber-400">
                  <span className="font-semibold">{region.country}</span>
                  <span className="bg-stone-950/80 px-2 py-0.5 rounded text-[11px] border border-stone-800">
                    {region.trekCount} Treks
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-stone-100 group-hover:text-amber-400 transition-colors">
                  {region.name}
                </h3>
                <p className="text-stone-300 text-xs line-clamp-2 leading-relaxed font-light">
                  {region.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. The Himalayan Trail Co. Difference */}
      <section className="bg-stone-950 border-y border-stone-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
              Ethical Mountaineering
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-stone-100 mt-1">
              Why We Are Different
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-2">
              We operate with uncompromising safety protocols, fair treatment of mountain crew, and sustainable ecological stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-stone-100">
                100% Sherpa Led & UIAGM Certified
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Our leaders were raised in high Khumbu villages and possess international IFMGA/UIAGM certifications. They carry clinical pulse oximeters, hyperbaric Gamow bags, and high-altitude emergency medication on every trek.
              </p>
            </div>

            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-stone-100">
                Ethical Porter Welfare Charter
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Porters are the true backbone of the Himalayas. We strictly cap loads at 20kg, provide 100% full emergency medical insurance, furnish storm-rated alpine boots and jackets, and pay 30% above industry union wages.
              </p>
            </div>

            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center font-bold">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-stone-100">
                Zero Plastic & Solar Teahouses
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                We supply reusable water filtration bottles to eliminate single-use plastic trash in the mountains. We partner with local family-owned teahouses using solar power and contribute $20 per booking to Sherpa school scholarships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Trek Matchmaker Quiz */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrekFinderQuiz />
      </section>

      {/* 6. Upcoming Guaranteed Departures Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Autumn & Spring 2026</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-stone-100 mt-1">
                Upcoming Guaranteed Departures
              </h2>
            </div>
            <Link
              to="/trips"
              className="text-xs font-bold text-amber-400 hover:underline uppercase tracking-wider"
            >
              Browse Full Calendar &rarr;
            </Link>
          </div>

          <div className="divide-y divide-stone-800">
            {guaranteedDepartures.map((dep, idx) => (
              <div
                key={idx}
                className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-sm text-stone-100 group-hover:text-amber-400 transition-colors">
                      {dep.trekName}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {dep.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-stone-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      {dep.startDate} &ndash; {dep.endDate}
                    </span>
                    <span>&middot;</span>
                    <span>{dep.durationDays} Days</span>
                    <span>&middot;</span>
                    <span className="text-stone-300">{dep.leadGuide}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0">
                  <div className="text-left md:text-right">
                    <span className="text-[10px] text-stone-500 uppercase block">From</span>
                    <span className="font-display font-bold text-base text-amber-400">
                      {formatPrice(dep.priceUSD)}
                    </span>
                  </div>
                  <Link
                    to={`/booking/${dep.trekId}`}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-amber-500/20 transition-all"
                  >
                    Reserve Spot
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Verified Trekker Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Trail Stories
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-stone-100 mt-1">
            Voices from High Altitude
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-xs text-stone-300 font-bold ml-2">4.96 / 5.0 Rating across 450+ trekkers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-500">{review.date}</span>
                </div>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-stone-100">{review.author}</h4>
                  <span className="text-stone-400 text-[11px]">{review.country}</span>
                </div>
                <span className="text-[11px] text-amber-500 font-medium">
                  {review.trekName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Bottom Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 sm:p-12 text-stone-950 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-950 tracking-tight leading-tight">
              Ready to Stand Beneath the Highest Peaks on Earth?
            </h2>
            <p className="text-stone-900 text-sm sm:text-base leading-relaxed font-medium">
              Connect with our native Sherpa expedition architects to plan your custom route or lock in your guaranteed 2026 departure date today.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/trips"
                className="px-6 py-3 bg-stone-950 hover:bg-stone-900 text-stone-100 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all"
              >
                Browse All Expeditions
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-stone-100 hover:bg-white text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all"
              >
                Request Custom Itinerary
              </Link>
            </div>
          </div>

          <Mountain className="absolute -right-10 -bottom-10 w-80 h-80 text-stone-950/10 pointer-events-none" />
        </div>
      </section>

    </div>
  );
};
