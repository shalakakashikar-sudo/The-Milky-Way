
import React, { useState, useEffect } from 'react';
import { Module, Section } from '../types';
import { Button } from '../components/Button';

interface ModuleDetailProps {
  module: Module;
  onNextModule: () => void;
  onPrevModule: () => void;
  onStartQuiz: () => void;
  hasPrevModule: boolean;
  hasNextModule: boolean;
  onBackToModules: () => void;
}

export const ModuleDetail: React.FC<ModuleDetailProps> = ({ 
  module, onNextModule, onPrevModule, onStartQuiz, hasPrevModule, hasNextModule, onBackToModules
}) => {
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const totalSections = module.sections.length;
  const progress = ((activeSectionIdx + 1) / totalSections) * 100;

  useEffect(() => {
    setActiveSectionIdx(0);
  }, [module.id]);

  const nextSection = () => {
    if (activeSectionIdx < totalSections - 1) {
      setActiveSectionIdx(activeSectionIdx + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevSection = () => {
    if (activeSectionIdx > 0) {
      setActiveSectionIdx(activeSectionIdx - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keyboard navigation for 'Enter' key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (activeSectionIdx < totalSections - 1) {
          nextSection();
        } else {
          onStartQuiz();
        }
      }
      if (e.key === 'ArrowRight' && activeSectionIdx < totalSections - 1) {
        nextSection();
      }
      if (e.key === 'ArrowLeft' && activeSectionIdx > 0) {
        prevSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSectionIdx, totalSections, onStartQuiz]);

  const renderSectionContent = (section: Section) => {
    switch (section.type) {
      case 'formula':
        return (
          <div className="flex flex-col items-center justify-center py-2">
            <p className="text-[12px] font-black text-pink-500 uppercase tracking-widest mb-4">The Magic Formula</p>
            <div className="bg-[#3D2B1F] text-[#FFF9F0] p-8 md:p-12 rounded-[1.5rem] font-mono text-center text-2xl md:text-5xl shadow-xl border-t-4 border-pink-400/30 tracking-tighter leading-tight animate-float w-full max-w-4xl">
               {section.content}
            </div>
          </div>
        );
      case 'note':
        return (
          <div className="max-w-4xl mx-auto py-2 w-full">
            <div className="bg-amber-50 border-l-[6px] border-amber-400 p-6 md:p-10 rounded-r-2xl italic text-[#5D4037] relative group shadow-sm border border-amber-100">
              <div className="flex items-center gap-2.5 mb-3">
                 <span className="bg-amber-400 text-white p-1.5 rounded-full text-xs shadow-sm">🐄</span>
                 <p className="text-[11px] font-black uppercase tracking-widest text-amber-600">Dr. Moo's Secret Tip</p>
              </div>
              <div className="text-xl md:text-3xl font-serif font-medium leading-snug relative z-10 whitespace-pre-line text-[#3D2B1F]">
                "{section.content}"
              </div>
            </div>
          </div>
        );
      case 'grid':
        if (section.data && Array.isArray(section.data.items)) {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-2">
              {section.data.items.map((item: any, i: number) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 group hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl p-2 bg-pink-50 rounded-lg">{item.icon || '🥛'}</span>
                    <h4 className="text-base md:text-lg font-black text-[#3D2B1F] uppercase tracking-tight">{item.label}</h4>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[#5D4037] font-semibold leading-tight">{item.description}</p>
                    {item.details && (
                       <ul className="grid grid-cols-1 gap-1 pt-2 border-t border-pink-50">
                         {item.details.map((d: string, j: number) => (
                           <li key={j} className="flex gap-2 items-center text-[10px] font-black text-[#FF1493] uppercase tracking-wider">
                             <span className="w-1 h-1 rounded-full bg-[#FF1493]"></span> {d}
                           </li>
                         ))}
                       </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        }
        return null;
      case 'list':
        if (Array.isArray(section.content)) {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
              {section.content.map((item, sidx) => (
                <div key={sidx} className="flex items-center gap-4 p-5 md:p-6 bg-white rounded-xl border border-pink-50 hover:border-[#FF1493] transition-all group">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 font-black text-lg group-hover:bg-[#FF1493] group-hover:text-white transition-colors">
                    {sidx + 1}
                  </div>
                  <span className="text-[#3D2B1F] font-bold text-lg md:text-xl leading-tight">{item}</span>
                </div>
              ))}
            </div>
          );
        }
        return null;
      case 'table':
        if (section.data && Array.isArray(section.data.rows)) {
          return (
            <div className="py-1 overflow-hidden w-full">
              <div className="overflow-x-auto rounded-[1.5rem] shadow-xl border-2 border-[#3D2B1F] bg-white">
                <table className="w-full text-left border-collapse table-fixed min-w-[800px]">
                  <thead>
                    <tr className="bg-[#3D2B1F] text-white">
                      {section.data.headers.map((h: string, i: number) => (
                        <th key={i} className="p-4 md:p-5 uppercase tracking-widest text-[10px] md:text-[13px] font-black border-r border-white/10 text-center">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.data.rows.map((row: any[], i: number) => (
                      <tr key={i} className="group hover:bg-pink-50/10 transition-colors">
                        {row.map((cell: any, j: number) => (
                          <td key={j} className={`p-4 md:p-5 border-t border-pink-50 border-r border-pink-50 last:border-r-0 ${j === 0 ? 'bg-pink-50/5 font-black' : ''}`}>
                            {typeof cell === 'string' ? (
                              <div className="font-black text-[#3D2B1F] uppercase text-[12px] md:text-[15px] text-center tracking-tight">{cell}</div>
                            ) : (
                              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                                <div className="text-[13px] md:text-[18px] font-black text-[#FF1493] mb-1 leading-tight uppercase tracking-tight">{cell.title}</div>
                                <div className="text-[11px] md:text-[15px] italic text-[#5D4037] font-bold bg-[#FFFAF3] py-1 px-3 rounded-lg inline-block border border-pink-50 shadow-sm">"{cell.example}"</div>
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }
        return null;
      default:
        return (
          <div className="max-w-4xl mx-auto py-4 text-center px-4 w-full">
             <p className="text-xl md:text-4xl text-[#3D2B1F] leading-tight font-bold opacity-90 tracking-tight">
               {section.content}
             </p>
          </div>
        );
    }
  };

  const currentSection = module.sections[activeSectionIdx];

  return (
    <div className="min-h-screen bg-[#FFFAF3] pb-10">
      {/* Navigation Header - Tightened vertical spacing */}
      <div className="sticky top-11 z-40 w-full milk-glass border-b border-[#FFB6C1]/20 py-2 px-4 md:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={onBackToModules} className="w-9 h-9 rounded-xl flex items-center justify-center bg-white border-2 border-pink-100 hover:bg-pink-50 transition-all text-sm font-black shadow-sm">←</button>
            <h2 className="hidden sm:block text-[10px] font-black text-[#3D2B1F] uppercase tracking-[0.2em] truncate max-w-[200px]">{module.title}</h2>
          </div>
          
          <div className="flex-grow flex flex-col items-center">
             <div className="w-full max-w-[250px] bg-pink-100/50 h-1.5 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-[#FF1493] transition-all duration-700 ease-out shadow-strawberry" style={{ width: `${progress}%` }}></div>
             </div>
             <p className="text-[9px] font-black text-[#FF1493] uppercase tracking-widest mt-1">{activeSectionIdx + 1} / {totalSections}</p>
          </div>

          <button onClick={onStartQuiz} className="bg-[#FF1493] text-white text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-strawberry hover:scale-105 active:scale-95 transition-all">START QUIZ ⚡</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 flex flex-col items-center">
          <div className="text-center mb-6 w-full">
            <span className="inline-block bg-pink-50 text-[#FF1493] text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-2 border border-pink-100 shadow-sm">Mastery Chapter</span>
            <h1 className="text-3xl md:text-6xl font-black text-[#2D1B0E] uppercase tracking-tighter leading-none italic drop-shadow-sm">{currentSection.title}</h1>
          </div>

          {/* Wider Content Card with optimized padding */}
          <div className="bg-white/60 rounded-[2.5rem] p-4 md:p-10 border-2 border-white/80 min-h-[400px] flex flex-col justify-center shadow-creamy backdrop-blur-sm w-full">
            {renderSectionContent(currentSection)}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button onClick={prevSection} disabled={activeSectionIdx === 0} className="w-full sm:w-auto px-10 py-3 rounded-2xl border-2 border-[#3D2B1F] text-[#3D2B1F] font-black text-xs uppercase tracking-widest disabled:opacity-20 transition-all hover:bg-pink-50 shadow-sm">BACK</button>
            
            {activeSectionIdx < totalSections - 1 ? (
              <button onClick={nextSection} className="w-full sm:w-auto px-12 py-3 rounded-2xl bg-[#3D2B1F] text-white font-black text-xs uppercase tracking-widest shadow-xl transition-all hover:bg-black active:scale-95">NEXT (ENTER) →</button>
            ) : (
              <button onClick={onStartQuiz} className="w-full sm:w-auto px-14 py-4 rounded-2xl bg-[#FF1493] text-white font-black text-sm uppercase tracking-widest shadow-strawberry transition-all hover:bg-[#D01077] active:scale-95">TEST YOUR SKILLS 🚀</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
