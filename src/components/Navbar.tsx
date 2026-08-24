import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Compass, 
  Mountain, 
  Menu, 
  X, 
  Heart, 
  Globe, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CurrencyCode, AltitudeUnit } from '../types';
import { TREKS } from '../data/treks';
import { SafeImage } from './SafeImage';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { 
    currency, 
    setCurrency, 
    altitudeUnit, 
    setAltitudeUnit, 
    savedTrekIds, 
    formatPrice,
    toggleSaveTrek 
  } = useApp();

  const savedTreks = TREKS.filter((t) => savedTrekIds.includes(t.id));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setWishlistModalOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/trips', label: 'Trips & Treks' },
    { to: '/travel-guide', label: 'Travel Guide' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const currencies: CurrencyCode[] = ['USD', 'EUR', 'GBP', 'AUD', 'NPR'];

  return (
    <>
      {/* Top emergency & trust notification bar */}
      <div className="bg-stone-950 border-b border-stone-800/80 text-xs text-stone-400 py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              100% Sherpa Led &middot; UIAGM Certified &middot; Garmin inReach 24/7 Satellite Tracked
            </span>
            <span className="text-stone-500">|</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Autumn 2026 Guaranteed Departures Open
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href="tel:+97714701234" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-amber-500" />
              <span>Kathmandu HQ: +977-1-470-1234</span>
            </a>

            {/* Altitude unit toggle */}
            <div className="flex items-center bg-stone-900 border border-stone-800 rounded-md px-1.5 py-0.5 text-[11px]">
              <span className="text-stone-500 mr-1.5">Elev:</span>
              <button 
                onClick={() => setAltitudeUnit('m')}
                className={`px-1.5 py-0.2 rounded transition-colors ${altitudeUnit === 'm' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-stone-200'}`}
              >
                M
              </button>
              <button 
                onClick={() => setAltitudeUnit('ft')}
                className={`px-1.5 py-0.2 rounded transition-colors ${altitudeUnit === 'ft' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400 hover:text-stone-200'}`}
              >
                FT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800 shadow-xl shadow-black/40 py-3.5' 
            : 'bg-stone-950/70 backdrop-blur-sm border-b border-stone-800/40 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group" id="navbar-brand-logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
              <Mountain className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-wider text-stone-100 block leading-tight group-hover:text-amber-400 transition-colors">
                HIMALAYAN
              </span>
              <span className="text-[10px] tracking-[0.25em] text-amber-500 uppercase font-bold block">
                TRAIL CO.
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                id={`navlink-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 font-semibold'
                      : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions (Currency, Wishlist, Book CTA) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Currency selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                id="currency-selector-btn"
                className="flex items-center gap-1.5 bg-stone-900 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-stone-100 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-amber-500" />
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              {currencyDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-32 bg-stone-900 border border-stone-800 rounded-xl shadow-2xl py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setCurrencyDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-stone-400 border-b border-stone-800">
                    Currency
                  </div>
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-stone-800 transition-colors ${
                        currency === c ? 'text-amber-400 font-bold bg-amber-500/10' : 'text-stone-300'
                      }`}
                    >
                      <span>{c}</span>
                      {currency === c && <span className="text-amber-400 text-xs">&bull;</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Saved Treks wishlist button */}
            <button
              onClick={() => setWishlistModalOpen(true)}
              id="navbar-wishlist-btn"
              className="relative p-2 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-amber-400 transition-colors"
              title="Saved Expeditions"
            >
              <Heart className="w-4 h-4 text-amber-500 fill-amber-500/20" />
              {savedTrekIds.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 text-stone-950 text-[10px] font-black flex items-center justify-center">
                  {savedTrekIds.length}
                </span>
              )}
            </button>

            {/* Book Now Button */}
            <Link
              to="/trips"
              id="navbar-explore-trips-btn"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Treks</span>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setWishlistModalOpen(true)}
              className="relative p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300"
              aria-label="View Saved Treks"
            >
              <Heart className="w-4 h-4 text-amber-500 fill-amber-500/20" />
              {savedTrekIds.length > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-500 text-stone-950 text-[9px] font-black flex items-center justify-center">
                  {savedTrekIds.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-200 hover:text-amber-400"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-5 pt-3 pb-6 animate-in slide-in-from-top-3 duration-200">
            <nav className="flex flex-col gap-1.5 mb-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-amber-400 bg-amber-500/10 font-bold'
                        : 'text-stone-300 hover:text-stone-100 hover:bg-stone-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Controls */}
            <div className="pt-3 border-t border-stone-800/80 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-stone-400 px-1">
                <span>Display Currency:</span>
                <div className="flex gap-1">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        currency === c ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-300'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-400 px-1">
                <span>Elevation Units:</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setAltitudeUnit('m')}
                    className={`px-2.5 py-1 rounded text-xs font-bold ${
                      altitudeUnit === 'm' ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-300'
                    }`}
                  >
                    Meters (m)
                  </button>
                  <button
                    onClick={() => setAltitudeUnit('ft')}
                    className={`px-2.5 py-1 rounded text-xs font-bold ${
                      altitudeUnit === 'ft' ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-300'
                    }`}
                  >
                    Feet (ft)
                  </button>
                </div>
              </div>

              <Link
                to="/trips"
                className="w-full text-center bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 rounded-xl uppercase tracking-wider text-xs shadow-lg shadow-amber-500/20"
              >
                Browse All Expeditions
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Wishlist Modal Drawer */}
      {wishlistModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
            <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-amber-500 fill-amber-500" />
                <h3 className="font-display font-bold text-lg text-stone-100">
                  Your Saved Expeditions ({savedTreks.length})
                </h3>
              </div>
              <button
                onClick={() => setWishlistModalOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5 space-y-3">
              {savedTreks.length === 0 ? (
                <div className="text-center py-8">
                  <Mountain className="w-12 h-12 text-stone-600 mx-auto mb-2 stroke-[1.5]" />
                  <p className="text-stone-400 text-sm">No saved treks yet.</p>
                  <p className="text-stone-500 text-xs mt-1">
                    Click the heart icon on any trek card to save it for quick comparison.
                  </p>
                  <Link
                    to="/trips"
                    onClick={() => setWishlistModalOpen(false)}
                    className="inline-block mt-4 text-xs font-bold text-amber-400 hover:underline uppercase tracking-wider"
                  >
                    Explore Treks &rarr;
                  </Link>
                </div>
              ) : (
                savedTreks.map((trek) => (
                  <div 
                    key={trek.id} 
                    className="flex gap-3 bg-stone-950 p-3 rounded-xl border border-stone-800/80 items-center justify-between group"
                  >
                    <SafeImage 
                      src={trek.heroImage} 
                      alt={trek.name} 
                      className="w-16 h-16 object-cover rounded-lg border border-stone-800 shrink-0" 
                    />
                    <div className="flex-1 min-w-0 pr-2">
                      <Link 
                        to={`/trips/${trek.id}`}
                        onClick={() => setWishlistModalOpen(false)}
                        className="font-bold text-xs sm:text-sm text-stone-200 hover:text-amber-400 line-clamp-1 block"
                      >
                        {trek.name}
                      </Link>
                      <div className="flex items-center gap-2 text-[11px] text-stone-400 mt-1">
                        <span>{trek.durationDays} Days</span>
                        <span>&middot;</span>
                        <span>{trek.regionName}</span>
                        <span>&middot;</span>
                        <span className="font-bold text-amber-400">{formatPrice(trek.priceUSD)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <Link
                        to={`/booking/${trek.id}`}
                        onClick={() => setWishlistModalOpen(false)}
                        className="p-2 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg text-xs font-bold"
                        title="Book Now"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => toggleSaveTrek(trek.id)}
                        className="p-2 bg-stone-900 hover:bg-red-950/40 text-stone-400 hover:text-red-400 rounded-lg text-xs"
                        title="Remove"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {savedTreks.length > 0 && (
              <div className="p-4 border-t border-stone-800 bg-stone-950/50 flex items-center justify-between">
                <span className="text-xs text-stone-400">Ready to book an adventure?</span>
                <Link
                  to="/trips"
                  onClick={() => setWishlistModalOpen(false)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  View All &rarr;
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
