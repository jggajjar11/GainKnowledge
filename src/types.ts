export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Domain {
  id: string;
  name: string;
  shortName: string;
  iconName: string; // Name of Lucide icon
  description: string;
  difficulty: "Intermediate" | "Advanced" | "Expert";
  colorClass: string; // Tailwind badge colors
  bgClass: string; // Tailwind card bg accent
  hoverBorderClass: string; // Tailwind hover border color
  textClass: string; // Tailwind text color
  questions: Question[];
}

export interface QuizSession {
  domainId: string;
  currentQuestionIndex: number;
  answers: { [questionIndex: number]: number }; // questionIndex -> selectedAnswerIndex
  isCompleted: boolean;
  score: number;
}
