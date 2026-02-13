
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

  // Reset page index when module changes
  useEffect(() => {
    setActiveSectionIdx(0);
  }, [module.id]);

  const nextSection = () => {
    if (activeSectionIdx < totalSections - 1) {
      setActiveSectionIdx(activeSectionIdx + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevSection = () => {
    if (activeSectionIdx > 0) {
      setActiveSectionIdx(activeSectionIdx - 1);
      window.scrollTo(0, 0);
    }
  };

  const renderSectionContent = (section: Section) => {
    switch (section.type) {
      case 'formula':
        return (
          <div className="flex flex-col items-center justify-center min-h-[300px] py-12">
            <div className="text-center mb-8">
              <span className="text-4xl">✨</span>
              <p className="text-xs font-black text-pink-500 uppercase tracking-[0.3em] mt-2">The Magic Formula</p>
            </div>
            <div className="bg-[#3D2B1F] text-[#FFF9F0] p-12 md:p-20 rounded-[3rem] font-mono text-center text-2xl md:text-5xl shadow-2xl border-t-8 border-pink-400/30 tracking-tighter leading-tight animate-float relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-amber-500"></div>
               {section.content}
            </div>
          </div>
        );
      case 'note':
        return (
          <div className="max-w-3xl mx-auto py-12">
            <div className="bg-amber-50 border-l-[12px] border-amber-400 p-10 md:p-14 rounded-r-[3rem] italic text-[#5D4037] relative overflow-hidden group shadow-creamy">
              <div className="absolute -top-6 -right-6 p-2 opacity-5 group-hover:opacity-10 transition-opacity transform rotate-12 scale-150">
                <span className="text-9xl">🐄</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                 <span className="bg-amber-400 text-white p-2 rounded-full text-xs">✍️</span>
                 <p className="text-sm font-black uppercase tracking-widest text-amber-600">Pro Tip from Dr. Moo</p>
              </div>
              <div className="text-xl md:text-3xl font-serif font-medium leading-relaxed relative z-10 whitespace-pre-line text-[#3D2B1F]">
                "{section.content}"
              </div>
            </div>
          </div>
        );
      case 'grid':
        if (section.data && Array.isArray(section.data.items)) {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
              {section.data.items.map((item: any, i: number) => (
                <div key={i} className="bg-white rounded-[3rem] p-10 shadow-creamy border border-pink-100 hover:shadow-2xl hover:border-pink-300 transition-all duration-500 group">
                  <div className="flex items-center gap-5 mb-6">
                    <span className="text-4xl p-5 bg-pink-50 rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner">{item.icon || '🥛'}</span>
                    <h4 className="text-2xl font-black text-[#3D2B1F] uppercase tracking-tight">{item.label}</h4>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg text-[#5D4037] font-semibold leading-relaxed">{item.description}</p>
                    {item.details && (
                       <div className="pt-4 border-t border-pink-50">
                         <ul className="grid grid-cols-1 gap-3">
                           {item.details.map((d: string, j: number) => (
                             <li key={j} className="flex gap-3 items-center text-sm font-black text-[#FF1493] uppercase tracking-wider">
                               <span className="w-2 h-2 rounded-full bg-[#FF1493] animate-pulse"></span> {d}
                             </li>
                           ))}
                         </ul>
                       </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
              {section.content.map((item, sidx) => (
                <div key={sidx} className="flex items-center gap-6 p-8 bg-white rounded-[2.5rem] border-2 border-pink-50 hover:border-[#FF1493] hover:shadow-xl hover:scale-[1.03] transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 font-black text-xl group-hover:bg-[#FF1493] group-hover:text-white transition-colors">
                    {sidx + 1}
                  </div>
                  <span className="text-[#3D2B1F] font-bold text-xl leading-snug">{item}</span>
                </div>
              ))}
            </div>
          );
        }
        return null;
      case 'table':
        if (section.data && Array.isArray(section.data.rows)) {
          return (
            <div className="py-8">
              <div className="overflow-x-auto rounded-[3rem] shadow-2xl border-4 border-[#3D2B1F] bg-white">
                <table className="w-full text-left border-collapse table-fixed min-w-[900px]">
                  <thead>
                    <tr className="bg-[#3D2B1F] text-white">
                      {section.data.headers.map((h: string, i: number) => (
                        <th key={i} className="p-8 uppercase tracking-[0.2em] text-[11px] font-black border-r border-white/10 text-center">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.data.rows.map((row: any[], i: number) => (
                      <tr key={i} className="group hover:bg-pink-50/30 transition-colors">
                        {row.map((cell: any, j: number) => {
                          const isHeaderCol = j === 0;
                          return (
                            <td key={j} className={`p-6 border-t border-pink-100 border-r border-pink-100 last:border-r-0 transition-all ${isHeaderCol ? 'bg-pink-50/20 font-black' : ''}`}>
                              {typeof cell === 'string' ? (
                                <div className="font-black text-[#3D2B1F] uppercase text-sm tracking-widest text-center">{cell}</div>
                              ) : (
                                <div className="text-center group-hover:scale-105 transition-transform duration-500">
                                  <div className="text-[15px] font-black text-[#FF1493] mb-2 leading-tight uppercase tracking-tight">{cell.title}</div>
                                  <div className="text-[12px] italic text-[#5D4037] font-bold bg-[#FFFAF3] py-1 px-2 rounded-lg inline-block">"{cell.example}"</div>
                                </div>
                              )}
                            </td>
                          );
                        })}
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
          <div className="max-w-4xl mx-auto py-12 text-center">
             <p className="text-2xl md:text-4xl text-[#3D2B1F] leading-[1.4] font-bold opacity-90 whitespace-pre-line tracking-tight">
               {section.content}
             </p>
          </div>
        );
    }
  };

  const currentSection = module.sections[activeSectionIdx];

  return (
    <div className="min-h-screen bg-[#FFFAF3] pb-24">
      {/* Progress Header */}
      <div className="sticky top-11 z-40 w-full milk-glass border-b border-[#FFB6C1]/20 py-4 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBackToModules}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors text-[#2D1B0E]"
              title="Back to Modules"
            >
              <span className="text-xl">←</span>
            </button>
            <div className="hidden sm:block">
              <p className="text-[10px] font-black text-[#FF1493] uppercase tracking-widest">Learning Path</p>
              <h2 className="text-sm font-black text-[#3D2B1F] uppercase tracking-tight truncate max-w-[200px]">{module.title}</h2>
            </div>
          </div>
          
          <div className="flex-grow max-w-md bg-pink-100 h-2.5 rounded-full overflow-hidden relative shadow-inner">
             <div 
               className="absolute top-0 left-0 h-full bg-[#FF1493] transition-all duration-700 ease-out"
               style={{ width: `${progress}%` }}
             >
                <div className="w-full h-full absolute top-0 left-0 opacity-30 animate-[pulse_2s_infinite] bg-white"></div>
             </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black text-[#FF1493] uppercase tracking-widest bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
              {activeSectionIdx + 1} / {totalSections}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-16">
            <span className="inline-block bg-pink-50 text-[#FF1493] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.4em] mb-4 border border-pink-100">
              {currentSection.title.includes(' ') ? currentSection.title.split(' ')[0] : 'Chapter'}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#2D1B0E] uppercase tracking-tighter leading-none italic">
              {currentSection.title.split(' ').slice(1).join(' ') || currentSection.title}
            </h1>
          </div>

          <div className="bg-white/40 rounded-[4rem] p-6 md:p-12 border border-white/60 min-h-[500px] flex flex-col justify-center">
            {renderSectionContent(currentSection)}
          </div>

          {/* Page Navigation */}
          <div className="mt-16 flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              <Button 
                variant="secondary" 
                onClick={prevSection} 
                disabled={activeSectionIdx === 0}
                className="!px-10 !py-4 shadow-sm"
              >
                Back
              </Button>
              
              {activeSectionIdx < totalSections - 1 ? (
                <Button 
                  variant="primary" 
                  onClick={nextSection} 
                  className="!px-16 !py-4 shadow-xl"
                >
                  Continue →
                </Button>
              ) : (
                <div className="flex flex-col items-center animate-bounce">
                  <p className="text-[10px] font-black text-[#FF1493] uppercase tracking-[0.3em] mb-3">Chapter Complete! 🌟</p>
                  <Button 
                    variant="accent" 
                    onClick={onStartQuiz} 
                    className="!px-20 !py-6 text-xl shadow-strawberry !rounded-3xl"
                  >
                    Start Final Quiz 🚀
                  </Button>
                </div>
              )}
            </div>

            {activeSectionIdx === totalSections - 1 && (
              <div className="flex gap-4 mt-8">
                 {hasPrevModule && (
                   <button onClick={onPrevModule} className="text-[10px] font-black uppercase text-[#5D4037] hover:text-[#FF1493] transition-colors tracking-widest">
                     ← Previous Module
                   </button>
                 )}
                 {hasNextModule && (
                   <button onClick={onNextModule} className="text-[10px] font-black uppercase text-[#5D4037] hover:text-[#FF1493] transition-colors tracking-widest">
                     Skip to Next Module →
                   </button>
                 )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
