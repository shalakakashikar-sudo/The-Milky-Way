
import { ModuleQuiz } from '../../types';

export const quiz2: ModuleQuiz = {
  moduleId: 2,
  questions: [
    {
      question: "What is the basic sentence structure in English?",
      options: ["Object + Verb + Subject", "Subject + Verb + Object", "Verb + Subject + Object", "Subject + Object + Verb"],
      correctAnswer: 1,
      explanation: "SVO is the standard! Subject + Verb + Object is our core building block."
    },
    {
      question: "Which of these is a 'Helping Verb' (Auxiliary Verb)?",
      options: ["Run", "Eat", "Have", "Speak"],
      correctAnswer: 2,
      explanation: "'Have' is a helping verb used in Perfect tenses. 'Run', 'Eat', and 'Speak' are main verbs."
    }
  ]
};
