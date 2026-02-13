
import React from 'react';
import { modules } from '../data/modules';
import { Module } from '../types';

interface ModulesPageProps {
  onSelectModule: (module: Module) => void;
}

export const ModulesPage: React.FC<ModulesPageProps> = ({ onSelectModule }) => {
  return (
    <div className="p-12 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <span className="text-xs font-black text-[#FF1493] uppercase tracking-[0.5em] mb-4 block">Pick Your Flavor</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2D1B0E] mb-4">
          Learning <span className="text-[#FF1493] italic">Modules</span>
        </h2>
        <div className="w-24 h-2 bg-[#FF1493] mx-auto rounded-full mt-4"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {modules.map((mod) => (
          <div 
            key={mod.id}
            onClick={() => onSelectModule(mod)}
            className="group cursor-pointer bg-white rounded-[3rem] p-8 shadow-creamy border-b-8 border-pink-100 hover:border-[#FF1493] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFFAF3] rounded-full -mr-16 -mt-16 group-hover:bg-[#FFB6C1]/20 transition-colors duration-500"></div>
            
            <div className="w-16 h-16 bg-[#FFFAF3] rounded-[1.5rem] flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              {mod.id === 1 ? '🎓' : mod.id === 2 ? '🧱' : mod.id <= 5 ? '⏰' : '💡'}
            </div>
            
            <p className="text-xs font-black text-[#FF1493] uppercase tracking-[0.3em] mb-3">Epoch {mod.id}</p>
            <h3 className="text-2xl font-black text-[#2D1B0E] mb-4 leading-tight group-hover:text-[#FF1493] transition-colors">{mod.title}</h3>
            <p className="text-lg text-[#5D4037] line-clamp-2 font-medium opacity-80 leading-relaxed">{mod.description}</p>
            
            <div className="mt-8 pt-6 border-t border-pink-50 flex items-center gap-2 text-[#FF1493] font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Start Learning →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
