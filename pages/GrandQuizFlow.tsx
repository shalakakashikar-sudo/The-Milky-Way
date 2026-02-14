
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { QuizPage } from './QuizPage';
import { grandQuizBank } from '../data/quizzes/grandQuizBank';

interface GrandQuizFlowProps {
  onComplete: (score: number) => void;
  onExit: () => void;
}

export const GrandQuizFlow: React.FC<GrandQuizFlowProps> = ({ onComplete, onExit }) => {
  const [step, setStep] = useState<'reference' | 'quiz'>('reference');

  if (step === 'reference') {
    return (
      <div className="max-w-4xl mx-auto p-6 py-10 animate-in fade-in slide-in-from-bottom-6">
        <div className="text-center mb-10">
          <span className="text-4xl">📖</span>
          <h2 className="text-3xl md:text-6xl font-black text-[#2D1B0E] uppercase tracking-tighter mt-4 leading-none">
            Legend-dairy <br/>
            <span className="text-[#FF1493] italic">Cheat Sheet</span>
          </h2>
          <p className="text-lg font-bold text-[#5D4037] mt-3 opacity-80 italic">Ultimate Guide from Module 8 & 9</p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-creamy border-t-8 border-[#FF1493] space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-[#3D2B1F] text-white flex items-center justify-center text-lg">🚀</span>
              <h3 className="text-2xl font-black text-[#3D2B1F] uppercase tracking-tight">Time Markers Mastery</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div key={i} className="p-4 bg-[#FFFAF3] rounded-2xl border border-pink-50 transition-colors">
                  <p className="font-black text-[#FF1493] uppercase text-[9px] tracking-widest mb-1">{item.t}</p>
                  <p className="text-sm font-bold text-[#3D2B1F] leading-tight">{item.m}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-8 border-t border-pink-50">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-[#FF1493] text-white flex items-center justify-center text-lg">📊</span>
              <h3 className="text-2xl font-black text-[#3D2B1F] uppercase tracking-tight">The 12 Tense Grid</h3>
            </div>
            <div className="overflow-x-auto rounded-[1.5rem] border-2 border-[#3D2B1F]">
              <table className="w-full text-[12px] text-left border-collapse min-w-[500px]">
                <thead className="bg-[#3D2B1F] text-white">
                  <tr>
                    <th className="p-3 uppercase tracking-widest text-[9px] font-black">Aspect</th>
                    <th className="p-3 uppercase tracking-widest text-[9px] font-black">Present</th>
                    <th className="p-3 uppercase tracking-widest text-[9px] font-black">Past</th>
                    <th className="p-3 uppercase tracking-widest text-[9px] font-black">Future</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-[#3D2B1F]">
                  {[
                    { a: "Simple", pr: "V1 / V1+s", pa: "V2", f: "will + V1" },
                    { a: "Cont.", pr: "is/are + V4", pa: "was/were + V4", f: "will be + V4" },
                    { a: "Perfect", pr: "has/have + V3", pa: "had + V3", f: "will have + V3" },
                    { a: "Perf. C", pr: "have been + V4", pa: "had been + V4", f: "will have been + V4" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-pink-50/40 border-t border-pink-50">
                      <td className="p-3 bg-pink-50/20 font-black text-[10px] uppercase">{row.a}</td>
                      <td className="p-3">{row.pr}</td>
                      <td className="p-3">{row.pa}</td>
                      <td className="p-3">{row.f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <Button variant="primary" onClick={() => setStep('quiz')} className="!px-16 !py-5 text-xl !rounded-2xl">
            Start Challenge →
          </Button>
        </div>
      </div>
    );
  }

  return (
    <QuizPage 
      title="The Grand Milky Way Trial"
      questions={grandQuizBank}
      onComplete={onComplete}
      onExit={onExit}
    />
  );
};
