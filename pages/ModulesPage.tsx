
import React from 'react';
import { modules } from '../data/modules';
import { Module } from '../types';

interface ModulesPageProps {
  onSelectModule: (module: Module) => void;
}

export const ModulesPage: React.FC<ModulesPageProps> = ({ onSelectModule }) => {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <span className="text-[10px] font-black text-[#FF1493] uppercase tracking-[0.5em] mb-3 block">Pick Your Flavor</span>
        <h2 className="text-4xl md:text-5xl font-black text-[#2D1B0E] mb-2">
          Learning <span className="text-[#FF1493] italic">Modules</span>
        </h2>
        <div className="w-16 h-1.5 bg-[#FF1493] mx-auto rounded-full mt-3 opacity-80"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <div 
            key={mod.id}
            onClick={() => onSelectModule(mod)}
            className="group cursor-pointer bg-white rounded-[2rem] p-6 md:p-8 shadow-creamy border-b-4 border-pink-50 hover:border-[#FF1493] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative flex flex-col items-center text-center justify-center min-h-[240px] overflow-hidden"
          >
            {/* Subtle background decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFFAF3] rounded-full -mr-16 -mt-16 group-hover:bg-[#FFB6C1]/10 transition-colors duration-500 -z-10"></div>
            
            {/* Icon Container - Scaled down */}
            <div className="w-16 h-16 bg-[#FFFAF3] rounded-[1.2rem] flex items-center justify-center text-3xl mb-5 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-pink-50/50">
              {mod.id === 1 ? '🎓' : mod.id === 2 ? '🧱' : mod.id <= 5 ? '⏰' : '💡'}
            </div>
            
            {/* Header info - More compact typography */}
            <div className="flex flex-col items-center max-w-full px-2">
              <p className="text-[9px] font-black text-[#FF1493] uppercase tracking-[0.3em] mb-2 opacity-80">Epoch {mod.id}</p>
              <h3 className="text-lg md:text-xl font-black text-[#2D1B0E] leading-tight group-hover:text-[#FF1493] transition-colors font-title uppercase tracking-tight">
                {mod.title}
              </h3>
            </div>
            
            {/* Footer action - Refined arrow */}
            <div className="mt-6 flex items-center gap-1.5 text-[#FF1493] font-black text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0">
              Start <span className="text-sm">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
