
import { ModuleQuiz } from '../../types';

export const quiz4: ModuleQuiz = {
  moduleId: 4,
  questions: [
    {
      question: "Which tense describes an action completed before another action in the past?",
      options: ["Simple Past", "Past Continuous", "Past Perfect", "Past Perfect Continuous"],
      correctAnswer: 2,
      explanation: "Past Perfect (had + V3) is the 'Past of the Past'!"
    },
    {
      question: "Identify the tense: 'I was milking the cow when it started to rain.'",
      options: ["Simple Past", "Past Continuous", "Present Continuous", "Past Perfect"],
      correctAnswer: 1,
      explanation: "'Was milking' is Past Continuous, used for interrupted ongoing actions in the past."
    }
  ]
};
