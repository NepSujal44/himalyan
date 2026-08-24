import React, { useState } from 'react';
import { Mountain, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { ItineraryDay } from '../types';
import { useApp } from '../context/AppContext';

interface ElevationProfileChartProps {
  itinerary: ItineraryDay[];
  maxAltitudeMeters: number;
}

export const ElevationProfileChart: React.FC<ElevationProfileChartProps> = ({
  itinerary,
  maxAltitudeMeters
}) => {
  const { formatAltitude } = useApp();
  const [activeDay, setActiveDay] = useState<ItineraryDay | null>(null);

  if (!itinerary || itinerary.length === 0) return null;

  const width = 800;
  const height = 240;
  const padding = { top: 30, right: 40, bottom: 40, left: 50 };

  const minAlt = Math.min(...itinerary.map((d) => d.sleepAltitudeMeters), 1000);
  const maxAlt = Math.max(...itinerary.map((d) => d.sleepAltitudeMeters), maxAltitudeMeters);

  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;

  const points = itinerary.map((item, index) => {
    const x = padding.left + (index / (itinerary.length - 1 || 1)) * plotWidth;
    const normalizedY = (item.sleepAltitudeMeters - minAlt) / (maxAlt - minAlt || 1);
    const y = height - padding.bottom - normalizedY * plotHeight;
    return { x, y, day: item };
  });

  const pathD = points.reduce((acc, curr, index) => {
    return index === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding.bottom} L ${points[0].x} ${height - padding.bottom} Z`;

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 sm:p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-800">
        <div>
          <h3 className="font-display font-bold text-lg text-stone-100 flex items-center gap-2">
            <Mountain className="w-5 h-5 text-amber-500" />
            Elevation Profile & Acclimatization Curve
          </h3>
          <p className="text-stone-400 text-xs mt-0.5">
            Hover over points to inspect overnight sleeping altitudes and acclimatization rest stages.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-stone-300">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            Max Altitude: <strong className="text-amber-400">{formatAltitude(maxAltitudeMeters)}</strong>
          </span>
        </div>
      </div>

      {/* SVG Chart */}
      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto min-w-[600px] select-none"
        >
          <defs>
            <linearGradient id="elevationGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="80%" stopColor="#f59e0b" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[minAlt, Math.round((minAlt + maxAlt) / 2), maxAlt].map((alt, i) => {
            const y = height - padding.bottom - ((alt - minAlt) / (maxAlt - minAlt || 1)) * plotHeight;
            return (
              <g key={i}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#332e2a"
                  strokeDasharray="4 4"
                />
                <text
                  x={padding.left - 8}
                  y={y + 4}
                  fill="#78716c"
                  fontSize="10"
                  textAnchor="end"
                  fontFamily="sans-serif"
                >
                  {formatAltitude(alt)}
                </text>
              </g>
            );
          })}

          {/* Area Fill */}
          <path d={areaD} fill="url(#elevationGrad)" />

          {/* Stroke Line */}
          <path
            d={pathD}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Nodes */}
          {points.map((pt, i) => {
            const isAcclimatization = pt.day.title.toLowerCase().includes('acclimatization');
            const isHighest = pt.day.sleepAltitudeMeters >= maxAlt * 0.95;
            const isSelected = activeDay?.day === pt.day.day;

            return (
              <g
                key={i}
                className="cursor-pointer group"
                onMouseEnter={() => setActiveDay(pt.day)}
                onClick={() => setActiveDay(pt.day)}
              >
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isSelected ? 7 : isAcclimatization ? 5.5 : 4}
                  fill={isSelected ? '#fbbf24' : isAcclimatization ? '#38bdf8' : '#1c1917'}
                  stroke={isAcclimatization ? '#38bdf8' : isHighest ? '#ef4444' : '#f59e0b'}
                  strokeWidth="2.5"
                  className="transition-all duration-200"
                />
                <text
                  x={pt.x}
                  y={height - padding.bottom + 18}
                  fill={isSelected ? '#fbbf24' : '#78716c'}
                  fontSize="10"
                  textAnchor="middle"
                  fontWeight={isSelected ? 'bold' : 'normal'}
                >
                  D{pt.day.day}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Active Day Detail Card */}
      {activeDay ? (
        <div className="mt-4 p-3.5 bg-stone-950 rounded-xl border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs animate-in fade-in duration-150">
          <div className="flex items-start gap-3">
            <span className="w-7 h-7 rounded-lg bg-amber-500 text-stone-950 font-black flex items-center justify-center text-xs shrink-0">
              {activeDay.day}
            </span>
            <div>
              <h4 className="font-bold text-stone-100">{activeDay.title}</h4>
              <p className="text-stone-400 mt-0.5">{activeDay.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0 border-t sm:border-t-0 sm:border-l border-stone-800 pt-2 sm:pt-0 sm:pl-4">
            <div>
              <span className="text-[10px] text-stone-500 uppercase block">Sleeping Elev</span>
              <span className="font-bold text-amber-400">
                {formatAltitude(activeDay.sleepAltitudeMeters)}
              </span>
            </div>
            {activeDay.walkingHours && (
              <div>
                <span className="text-[10px] text-stone-500 uppercase block">Walking Time</span>
                <span className="text-stone-300 font-medium">{activeDay.walkingHours}</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-2 text-center text-stone-500 text-xs">
          Click any day node on the chart to see segment highlights & altitude metrics.
        </div>
      )}
    </div>
  );
};
