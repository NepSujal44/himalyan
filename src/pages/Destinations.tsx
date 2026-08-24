import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Mountain, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  Compass, 
  ChevronRight,
  Sun
} from 'lucide-react';
import { REGIONS, TREKS } from '../data/treks';
import { HeroBanner } from '../components/HeroBanner';
import { TrekCard } from '../components/TrekCard';
import { SafeImage } from '../components/SafeImage';
import { useApp } from '../context/AppContext';

export const Destinations: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialRegion = searchParams.get('region') || 'all';
  const [activeRegionId, setActiveRegionId] = useState<string>(initialRegion);
  const { formatAltitude } = useApp();

  useEffect(() => {
    const r = searchParams.get('region');
    if (r) setActiveRegionId(r);
  }, [searchParams]);

  const handleSelectRegion = (id: string) => {
    setActiveRegionId(id);
    if (id === 'all') {
      searchParams.delete('region');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ region: id });
    }
  };

  const displayedRegions = activeRegionId === 'all'
    ? REGIONS
    : REGIONS.filter((r) => r.id === activeRegionId);

  return (
    <div className="space-y-12 pb-20">
      <HeroBanner
        title="Himalayan Mountain Regions & Valleys"
        subtitle="From the glaciated amphitheater of Everest and Annapurna to the desert canyons of Mustang and pristine ridges of Bhutan."
        badge="Destinations & Geography"
        breadcrumbs={[{ label: 'Destinations' }]}
        backgroundImage="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Region Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => handleSelectRegion('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeRegionId === 'all'
                ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                : 'bg-stone-900 border border-stone-800 text-stone-300 hover:text-stone-100 hover:border-stone-700'
            }`}
          >
            All Himalayan Regions ({REGIONS.length})
          </button>
          {REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => handleSelectRegion(region.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeRegionId === region.id
                  ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                  : 'bg-stone-900 border border-stone-800 text-stone-300 hover:text-stone-100 hover:border-stone-700'
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* Region Showcase Blocks */}
        <div className="space-y-16">
          {displayedRegions.map((region) => {
            const regionTreks = TREKS.filter((t) => t.regionId === region.id);

            return (
              <div
                key={region.id}
                id={`region-${region.id}`}
                className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl space-y-8"
              >
                {/* Hero Header of Region */}
                <div className="relative aspect-[21/9] min-h-[280px] sm:min-h-[340px] overflow-hidden bg-stone-950">
                  <SafeImage
                    src={region.heroImage}
                    alt={region.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div className="space-y-1 max-w-2xl">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                        <MapPin className="w-4 h-4" />
                        <span>{region.country}</span>
                        <span>&middot;</span>
                        <span>{region.peakHighlight}</span>
                      </div>
                      <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-stone-100">
                        {region.name}
                      </h2>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        to={`/trips?region=${region.id}`}
                        className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-1.5"
                      >
                        <span>View {regionTreks.length} Treks</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Region Specs & Description */}
                <div className="px-6 sm:px-8 pb-8 space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left: Overview */}
                    <div className="lg:col-span-2 space-y-4">
                      <h3 className="font-display font-bold text-lg text-stone-100">
                        About the Region
                      </h3>
                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                        {region.fullDescription}
                      </p>

                      <div className="pt-2">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-amber-500 mb-2">
                          Key Regional Highlights
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                          {region.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Technical Stats Card */}
                    <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-4 text-xs">
                      <h4 className="font-display font-bold text-sm text-stone-100 pb-2 border-b border-stone-800">
                        Regional Logistics
                      </h4>

                      <div className="space-y-3">
                        <div className="flex items-start gap-2.5">
                          <Sun className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-stone-500 uppercase text-[10px] block">Best Travel Window</span>
                            <span className="text-stone-200 font-semibold">{region.bestMonths}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <Mountain className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-stone-500 uppercase text-[10px] block">Highest Trekking Point</span>
                            <span className="text-stone-200 font-semibold">{formatAltitude(region.highestPointMeters)}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <FileText className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-stone-500 uppercase text-[10px] block">Permit Regulations</span>
                            <span className="text-stone-300 text-[11px] leading-snug">{region.permitNotes}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Treks in this Region */}
                  {regionTreks.length > 0 && (
                    <div className="pt-4 border-t border-stone-800">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-display font-bold text-base text-stone-100">
                          Available Expeditions in {region.name}
                        </h4>
                        <span className="text-xs text-stone-400">{regionTreks.length} Route(s)</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {regionTreks.map((trek) => (
                          <TrekCard key={trek.id} trek={trek} />
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
