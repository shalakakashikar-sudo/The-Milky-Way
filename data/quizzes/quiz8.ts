
import { ModuleQuiz } from '../../types';

export const quiz8: ModuleQuiz = {
  moduleId: 8,
  questions: [
    {
      question: "Correct this sentence: 'I have seen him yesterday.'",
      options: ["I saw him yesterday.", "I had seen him yesterday.", "I am seeing him yesterday.", "No correction needed."],
      correctAnswer: 0,
      explanation: "Specific time markers like 'yesterday' require Simple Past, not Present Perfect."
    },
    {
      question: "Choose the right form: 'She ___ (work) here for ten years now.'",
      options: ["works", "is working", "has been working", "worked"],
      correctAnswer: 2,
      explanation: "Duration + still continuing = Present Perfect Continuous!"
    }
  ]
};
