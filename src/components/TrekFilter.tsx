import React from 'react';
import { Search, SlidersHorizontal, X, LayoutGrid, List, RotateCcw } from 'lucide-react';
import { DifficultyLevel } from '../types';
import { REGIONS } from '../data/treks';

export interface FilterState {
  search: string;
  regionId: string;
  difficulty: string;
  durationRange: string;
  sortBy: string;
  layout: 'grid' | 'horizontal';
}

interface TrekFilterProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onReset: () => void;
  totalResults: number;
}

export const TrekFilter: React.FC<TrekFilterProps> = ({
  filters,
  onFilterChange,
  onReset,
  totalResults
}) => {
  const difficulties: { label: string; value: string }[] = [
    { label: 'All Difficulties', value: 'all' },
    { label: 'Moderate', value: 'Moderate' },
    { label: 'Challenging', value: 'Challenging' },
    { label: 'Strenuous', value: 'Strenuous' },
    { label: 'Extreme', value: 'Extreme' }
  ];

  const durationOptions = [
    { label: 'Any Duration', value: 'all' },
    { label: 'Under 10 Days', value: 'under-10' },
    { label: '10 – 15 Days', value: '10-15' },
    { label: '16+ Days', value: '16-plus' }
  ];

  const sortOptions = [
    { label: 'Most Popular & Recommended', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Duration: Shortest to Longest', value: 'duration-asc' },
    { label: 'Max Altitude: Highest First', value: 'altitude-desc' },
    { label: 'Customer Rating', value: 'rating-desc' }
  ];

  const hasActiveFilters = 
    filters.search !== '' || 
    filters.regionId !== 'all' || 
    filters.difficulty !== 'all' || 
    filters.durationRange !== 'all';

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 sm:p-5 shadow-xl space-y-4 mb-8">
      {/* Top Search & Layout Row */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            placeholder="Search by trek name, pass, or mountain peak..."
            className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl pl-10 pr-9 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none transition-colors"
          />
          {filters.search && (
            <button
              onClick={() => onFilterChange({ search: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Region Dropdown & Sort */}
        <div className="w-full md:w-auto flex flex-wrap sm:flex-nowrap items-center gap-2.5">
          {/* Region Dropdown */}
          <select
            value={filters.regionId}
            onChange={(e) => onFilterChange({ regionId: e.target.value })}
            className="bg-stone-950 border border-stone-800 text-stone-200 text-xs rounded-xl px-3 py-2.5 focus:border-amber-500 focus:outline-none"
          >
            <option value="all">All Regions & Valleys</option>
            {REGIONS.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name} ({r.trekCount})
              </option>
            ))}
          </select>

          {/* Duration Dropdown */}
          <select
            value={filters.durationRange}
            onChange={(e) => onFilterChange({ durationRange: e.target.value })}
            className="bg-stone-950 border border-stone-800 text-stone-200 text-xs rounded-xl px-3 py-2.5 focus:border-amber-500 focus:outline-none"
          >
            {durationOptions.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>

          {/* Sort Dropdown */}
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ sortBy: e.target.value })}
            className="bg-stone-950 border border-stone-800 text-stone-200 text-xs rounded-xl px-3 py-2.5 focus:border-amber-500 focus:outline-none"
          >
            {sortOptions.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>

          {/* View Toggle */}
          <div className="hidden sm:flex items-center bg-stone-950 border border-stone-800 rounded-xl p-1 shrink-0">
            <button
              onClick={() => onFilterChange({ layout: 'grid' })}
              className={`p-1.5 rounded-lg transition-colors ${
                filters.layout === 'grid'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onFilterChange({ layout: 'horizontal' })}
              className={`p-1.5 rounded-lg transition-colors ${
                filters.layout === 'horizontal'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Difficulty Pills & Results Summary */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-800/80">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-stone-500 mr-1 flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3 text-amber-500" />
            Difficulty:
          </span>
          {difficulties.map((diff) => (
            <button
              key={diff.value}
              onClick={() => onFilterChange({ difficulty: diff.value })}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filters.difficulty === diff.value
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-stone-950 border border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
              }`}
            >
              {diff.label}
            </button>
          ))}
        </div>

        {/* Status / Reset */}
        <div className="flex items-center gap-3 text-xs text-stone-400">
          <span>
            Showing <strong className="text-amber-400">{totalResults}</strong> treks
          </span>
          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold underline decoration-amber-500/40 underline-offset-4"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
