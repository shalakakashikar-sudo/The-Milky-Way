
export interface Module {
  id: number;
  title: string;
  description: string;
  sections: Section[];
}

export interface Section {
  title: string;
  content: string | string[];
  type?: 'text' | 'list' | 'table' | 'formula';
  data?: any;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ModuleQuiz {
  moduleId: number;
  questions: QuizQuestion[];
}
