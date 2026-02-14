
import React, { useState, useEffect, useRef } from 'react';
import { QuizQuestion } from '../types';
import { Button } from '../components/Button';

interface QuizPageProps {
  title: string;
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  onExit: () => void;
}

type QuizStep = 'setup' | 'active' | 'results';

export const QuizPage: React.FC<QuizPageProps> = ({ title, questions, onComplete, onExit }) => {
  const [step, setStep] = useState<QuizStep>('setup');
  const [targetCount, setTargetCount] = useState(10);
  const [selectedQuestions, setSelectedQuestions] = useState<QuizQuestion[]>([]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tempSelection, setTempSelection] = useState<number | null>(null);
  const [checkedIndices, setCheckedIndices] = useState<Set<number>>(new Set());
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  
  const [score, setScore] = useState(0);

  const questionCardRef = useRef<HTMLDivElement>(null);

  const scrollToQuestion = () => {
    if (questionCardRef.current) {
      const headerOffset = 100;
      const elementPosition = questionCardRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (step !== 'active') return;
      if (e.key === 'Enter') {
        e.preventDefault();
        handleCheckOrNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, currentIndex, tempSelection, checkedIndices, selectedQuestions.length]);

  const startQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const count = Math.min(targetCount, questions.length);
    setSelectedQuestions(shuffled.slice(0, count));
    setStep('active');
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers({});
    setCheckedIndices(new Set());
    setTempSelection(null);
    setTimeout(scrollToQuestion, 100);
  };

  const handleOptionClick = (idx: number) => {
    if (checkedIndices.has(currentIndex)) return;
    setTempSelection(idx);
  };

  const handleCheckOrNext = () => {
    const isChecked = checkedIndices.has(currentIndex);

    if (!isChecked) {
      if (tempSelection === null) return;
      
      const isCorrect = tempSelection === selectedQuestions[currentIndex].correctAnswer;
      if (isCorrect) setScore(s => s + 1);
      
      setUserAnswers(prev => ({ ...prev, [currentIndex]: tempSelection }));
      setCheckedIndices(prev => new Set(prev).add(currentIndex));
    } else {
      if (currentIndex < selectedQuestions.length - 1) {
        const nextIdx = currentIndex + 1;
        setCurrentIndex(nextIdx);
        setTempSelection(userAnswers[nextIdx] ?? null);
        setTimeout(scrollToQuestion, 50);
      } else {
        setStep('results');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      setCurrentIndex(prevIdx);
      setTempSelection(userAnswers[prevIdx] ?? null);
      setTimeout(scrollToQuestion, 50);
    }
  };

  const getMooMessage = (score: number, total: number) => {
    const pct = (score / total) * 100;
    if (pct === 100) return "Udderly perfect! Master of time!";
    if (pct >= 80) return "Mooo-velous effort!";
    if (pct >= 50) return "Keep grazing on those tenses!";
    return "Don't have a cow! Keep studying!";
  };

  if (step === 'setup') {
    return (
      <div className="max-w-2xl mx-auto p-4 py-8 animate-in zoom-in-95 duration-300">
        <div className="bg-white rounded-[2rem] p-8 shadow-creamy border-4 border-[#3D2B1F] text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="text-xl md:text-2xl font-black text-[#3D2B1F] uppercase tracking-tighter mb-6">{title} Setup</h2>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[5, 10, 20, 30, 40, 50].map(n => (
              <button
                key={n}
                onClick={() => setTargetCount(n)}
                className={`py-3 rounded-xl font-black text-base md:text-lg transition-all shadow-sm ${
                  targetCount === n 
                  ? 'bg-[#FF1493] text-white shadow-strawberry scale-105' 
                  : 'bg-pink-50 text-[#FF1493] hover:bg-pink-100'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="primary" onClick={startQuiz} className="py-4 text-base">Start Knowledge Trial 🚀</Button>
            <button onClick={onExit} className="text-[10px] font-black uppercase text-gray-400 mt-4 tracking-widest hover:text-[#FF1493] transition-colors">← Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'results') {
    return (
      <div className="max-w-4xl mx-auto p-4 py-8 animate-in fade-in duration-500">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-creamy border-t-[10px] border-[#FF1493] text-center mb-8">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="text-2xl md:text-3xl font-black text-[#3D2B1F] uppercase tracking-tighter mb-2">Trial Complete</h2>
          <div className="text-4xl md:text-6xl font-black text-[#FF1493] mb-4">
            {score} <span className="text-xl text-gray-300">/ {selectedQuestions.length}</span>
          </div>
          <p className="text-lg md:text-2xl font-serif italic text-[#2D1B0E] bg-pink-50 p-5 rounded-2xl mb-8 border border-pink-100">"{getMooMessage(score, selectedQuestions.length)}"</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="accent" onClick={() => setStep('setup')} className="!px-10 !py-3 !text-base shadow-strawberry">Retake</Button>
            <Button variant="primary" onClick={onExit} className="!px-10 !py-3 !text-base">Exit</Button>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-black text-[#3D2B1F] uppercase tracking-tight ml-4">Detailed Review</h3>
          {selectedQuestions.map((q, idx) => {
            const userAnswer = userAnswers[idx];
            const isCorrect = userAnswer === q.correctAnswer;
            return (
              <div key={idx} className={`bg-white rounded-[1.5rem] p-6 border-l-[6px] shadow-sm ${isCorrect ? 'border-green-400' : 'border-red-400'}`}>
                <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest mb-1">Question {idx + 1}</p>
                <h4 className="text-lg md:text-xl font-bold text-[#3D2B1F] mb-4">{q.question}</h4>
                <div className="bg-amber-50/50 p-4 rounded-xl text-sm md:text-base text-[#5D4037] italic border border-amber-100">
                  <span className="block font-black uppercase text-[9px] not-italic text-amber-600 mb-1">Explanation:</span>
                  "{q.explanation}"
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const currentQ = selectedQuestions[currentIndex];
  const isChecked = checkedIndices.has(currentIndex);

  return (
    <div className="relative max-w-6xl mx-auto p-4 py-4">
      {/* Background Watermark - Minimal impact */}
      <div className="absolute top-4 left-0 w-full flex justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden h-16">
         <h2 className="text-[7vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-[#2D1B0E]">
            QUIZ
         </h2>
      </div>

      <div className="relative mb-6 flex items-center justify-between gap-4 px-4 z-10">
        <div className="flex-shrink-0">
           <p className="text-[10px] font-black text-[#FF1493] uppercase tracking-[0.3em] mb-0.5">{title}</p>
           <h2 className="text-lg md:text-2xl font-black text-[#3D2B1F] uppercase tracking-tighter">Current Question</h2>
        </div>
        <div className="flex items-center gap-4 flex-grow max-w-md justify-end">
           <div className="hidden md:block flex-grow bg-pink-100/50 h-1.5 rounded-full overflow-hidden shadow-inner">
              <div className="h-full bg-[#FF1493] transition-all duration-500 ease-out shadow-strawberry" style={{ width: `${((currentIndex + 1) / selectedQuestions.length) * 100}%` }}></div>
           </div>
           <span className="text-[11px] font-black bg-[#3D2B1F] text-white px-4 py-1.5 rounded-lg shadow-md">
            {currentIndex + 1} / {selectedQuestions.length}
           </span>
        </div>
      </div>

      <div 
        ref={questionCardRef}
        className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-creamy border-t-[6px] border-pink-50 relative overflow-hidden z-10"
      >
        {isChecked && (
          <div className="absolute top-4 right-6 animate-in fade-in zoom-in duration-300">
             {tempSelection === currentQ.correctAnswer ? (
               <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-200">CORRECT ✨</span>
             ) : (
               <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-200">MOO-STAKE! 🐄</span>
             )}
          </div>
        )}

        <h3 className="text-2xl md:text-5xl font-bold mb-8 md:mb-12 text-[#3D2B1F] leading-tight pr-10 tracking-tight font-title">
          {currentQ.question}
        </h3>
        
        {/* Optimized Option Grid: Slimmer height for buttons */}
        <div className="space-y-2 md:space-y-3 mb-8 md:mb-12">
          {currentQ.options.map((option, idx) => {
            const isSelected = tempSelection === idx;
            const isCorrect = idx === currentQ.correctAnswer;
            
            let btnClass = "border-pink-50 hover:bg-pink-50/20";
            if (isChecked) {
              if (isCorrect) btnClass = "bg-green-50 border-green-500 ring-2 ring-green-100 shadow-sm";
              else if (isSelected) btnClass = "bg-red-50 border-red-500 opacity-90";
              else btnClass = "opacity-40 grayscale-[0.2]";
            } else if (isSelected) {
              btnClass = "bg-pink-50 border-[#FF1493] ring-2 ring-pink-100 shadow-sm";
            }

            return (
              <button
                key={idx}
                disabled={isChecked}
                onClick={() => handleOptionClick(idx)}
                className={`w-full text-left py-2.5 px-5 md:py-3 md:px-6 rounded-2xl border-2 transition-all duration-200 group flex items-center gap-4 ${btnClass}`}
              >
                <span className={`shrink-0 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-xl font-black text-xs md:text-xl transition-all ${
                  isSelected ? 'bg-[#FF1493] text-white rotate-2' : 'bg-gray-50 text-gray-400 group-hover:bg-pink-100 group-hover:text-[#FF1493]'
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className={`font-bold text-lg md:text-3xl leading-tight tracking-tight ${isSelected ? 'text-[#3D2B1F]' : 'text-gray-600'}`}>
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {isChecked && (
          <div className="p-4 md:p-6 bg-amber-50 rounded-[1.5rem] border border-amber-100 mb-8 md:mb-10 animate-in slide-in-from-top-1 duration-300">
            <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-2 flex items-center gap-2">
               🐄 Dr. Moo:
            </p>
            <p className="text-lg md:text-2xl font-serif italic text-[#2D1B0E] leading-snug">
              "{currentQ.explanation}"
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
           <button 
            onClick={handlePrevious} 
            disabled={currentIndex === 0}
            className="flex-1 py-3 md:py-4 px-6 rounded-xl border-2 border-[#3D2B1F] text-[#3D2B1F] font-black text-[11px] uppercase tracking-widest transition-all hover:bg-pink-50 disabled:opacity-20"
          >
            ← BACK
          </button>
          <button 
            onClick={handleCheckOrNext} 
            disabled={tempSelection === null && !isChecked}
            className={`flex-[2] py-3 md:py-4 px-6 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all shadow-md active:scale-95 disabled:opacity-40 ${isChecked ? 'bg-[#3D2B1F] text-white' : 'bg-[#FF1493] text-white shadow-strawberry'}`}
          >
            {isChecked 
              ? (currentIndex === selectedQuestions.length - 1 ? 'FINISH 🏁' : 'CONTINUE →') 
              : 'SUBMIT (ENTER) 🔍'}
          </button>
        </div>
      </div>
      
      <div className="mt-6 text-center">
         <button onClick={onExit} className="text-[10px] font-black uppercase text-gray-400 hover:text-[#FF1493] transition-colors tracking-widest">
           QUIT TRIAL
         </button>
      </div>
    </div>
  );
};
