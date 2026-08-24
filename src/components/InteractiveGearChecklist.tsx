import React, { useState } from 'react';
import { CheckCircle2, Circle, Sparkles, Printer, RotateCcw, ShieldCheck, Check } from 'lucide-react';
import { PACKING_CHECKLIST } from '../data/treks';
import { useApp } from '../context/AppContext';

export const InteractiveGearChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('htc_gear_checked');
      return stored ? JSON.parse(stored) : ['p1', 'p6', 'p19'];
    } catch {
      return ['p1', 'p6', 'p19'];
    }
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { showToast } = useApp();

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id];
      localStorage.setItem('htc_gear_checked', JSON.stringify(updated));
      return updated;
    });
  };

  const resetChecklist = () => {
    setCheckedIds([]);
    localStorage.removeItem('htc_gear_checked');
    showToast('Checklist reset successfully');
  };

  const categories = ['All', 'Clothing', 'Footwear', 'Alpine Gear', 'Health & Med', 'Tech & Docs'];

  const filteredItems = activeCategory === 'All'
    ? PACKING_CHECKLIST
    : PACKING_CHECKLIST.filter((item) => item.category === activeCategory);

  const totalCount = PACKING_CHECKLIST.length;
  const packedCount = checkedIds.length;
  const progressPercent = Math.round((packedCount / totalCount) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 sm:p-7 shadow-xl space-y-6">
      {/* Header & Progress */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-stone-800">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="font-display font-bold text-xl text-stone-100">
              Interactive Expedition Gear Checklist
            </h3>
          </div>
          <p className="text-stone-400 text-xs mt-1">
            Check off essentials as you pack. Your progress is saved automatically.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={resetChecklist}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 hover:border-stone-700 text-stone-400 hover:text-stone-200 text-xs font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 hover:border-stone-700 text-stone-400 hover:text-stone-200 text-xs font-semibold transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print List</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-stone-950 p-4 rounded-xl border border-stone-800/80 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-stone-300 font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            Packing Preparedness
          </span>
          <span className="font-bold text-amber-400">
            {packedCount} of {totalCount} Packed ({progressPercent}%)
          </span>
        </div>
        <div className="w-full h-2.5 bg-stone-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {progressPercent === 100 && (
          <p className="text-emerald-400 text-xs font-semibold pt-1 flex items-center gap-1.5">
            <Check className="w-4 h-4" />
            Ready for takeoff! Your expedition pack is 100% complete.
          </p>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-stone-950 border border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Item List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filteredItems.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                isChecked
                  ? 'bg-amber-500/10 border-amber-500/30 text-stone-300'
                  : 'bg-stone-950 border-stone-800/80 hover:border-stone-700 text-stone-200'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isChecked ? (
                  <CheckCircle2 className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                ) : (
                  <Circle className="w-5 h-5 text-stone-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs font-semibold ${isChecked ? 'line-through text-stone-400' : 'text-stone-100'}`}>
                    {item.name}
                  </span>
                  {item.essential && (
                    <span className="px-1.5 py-0.2 rounded text-[10px] uppercase font-bold bg-rose-500/15 text-rose-400 border border-rose-500/20">
                      Essential
                    </span>
                  )}
                </div>
                {item.notes && (
                  <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">
                    {item.notes}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
