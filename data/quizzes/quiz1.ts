
import { ModuleQuiz } from '../../types';

export const quiz1: ModuleQuiz = {
  moduleId: 1,
  questions: [
    {
      question: "What is the 'Golden Formula' for Tenses according to Dr. Moo?",
      options: ["Tense = Subject + Verb", "Tense = Time + Work (Aspect)", "Tense = Past + Future", "Tense = Noun + Adjective"],
      correctAnswer: 1,
      explanation: "Exactly! Tenses are the combination of Time (when it happened) and the Aspect/Work (how much is done)."
    },
    {
      question: "How many main 'Times' are there in English tenses?",
      options: ["2 (Past, Present)", "3 (Past, Present, Future)", "4 (Past, Present, Future, Future-Past)", "12"],
      correctAnswer: 1,
      explanation: "Right! We have the Past, the Present, and the Future."
    }
  ]
};
