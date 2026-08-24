import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, ArrowRight, RotateCcw, Check, Mountain } from 'lucide-react';
import { TREKS } from '../data/treks';
import { Trek } from '../types';
import { useApp } from '../context/AppContext';

export const TrekFinderQuiz: React.FC = () => {
  const { formatPrice } = useApp();
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    fitness: string;
    duration: string;
    vibe: string;
  }>({
    fitness: '',
    duration: '',
    vibe: ''
  });

  const [matchedTrek, setMatchedTrek] = useState<Trek | null>(null);

  const handleSelectAnswer = (field: 'fitness' | 'duration' | 'vibe', value: string) => {
    const updated = { ...answers, [field]: value };
    setAnswers(updated);

    if (step < 3) {
      setStep(step + 1);
    } else {
      // Calculate match
      calculateRecommendation(updated);
      setStep(4);
    }
  };

  const calculateRecommendation = (finalAnswers: typeof answers) => {
    let match = TREKS[0]; // Default EBC

    if (finalAnswers.duration === 'short' || finalAnswers.fitness === 'beginner') {
      match = TREKS.find((t) => t.id === 'mardi-himal-ridge') || TREKS[3];
    } else if (finalAnswers.vibe === 'remote') {
      match = TREKS.find((t) => t.id === 'manaslu-tsum-circuit') || TREKS[2];
    } else if (finalAnswers.vibe === 'desert') {
      match = TREKS.find((t) => t.id === 'upper-mustang-kingdom') || TREKS[4];
    } else if (finalAnswers.vibe === 'lakes') {
      match = TREKS.find((t) => t.id === 'ebc-gokyo-chola') || TREKS[0];
    } else if (finalAnswers.vibe === 'epic-pass') {
      match = TREKS.find((t) => t.id === 'annapurna-circuit-tilicho') || TREKS[1];
    }

    setMatchedTrek(match);
  };

  const resetQuiz = () => {
    setAnswers({ fitness: '', duration: '', vibe: '' });
    setStep(1);
    setMatchedTrek(null);
  };

  return (
    <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-stone-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-widest text-amber-500 uppercase">
              Expedition Matchmaker
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-stone-100">
              Find Your Ideal Himalayan Trek
            </h3>
          </div>
        </div>

        {step <= 3 && (
          <div className="flex items-center gap-1.5 text-xs text-stone-400 font-semibold">
            <span>Step {step} of 3</span>
          </div>
        )}
      </div>

      {/* Quiz Steps */}
      <div className="pt-6">
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h4 className="text-stone-200 font-semibold text-sm sm:text-base">
              1. What is your hiking experience & fitness level?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { key: 'beginner', title: 'Moderate Walker', desc: 'Comfortable hiking 4-5 hours on rolling trails; active lifestyle.' },
                { key: 'intermediate', title: 'Experienced Trekker', desc: 'Regular gym/hiking, confident with 6-7 hr days & steep ascents.' },
                { key: 'advanced', title: 'Alpine Adventurer', desc: 'High stamina, comfortable with sub-zero passes & rugged terrain.' }
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => handleSelectAnswer('fitness', opt.key)}
                  className="text-left p-4 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-500 hover:bg-stone-900 transition-all group"
                >
                  <span className="font-bold text-sm text-stone-100 group-hover:text-amber-400 block mb-1">
                    {opt.title}
                  </span>
                  <p className="text-xs text-stone-400 leading-relaxed">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h4 className="text-stone-200 font-semibold text-sm sm:text-base">
              2. How much time do you have in the Himalayas?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { key: 'short', title: '7 – 10 Days', desc: 'Fast, high-impact trek with jaw-dropping vistas right away.' },
                { key: 'classic', title: '12 – 16 Days', desc: 'The classic expedition timeframe for complete acclimatization.' },
                { key: 'extended', title: '17+ Days', desc: 'Full grand circuits, remote pass traverses, and deep wilderness.' }
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => handleSelectAnswer('duration', opt.key)}
                  className="text-left p-4 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-500 hover:bg-stone-900 transition-all group"
                >
                  <span className="font-bold text-sm text-stone-100 group-hover:text-amber-400 block mb-1">
                    {opt.title}
                  </span>
                  <p className="text-xs text-stone-400 leading-relaxed">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h4 className="text-stone-200 font-semibold text-sm sm:text-base">
              3. What kind of scenery stirs your soul most?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { key: 'lakes', title: 'Turquoise Glacial Lakes', desc: 'Sapphire alpine lakes & Everest panoramas.' },
                { key: 'epic-pass', title: 'Grand Pass Crossing', desc: 'Climbing over high mountain cols like Thorong La.' },
                { key: 'remote', title: 'Hidden Valley Wilderness', desc: 'Off-beat trails, ancient gompas, zero crowds.' },
                { key: 'desert', title: 'Ancient Walled Kingdoms', desc: 'Desert canyon cliffs and Tibetan sky caves.' }
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => handleSelectAnswer('vibe', opt.key)}
                  className="text-left p-4 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-500 hover:bg-stone-900 transition-all group"
                >
                  <span className="font-bold text-sm text-stone-100 group-hover:text-amber-400 block mb-1">
                    {opt.title}
                  </span>
                  <p className="text-xs text-stone-400 leading-relaxed">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Result */}
        {step === 4 && matchedTrek && (
          <div className="space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Your Personalized Match</span>
              </div>
              <button
                onClick={resetQuiz}
                className="flex items-center gap-1 text-xs text-stone-400 hover:text-stone-200"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>

            <div className="bg-stone-950 border border-amber-500/40 rounded-2xl p-5 flex flex-col md:flex-row gap-5 items-center">
              <img
                src={matchedTrek.heroImage}
                alt={matchedTrek.name}
                className="w-full md:w-56 h-40 object-cover rounded-xl border border-stone-800 shrink-0"
              />
              <div className="flex-1 space-y-2 text-left w-full">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold">
                    {matchedTrek.durationDays} Days
                  </span>
                  <span className="text-stone-400">{matchedTrek.regionName}</span>
                  <span className="text-stone-500">&middot;</span>
                  <span className="text-stone-300 font-semibold">{matchedTrek.difficulty}</span>
                </div>

                <h4 className="font-display font-bold text-lg sm:text-xl text-stone-100">
                  {matchedTrek.name}
                </h4>

                <p className="text-stone-400 text-xs line-clamp-2 leading-relaxed">
                  {matchedTrek.overview}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-stone-800">
                  <div>
                    <span className="text-[10px] uppercase text-stone-500 block">From</span>
                    <span className="font-display font-bold text-xl text-amber-400">
                      {formatPrice(matchedTrek.priceUSD)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/trips/${matchedTrek.id}`}
                      className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold"
                    >
                      View Itinerary
                    </Link>
                    <Link
                      to={`/booking/${matchedTrek.id}`}
                      className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
                    >
                      <span>Book Expedition</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
