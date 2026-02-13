
import React from 'react';
import { Button } from '../components/Button';

interface LandingPageProps {
  onStartLearn: () => void;
  onStartGrandQuiz: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartLearn, onStartGrandQuiz }) => {
  return (
    <div className="relative overflow-hidden py-20 px-6 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      {/* Decorative creamy blobs */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl"></div>

      <div className="z-10 text-center max-w-5xl">
        {/* Removed "The Educational Epoch" line as requested */}
        
        <h1 className="text-7xl md:text-9xl font-black mb-10 text-[#2D1B0E] leading-[0.95] tracking-tight">
          Welcome to <br/>
          <span className="relative inline-block mt-4 pb-2">
            <span className="relative z-10 text-[#FF1493] strawberry-gradient bg-clip-text text-transparent italic px-2">The Milky Way</span>
            <span className="absolute bottom-4 left-0 w-full h-8 bg-[#FFB6C1]/30 -rotate-1 -z-0 rounded-lg"></span>
          </span>
        </h1>

        <p className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-14 italic opacity-95">
          "Make your English Legend-dairy with Tenses!"
        </p>

        <div className="bg-white/80 p-12 md:p-16 rounded-[4rem] shadow-creamy border-2 border-white mb-16 text-left relative overflow-hidden backdrop-blur-lg">
          <div className="absolute top-0 left-0 w-4 h-full bg-[#FF1493]"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50/50 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          
          <p className="text-2xl md:text-3xl leading-relaxed mb-10 font-medium text-[#2D1B0E]">
            Struggling with Past Perfect? Confused by Future Continuous? <span className="text-[#FF1493] font-bold">Don't cry over spilled milk!</span> 
            Join <strong className="text-[#2D1B0E] border-b-4 border-[#FFB6C1]">Dr. Moo</strong>, our time-traveling bovine professor, as we explore the 12 tenses 
            in a way that's as smooth as a chocolate truffle.
          </p>
          <p className="text-2xl md:text-3xl leading-relaxed font-medium text-[#5D4037]">
            From the core of sentence structures to the celestial heights of mastery, the 
            whole herd of knowledge is waiting for you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          <div className="flex flex-col items-center group">
            <p className="text-base font-black mb-5 uppercase text-[#FF1493] tracking-[0.3em] animate-bounce group-hover:scale-110 transition-transform">
              Start Journey Here! 🍦
            </p>
            <Button variant="primary" onClick={onStartLearn} className="w-72 py-7 text-3xl !rounded-3xl shadow-2xl hover:rotate-3 transition-all">
              Learn Tenses
            </Button>
          </div>
          <div className="pt-10 sm:pt-0">
             <Button variant="accent" onClick={onStartGrandQuiz} className="w-72 py-7 text-3xl !rounded-3xl shadow-strawberry hover:-rotate-3 bg-[#FF1493] text-white hover:bg-[#D01077]">
               The Grand Quiz
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
