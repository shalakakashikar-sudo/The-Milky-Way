
import React from 'react';
import { Module, Section } from '../types';
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
  const renderSectionContent = (section: Section) => {
    switch (section.type) {
      case 'formula':
        return (
          <div className="bg-[#3D2B1F] text-[#FFF9F0] p-10 rounded-[2.5rem] font-mono text-center text-xl md:text-3xl shadow-2xl border-t-8 border-pink-400/20 tracking-tighter leading-normal animate-float">
            {section.content}
          </div>
        );
      case 'note':
        return (
          <div className="bg-amber-50 border-l-8 border-amber-400 p-8 rounded-r-3xl italic text-[#5D4037] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl">🐄</span>
            </div>
            <p className="text-sm font-black uppercase tracking-widest text-amber-600 mb-2">Academic Note</p>
            <div className="text-lg md:text-xl font-semibold leading-relaxed relative z-10 whitespace-pre-line">
              {section.content}
            </div>
          </div>
        );
      case 'grid':
        if (section.data && Array.isArray(section.data.items)) {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.data.items.map((item: any, i: number) => (
                <div key={i} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-pink-100 hover:shadow-xl hover:border-pink-200 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl p-3 bg-pink-50 rounded-2xl">{item.icon || '🥛'}</span>
                    <h4 className="text-xl font-black text-[#3D2B1F] uppercase tracking-tight">{item.label}</h4>
                  </div>
                  <div className="space-y-3">
                    <p className="text-base text-[#5D4037] font-medium leading-relaxed">{item.description}</p>
                    {item.details && (
                       <ul className="text-sm font-bold text-[#FF1493] space-y-1">
                         {item.details.map((d: string, j: number) => (
                           <li key={j} className="flex gap-2 items-center">
                             <span className="w-1.5 h-1.5 rounded-full bg-[#FF1493]"></span> {d}
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
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {section.content.map((item, sidx) => (
                <li key={sidx} className="flex items-start gap-5 p-6 bg-[#FFF9F0] rounded-[2rem] border border-pink-100/30 hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  <span className="w-4 h-4 rounded-full bg-pink-400 mt-1 flex-shrink-0 shadow-sm"></span>
                  <span className="text-[#3D2B1F] font-bold text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return null;
      case 'table':
        if (section.data && Array.isArray(section.data.rows)) {
          const aspectColors = ['bg-[#FFFAF3]', 'bg-pink-50/40', 'bg-pink-100/30', 'bg-pink-200/20', 'bg-pink-300/10'];
          return (
            <div className="overflow-x-auto rounded-[3rem] shadow-creamy border-4 border-[#3D2B1F]">
              <table className="w-full text-left border-collapse bg-white table-fixed min-w-[800px]">
                <thead>
                  <tr className="bg-[#3D2B1F] text-white">
                    {section.data.headers.map((h: string, i: number) => (
                      <th key={i} className="p-6 uppercase tracking-widest text-[10px] md:text-xs font-black border-r border-white/10 text-center">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.data.rows.map((row: any[], i: number) => (
                    <tr key={i} className="group">
                      {row.map((cell: any, j: number) => {
                        const isHeaderCol = j === 0;
                        return (
                          <td key={j} className={`p-5 border-t border-pink-100/50 border-r border-pink-100/30 last:border-r-0 transition-colors ${isHeaderCol ? 'bg-pink-50/50' : ''}`}>
                            {typeof cell === 'string' ? (
                              <div className="font-black text-[#3D2B1F] uppercase text-xs tracking-widest text-center">{cell}</div>
                            ) : (
                              <div className="text-center group-hover:scale-105 transition-transform">
                                <div className="text-[13px] font-black text-[#FF1493] mb-1 leading-tight">{cell.title}</div>
                                <div className="text-[11px] italic text-[#5D4037] opacity-80 font-medium">"{cell.example}"</div>
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
          );
        }
        return null;
      default:
        return (
          <p className="text-lg md:text-xl text-[#5D4037] leading-relaxed font-semibold opacity-90 whitespace-pre-line">
            {section.content}
          </p>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
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
            <h2 className="text-2xl md:text-4xl font-black text-[#3D2B1F] leading-tight uppercase">
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

      <div className="bg-white rounded-[4rem] p-8 md:p-16 shadow-creamy border border-pink-50/50 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-50 rounded-full blur-3xl opacity-60"></div>
        
        {module.sections.map((section, idx) => (
          <div key={idx} className="mb-20 last:mb-0 relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-[#FF69B4] mb-8 flex items-center gap-4 italic uppercase tracking-tight">
              <span className="w-12 h-1 bg-[#FFB6C1] rounded-full"></span>
              {section.title}
            </h3>
            
            <div className="pl-0 md:pl-10">
              {renderSectionContent(section)}
            </div>
          </div>
        ))}

        <div className="mt-20 pt-16 border-t-4 border-dotted border-pink-100 flex flex-col items-center">
            <div className="mb-10 text-center">
              <p className="text-sm font-black text-pink-500 uppercase tracking-widest mb-3">Knowledge Check 🥛</p>
              <h4 className="text-2xl md:text-4xl font-black text-[#3D2B1F]">Ready to prove you're an English legend?</h4>
            </div>
            <Button variant="accent" onClick={onStartQuiz} className="px-20 py-6 text-xl !rounded-3xl shadow-strawberry hover:scale-110">
              Start Quiz {module.id} 🚀
            </Button>
        </div>
      </div>
    </div>
  );
};
