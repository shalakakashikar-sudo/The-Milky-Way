
import React from 'react';
import { Button } from '../components/Button';

interface LandingPageProps {
  onStartLearn: () => void;
  onStartGrandQuiz: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartLearn, onStartGrandQuiz }) => {
  return (
    <div className="relative overflow-hidden py-12 px-6 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      {/* Decorative creamy blobs - slightly smaller */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-amber-50/40 rounded-full blur-3xl"></div>

      <div className="z-10 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black mb-8 text-[#2D1B0E] leading-[1.1] tracking-tight">
          Welcome to <br/>
          <span className="relative inline-block mt-2 pb-1">
            <span className="relative z-10 text-[#FF1493] strawberry-gradient bg-clip-text text-transparent italic px-2">The Milky Way</span>
            <span className="absolute bottom-2 left-0 w-full h-4 md:h-6 bg-[#FFB6C1]/20 -rotate-1 -z-0 rounded-lg"></span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-bold text-[#5D4037] mb-12 italic opacity-90">
          "Make your English Legend-dairy with Tenses!"
        </p>

        <div className="bg-white/80 p-8 md:p-12 rounded-[3rem] shadow-creamy border border-white/50 mb-12 text-left relative overflow-hidden backdrop-blur-lg">
          <div className="absolute top-0 left-0 w-3 h-full bg-[#FF1493]"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50/50 rounded-full -mr-12 -mt-12 blur-2xl"></div>
          
          <p className="text-lg md:text-xl leading-relaxed font-medium text-[#2D1B0E]">
            Struggling with Past Perfect? Confused by Future Continuous? <span className="text-[#FF1493] font-bold">Don't cry over spilled milk!</span> 
            Join <strong className="text-[#2D1B0E] border-b-2 border-[#FFB6C1]">Dr. Moo</strong>, our time-traveling bovine professor, as we explore the 12 tenses 
            in a way that's as smooth as a chocolate truffle.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="flex flex-col items-center group">
            <p className="text-[10px] font-black mb-3 uppercase text-[#FF1493] tracking-[0.3em] animate-bounce group-hover:scale-110 transition-transform">
              Start Journey Here! 🍦
            </p>
            <Button variant="primary" onClick={onStartLearn} className="w-60 py-4 text-lg !rounded-2xl shadow-xl hover:rotate-2 transition-all">
              Learn Tenses
            </Button>
          </div>
          <div className="pt-8 sm:pt-0">
             <Button variant="accent" onClick={onStartGrandQuiz} className="w-60 py-4 text-lg !rounded-2xl shadow-strawberry hover:-rotate-2 bg-[#FF1493] text-white hover:bg-[#D01077]">
               The Grand Quiz
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
