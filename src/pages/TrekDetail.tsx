import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Mountain, 
  Clock, 
  Calendar, 
  MapPin, 
  Star, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Share2, 
  PhoneCall, 
  Download,
  Utensils,
  Bed,
  Plane,
  FileText,
  AlertCircle,
  HelpCircle,
  Camera
} from 'lucide-react';
import { TREKS } from '../data/treks';
import { ElevationProfileChart } from '../components/ElevationProfileChart';
import { InteractiveGearChecklist } from '../components/InteractiveGearChecklist';
import { SafeImage } from '../components/SafeImage';
import { useApp } from '../context/AppContext';

export const TrekDetail: React.FC = () => {
  const { trekId } = useParams<{ trekId: string }>();
  const navigate = useNavigate();
  const { formatPrice, formatAltitude, isTrekSaved, toggleSaveTrek, showToast } = useApp();

  const trek = TREKS.find((t) => t.id === trekId || t.slug === trekId) || TREKS[0];
  const saved = isTrekSaved(trek.id);

  const [activeTab, setActiveTab] = useState<'itinerary' | 'overview' | 'elevation' | 'inclusions' | 'gear' | 'faqs'>('overview');
  const [selectedImage, setSelectedImage] = useState<string>(trek.heroImage);
  const [openItineraryDays, setOpenItineraryDays] = useState<number[]>([1, 2]);
  const [selectedDeparture, setSelectedDeparture] = useState<string>(trek.departures[0]?.startDate || '');
  const [sidebarPax, setSidebarPax] = useState<number>(1);

  const toggleItineraryDay = (dayNum: number) => {
    setOpenItineraryDays((prev) =>
      prev.includes(dayNum) ? prev.filter((d) => d !== dayNum) : [...prev, dayNum]
    );
  };

  const expandAllItinerary = () => {
    setOpenItineraryDays(trek.itinerary.map((d) => d.day));
  };

  const collapseAllItinerary = () => {
    setOpenItineraryDays([]);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Itinerary link copied to clipboard!');
    }
  };

  const handleBookNow = () => {
    navigate(`/booking/${trek.id}`);
  };

  return (
    <div className="space-y-10 pb-24">
      
      {/* 1. Header Banner & Gallery */}
      <section className="bg-stone-950 border-b border-stone-800 pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Breadcrumb & Wishlist bar */}
          <div className="flex items-center justify-between text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <Link to="/" className="hover:text-amber-400">Home</Link>
              <span>/</span>
              <Link to="/trips" className="hover:text-amber-400">Trips</Link>
              <span>/</span>
              <span className="text-stone-200 font-medium truncate max-w-xs">{trek.name}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-stone-100 transition-colors"
                title="Share Itinerary"
              >
                <Share2 className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline">Share</span>
              </button>

              <button
                onClick={() => toggleSaveTrek(trek.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-amber-400 transition-colors"
              >
                <Heart className={`w-3.5 h-3.5 ${saved ? 'text-amber-500 fill-amber-500' : 'text-amber-500'}`} />
                <span>{saved ? 'Saved' : 'Save'}</span>
              </button>
            </div>
          </div>

          {/* Title & Badges */}
          <div className="space-y-3 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                {trek.regionName}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-stone-900 text-stone-300 border border-stone-800">
                {trek.difficulty} Grade
              </span>
              <div className="flex items-center gap-1 text-xs text-amber-400 font-bold bg-stone-900 border border-stone-800 px-3 py-1 rounded-full">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{trek.rating}</span>
                <span className="text-stone-500">({trek.reviewCount} reviews)</span>
              </div>
            </div>

            <h1 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-stone-100 tracking-tight leading-tight">
              {trek.name}
            </h1>

            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              {trek.tagline}
            </p>
          </div>

          {/* Gallery Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 pt-2">
            {/* Main Featured Photo */}
            <div className="lg:col-span-3 aspect-[16/9] rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 relative">
              <SafeImage
                src={selectedImage}
                alt={trek.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-800 text-xs text-stone-300 flex items-center gap-2 pointer-events-none">
                <Camera className="w-4 h-4 text-amber-500" />
                <span>Sherpa Expedition Photography</span>
              </div>
            </div>

            {/* Thumbnail Stack */}
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-2.5">
              {trek.galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`cursor-pointer rounded-xl overflow-hidden border transition-all aspect-[16/10] lg:aspect-auto lg:h-28 bg-stone-950 ${
                    selectedImage === img
                      ? 'border-amber-500 ring-2 ring-amber-500/30'
                      : 'border-stone-800 opacity-70 hover:opacity-100'
                  }`}
                >
                  <SafeImage src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="bg-stone-900 border border-stone-800/80 rounded-xl p-3.5 flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <span className="text-[10px] text-stone-500 uppercase block">Duration</span>
                <span className="font-bold text-xs sm:text-sm text-stone-100">{trek.durationDays} Days / 15 Nights</span>
              </div>
            </div>

            <div className="bg-stone-900 border border-stone-800/80 rounded-xl p-3.5 flex items-center gap-3">
              <Mountain className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <span className="text-[10px] text-stone-500 uppercase block">Max Altitude</span>
                <span className="font-bold text-xs sm:text-sm text-amber-400">{formatAltitude(trek.maxAltitudeMeters)}</span>
              </div>
            </div>

            <div className="bg-stone-900 border border-stone-800/80 rounded-xl p-3.5 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <span className="text-[10px] text-stone-500 uppercase block">Best Season</span>
                <span className="font-bold text-xs sm:text-sm text-stone-100">{trek.bestSeasons[0]}</span>
              </div>
            </div>

            <div className="bg-stone-900 border border-stone-800/80 rounded-xl p-3.5 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-[10px] text-stone-500 uppercase block">Leadership</span>
                <span className="font-bold text-xs sm:text-sm text-emerald-400">100% Sherpa Led</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Content & Sticky Booking Sidebar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left / Center: Route Details & Tabs (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tab Header Controls */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-stone-800 scrollbar-none">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'itinerary', label: `Itinerary (${trek.itinerary.length} Days)` },
                { id: 'elevation', label: 'Elevation Profile' },
                { id: 'inclusions', label: 'Inclusions & Costs' },
                { id: 'gear', label: 'Gear List' },
                { id: 'faqs', label: 'FAQs & Safety' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                      : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-in fade-in duration-150">
                {/* Route synopsis */}
                <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4">
                  <h3 className="font-display font-bold text-xl text-stone-100">
                    Expedition Synopsis
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {trek.overview}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4">
                  <h3 className="font-display font-bold text-lg text-stone-100">
                    Key Route Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {trek.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Route Logistics Table */}
                <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4">
                  <h3 className="font-display font-bold text-lg text-stone-100">
                    Route Logistics & Operational Specs
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="flex items-start gap-3 p-3 bg-stone-950 rounded-xl border border-stone-800">
                      <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-stone-500 uppercase text-[10px] block">Start & End Trailhead</span>
                        <span className="text-stone-200 font-semibold">{trek.routeSummary.startPoint} &rarr; {trek.routeSummary.endPoint}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-stone-950 rounded-xl border border-stone-800">
                      <Bed className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-stone-500 uppercase text-[10px] block">Lodge Accommodation</span>
                        <span className="text-stone-200 font-semibold">{trek.routeSummary.accommodation}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-stone-950 rounded-xl border border-stone-800">
                      <Utensils className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-stone-500 uppercase text-[10px] block">Meal Plan</span>
                        <span className="text-stone-200 font-semibold">{trek.routeSummary.meals}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-stone-950 rounded-xl border border-stone-800">
                      <Plane className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-stone-500 uppercase text-[10px] block">Internal Transportation</span>
                        <span className="text-stone-200 font-semibold">{trek.routeSummary.transportation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ITINERARY ACCORDION */}
            {activeTab === 'itinerary' && (
              <div className="space-y-6 animate-in fade-in duration-150">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-xl text-stone-100">
                    Day-by-Day Expedition Itinerary
                  </h3>
                  <div className="flex gap-2 text-xs">
                    <button
                      onClick={expandAllItinerary}
                      className="text-amber-400 hover:underline font-semibold"
                    >
                      Expand All
                    </button>
                    <span className="text-stone-600">|</span>
                    <button
                      onClick={collapseAllItinerary}
                      className="text-stone-400 hover:underline"
                    >
                      Collapse All
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {trek.itinerary.map((day) => {
                    const isOpen = openItineraryDays.includes(day.day);
                    const isAcclimatization = day.title.toLowerCase().includes('acclimatization');

                    return (
                      <div
                        key={day.day}
                        className={`rounded-2xl border transition-all overflow-hidden ${
                          isOpen
                            ? 'bg-stone-900 border-amber-500/40 shadow-lg'
                            : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        {/* Day Accordion Header */}
                        <button
                          onClick={() => toggleItineraryDay(day.day)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-3.5">
                            <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                              isAcclimatization
                                ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                                : 'bg-amber-500 text-stone-950'
                            }`}>
                              D{day.day}
                            </span>
                            <div>
                              <h4 className="font-display font-bold text-sm sm:text-base text-stone-100">
                                {day.title}
                              </h4>
                              <div className="flex items-center gap-3 text-[11px] text-stone-400 mt-0.5">
                                <span className="text-amber-400 font-semibold">
                                  Sleep: {formatAltitude(day.sleepAltitudeMeters)}
                                </span>
                                {day.walkingHours && (
                                  <>
                                    <span>&middot;</span>
                                    <span>{day.walkingHours}</span>
                                  </>
                                )}
                                {day.distanceKm && (
                                  <>
                                    <span>&middot;</span>
                                    <span>{day.distanceKm} km</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="text-stone-400 p-1">
                            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </div>
                        </button>

                        {/* Day Accordion Expanded Body */}
                        {isOpen && (
                          <div className="px-5 pb-5 pt-2 border-t border-stone-800/80 space-y-3 text-xs">
                            <p className="text-stone-300 leading-relaxed">
                              {day.description}
                            </p>

                            {day.highlights && day.highlights.length > 0 && (
                              <div className="pt-2 flex flex-wrap gap-2">
                                {day.highlights.map((h, i) => (
                                  <span
                                    key={i}
                                    className="px-2.5 py-1 rounded-lg bg-stone-950 text-stone-300 border border-stone-800 text-[11px]"
                                  >
                                    &bull; {h}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 3: ELEVATION PROFILE */}
            {activeTab === 'elevation' && (
              <div className="space-y-6 animate-in fade-in duration-150">
                <ElevationProfileChart
                  itinerary={trek.itinerary}
                  maxAltitudeMeters={trek.maxAltitudeMeters}
                />
              </div>
            )}

            {/* TAB 4: INCLUSIONS & EXCLUSIONS */}
            {activeTab === 'inclusions' && (
              <div className="space-y-6 animate-in fade-in duration-150">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Inclusions */}
                  <div className="bg-stone-900 border border-emerald-900/40 rounded-2xl p-6 space-y-4">
                    <h3 className="font-display font-bold text-base text-emerald-400 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      What's Included
                    </h3>
                    <ul className="space-y-2.5 text-xs text-stone-300">
                      {trek.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold shrink-0 mt-0.5">&check;</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div className="bg-stone-900 border border-rose-900/40 rounded-2xl p-6 space-y-4">
                    <h3 className="font-display font-bold text-base text-rose-400 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      What's Excluded
                    </h3>
                    <ul className="space-y-2.5 text-xs text-stone-300">
                      {trek.excluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-400 font-bold shrink-0 mt-0.5">&times;</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: GEAR LIST */}
            {activeTab === 'gear' && (
              <div className="space-y-6 animate-in fade-in duration-150">
                <InteractiveGearChecklist />
              </div>
            )}

            {/* TAB 6: FAQS */}
            {activeTab === 'faqs' && (
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-6 animate-in fade-in duration-150">
                <h3 className="font-display font-bold text-lg text-stone-100 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-amber-500" />
                  Frequently Asked Questions about {trek.name}
                </h3>
                <div className="space-y-4 divide-y divide-stone-800">
                  {trek.faqs.map((faq, idx) => (
                    <div key={idx} className={idx > 0 ? 'pt-4' : ''}>
                      <h4 className="font-bold text-sm text-stone-100 mb-1">
                        {faq.question}
                      </h4>
                      <p className="text-xs text-stone-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="sticky top-24 space-y-4">
            <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 shadow-2xl space-y-5">
              
              {/* Pricing Header */}
              <div className="pb-4 border-b border-stone-800">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                  Guaranteed Departure Price
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-bold text-3xl text-amber-400">
                    {formatPrice(trek.priceUSD)}
                  </span>
                  {trek.originalPriceUSD && (
                    <span className="text-xs text-stone-500 line-through">
                      {formatPrice(trek.originalPriceUSD)}
                    </span>
                  )}
                  <span className="text-xs text-stone-400">/ person</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-medium block mt-1">
                  &bull; 100% Price Lock Guarantee & No Hidden Surcharges
                </span>
              </div>

              {/* Departure Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  Select Guaranteed Departure:
                </label>
                <select
                  value={selectedDeparture}
                  onChange={(e) => setSelectedDeparture(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 text-stone-100 text-xs rounded-xl px-3.5 py-2.5 focus:border-amber-500 focus:outline-none"
                >
                  {trek.departures.map((d) => (
                    <option key={d.id} value={d.startDate}>
                      {d.startDate} &ndash; {d.status} ({d.availableSlots} seats left)
                    </option>
                  ))}
                </select>
              </div>

              {/* Group Size Selector */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-stone-300">Trekkers (Pax):</span>
                  <span className="text-amber-400 font-bold">
                    Total: {formatPrice(trek.priceUSD * sidebarPax)}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 4, 6].map((count) => (
                    <button
                      key={count}
                      onClick={() => setSidebarPax(count)}
                      className={`py-2 rounded-xl text-xs font-bold transition-colors ${
                        sidebarPax === count
                          ? 'bg-amber-500 text-stone-950'
                          : 'bg-stone-950 border border-stone-800 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      {count} {count === 1 ? 'Pax' : 'Pax'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary CTA */}
              <button
                onClick={handleBookNow}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Book This Expedition</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to={`/contact?trek=${trek.id}`}
                className="w-full py-2.5 text-center text-xs font-bold text-stone-400 hover:text-stone-200 block transition-colors"
              >
                Request Custom Tailored Dates &rarr;
              </Link>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-stone-800 space-y-2 text-[11px] text-stone-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Free date changes up to 45 days prior</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Twin-share rooms & high-warmth lodges</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
                  <span>24/7 Sherpa Expedition Hotline</span>
                </div>
              </div>

            </div>

            {/* Need Help Box */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-4 text-xs text-stone-400 flex items-start gap-3">
              <PhoneCall className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-200 block mb-0.5">Talk to a Lead Guide</span>
                <span>Call our Kathmandu base at +977-1-470-1234 or WhatsApp +977-98510-99881.</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
