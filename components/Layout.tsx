
import React from 'react';
import { Mascot } from './Mascot';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
  mascotMessage?: string | null;
}

export const Layout: React.FC<LayoutProps> = ({ children, onNavigate, mascotMessage }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFAF3]">
      {/* Ultra-Slim Sticky Header */}
      <header className="sticky top-0 z-50 w-full h-11 milk-glass shadow-sm flex items-center px-8 justify-between border-b border-[#FFB6C1]/20">
        <div 
          className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => onNavigate('landing')}
        >
          <span className="text-lg">🐄</span>
          <h1 className="text-sm font-black uppercase tracking-[0.3em] text-[#2D1B0E]">The Milky Way</h1>
        </div>
        
        <nav className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#2D1B0E]">
          <button onClick={() => onNavigate('landing')} className="hover:text-[#FF1493] transition-colors">Home</button>
          <button onClick={() => onNavigate('modules')} className="hover:text-[#FF1493] transition-colors">Modules</button>
          <button onClick={() => onNavigate('grand-quiz')} className="hover:text-[#FF1493] transition-colors">Grand Quiz</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Mascot */}
      <Mascot externalMessage={mascotMessage} />

      {/* Ultra-Slim Sticky Footer */}
      <footer className="sticky bottom-0 z-50 w-full h-7 milk-glass flex items-center justify-center px-4 border-t border-[#FFB6C1]/20">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-[#2D1B0E]/60">
          Created by <span className="text-[#FF1493]">Shalaka Kashikar</span>
        </p>
      </footer>
    </div>
  );
};
