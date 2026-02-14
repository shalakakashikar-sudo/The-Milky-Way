
import React from 'react';
import { modules } from '../data/modules';
import { Module } from '../types';

interface ModulesPageProps {
  onSelectModule: (module: Module) => void;
  onQuickQuiz: (module: Module) => void;
}

export const ModulesPage: React.FC<ModulesPageProps> = ({ onSelectModule, onQuickQuiz }) => {
  return (
    <div className="p-4 md:p-10 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-10 md:mb-16">
        <span className="text-[10px] font-black text-[#FF1493] uppercase tracking-[0.5em] mb-3 block animate-pulse">Pick Your Flavour</span>
        <h2 className="text-4xl md:text-6xl font-black text-[#2D1B0E] mb-2 tracking-tighter">
          Mastery <span className="text-[#FF1493] italic">Path</span>
        </h2>
        <div className="w-20 h-2 bg-[#FF1493] mx-auto rounded-full mt-4 opacity-80 shadow-strawberry"></div>
      </div>
      
      {/* Redesigned grid: 4 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {modules.map((mod) => (
          <div 
            key={mod.id}
            className="group bg-white rounded-[2.5rem] p-8 shadow-creamy border-b-[8px] border-pink-50 hover:border-[#FF1493] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative flex flex-col items-center text-center overflow-hidden h-full min-h-[460px]"
          >
            {/* Decorative background number */}
            <span className="absolute top-4 right-8 text-8xl font-black text-pink-50 opacity-30 group-hover:opacity-100 transition-all pointer-events-none italic">
              {mod.id < 10 ? `0${mod.id}` : mod.id}
            </span>

            {/* Icon Container - Elevated */}
            <div className="w-24 h-24 bg-pink-50 rounded-[2rem] flex items-center justify-center text-5xl mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-pink-100/50 relative z-10">
              {mod.id === 1 ? '🎓' : mod.id === 2 ? '🧱' : mod.id === 3 ? '🌞' : mod.id === 4 ? '🕰️' : mod.id === 5 ? '🚀' : mod.id === 6 ? '🧪' : mod.id === 7 ? '✨' : mod.id === 8 ? '🏆' : '📚'}
            </div>
            
            {/* Header info */}
            <div className="flex flex-col items-center relative z-10 flex-grow">
              <p className="text-[11px] font-black text-[#FF1493] uppercase tracking-[0.4em] mb-3">Epoch {mod.id}</p>
              <h3 className="text-2xl font-black text-[#2D1B0E] leading-tight group-hover:text-[#FF1493] transition-colors font-title uppercase tracking-tighter mb-4 px-2">
                {mod.title}
              </h3>
              <p className="text-sm font-bold text-[#5D4037]/70 leading-relaxed px-4 line-clamp-3">
                {mod.description}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-8 w-full flex flex-col gap-3 relative z-10">
              <button 
                onClick={() => onSelectModule(mod)}
                className="w-full flex items-center justify-center gap-2 bg-[#3D2B1F] text-white font-black text-[11px] uppercase tracking-widest py-4 rounded-2xl transition-all hover:bg-black shadow-lg"
              >
                Study Lesson <span className="text-xl leading-none">→</span>
              </button>
              <button 
                onClick={() => onQuickQuiz(mod)}
                className="w-full flex items-center justify-center gap-2 border-2 border-[#FF1493] text-[#FF1493] font-black text-[11px] uppercase tracking-widest py-3 rounded-2xl transition-all hover:bg-pink-50"
              >
                Fast-Track Quiz ⚡
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
