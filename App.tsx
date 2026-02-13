
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { ModulesPage } from './pages/ModulesPage';
import { ModuleDetail } from './pages/ModuleDetail';
import { QuizPage } from './pages/QuizPage';
import { modules } from './data/modules';
import { moduleQuizzes } from './data/quizzes/moduleQuizzes';
import { quiz8 } from './data/quizzes/quiz8';
import { Module } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('landing');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [mascotMessage, setMascotMessage] = useState<string | null>(null);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    
    // Mascot comments on navigation
    if (page === 'modules') setMascotMessage("Choose a module to moo-ve forward!");
    if (page === 'grand-quiz') setMascotMessage("The Grand Quiz! Time to show off your legend-dairy skills!");
    if (page === 'landing') setMascotMessage("Welcome back to the pasture!");
  };

  const handleSelectModule = (module: Module) => {
    setSelectedModule(module);
    navigateTo('module-detail');
    setMascotMessage(`Ah, ${module.title}. A fine choice!`);
  };

  const handleNextModule = () => {
    if (selectedModule) {
      const nextIdx = modules.findIndex(m => m.id === selectedModule.id) + 1;
      if (nextIdx < modules.length) {
        setSelectedModule(modules[nextIdx]);
        setMascotMessage("Onto the next epoch of tenses!");
        window.scrollTo(0, 0);
      }
    }
  };

  const handlePrevModule = () => {
    if (selectedModule) {
      const prevIdx = modules.findIndex(m => m.id === selectedModule.id) - 1;
      if (prevIdx >= 0) {
        setSelectedModule(modules[prevIdx]);
        setMascotMessage("Going back in time, eh?");
        window.scrollTo(0, 0);
      }
    }
  };

  const currentQuiz = selectedModule ? moduleQuizzes.find(q => q.moduleId === selectedModule.id) : null;

  // Combining grand quiz questions with Module 8 questions
  const grandQuizQuestions = [
    {
      question: "Which tense emphasizes the duration of an ongoing action starting from the past?",
      options: ["Simple Present", "Present Perfect", "Present Perfect Continuous", "Simple Past"],
      correctAnswer: 2,
      explanation: "Present Perfect Continuous (S + have/has + been + V4) focuses on how long an action has been happening."
    },
    {
      question: "When do we use 'since' vs 'for'?",
      options: ["Since for duration, For for starting point", "Both for duration", "Since for starting point, For for duration", "No difference"],
      correctAnswer: 2,
      explanation: "Since 2020 (point), For 5 years (duration)."
    },
    ...quiz8.questions // Adding mastery questions from module 8
  ];

  return (
    <Layout onNavigate={navigateTo} mascotMessage={mascotMessage}>
      {currentPage === 'landing' && (
        <LandingPage 
          onStartLearn={() => navigateTo('modules')} 
          onStartGrandQuiz={() => navigateTo('grand-quiz')}
        />
      )}
      
      {currentPage === 'modules' && (
        <ModulesPage onSelectModule={handleSelectModule} />
      )}

      {currentPage === 'module-detail' && selectedModule && (
        <ModuleDetail 
          module={selectedModule} 
          onNext={handleNextModule}
          onPrev={handlePrevModule}
          onStartQuiz={() => navigateTo('module-quiz')}
          hasPrev={modules.findIndex(m => m.id === selectedModule.id) > 0}
          hasNext={modules.findIndex(m => m.id === selectedModule.id) < modules.length - 1}
        />
      )}

      {currentPage === 'module-quiz' && selectedModule && (
        <QuizPage 
          title={`${selectedModule.title} Quiz`}
          questions={currentQuiz?.questions || [
            {
              question: "Sample Question: What is the mascot's name?",
              options: ["Moo-man", "Dr. Moo", "Cow King", "Beefy"],
              correctAnswer: 1,
              explanation: "Dr. Moo is our time-traveling guide!"
            }
          ]}
          onComplete={(score) => {
            setMascotMessage(`You scored ${score}! Mooo-velous effort!`);
            navigateTo('modules');
          }}
          onExit={() => navigateTo('module-detail')}
        />
      )}

      {currentPage === 'grand-quiz' && (
        <QuizPage 
          title="The Grand Milky Way Quiz"
          questions={grandQuizQuestions}
          onComplete={(score) => {
            setMascotMessage(`Grand Quiz complete! You're a legend-dairy master of tenses!`);
            navigateTo('landing');
          }}
          onExit={() => navigateTo('landing')}
        />
      )}
    </Layout>
  );
};

export default App;
