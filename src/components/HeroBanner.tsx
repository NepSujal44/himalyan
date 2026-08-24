import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage?: string;
  breadcrumbs?: { label: string; to?: string }[];
  children?: React.ReactNode;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  badge,
  backgroundImage = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
  breadcrumbs,
  children
}) => {
  return (
    <div className="relative bg-stone-950 overflow-hidden border-b border-stone-800">
      {/* Background Image with Deep Gradient Wash */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-14 sm:pb-16">
        
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-stone-400 mb-5" aria-label="Breadcrumb">
            <Link to="/" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-stone-600" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-amber-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-stone-200 font-medium truncate max-w-xs sm:max-w-md">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>{badge}</span>
          </div>
        )}

        {/* Main Title & Subtitle */}
        <div className="max-w-3xl">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-tight leading-[1.15]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
};
