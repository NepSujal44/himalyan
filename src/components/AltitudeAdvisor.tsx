import React, { useState } from 'react';
import { Activity, AlertTriangle, ShieldCheck, HeartPulse, Droplets, ThermometerSnowflake, Info } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AltitudeAdvisor: React.FC = () => {
  const { formatAltitude } = useApp();
  const [targetAltMeters, setTargetAltMeters] = useState<number>(5545);

  const calculateDaysNeeded = (alt: number) => {
    if (alt <= 3000) return 3;
    if (alt <= 4000) return 6;
    if (alt <= 5000) return 9;
    return Math.ceil(9 + (alt - 5000) / 250);
  };

  const daysNeeded = calculateDaysNeeded(targetAltMeters);
  const minHydrationLiters = targetAltMeters > 4000 ? 4.5 : targetAltMeters > 3000 ? 3.5 : 2.5;

  const amsSymptoms = [
    { title: 'Mild Headache', action: 'Rest, hydrate with 1L electrolyte water, take paracetamol. Do not ascend.' },
    { title: 'Nausea / Loss of Appetite', action: 'Take an acclimatization rest day; check SpO2 oxygen level with guide.' },
    { title: 'Persistent Dizziness / Fatigue', action: 'Halt ascent immediately. Re-evaluate after 12 hours.' },
    { title: 'Loss of Coordination (Ataxia) / Cough', action: 'CRITICAL (HAPE/HACE warning): Immediate emergency descent by at least 1,000m with oxygen & Gamow bag.' }
  ];

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 sm:p-7 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-stone-800">
        <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
          <Activity className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-stone-100">
            Himalayan Altitude & Acclimatization Advisor
          </h3>
          <p className="text-stone-400 text-xs mt-0.5">
            Medical guidelines & interactive elevation safety calculator developed with high-altitude doctors.
          </p>
        </div>
      </div>

      {/* Interactive Elevation Safety Calculator */}
      <div className="bg-stone-950 p-5 rounded-xl border border-stone-800/80 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <label className="text-xs font-semibold text-stone-200">
            Select Your Target Summit / Pass Altitude:
          </label>
          <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
            {formatAltitude(targetAltMeters)}
          </span>
        </div>

        <input
          type="range"
          min={2500}
          max={6200}
          step={50}
          value={targetAltMeters}
          onChange={(e) => setTargetAltMeters(Number(e.target.value))}
          className="w-full accent-amber-500 bg-stone-800 h-2 rounded-lg cursor-pointer"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 bg-stone-900 rounded-lg border border-stone-800 text-center">
            <span className="text-[10px] text-stone-500 uppercase block mb-1">Recommended Duration</span>
            <span className="text-base font-bold text-amber-400">{daysNeeded} Days Min</span>
          </div>
          <div className="p-3 bg-stone-900 rounded-lg border border-stone-800 text-center">
            <span className="text-[10px] text-stone-500 uppercase block mb-1">Daily Water Intake</span>
            <span className="text-base font-bold text-sky-400">{minHydrationLiters} Liters / Day</span>
          </div>
          <div className="p-3 bg-stone-900 rounded-lg border border-stone-800 text-center">
            <span className="text-[10px] text-stone-500 uppercase block mb-1">Max Daily Sleep Gain</span>
            <span className="text-base font-bold text-emerald-400">300 – 500m / Day</span>
          </div>
        </div>
      </div>

      {/* The 4 Golden Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-stone-950 rounded-xl border border-stone-800/80 space-y-1.5">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>1. Climb High, Sleep Low</span>
          </div>
          <p className="text-stone-400 text-xs leading-relaxed">
            During afternoon acclimatization hikes, hike 300-400m higher than your teahouse before returning down to sleep. This stimulates natural red blood cell production.
          </p>
        </div>

        <div className="p-4 bg-stone-950 rounded-xl border border-stone-800/80 space-y-1.5">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
            <Droplets className="w-4 h-4 text-sky-400" />
            <span>2. Strict Hydration & Pacing</span>
          </div>
          <p className="text-stone-400 text-xs leading-relaxed">
            Drink at least 4 liters of clean purified water daily. Walk at a gentle, rhythmic conversation pace (Bistari Bistari in Nepali) to avoid taxing your cardiovascular system.
          </p>
        </div>

        <div className="p-4 bg-stone-950 rounded-xl border border-stone-800/80 space-y-1.5">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
            <HeartPulse className="w-4 h-4 text-rose-400" />
            <span>3. Never Ascend with Symptoms</span>
          </div>
          <p className="text-stone-400 text-xs leading-relaxed">
            If you develop symptoms of Acute Mountain Sickness (AMS), the absolute rule is: do not ascend until fully recovered. If symptoms worsen, descend immediately.
          </p>
        </div>

        <div className="p-4 bg-stone-950 rounded-xl border border-stone-800/80 space-y-1.5">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
            <ThermometerSnowflake className="w-4 h-4 text-emerald-400" />
            <span>4. Daily Oximeter Pulse Checks</span>
          </div>
          <p className="text-stone-400 text-xs leading-relaxed">
            Our UIAGM Sherpa guides conduct twice-daily blood oxygen saturation (SpO2) and heart rate monitoring with clinical medical oximeters after breakfast and dinner.
          </p>
        </div>
      </div>

      {/* AMS Lake Louise Triage Quick Reference */}
      <div className="space-y-3 pt-2">
        <h4 className="font-bold text-xs text-stone-200 uppercase tracking-wider flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          AMS Triage Protocol
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {amsSymptoms.map((s, idx) => (
            <div key={idx} className="p-3 bg-stone-950 rounded-xl border border-stone-800/60 text-xs space-y-1">
              <span className="font-bold text-stone-200 block">{s.title}</span>
              <p className="text-stone-400 text-[11px] leading-snug">{s.action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
