import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Calendar, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles,
  Mountain, 
  Tag, 
  FileCheck, 
  Download,
  AlertCircle,
  Plus,
  Minus
} from 'lucide-react';
import { Trek, BookingRecord, BookingLeadContact, BookingAddOns } from '../types';
import { TREKS } from '../data/treks';
import { useApp } from '../context/AppContext';

interface BookingWizardProps {
  initialTrekId?: string;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({ initialTrekId }) => {
  const navigate = useNavigate();
  const { formatPrice, currency, addBooking, showToast } = useApp();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedTrekId, setSelectedTrekId] = useState<string>(initialTrekId || TREKS[0].id);

  const selectedTrek = TREKS.find((t) => t.id === selectedTrekId) || TREKS[0];

  // Step 1: Date & Addons
  const [departureDate, setDepartureDate] = useState<string>(
    selectedTrek.departures[0]?.startDate || '2026-09-12'
  );
  const [paxCount, setPaxCount] = useState<number>(1);
  const [addOns, setAddOns] = useState<BookingAddOns>({
    privatePorter: false,
    downJacketRental: false,
    sleepingBagRental: false,
    singleRoomSupplement: false,
    airportPickup: true,
    helicopterReturn: false
  });

  // Step 2: Lead contact
  const [leadContact, setLeadContact] = useState<BookingLeadContact>({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    passportNumber: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
    dietaryRequirements: 'None (Regular Dhal Bhat & Western menu)',
    medicalConditions: '',
    trekkingExperience: 'Intermediate'
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Step 3: Promo & Payment
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'bank_wire' | 'crypto' | 'paypal'>('credit_card');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [completedBooking, setCompletedBooking] = useState<BookingRecord | null>(null);

  useEffect(() => {
    if (initialTrekId && TREKS.some((t) => t.id === initialTrekId)) {
      setSelectedTrekId(initialTrekId);
      const trek = TREKS.find((t) => t.id === initialTrekId);
      if (trek && trek.departures.length > 0) {
        setDepartureDate(trek.departures[0].startDate);
      }
    }
  }, [initialTrekId]);

  // Pricing calculations
  const baseTrekPrice = selectedTrek.priceUSD * paxCount;
  
  // Group discount: 5% for 3-5 pax, 10% for 6+ pax
  const groupDiscountPercent = paxCount >= 6 ? 10 : paxCount >= 3 ? 5 : 0;
  const groupDiscountUSD = Math.round((baseTrekPrice * groupDiscountPercent) / 100);

  const addOnsTotalUSD = 
    (addOns.privatePorter ? 240 * Math.ceil(paxCount / 2) : 0) +
    (addOns.downJacketRental ? 45 * paxCount : 0) +
    (addOns.sleepingBagRental ? 45 * paxCount : 0) +
    (addOns.singleRoomSupplement ? 190 * paxCount : 0) +
    (addOns.helicopterReturn ? 650 * paxCount : 0);

  const subtotalBeforeCoupon = baseTrekPrice - groupDiscountUSD + addOnsTotalUSD;
  const couponDiscountUSD = promoApplied ? Math.round((subtotalBeforeCoupon * discountPercent) / 100) : 0;
  const grandTotalUSD = Math.max(0, subtotalBeforeCoupon - couponDiscountUSD);

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'HIMALAYA10' || code === 'SHERPA2026') {
      setDiscountPercent(10);
      setPromoApplied(true);
      showToast('10% Early Bird Expedition Discount Applied!');
    } else if (code === 'SUMMIT15') {
      setDiscountPercent(15);
      setPromoApplied(true);
      showToast('15% VIP Expedition Discount Applied!');
    } else {
      showToast('Invalid promo code. Try "HIMALAYA10"');
    }
  };

