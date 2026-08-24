import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Mountain, 
  MapPin, 
  Star, 
  Heart, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Trek, DifficultyLevel } from '../types';
import { useApp } from '../context/AppContext';
import { SafeImage } from './SafeImage';

interface TrekCardProps {
  trek: Trek;
  layout?: 'grid' | 'horizontal';
}

export const TrekCard: React.FC<TrekCardProps> = ({ trek, layout = 'grid' }) => {
  const { formatPrice, formatAltitude, isTrekSaved, toggleSaveTrek } = useApp();
  const saved = isTrekSaved(trek.id);

  const getDifficultyBadge = (diff: DifficultyLevel) => {
    switch (diff) {
      case 'Easy':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Moderate':
        return 'bg-sky-500/20 text-sky-400 border-sky-500/30';
      case 'Challenging':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Strenuous':
        return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      case 'Extreme':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-stone-800 text-stone-300 border-stone-700';
    }
  };

  if (layout === 'horizontal') {
    return (
      <div className="bg-stone-900 border border-stone-800 hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-2xl hover:shadow-black/50 group flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="relative md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden bg-stone-950">
          <SafeImage
            src={trek.heroImage}
            alt={trek.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-stone-950/80 via-transparent to-transparent pointer-events-none" />
          
          {/* Wishlist toggle */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleSaveTrek(trek.id);
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-stone-950/70 backdrop-blur-md border border-stone-700/80 text-stone-200 hover:text-amber-400 transition-colors z-10"
            title={saved ? 'Remove from saved' : 'Save trek'}
          >
            <Heart className={`w-4 h-4 ${saved ? 'text-amber-500 fill-amber-500' : ''}`} />
          </button>

          {/* Difficulty pill */}
          <span className={`absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold border backdrop-blur-md ${getDifficultyBadge(trek.difficulty)}`}>
            {trek.difficulty}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-stone-400 mb-1.5">
              <span className="flex items-center gap-1 text-amber-500/90 font-semibold uppercase tracking-wider text-[11px]">
                <MapPin className="w-3.5 h-3.5" />
                {trek.regionName}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-stone-200 font-bold">{trek.rating}</span>
                <span className="text-stone-500">({trek.reviewCount})</span>
              </div>
            </div>

            <Link to={`/trips/${trek.id}`}>
              <h3 className="font-display font-bold text-lg text-stone-100 group-hover:text-amber-400 transition-colors line-clamp-1">
                {trek.name}
              </h3>
            </Link>

            <p className="text-stone-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
              {trek.tagline}
            </p>

            {/* Specs bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 pt-3 border-t border-stone-800/80 text-xs">
              <div className="flex items-center gap-1.5 text-stone-300">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>{trek.durationDays} Days</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-300">
                <Mountain className="w-3.5 h-3.5 text-amber-500" />
                <span>Max: {formatAltitude(trek.maxAltitudeMeters)}</span>
              </div>
              <div className="flex items-center gap-1.5 text-stone-300 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 block">From</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-bold text-xl text-amber-400">
                  {formatPrice(trek.priceUSD)}
                </span>
                {trek.originalPriceUSD && (
                  <span className="text-xs text-stone-500 line-through">
                    {formatPrice(trek.originalPriceUSD)}
                  </span>
                )}
                <span className="text-[11px] text-stone-400">/ person</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to={`/trips/${trek.id}`}
                className="px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors"
              >
                Details
              </Link>
              <Link
                to={`/booking/${trek.id}`}
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-colors"
              >
                <span>Book</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid Card Layout
  return (
    <div className="bg-stone-900 border border-stone-800 hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 group flex flex-col justify-between">
      {/* Top Image & Overlays */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
        <SafeImage
          src={trek.heroImage}
          alt={trek.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent pointer-events-none" />

        {/* Wishlist toggle */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSaveTrek(trek.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-stone-950/70 backdrop-blur-md border border-stone-700/80 text-stone-200 hover:text-amber-400 transition-colors z-10"
          title={saved ? 'Remove from saved' : 'Save trek'}
          aria-label="Save trek"
        >
          <Heart className={`w-4 h-4 ${saved ? 'text-amber-500 fill-amber-500' : ''}`} />
        </button>

        {/* Badges on image */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border backdrop-blur-md ${getDifficultyBadge(trek.difficulty)}`}>
            {trek.difficulty}
          </span>
          {trek.featured && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-500 text-stone-950">
              Featured
            </span>
          )}
        </div>

        {/* Region & Duration strip on image bottom */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-stone-200">
          <span className="flex items-center gap-1 font-semibold text-[11px] text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            {trek.regionName}
          </span>
          <span className="flex items-center gap-1 bg-stone-950/80 px-2 py-0.5 rounded-md border border-stone-800 text-[11px]">
            <Clock className="w-3 h-3 text-amber-500" />
            {trek.durationDays} Days
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 text-xs mb-1.5">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-bold text-stone-200">{trek.rating}</span>
            <span className="text-stone-500 text-[11px]">({trek.reviewCount} reviews)</span>
          </div>

          <Link to={`/trips/${trek.id}`}>
            <h3 className="font-display font-bold text-base sm:text-lg text-stone-100 group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
              {trek.name}
            </h3>
          </Link>

          <p className="text-stone-400 text-xs mt-2 line-clamp-2 leading-relaxed">
            {trek.tagline}
          </p>

          {/* Quick Specs */}
          <div className="mt-3.5 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-300">
            <div className="flex items-center gap-1">
              <Mountain className="w-3.5 h-3.5 text-amber-500" />
              <span>Max: {formatAltitude(trek.maxAltitudeMeters)}</span>
            </div>
            <div className="text-[11px] text-stone-400">
              <span>{trek.bestSeasons[0]}</span>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-4 pt-3.5 border-t border-stone-800/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 block leading-none mb-1">
              From
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-display font-bold text-lg sm:text-xl text-amber-400">
                {formatPrice(trek.priceUSD)}
              </span>
              {trek.originalPriceUSD && (
                <span className="text-[11px] text-stone-500 line-through">
                  {formatPrice(trek.originalPriceUSD)}
                </span>
              )}
            </div>
          </div>

          <Link
            to={`/trips/${trek.id}`}
            className="flex items-center gap-1 px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 transition-all group-hover:translate-x-0.5"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
