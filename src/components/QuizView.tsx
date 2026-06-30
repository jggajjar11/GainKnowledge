import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { Domain, Question } from "../types";

interface QuizViewProps {
  domain: Domain;
  onBack: () => void;
  onComplete: (score: number, answers: { [key: number]: number }, questions: Question[]) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ domain, onBack, onComplete }) => {
  const [shuffledQuestions] = useState<Question[]>(() => {
    return domain.questions.map((q) => {
      // Pair options with their original index to track correctness
      const indexedOptions = q.options.map((option, index) => ({
        option,
        isCorrect: index === q.correctAnswerIndex,
      }));

      // Shuffle the indexed options using Fisher-Yates algorithm
      const shuffled = [...indexedOptions];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      const newOptions = shuffled.map((o) => o.option);
      const newCorrectAnswerIndex = shuffled.findIndex((o) => o.isCorrect);

      return {
        ...q,
        options: newOptions,
        correctAnswerIndex: newCorrectAnswerIndex,
      };
    });
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [score, setScore] = useState(0);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const totalQuestions = shuffledQuestions.length;
  const currentQuestion = shuffledQuestions[currentIndex];
  const isAnswered = selectedAnswer !== null;

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return; // Prevent multiple answers

    setSelectedAnswer(optionIndex);
    const updatedAnswers = { ...answers, [currentIndex]: optionIndex };
    setAnswers(updatedAnswers);

    const isCorrect = optionIndex === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null); // Reset for next question
    } else {
      // Calculate final score based on correct answers
      let finalScore = 0;
      shuffledQuestions.forEach((q, idx) => {
        if (answers[idx] === q.correctAnswerIndex) {
          finalScore++;
        }
      });
      onComplete(finalScore, answers, shuffledQuestions);
    }
  };

  const progressPercent = ((currentIndex) / totalQuestions) * 100;
  const progressPercentWithCurrent = ((currentIndex + 1) / totalQuestions) * 100;

  // Dynamically resolve the icon
  const IconComponent = (Icons as any)[domain.iconName] || Icons.BookOpen;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6 relative" id="quiz-container">
      {/* Exit Confirmation Dialog */}
      <AnimatePresence>
        {showExitConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 rounded-none p-6 max-w-md w-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] border-4 border-black dark:border-white"
            >
              <h4 className="text-lg font-black text-black dark:text-white uppercase flex items-center gap-2">
                <Icons.AlertTriangle className="w-5 h-5 text-amber-500" />
                Quit Current Quiz?
              </h4>
              <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase leading-relaxed">
                Your progress in this {domain.name} quiz will be lost. Are you sure you want to exit?
              </p>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  id="confirm-stay-btn"
                  onClick={() => setShowExitConfirm(false)}
                  className="px-4 py-2 text-xs font-black uppercase text-black dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border-2 border-black dark:border-white cursor-pointer"
                >
                  Keep Going
                </button>
                <button
                  id="confirm-quit-btn"
                  onClick={onBack}
                  className="px-4 py-2 text-xs font-black uppercase text-white bg-rose-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  Yes, Quit Quiz
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Quiz Top bar */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mb-6">
        <button
          id="quiz-back-btn"
          onClick={() => {
            if (currentIndex > 0 || isAnswered) {
              setShowExitConfirm(true);
            } else {
              onBack();
            }
          }}
          className="flex items-center gap-1.5 text-xs font-black uppercase text-black dark:text-white border-2 border-black dark:border-white bg-white dark:bg-slate-800 px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
        >
          <Icons.ArrowLeft className="w-4 h-4 stroke-[3px]" />
          Exit Quiz
        </button>

        <div className="flex items-center gap-2 border-2 border-black dark:border-white bg-white dark:bg-slate-800 text-black dark:text-white px-3 py-1.5 text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
          <span className={`p-0.5 border border-black dark:border-white bg-[#7C3AED] text-white`}>
            <IconComponent className="w-3.5 h-3.5" />
          </span>
          <span>
            {domain.shortName} Check
          </span>
        </div>

        <span className="text-xs font-mono font-black text-black border-2 border-black bg-[#CCFF00] px-2.5 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
          Q: {currentIndex + 1} / {totalQuestions}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-white dark:bg-slate-800 h-6 border-4 border-black dark:border-white rounded-none mb-8 overflow-hidden relative shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
        <div
          className="h-full bg-[#22C55E] border-r-2 border-black transition-all duration-500 ease-out"
          style={{ width: `${progressPercentWithCurrent}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[10px] font-black uppercase tracking-widest text-black mix-blend-difference">
            Progress Track: {Math.round(progressPercentWithCurrent)}%
          </span>
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="bg-white dark:bg-[#111827] rounded-none p-6 md:p-8 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
        >
          {/* Question Text */}
          <span className="text-xs font-mono font-black text-[#7C3AED] dark:text-[#CCFF00] uppercase tracking-wider block mb-2">
            Scenario Interview Prompt
          </span>
          <h2 className="text-xl md:text-2xl font-black text-black dark:text-white leading-tight uppercase tracking-tight">
            {currentQuestion.text}
          </h2>

          {/* Options List */}
          <div className="mt-8 space-y-3.5">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrectOpt = idx === currentQuestion.correctAnswerIndex;

              let buttonStyles = "bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-[#1B2330] text-black dark:text-white hover:translate-x-[-1px] hover:translate-y-[-1px]";
              let badgeIcon = null;

              if (isAnswered) {
                if (isCorrectOpt) {
                  // Correct option gets highlighted bold green
                  buttonStyles = "bg-[#22C55E] text-black font-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]";
                  badgeIcon = <Icons.CheckCircle2 className="w-5 h-5 text-black shrink-0 font-bold" />;
                } else if (isSelected) {
                  // Wrong selected option gets highlighted bold red
                  buttonStyles = "bg-[#EF4444] text-black font-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]";
                  badgeIcon = <Icons.XCircle className="w-5 h-5 text-black shrink-0 font-bold" />;
                } else {
                  // Non-selected wrong option gets dimmed
                  buttonStyles = "bg-slate-50 dark:bg-slate-950/40 opacity-50 text-slate-400 dark:text-slate-600 shadow-none";
                }
              }

              return (
                <button
                  key={idx}
                  id={`option-btn-${idx}`}
                  disabled={isAnswered}
                  onClick={() => handleOptionSelect(idx)}
                  className={`w-full flex items-start gap-3.5 p-4 rounded-none border-2 border-black dark:border-white text-left text-sm md:text-base transition-all duration-150 cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] ${buttonStyles}`}
                >
                  <span className={`w-7 h-7 border-2 border-black flex items-center justify-center font-black text-xs shrink-0 ${
                    isSelected ? "bg-[#CCFF00] text-black" : "bg-black text-white dark:bg-white dark:text-black"
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-grow pt-0.5 font-bold">{option}</span>
                  {badgeIcon}
                </button>
              );
            })}
          </div>

          {/* Explanation Panel */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-8 p-5 rounded-none border-4 border-black text-black ${
                selectedAnswer === currentQuestion.correctAnswerIndex
                  ? "bg-[#CCFF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  : "bg-[#FCA5A5] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              <div className="flex items-start gap-2.5">
                <Icons.AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-black text-sm uppercase tracking-wider mb-1">
                    {selectedAnswer === currentQuestion.correctAnswerIndex ? "Key Takeaway (Correct!)" : "Interview Analysis (Correction)"}
                  </h4>
                  <p className="text-sm font-bold leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Bottom Action bar */}
          {isAnswered && (
            <div className="mt-8 flex justify-end">
              <button
                id="next-question-btn"
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 font-black text-white bg-black dark:bg-white dark:text-black border-2 border-black uppercase text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] cursor-pointer hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
              >
                {currentIndex + 1 === totalQuestions ? "Finish Review" : "Next Question"}
                <Icons.ArrowRight className="w-4 h-4 font-bold" />
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