  const validateStep2 = () => {
    const errors: Record<string, string> = {};
    if (!leadContact.fullName.trim()) errors.fullName = 'Full name is required';
    if (!leadContact.email.trim() || !leadContact.email.includes('@')) errors.email = 'Valid email is required';
    if (!leadContact.phone.trim()) errors.phone = 'Phone number is required';
    if (!leadContact.passportNumber.trim()) errors.passportNumber = 'Passport number is required for permit issuance';
    if (!leadContact.emergencyName.trim()) errors.emergencyName = 'Emergency contact name is required';
    if (!leadContact.emergencyPhone.trim()) errors.emergencyPhone = 'Emergency phone is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === 2) {
      if (validateStep2()) {
        setCurrentStep(3);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleCompleteBooking = () => {
    setIsProcessing(true);

    setTimeout(() => {
      const newBookingRef = `HTC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const record: BookingRecord = {
        id: `book_${Date.now()}`,
        bookingRef: newBookingRef,
        trekId: selectedTrek.id,
        trekName: selectedTrek.name,
        departureDate,
        durationDays: selectedTrek.durationDays,
        paxCount,
        leadContact,
        addOns,
        subtotalUSD: baseTrekPrice,
        discountUSD: groupDiscountUSD + couponDiscountUSD,
        addOnsTotalUSD,
        totalUSD: grandTotalUSD,
        currency,
        paymentMethod,
        paymentStatus: 'Paid (Deposit)',
        createdAt: new Date().toISOString()
      };

      addBooking(record);
      setCompletedBooking(record);
      setIsProcessing(false);
      setCurrentStep(4);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
      showToast(`Expedition Booked! Ref: ${newBookingRef}`);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Wizard Steps Header */}
      {currentStep < 4 && (
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-stone-800 -z-0" />
            
            {[
              { num: 1, label: 'Dates & Group' },
              { num: 2, label: 'Trekker Details' },
              { num: 3, label: 'Review & Pay' }
            ].map((step) => {
              const isDone = currentStep > step.num;
              const isCurrent = currentStep === step.num;
              return (
                <div key={step.num} className="relative z-10 flex flex-col items-center bg-stone-900 px-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      isDone
                        ? 'bg-emerald-500 text-stone-950 shadow-md shadow-emerald-500/20'
                        : isCurrent
                        ? 'bg-amber-500 text-stone-950 ring-4 ring-amber-500/20 font-black'
                        : 'bg-stone-800 text-stone-400'
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="w-5 h-5" /> : step.num}
                  </div>
                  <span
                    className={`text-xs mt-1.5 font-medium ${
                      isCurrent ? 'text-amber-400 font-bold' : 'text-stone-400'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 1: Trek, Departure Date, Pax, Add-ons */}
      {currentStep === 1 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Trek Selector Bar */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-3">
            <label className="text-xs font-semibold text-stone-300 block uppercase tracking-wider">
              Selected Himalayan Expedition:
            </label>
            <select
              value={selectedTrekId}
              onChange={(e) => {
                setSelectedTrekId(e.target.value);
                const t = TREKS.find((trek) => trek.id === e.target.value);
                if (t && t.departures.length > 0) {
                  setDepartureDate(t.departures[0].startDate);
                }
              }}
              className="w-full bg-stone-950 border border-stone-800 text-stone-100 text-sm font-semibold rounded-xl px-4 py-3 focus:border-amber-500 focus:outline-none"
            >
              {TREKS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.durationDays} Days &middot; {formatPrice(t.priceUSD)})
                </option>
              ))}
            </select>
          </div>

          {/* Guaranteed Departures Grid */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-base text-stone-100 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-500" />
                Select Guaranteed Departure Date
              </h3>
              <span className="text-xs text-stone-400">All dates include lead UIAGM Sherpa</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedTrek.departures.map((dep) => {
                const isSelected = departureDate === dep.startDate;
                return (
                  <div
                    key={dep.id}
                    onClick={() => setDepartureDate(dep.startDate)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500 text-stone-100 ring-1 ring-amber-500'
                        : 'bg-stone-950 border-stone-800 hover:border-stone-700 text-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-stone-100">{dep.startDate}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        dep.status === 'Guaranteed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {dep.status}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400">{dep.leadGuide}</p>
                    <div className="flex items-center justify-between text-xs text-stone-400 mt-2 pt-2 border-t border-stone-800/80">
                      <span>{dep.availableSlots} spots remaining</span>
                      <span className="font-bold text-amber-400">{formatPrice(dep.priceUSD)} / person</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Group Size & Dynamic Discount */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-base text-stone-100 flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-500" />
                  Number of Trekkers (Group Size)
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  Small intimate teams (max 12). Special 5% off for 3+ pax, 10% off for 6+ pax.
                </p>
              </div>

              {/* Counter Buttons */}
              <div className="flex items-center gap-3 bg-stone-950 border border-stone-800 rounded-xl p-1.5">
                <button
                  type="button"
                  onClick={() => setPaxCount(Math.max(1, paxCount - 1))}
                  className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-200 flex items-center justify-center disabled:opacity-40"
                  disabled={paxCount <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-base text-stone-100 min-w-6 text-center">
                  {paxCount}
                </span>
                <button
                  type="button"
                  onClick={() => setPaxCount(Math.min(10, paxCount + 1))}
                  className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-200 flex items-center justify-center disabled:opacity-40"
                  disabled={paxCount >= 10}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {groupDiscountPercent > 0 && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/80 rounded-xl text-emerald-300 text-xs flex items-center justify-between">
                <span>Group Bonus: {groupDiscountPercent}% Discount Unlocked!</span>
                <span className="font-bold">-{formatPrice(groupDiscountUSD)}</span>
              </div>
            )}
          </div>

          {/* Expedition Add-ons */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-4">
            <h3 className="font-display font-bold text-base text-stone-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Optional Expedition Enhancements
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { key: 'privatePorter', title: 'Dedicated Personal Porter (20kg)', priceUSD: 240, desc: '1 porter solely assigned to your duffle.' },
                { key: 'downJacketRental', title: '800-Fill Down Jacket Rental', priceUSD: 45, desc: 'Sanitized high-altitude down coat.' },
                { key: 'sleepingBagRental', title: '-20°C Alpine Sleeping Bag Rental', priceUSD: 45, desc: 'Heavyweight expedition grade bag.' },
                { key: 'singleRoomSupplement', title: 'Single Room Teahouse Guarantee', priceUSD: 190, desc: 'Private bedroom wherever lodges permit.' },
                { key: 'helicopterReturn', title: 'Private Helicopter Scenic Flight Return', priceUSD: 650, desc: 'Direct scenic chopper return from mountain.' }
              ].map((addon) => {
                const isChecked = (addOns as any)[addon.key];
                return (
                  <div
                    key={addon.key}
                    onClick={() => setAddOns({ ...addOns, [addon.key]: !isChecked })}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-start gap-3 transition-all ${
                      isChecked
                        ? 'bg-amber-500/10 border-amber-500/50 text-stone-200'
                        : 'bg-stone-950 border-stone-800/80 hover:border-stone-700 text-stone-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      readOnly
                      className="mt-1 accent-amber-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-stone-100">{addon.title}</span>
                        <span className="font-bold text-xs text-amber-400">
                          +{formatPrice(addon.priceUSD)}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-400 mt-0.5">{addon.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 1 Footer Action */}
          <div className="flex items-center justify-between p-4 bg-stone-900 border border-stone-800 rounded-2xl">
            <div>
              <span className="text-[10px] text-stone-500 uppercase block">Estimated Subtotal</span>
              <span className="font-display font-bold text-2xl text-amber-400">
                {formatPrice(grandTotalUSD)}
              </span>
            </div>
            <button
              onClick={handleNextStep}
              className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Next: Trekker Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Traveler Details Form */}
      {currentStep === 2 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 sm:p-7 space-y-5">
            <div>
              <h3 className="font-display font-bold text-lg text-stone-100">
                Lead Trekker & Expedition Permit Information
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                Required for Sagarmatha / ACAP National Park government permit registration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-1">
                  Full Name (as in Passport) *
                </label>
                <input
                  type="text"
                  value={leadContact.fullName}
                  onChange={(e) => setLeadContact({ ...leadContact, fullName: e.target.value })}
                  placeholder="e.g. Johnathan Miller"
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                />
                {formErrors.fullName && (
                  <span className="text-[11px] text-rose-400 mt-1 block">{formErrors.fullName}</span>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={leadContact.email}
                  onChange={(e) => setLeadContact({ ...leadContact, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                />
                {formErrors.email && (
                  <span className="text-[11px] text-rose-400 mt-1 block">{formErrors.email}</span>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-1">
                  Phone / WhatsApp (with Country Code) *
                </label>
                <input
                  type="tel"
                  value={leadContact.phone}
                  onChange={(e) => setLeadContact({ ...leadContact, phone: e.target.value })}
                  placeholder="+1 (555) 019-2834"
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                />
                {formErrors.phone && (
                  <span className="text-[11px] text-rose-400 mt-1 block">{formErrors.phone}</span>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-1">
                  Passport Number *
                </label>
                <input
                  type="text"
                  value={leadContact.passportNumber}
                  onChange={(e) => setLeadContact({ ...leadContact, passportNumber: e.target.value })}
                  placeholder="e.g. A92837461"
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                />
                {formErrors.passportNumber && (
                  <span className="text-[11px] text-rose-400 mt-1 block">{formErrors.passportNumber}</span>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-1">
                  Nationality
                </label>
                <input
                  type="text"
                  value={leadContact.nationality}
                  onChange={(e) => setLeadContact({ ...leadContact, nationality: e.target.value })}
                  placeholder="e.g. United States / United Kingdom"
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-1">
                  Trekking Experience
                </label>
                <select
                  value={leadContact.trekkingExperience}
                  onChange={(e) => setLeadContact({ ...leadContact, trekkingExperience: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                >
                  <option value="First-Timer">First-time High Altitude Trekker</option>
                  <option value="Intermediate">Intermediate (Hiked 3,000m+ before)</option>
                  <option value="Advanced">Advanced (Hiked 5,000m+ / alpine experience)</option>
                </select>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="pt-4 border-t border-stone-800 space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-wider text-amber-500">
                24/7 Emergency Contact (Next of Kin)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] text-stone-400 block mb-1">Contact Name *</label>
                  <input
                    type="text"
                    value={leadContact.emergencyName}
                    onChange={(e) => setLeadContact({ ...leadContact, emergencyName: e.target.value })}
                    placeholder="e.g. Sarah Miller"
                    className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2 text-xs text-stone-100 focus:outline-none"
                  />
                  {formErrors.emergencyName && (
                    <span className="text-[10px] text-rose-400 mt-0.5 block">{formErrors.emergencyName}</span>
                  )}
                </div>

                <div>
                  <label className="text-[11px] text-stone-400 block mb-1">Emergency Phone *</label>
                  <input
                    type="tel"
                    value={leadContact.emergencyPhone}
                    onChange={(e) => setLeadContact({ ...leadContact, emergencyPhone: e.target.value })}
                    placeholder="+1 (555) 998-1122"
                    className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2 text-xs text-stone-100 focus:outline-none"
                  />
                  {formErrors.emergencyPhone && (
                    <span className="text-[10px] text-rose-400 mt-0.5 block">{formErrors.emergencyPhone}</span>
                  )}
                </div>

                <div>
                  <label className="text-[11px] text-stone-400 block mb-1">Relationship</label>
                  <input
                    type="text"
                    value={leadContact.emergencyRelation}
                    onChange={(e) => setLeadContact({ ...leadContact, emergencyRelation: e.target.value })}
                    placeholder="e.g. Spouse / Sibling / Parent"
                    className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2 text-xs text-stone-100 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Medical / Dietary */}
            <div className="pt-4 border-t border-stone-800 space-y-3">
              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-1">
                  Dietary Preferences / Food Allergies
                </label>
                <input
                  type="text"
                  value={leadContact.dietaryRequirements}
                  onChange={(e) => setLeadContact({ ...leadContact, dietaryRequirements: e.target.value })}
                  placeholder="e.g. Vegetarian, Gluten-Free, Nut allergy"
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-stone-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-1">
                  Medical Notes (Asthma, Heart conditions, Medications)
                </label>
                <textarea
                  rows={2}
                  value={leadContact.medicalConditions}
                  onChange={(e) => setLeadContact({ ...leadContact, medicalConditions: e.target.value })}
                  placeholder="Any pre-existing conditions our expedition doctor and Sherpa medics should be aware of..."
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2 text-xs text-stone-100 focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(1)}
              className="flex items-center gap-2 px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dates</span>
            </button>

            <button
              onClick={handleNextStep}
              className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Next: Review & Payment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Review & Payment Simulation */}
      {currentStep === 3 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column: Summary Breakdown */}
            <div className="md:col-span-2 space-y-5">
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-4">
                <h3 className="font-display font-bold text-lg text-stone-100 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-amber-500" />
                  Expedition Booking Summary
                </h3>

                <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                    <span className="text-stone-400">Trek:</span>
                    <strong className="text-stone-100">{selectedTrek.name}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Departure Date:</span>
                    <span className="font-semibold text-amber-400">{departureDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Duration:</span>
                    <span className="text-stone-200">{selectedTrek.durationDays} Days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Number of Trekkers:</span>
                    <span className="text-stone-200 font-bold">{paxCount} Person(s)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-400">Lead Contact:</span>
                    <span className="text-stone-200">{leadContact.fullName} ({leadContact.email})</span>
                  </div>
                </div>

                {/* Promo Code Input */}
                <div className="pt-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter Promo Code (e.g. HIMALAYA10)"
                        className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl pl-9 pr-3 py-2.5 text-xs uppercase text-stone-100 placeholder-stone-500 focus:outline-none"
                      />
                    </div>
                    <button
                      onClick={handleApplyPromo}
                      type="button"
                      className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold rounded-xl transition-colors shrink-0"
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && (
                    <span className="text-emerald-400 text-[11px] font-semibold mt-1 block">
                      &check; {discountPercent}% discount active!
                    </span>
                  )}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-stone-200 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-amber-500" />
                  Select Payment Method (20% Deposit to Secure)
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'credit_card', label: 'Credit / Debit Card', icon: '💳' },
                    { id: 'bank_wire', label: 'Direct Bank Wire (SWIFT)', icon: '🏛️' },
                    { id: 'paypal', label: 'PayPal Express', icon: '🅿️' },
                    { id: 'crypto', label: 'Bitcoin / USDT', icon: '🪙' }
                  ].map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id as any)}
                      className={`p-3 rounded-xl border cursor-pointer flex items-center gap-3 transition-all ${
                        paymentMethod === method.id
                          ? 'bg-amber-500/15 border-amber-500 text-stone-100 font-bold'
                          : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      <span className="text-lg">{method.icon}</span>
                      <span className="text-xs">{method.label}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-stone-950 rounded-xl border border-stone-800/80 text-[11px] text-stone-400 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Payments are encrypted via 256-bit TLS. Your booking includes full refund guarantee up to 30 days prior to departure.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Price Breakdown Box */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 h-fit">
              <div>
                <h4 className="font-display font-bold text-base text-stone-100 pb-3 border-b border-stone-800">
                  Payment Summary
                </h4>

                <div className="py-3 space-y-2 text-xs border-b border-stone-800">
                  <div className="flex justify-between text-stone-300">
                    <span>Base Trek ({paxCount} pax):</span>
                    <span>{formatPrice(baseTrekPrice)}</span>
                  </div>
                  {groupDiscountUSD > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Group Discount ({groupDiscountPercent}%):</span>
                      <span>-{formatPrice(groupDiscountUSD)}</span>
                    </div>
                  )}
                  {addOnsTotalUSD > 0 && (
                    <div className="flex justify-between text-stone-300">
                      <span>Add-ons Total:</span>
                      <span>+{formatPrice(addOnsTotalUSD)}</span>
                    </div>
                  )}
                  {couponDiscountUSD > 0 && (
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Promo Coupon:</span>
                      <span>-{formatPrice(couponDiscountUSD)}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs uppercase text-stone-400 font-semibold">Total Price:</span>
                    <span className="font-display font-bold text-2xl text-amber-400">
                      {formatPrice(grandTotalUSD)}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px] text-stone-500 pt-1">
                    <span>Deposit Due Now (20%):</span>
                    <span className="font-bold text-stone-300">
                      {formatPrice(Math.round(grandTotalUSD * 0.2))}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-500 block pt-1">
                    Remaining 80% balance payable upon arrival in Kathmandu.
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <button
                  onClick={handleCompleteBooking}
                  disabled={isProcessing}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Processing Secure Reservation...</span>
                  ) : (
                    <>
                      <span>Confirm & Book Expedition</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <button
                  onClick={() => setCurrentStep(2)}
                  className="w-full py-2 text-stone-400 hover:text-stone-200 text-xs font-semibold"
                >
                  &larr; Modify Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Booking Confirmation Screen */}
      {currentStep === 4 && completedBooking && (
        <div className="bg-stone-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 text-center animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
              Expedition Reservation Confirmed!
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-stone-100">
              Welcome to the Himalayas, {completedBooking.leadContact.fullName}!
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm max-w-md mx-auto">
              Your permit reservation is locked. A complete expedition briefing pack and gear confirmation has been sent to{' '}
              <strong className="text-stone-200">{completedBooking.leadContact.email}</strong>.
            </p>
          </div>

          {/* Reference Card */}
          <div className="max-w-md mx-auto bg-stone-950 p-5 rounded-2xl border border-stone-800 text-left space-y-3 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <span className="text-stone-500 uppercase font-semibold">Booking Reference</span>
              <span className="font-mono font-bold text-base text-amber-400">
                {completedBooking.bookingRef}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Expedition:</span>
              <strong className="text-stone-200 text-right">{completedBooking.trekName}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Departure:</span>
              <span className="text-amber-400 font-semibold">{completedBooking.departureDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">Group Size:</span>
              <span className="text-stone-200 font-medium">{completedBooking.paxCount} Trekker(s)</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-stone-800">
              <span className="text-stone-400">Deposit Status:</span>
              <span className="text-emerald-400 font-bold">{completedBooking.paymentStatus}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-bold transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Print Confirmation Receipt</span>
            </button>
            <button
              onClick={() => navigate('/travel-guide')}
              className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all"
            >
              <span>View Packing Checklist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
