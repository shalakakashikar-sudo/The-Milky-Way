
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { ModulesPage } from './pages/ModulesPage';
import { ModuleDetail } from './pages/ModuleDetail';
import { QuizPage } from './pages/QuizPage';
import { GrandQuizFlow } from './pages/GrandQuizFlow';
import { modules } from './data/modules';
import { moduleQuizzes } from './data/quizzes/moduleQuizzes';
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
          onNextModule={handleNextModule}
          onPrevModule={handlePrevModule}
          onStartQuiz={() => navigateTo('module-quiz')}
          onBackToModules={() => navigateTo('modules')}
          hasPrevModule={modules.findIndex(m => m.id === selectedModule.id) > 0}
          hasNextModule={modules.findIndex(m => m.id === selectedModule.id) < modules.length - 1}
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
        <GrandQuizFlow 
          onComplete={(score) => {
            setMascotMessage(`Grand Quiz complete! You scored ${score}! You're a legend-dairy master of tenses!`);
            navigateTo('landing');
          }}
          onExit={() => navigateTo('landing')}
        />
      )}
    </Layout>
  );
};

export default App;
