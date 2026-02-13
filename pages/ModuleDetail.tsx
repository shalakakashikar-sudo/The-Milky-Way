
import React from 'react';
import { Module } from '../types';
import { Button } from '../components/Button';

interface ModuleDetailProps {
  module: Module;
  onNext: () => void;
  onPrev: () => void;
  onStartQuiz: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const ModuleDetail: React.FC<ModuleDetailProps> = ({ 
  module, onNext, onPrev, onStartQuiz, hasPrev, hasNext 
}) => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Top Navigation Bar */}
      <div className="mb-10 flex justify-between items-center gap-6">
        <Button 
          variant="secondary" 
          onClick={onPrev} 
          className={`flex-shrink-0 !px-5 sm:!px-8 !py-3 ${!hasPrev ? 'invisible' : ''}`}
        >
          <span className="hidden sm:inline">← Previous</span>
          <span className="sm:hidden">←</span>
        </Button>
        <div className="text-center overflow-hidden">
            <span className="text-xs font-black text-pink-500 uppercase tracking-[0.3em] mb-2 block">Epoch {module.id}</span>
            <h2 className="text-2xl md:text-4xl font-black text-[#3D2B1F] leading-tight">
              {module.title}
            </h2>
        </div>
        <Button 
          variant="secondary" 
          onClick={onNext} 
          className={`flex-shrink-0 !px-5 sm:!px-8 !py-3 ${!hasNext ? 'invisible' : ''}`}
        >
          <span className="hidden sm:inline">Next →</span>
          <span className="sm:hidden">→</span>
        </Button>
      </div>

      {/* Main Content Card - "The Chocolate Box" */}
      <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-creamy border border-pink-50/50 min-h-[600px] relative overflow-hidden">
        {/* Decorative corner swirl */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-stone-50 rounded-full blur-3xl opacity-60"></div>
        
        {module.sections.map((section, idx) => (
          <div key={idx} className="mb-16 last:mb-0 relative z-10">
            <h3 className="text-xl md:text-2xl font-black text-[#FF69B4] mb-6 flex items-center gap-4">
              <span className="w-12 h-1 bg-[#3D2B1F]/10 rounded-full"></span>
              {section.title}
            </h3>
            
            <div className="pl-0 md:pl-16">
              {section.type === 'formula' ? (
                <div className="bg-[#3D2B1F] text-[#FFF9F0] p-10 rounded-[2.5rem] font-mono text-center text-xl md:text-3xl shadow-2xl border-t-8 border-pink-400/20 tracking-tighter leading-normal">
                  {section.content}
                </div>
              ) : section.type === 'list' && Array.isArray(section.content) ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {section.content.map((item, sidx) => (
                    <li key={sidx} className="flex items-center gap-5 p-6 bg-[#FFF9F0] rounded-[2rem] border border-pink-100/30 hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                      <span className="w-3 h-3 rounded-full bg-pink-400 flex-shrink-0"></span>
                      <span className="text-[#3D2B1F] font-bold text-lg leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg md:text-xl text-[#5D4037] leading-relaxed font-semibold opacity-90">
                  {section.content}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Bottom Quiz Call to Action */}
        <div className="mt-20 pt-16 border-t-4 border-dotted border-pink-100 flex flex-col items-center">
            <div className="mb-10 text-center">
              <p className="text-sm font-black text-pink-500 uppercase tracking-widest mb-3">Knowledge Check 🥛</p>
              <h4 className="text-2xl md:text-4xl font-black text-[#3D2B1F]">Ready to prove you're an English legend?</h4>
            </div>
            <Button variant="accent" onClick={onStartQuiz} className="px-20 py-6 text-xl !rounded-3xl shadow-strawberry hover:scale-110">
              Start Quiz {module.id} 🚀
            </Button>
        </div>

        {/* Bottom Navigation Row */}
        <div className="mt-16 pt-10 border-t border-gray-100 flex justify-between items-center px-4">
           <button 
             onClick={onPrev}
             disabled={!hasPrev}
             className={`flex items-center gap-3 text-base font-black uppercase tracking-widest transition-all ${hasPrev ? 'text-[#3D2B1F] hover:text-pink-500 hover:-translate-x-1' : 'text-gray-200 pointer-events-none'}`}
           >
             ← Back to {hasPrev ? 'Previous' : 'None'}
           </button>
           <button 
             onClick={onNext}
             disabled={!hasNext}
             className={`flex items-center gap-3 text-base font-black uppercase tracking-widest transition-all ${hasNext ? 'text-[#3D2B1F] hover:text-pink-500 hover:translate-x-1' : 'text-gray-200 pointer-events-none'}`}
           >
             Move to {hasNext ? 'Next' : 'None'} →
           </button>
        </div>
      </div>
      
      <p className="mt-10 text-center text-sm font-black text-[#3D2B1F]/30 uppercase tracking-[0.5em]">
        Traveling the Milky Way of Knowledge
      </p>
    </div>
  );
};
