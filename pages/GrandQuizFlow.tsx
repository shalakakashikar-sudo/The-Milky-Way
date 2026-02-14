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
      <div className="max-w-6xl mx-auto p-4 md:p-8 py-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-100 text-[#FF1493] text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.4em] mb-6 shadow-sm border border-pink-200">
            Legend-dairy Final Prep
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#2D1B0E] uppercase tracking-tighter leading-[0.9] italic mb-4">
            Ultimate <span className="text-[#FF1493] block md:inline">Cheat Sheet</span>
          </h1>
          <p className="text-lg md:text-2xl font-bold text-[#5D4037] opacity-80 italic">
            "Your final compass before the Grand Trial. Study well, little calf!" — Dr. Moo
          </p>
        </div>

        {/* The Master Container */}
        <div className="space-y-12">
          
          {/* Section 1: The Matrix */}
          <section className="bg-white rounded-[3rem] p-6 md:p-12 shadow-creamy border-t-[12px] border-[#3D2B1F] relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">📊</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#3D2B1F] uppercase tracking-tighter">The Tense Matrix</h2>
            </div>
            <div className="overflow-x-auto rounded-[2rem] border-2 border-[#3D2B1F]">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-[#3D2B1F] text-white">
                  <tr>
                    <th className="p-5 uppercase tracking-widest text-[11px] font-black">ASPECT</th>
                    <th className="p-5 uppercase tracking-widest text-[11px] font-black">PRESENT</th>
                    <th className="p-5 uppercase tracking-widest text-[11px] font-black">PAST</th>
                    <th className="p-5 uppercase tracking-widest text-[11px] font-black">FUTURE</th>
                  </tr>
                </thead>
                <tbody className="font-bold">
                  {[
                    { a: "SIMPLE", pr: "V1 / V1+s", pa: "V2", f: "will + V1" },
                    { a: "CONTINUOUS", pr: "am/is/are + V4", pa: "was/were + V4", f: "will be + V4" },
                    { a: "PERFECT", pr: "has/have + V3", pa: "had + V3", f: "will have + V3" },
                    { a: "PERF. CONT.", pr: "has/have been + V4", pa: "had been + V4", f: "will have been + V4" }
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-pink-50 hover:bg-pink-50/30 transition-colors">
                      <td className="p-5 bg-pink-50/20 font-black text-[#FF1493] text-xs tracking-widest border-r border-pink-100">{row.a}</td>
                      <td className="p-5 text-[#3D2B1F] text-sm md:text-lg">{row.pr}</td>
                      <td className="p-5 text-[#3D2B1F] text-sm md:text-lg">{row.pa}</td>
                      <td className="p-5 text-[#3D2B1F] text-sm md:text-lg">{row.f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Time Markers Compass */}
          <section className="bg-white rounded-[3rem] p-6 md:p-12 shadow-creamy border-t-[12px] border-[#FF1493]">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-4xl">📍</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#3D2B1F] uppercase tracking-tighter">Time Marker Compass</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <h3 className="font-black text-[#FF1493] text-sm tracking-[0.3em] uppercase border-b-2 border-pink-100 pb-2">Present Epoch</h3>
                <ul className="space-y-3">
                  <li className="text-sm font-bold"><span className="text-pink-500">SIMPLE:</span> always, usually, every day</li>
                  <li className="text-sm font-bold"><span className="text-pink-500">CONT.:</span> now, right now, Look!</li>
                  <li className="text-sm font-bold"><span className="text-pink-500">PERFECT:</span> just, already, yet, ever</li>
                  <li className="text-sm font-bold"><span className="text-pink-500">P. CONT.:</span> for, since, all day</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="font-black text-[#3D2B1F] text-sm tracking-[0.3em] uppercase border-b-2 border-gray-100 pb-2">Past Epoch</h3>
                <ul className="space-y-3">
                  <li className="text-sm font-bold"><span className="text-gray-500">SIMPLE:</span> yesterday, ago, in 1999</li>
                  <li className="text-sm font-bold"><span className="text-gray-500">CONT.:</span> when, while, at that time</li>
                  <li className="text-sm font-bold"><span className="text-gray-500">PERFECT:</span> before, after, by the time</li>
                  <li className="text-sm font-bold"><span className="text-gray-500">P. CONT.:</span> for (past duration), since</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="font-black text-amber-600 text-sm tracking-[0.3em] uppercase border-b-2 border-amber-100 pb-2">Future Epoch</h3>
                <ul className="space-y-3">
                  <li className="text-sm font-bold"><span className="text-amber-500">SIMPLE:</span> tomorrow, soon, later</li>
                  <li className="text-sm font-bold"><span className="text-amber-500">CONT.:</span> at this time tomorrow</li>
                  <li className="text-sm font-bold"><span className="text-amber-500">PERFECT:</span> by + time (by Monday)</li>
                  <li className="text-sm font-bold"><span className="text-amber-500">P. CONT.:</span> for + duration, by + time</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: The Cow-mandments (Dos & Don'ts) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-green-50 rounded-[2.5rem] p-8 md:p-10 border-2 border-green-200 shadow-sm">
                <h3 className="text-2xl font-black text-green-700 uppercase tracking-tighter mb-6 flex items-center gap-2">
                   <span className="text-3xl">✓</span> Universal Dos
                </h3>
                <ul className="space-y-4 text-green-900 font-bold">
                   <li className="flex gap-3 items-start"><span className="text-xl">🥛</span> Master all irregular V1, V2, V3 forms.</li>
                   <li className="flex gap-3 items-start"><span className="text-xl">🥛</span> Match your Subject with the Verb.</li>
                   <li className="flex gap-3 items-start"><span className="text-xl">🥛</span> Hunt for Time Markers in every sentence.</li>
                   <li className="flex gap-3 items-start"><span className="text-xl">🥛</span> Use Helping Verbs for Negatives/Questions.</li>
                </ul>
             </div>
             <div className="bg-red-50 rounded-[2.5rem] p-8 md:p-10 border-2 border-red-200 shadow-sm">
                <h3 className="text-2xl font-black text-red-700 uppercase tracking-tighter mb-6 flex items-center gap-2">
                   <span className="text-3xl">✗</span> Universal Don'ts
                </h3>
                <ul className="space-y-4 text-red-900 font-bold">
                   <li className="flex gap-3 items-start"><span className="text-xl">🐮</span> Don't use -ing with Stative Verbs (Know, Love).</li>
                   <li className="flex gap-3 items-start"><span className="text-xl">🐮</span> Don't use V2 after 'did' (✗ didn't went).</li>
                   <li className="flex gap-3 items-start"><span className="text-xl">🐮</span> Don't use Pres. Perfect with specific past times.</li>
                   <li className="flex gap-3 items-start"><span className="text-xl">🐮</span> Don't forget 'been' in Perfect Continuous.</li>
                </ul>
             </div>
          </section>

          {/* Section 4: The Shape-Shifters (Irregular Verbs) */}
          <section className="bg-[#3D2B1F] rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl">🖋️</div>
             <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 italic">The Shape-Shifters</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                   <h4 className="text-pink-400 font-black uppercase tracking-widest text-[11px] mb-4">A-A-A (Immutable)</h4>
                   <p className="text-sm font-bold leading-relaxed opacity-90">Cut-Cut-Cut, Hit-Hit-Hit, Put-Put-Put, Read-Read-Read, Set-Set-Set, Cost-Cost-Cost.</p>
                </div>
                <div>
                   <h4 className="text-pink-400 font-black uppercase tracking-widest text-[11px] mb-4">A-B-B (The Twins)</h4>
                   <p className="text-sm font-bold leading-relaxed opacity-90">Buy-Bought-Bought, Teach-Taught-Taught, Think-Thought-Thought, Bring-Brought-Brought, Keep-Kept-Kept.</p>
                </div>
                <div>
                   <h4 className="text-pink-400 font-black uppercase tracking-widest text-[11px] mb-4">A-B-C (The Trinity)</h4>
                   <p className="text-sm font-bold leading-relaxed opacity-90">Go-Went-Gone, Eat-Ate-Eaten, Write-Wrote-Written, Do-Did-Done, See-Saw-Seen, Swim-Swam-Swum.</p>
                </div>
             </div>
          </section>

          {/* Section 5: Dr. Moo's Emergency Troubleshooting */}
          <section className="bg-amber-50 rounded-[3rem] p-8 md:p-12 border-2 border-amber-200">
             <h2 className="text-3xl md:text-4xl font-black text-[#2D1B0E] uppercase tracking-tighter mb-8">Troubleshooting Guide</h2>
             <div className="space-y-6">
                {[
                   { q: "Which tense should I use?", a: "Ask: When did it happen? Is it finished or ongoing? Look for time markers!" },
                   { q: "Present Perfect vs Simple Past?", a: "Simple Past has a specific time (Yesterday). Present Perfect focuses on the result NOW." },
                   { q: "V2 or V3?", a: "V2 is for Simple Past Affirmative. V3 is for Perfect tenses and Passive voice." },
                   { q: "For vs Since?", a: "FOR is duration (2 hours). SINCE is a starting point (Monday)." },
                   { q: "When do I need Past Perfect?", a: "Only with TWO past actions to show which one happened FIRST." }
                ].map((item, i) => (
                   <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 group hover:border-amber-400 transition-colors">
                      <p className="text-[#FF1493] font-black uppercase text-[10px] tracking-widest mb-1">Problem {i+1}: "{item.q}"</p>
                      <p className="text-[#3D2B1F] font-bold text-lg leading-tight">Moo-lution: {item.a}</p>
                   </div>
                ))}
             </div>
          </section>
        </div>

        {/* Start Button Area */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#FF1493] animate-bounce">Ready for the Trial?</p>
          <Button variant="accent" onClick={() => setStep('quiz')} className="!px-24 !py-6 text-2xl !rounded-3xl shadow-strawberry scale-110 hover:scale-115 transition-all">
            Enter Grand Trial 🚀
          </Button>
          <button onClick={onExit} className="text-[10px] font-black uppercase text-gray-400 hover:text-[#FF1493] transition-colors tracking-widest mt-4">
             Cancel & Return
          </button>
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