
import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { Button } from '../components/Button';

interface QuizPageProps {
  title: string;
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  onExit: () => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ title, questions, onComplete, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleOptionClick = (idx: number) => {
    if (showExplanation) return;
    setSelectedOption(idx);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (!showExplanation) {
      setShowExplanation(true);
    } else {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
        setShowExplanation(false);
      } else {
        setQuizFinished(true);
      }
    }
  };

  if (quizFinished) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center min-h-[60vh]">
        <div className="text-7xl mb-6">🍦</div>
        <h2 className="text-4xl font-bold mb-2">Quiz Complete!</h2>
        <p className="text-xl mb-8">You scored <span className="text-[#FF69B4] font-bold">{score}</span> out of {questions.length}</p>
        <div className="flex gap-4">
          <Button onClick={() => onComplete(score)}>Done</Button>
          <Button variant="secondary" onClick={onExit}>Back to Modules</Button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto p-6 py-12">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#3D2B1F]">{title}</h2>
        <span className="text-xs font-bold px-3 py-1 bg-[#FFB6C1] rounded-full">
          Q {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl border border-pink-100">
        <h3 className="text-xl font-semibold mb-8 text-[#3D2B1F]">{currentQ.question}</h3>
        
        <div className="space-y-4 mb-8">
          {currentQ.options.map((option, idx) => {
            let colorClass = "border-[#3D2B1F]/10 hover:border-[#FFB6C1]";
            if (showExplanation) {
              if (idx === currentQ.correctAnswer) colorClass = "bg-green-100 border-green-500";
              else if (idx === selectedOption) colorClass = "bg-red-100 border-red-500";
              else colorClass = "opacity-50 border-gray-100";
            } else if (selectedOption === idx) {
              colorClass = "bg-[#FFB6C1]/20 border-[#FFB6C1]";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 ${colorClass}`}
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3D2B1F] text-[#FDF5E6] text-xs">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="p-4 bg-pink-50 rounded-2xl border border-pink-200 mb-8 animate-fade-in">
            <p className="text-sm font-bold text-[#FF69B4] uppercase mb-1">Dr. Moo says:</p>
            <p className="text-sm italic">{currentQ.explanation}</p>
          </div>
        )}

        <Button 
          variant="primary" 
          onClick={handleNext} 
          className="w-full py-4"
          disabled={selectedOption === null}
        >
          {showExplanation ? (currentIndex === questions.length - 1 ? 'Show Results' : 'Next Question') : 'Check Answer'}
        </Button>
      </div>
    </div>
  );
};
