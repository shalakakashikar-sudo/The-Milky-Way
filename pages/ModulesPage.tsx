
import React from 'react';
import { modules } from '../data/modules';
import { Module } from '../types';

interface ModulesPageProps {
  onSelectModule: (module: Module) => void;
}

export const ModulesPage: React.FC<ModulesPageProps> = ({ onSelectModule }) => {
  return (
    <div className="p-8 md:p-12 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <span className="text-xs font-black text-[#FF1493] uppercase tracking-[0.5em] mb-4 block">Pick Your Flavor</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2D1B0E] mb-4">
          Learning <span className="text-[#FF1493] italic">Modules</span>
        </h2>
        <div className="w-24 h-2 bg-[#FF1493] mx-auto rounded-full mt-4"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((mod) => (
          <div 
            key={mod.id}
            onClick={() => onSelectModule(mod)}
            className="group cursor-pointer bg-white rounded-[3rem] p-10 shadow-creamy border-b-8 border-pink-100 hover:border-[#FF1493] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative flex flex-col items-center text-center justify-center min-h-[320px] overflow-hidden"
          >
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFFAF3] rounded-full -mr-20 -mt-20 group-hover:bg-[#FFB6C1]/20 transition-colors duration-500 -z-10"></div>
            
            {/* Icon Container */}
            <div className="w-24 h-24 bg-[#FFFAF3] rounded-[2rem] flex items-center justify-center text-5xl mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-pink-50">
              {mod.id === 1 ? '🎓' : mod.id === 2 ? '🧱' : mod.id <= 5 ? '⏰' : '💡'}
            </div>
            
            {/* Header info */}
            <div className="flex flex-col items-center max-w-full">
              <p className="text-[10px] md:text-xs font-black text-[#FF1493] uppercase tracking-[0.4em] mb-3">Epoch {mod.id}</p>
              <h3 className="text-2xl md:text-3xl font-black text-[#2D1B0E] leading-tight group-hover:text-[#FF1493] transition-colors font-title uppercase tracking-tight">
                {mod.title}
              </h3>
            </div>
            
            {/* Footer action - Sleek arrow indicator */}
            <div className="mt-8 flex items-center gap-2 text-[#FF1493] font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
              Start Learning <span className="text-xl">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
