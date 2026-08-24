import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Mountain, Lock, ArrowLeft } from 'lucide-react';
import { BookingWizard } from '../components/BookingWizard';
import { HeroBanner } from '../components/HeroBanner';
import { TREKS } from '../data/treks';

export const Booking: React.FC = () => {
  const { trekId } = useParams<{ trekId?: string }>();
  const trek = trekId ? TREKS.find((t) => t.id === trekId) : undefined;

  return (
    <div className="space-y-10 pb-24">
      <HeroBanner
        title="Expedition Reservation & Booking"
        subtitle="Lock in your guaranteed departure with native UIAGM Sherpa leadership, permit processing, and 24/7 medical support."
        badge="Secure Checkout"
        breadcrumbs={[
          { label: 'Trips', href: '/trips' },
          ...(trek ? [{ label: trek.name, href: `/trips/${trek.id}` }] : []),
          { label: 'Booking' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingWizard initialTrekId={trekId} />
      </div>
    </div>
  );
};
