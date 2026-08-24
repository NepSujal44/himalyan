import React, { createContext, useContext, useState, useEffect } from 'react';
import { CurrencyCode, AltitudeUnit, BookingRecord } from '../types';

interface AppContextType {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  formatPrice: (priceUSD: number) => string;
  altitudeUnit: AltitudeUnit;
  setAltitudeUnit: (unit: AltitudeUnit) => void;
  formatAltitude: (altitudeMeters: number) => string;
  savedTrekIds: string[];
  toggleSaveTrek: (trekId: string) => void;
  isTrekSaved: (trekId: string) => boolean;
  bookings: BookingRecord[];
  addBooking: (booking: BookingRecord) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CURRENCY_RATES: Record<CurrencyCode, { symbol: string; rate: number; prefix: boolean }> = {
  USD: { symbol: '$', rate: 1.0, prefix: true },
  EUR: { symbol: '€', rate: 0.92, prefix: true },
  GBP: { symbol: '£', rate: 0.79, prefix: true },
  AUD: { symbol: 'A$', rate: 1.52, prefix: true },
  NPR: { symbol: 'रु ', rate: 134.5, prefix: true }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    return (localStorage.getItem('htc_currency') as CurrencyCode) || 'USD';
  });

  const [altitudeUnit, setAltitudeUnitState] = useState<AltitudeUnit>(() => {
    return (localStorage.getItem('htc_altitude_unit') as AltitudeUnit) || 'm';
  });

  const [savedTrekIds, setSavedTrekIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('htc_saved_treks');
      return stored ? JSON.parse(stored) : ['ebc-gokyo-chola'];
    } catch {
      return ['ebc-gokyo-chola'];
    }
  });

  const [bookings, setBookings] = useState<BookingRecord[]>(() => {
    try {
      const stored = localStorage.getItem('htc_bookings');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    localStorage.setItem('htc_currency', c);
  };

  const setAltitudeUnit = (unit: AltitudeUnit) => {
    setAltitudeUnitState(unit);
    localStorage.setItem('htc_altitude_unit', unit);
  };

  const toggleSaveTrek = (trekId: string) => {
    setSavedTrekIds((prev) => {
      const exists = prev.includes(trekId);
      const updated = exists ? prev.filter((id) => id !== trekId) : [...prev, trekId];
      localStorage.setItem('htc_saved_treks', JSON.stringify(updated));
      showToast(exists ? 'Removed trek from your wishlist' : 'Saved trek to your wishlist');
      return updated;
    });
  };

  const isTrekSaved = (trekId: string) => savedTrekIds.includes(trekId);

  const addBooking = (booking: BookingRecord) => {
    setBookings((prev) => {
      const updated = [booking, ...prev];
      localStorage.setItem('htc_bookings', JSON.stringify(updated));
      return updated;
    });
  };

  const formatPrice = (priceUSD: number): string => {
    const config = CURRENCY_RATES[currency];
    const converted = Math.round(priceUSD * config.rate);
    return `${config.symbol}${converted.toLocaleString()}`;
  };

  const formatAltitude = (altitudeMeters: number): string => {
    if (altitudeUnit === 'ft') {
      const feet = Math.round(altitudeMeters * 3.28084);
      return `${feet.toLocaleString()} ft`;
    }
    return `${altitudeMeters.toLocaleString()} m`;
  };

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        altitudeUnit,
        setAltitudeUnit,
        formatAltitude,
        savedTrekIds,
        toggleSaveTrek,
        isTrekSaved,
        bookings,
        addBooking,
        toastMessage,
        showToast
      }}
    >
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-stone-900/95 text-stone-100 px-5 py-3.5 rounded-xl border border-amber-500/40 shadow-2xl shadow-black/80 text-sm font-medium backdrop-blur-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
