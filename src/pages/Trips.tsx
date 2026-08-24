import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mountain, Compass, RotateCcw } from 'lucide-react';
import { TREKS } from '../data/treks';
import { TrekCard } from '../components/TrekCard';
import { TrekFilter, FilterState } from '../components/TrekFilter';
import { HeroBanner } from '../components/HeroBanner';

export const Trips: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState<FilterState>(() => {
    return {
      search: searchParams.get('search') || '',
      regionId: searchParams.get('region') || 'all',
      difficulty: searchParams.get('difficulty') || 'all',
      durationRange: searchParams.get('duration') || 'all',
      sortBy: searchParams.get('sort') || 'featured',
      layout: 'grid'
    };
  });

  // Sync state with URL params
  useEffect(() => {
    const s = searchParams.get('search');
    const r = searchParams.get('region');
    const d = searchParams.get('difficulty');
    const dur = searchParams.get('duration');
    const sort = searchParams.get('sort');

    setFilters((prev) => ({
      ...prev,
      search: s || prev.search,
      regionId: r || prev.regionId,
      difficulty: d || prev.difficulty,
      durationRange: dur || prev.durationRange,
      sortBy: sort || prev.sortBy
    }));
  }, [searchParams]);

  const handleFilterChange = (updated: Partial<FilterState>) => {
    const newFilters = { ...filters, ...updated };
    setFilters(newFilters);

    const params: Record<string, string> = {};
    if (newFilters.search) params.search = newFilters.search;
    if (newFilters.regionId !== 'all') params.region = newFilters.regionId;
    if (newFilters.difficulty !== 'all') params.difficulty = newFilters.difficulty;
    if (newFilters.durationRange !== 'all') params.duration = newFilters.durationRange;
    if (newFilters.sortBy !== 'featured') params.sort = newFilters.sortBy;

    setSearchParams(params);
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      regionId: 'all',
      difficulty: 'all',
      durationRange: 'all',
      sortBy: 'featured',
      layout: filters.layout
    });
    setSearchParams({});
  };

  // Filter & Sort Logic
  const filteredTreks = useMemo(() => {
    let result = [...TREKS];

    // Search query
    if (filters.search.trim()) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.regionName.toLowerCase().includes(q) ||
          t.tagline.toLowerCase().includes(q) ||
          t.highlights.some((h) => h.toLowerCase().includes(q))
      );
    }

    // Region filter
    if (filters.regionId !== 'all') {
      result = result.filter((t) => t.regionId === filters.regionId);
    }

    // Difficulty filter
    if (filters.difficulty !== 'all') {
      result = result.filter((t) => t.difficulty === filters.difficulty);
    }

    // Duration filter
    if (filters.durationRange === 'under-10') {
      result = result.filter((t) => t.durationDays < 10);
    } else if (filters.durationRange === '10-15') {
      result = result.filter((t) => t.durationDays >= 10 && t.durationDays <= 15);
    } else if (filters.durationRange === '16-plus') {
      result = result.filter((t) => t.durationDays >= 16);
    }

    // Sorting
    if (filters.sortBy === 'price-asc') {
      result.sort((a, b) => a.priceUSD - b.priceUSD);
    } else if (filters.sortBy === 'price-desc') {
      result.sort((a, b) => b.priceUSD - a.priceUSD);
    } else if (filters.sortBy === 'duration-asc') {
      result.sort((a, b) => a.durationDays - b.durationDays);
    } else if (filters.sortBy === 'altitude-desc') {
      result.sort((a, b) => b.maxAltitudeMeters - a.maxAltitudeMeters);
    } else if (filters.sortBy === 'rating-desc') {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      // Default: featured first
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [filters]);

  return (
    <div className="space-y-10 pb-20">
      <HeroBanner
        title="Trips & Expeditions"
        subtitle="Explore our full collection of guaranteed Sherpa-led Himalayan treks with live departure availability."
        badge="Expedition Catalog"
        breadcrumbs={[{ label: 'Trips' }]}
        backgroundImage="https://images.unsplash.com/photo-1585409677983-0f6c41ca0c33?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Bar Component */}
        <TrekFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
          totalResults={filteredTreks.length}
        />

        {/* Results List */}
        {filteredTreks.length === 0 ? (
          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-12 text-center space-y-4 max-w-lg mx-auto my-12">
            <Mountain className="w-12 h-12 text-stone-600 mx-auto stroke-[1.5]" />
            <h3 className="font-display font-bold text-xl text-stone-100">
              No Expeditions Match Your Search
            </h3>
            <p className="text-stone-400 text-xs leading-relaxed">
              We couldn't find any treks matching your current filter criteria. Try resetting the filters or searching for another peak.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <div
            className={
              filters.layout === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'flex flex-col gap-5'
            }
          >
            {filteredTreks.map((trek) => (
              <TrekCard
                key={trek.id}
                trek={trek}
                layout={filters.layout}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
