
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { QuizPage } from './QuizPage';
import { grandQuizBank } from '../data/quizzes/grandQuizBank';

interface GrandQuizFlowProps {
  onComplete: (score: number) => void;
  onExit: () => void;
}

export const GrandQuizFlow: React.FC<GrandQuizFlowProps> = ({ onComplete, onExit }) => {
  const [step, setStep] = useState<'reference' | 'setup' | 'quiz'>('reference');
  const [questionCount, setQuestionCount] = useState(20);

  const handleStartSetup = () => setStep('setup');
  const handleStartQuiz = () => setStep('quiz');

  const getSelectedQuestions = () => {
    return [...grandQuizBank]
      .sort(() => Math.random() - 0.5)
      .slice(0, questionCount);
  };

  if (step === 'reference') {
    return (
      <div className="max-w-4xl mx-auto p-6 py-12 animate-in fade-in slide-in-from-bottom-6">
        <div className="text-center mb-12">
          <span className="text-5xl">📖</span>
          <h2 className="text-4xl md:text-7xl font-black text-[#2D1B0E] uppercase tracking-tighter mt-4">
            Legend-dairy <br/>
            <span className="text-[#FF1493] italic">Cheat Sheet</span>
          </h2>
          <p className="text-xl font-bold text-[#5D4037] mt-3 opacity-80 italic">The Ultimate Guide from Module 8 & 9</p>
        </div>

        <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-creamy border-t-[12px] border-[#FF1493] space-y-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-pink-50/50 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-12 rounded-2xl bg-[#3D2B1F] text-white flex items-center justify-center text-xl shadow-lg">🚀</span>
              <h3 className="text-3xl font-black text-[#3D2B1F] uppercase tracking-tight">Time Markers Mastery</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { t: "Simple Present", m: "always, daily, every week, usually, often" },
                { t: "Present Continuous", m: "now, currently, at the moment, Listen!, Look!" },
                { t: "Present Perfect", m: "just, already, yet, so far, ever, never, recently" },
                { t: "Simple Past", m: "yesterday, ago, last month, in 1990, the other day" },
                { t: "Past Continuous", m: "while, when, at 8 PM yesterday, during the day" },
                { t: "Future Simple", m: "tomorrow, next week, soon, in two days" },
                { t: "Perfect Tenses", m: "since (starting point), for (duration)" },
                { t: "Past Perfect", m: "before, after, by the time, as soon as (past context)" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#FFFAF3] rounded-3xl border-2 border-pink-50 hover:border-[#FF1493]/30 transition-colors">
                  <p className="font-black text-[#FF1493] uppercase text-xs tracking-widest mb-2">{item.t}</p>
                  <p className="text-base font-bold text-[#3D2B1F] leading-snug">{item.m}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-8 border-t border-pink-100">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-12 rounded-2xl bg-[#FF1493] text-white flex items-center justify-center text-xl shadow-lg">📊</span>
              <h3 className="text-3xl font-black text-[#3D2B1F] uppercase tracking-tight">The 12 Tense Grid</h3>
            </div>
            <div className="overflow-x-auto rounded-[2rem] border-4 border-[#3D2B1F] shadow-xl">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-[#3D2B1F] text-white">
                  <tr>
                    <th className="p-6 uppercase tracking-widest text-[10px] font-black">Aspect</th>
                    <th className="p-6 uppercase tracking-widest text-[10px] font-black">Present</th>
                    <th className="p-6 uppercase tracking-widest text-[10px] font-black">Past</th>
                    <th className="p-6 uppercase tracking-widest text-[10px] font-black">Future</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-[#3D2B1F]">
                  <tr className="hover:bg-pink-50/40">
                    <td className="p-5 bg-pink-50/30 border-b border-pink-100 font-black text-[11px] uppercase">Simple</td>
                    <td className="p-5 border-b border-pink-100">V1 / V1+s</td>
                    <td className="p-5 border-b border-pink-100">V2</td>
                    <td className="p-5 border-b border-pink-100">will + V1</td>
                  </tr>
                  <tr className="hover:bg-pink-50/40">
                    <td className="p-5 bg-pink-50/30 border-b border-pink-100 font-black text-[11px] uppercase">Cont.</td>
                    <td className="p-5 border-b border-pink-100">am/is/are + V4</td>
                    <td className="p-5 border-b border-pink-100">was/were + V4</td>
                    <td className="p-5 border-b border-pink-100">will be + V4</td>
                  </tr>
                  <tr className="hover:bg-pink-50/40">
                    <td className="p-5 bg-pink-50/30 border-b border-pink-100 font-black text-[11px] uppercase">Perfect</td>
                    <td className="p-5 border-b border-pink-100">has/have + V3</td>
                    <td className="p-5 border-b border-pink-100">had + V3</td>
                    <td className="p-5 border-b border-pink-100">will have + V3</td>
                  </tr>
                  <tr className="hover:bg-pink-50/40">
                    <td className="p-5 bg-pink-50/30 font-black text-[11px] uppercase">Perf. Cont.</td>
                    <td className="p-5">have been + V4</td>
                    <td className="p-5">had been + V4</td>
                    <td className="p-5">will have been + V4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#FF1493] animate-bounce">Ready for the Trial?</p>
          <Button variant="primary" onClick={handleStartSetup} className="!px-24 !py-7 text-2xl shadow-2xl !rounded-3xl transform hover:scale-110 active:scale-95">
            Proceed to Setup →
          </Button>
        </div>
      </div>
    );
  }

  if (step === 'setup') {
    return (
      <div className="max-w-3xl mx-auto p-6 py-20 animate-in zoom-in-95 duration-500">
        <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-creamy border-4 border-[#3D2B1F] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[#FF1493] to-amber-400"></div>
          <div className="text-6xl mb-8">🎯</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#3D2B1F] uppercase tracking-tighter mb-4">Quiz Setup</h2>
          <p className="text-xl text-[#5D4037] font-bold mb-12 italic opacity-80">"Selection is the first step to perfection!" — Dr. Moo</p>
          
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FF1493] mb-6">Select Number of Questions</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mb-16">
            {[5, 10, 20, 30, 40, 50].map(n => (
              <button
                key={n}
                onClick={() => setQuestionCount(n)}
                className={`py-5 rounded-3xl font-black text-2xl transition-all duration-300 shadow-sm flex flex-col items-center justify-center ${
                  questionCount === n 
                  ? 'bg-[#FF1493] text-white shadow-strawberry scale-105 rotate-2' 
                  : 'bg-pink-50 text-[#FF1493] hover:bg-pink-100 hover:-translate-y-1'
                }`}
              >
                {n}
                <span className="text-[10px] uppercase tracking-widest mt-1 opacity-60">Items</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <Button variant="accent" onClick={handleStartQuiz} className="py-7 text-2xl !rounded-[2rem] shadow-strawberry bg-[#FF1493] text-white border-b-8 border-pink-700 active:border-b-0 active:translate-y-2">
              Start Grand Quiz! 🐮
            </Button>
            <button 
              onClick={() => setStep('reference')} 
              className="text-[11px] font-black uppercase text-[#3D2B1F] tracking-[0.2em] mt-6 flex items-center justify-center gap-2 hover:text-[#FF1493] transition-colors"
            >
              ← Study Cheat Sheet Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <QuizPage 
      title={`The Grand Milky Way Trial (${questionCount} Qs)`}
      questions={getSelectedQuestions()}
      onComplete={onComplete}
      onExit={onExit}
    />
  );
};
