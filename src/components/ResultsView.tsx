import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { Domain, Question } from "../types";
import { Confetti } from "./Confetti";

interface ResultsViewProps {
  domain: Domain;
  score: number;
  answers: { [questionIndex: number]: number };
  onRetry: () => void;
  onHome: () => void;
  questions?: Question[];
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  domain,
  score,
  answers,
  onRetry,
  onHome,
  questions,
}) => {
  const activeQuestions = questions && questions.length > 0 ? questions : domain.questions;
  const totalQuestions = activeQuestions.length;
  const accuracy = Math.round((score / totalQuestions) * 100);

  // Filter missed questions
  const missedQuestions = activeQuestions.map((q, idx) => ({
    question: q,
    idx,
    selectedIdx: answers[idx],
  })).filter((item) => item.selectedIdx !== item.question.correctAnswerIndex);

  // Determine score classification and copy
  let scoreTier = "Active Learner";
  let scoreClass = "text-[#D97706] dark:text-amber-400";
  let bgGradient = "bg-[#CCFF00]";
  let IconBadge = Icons.BookOpen;
  let summaryText = "Solid review session. Tech interviews often test niche scenarios; review your missed questions below to cement these concepts before your interview.";

  if (accuracy >= 90) {
    scoreTier = "Elite Specialist";
    scoreClass = "text-[#15803D] dark:text-emerald-400";
    bgGradient = "bg-[#22C55E]";
    IconBadge = Icons.Trophy;
    summaryText = "Sensational performance! You demonstrated exceptional command over high-level scenario architecture. You are fully ready to crush this domain in your interview.";
  } else if (accuracy >= 75) {
    scoreTier = "Proficient Architect";
    scoreClass = "text-[#1D4ED8] dark:text-[#60A5FA]";
    bgGradient = "bg-[#60A5FA]";
    IconBadge = Icons.Award;
    summaryText = "Excellent job! You have a highly functional grasp of the core concepts. Take a quick look at the few missed questions to refine your edge cases.";
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 relative" id="results-container">
      {/* Confetti Celebration on High Scores */}
      {accuracy >= 75 && <Confetti />}

      {/* Main Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white dark:bg-[#111827] rounded-none p-6 md:p-8 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative overflow-hidden"
      >
        <div className={`absolute inset-0 ${bgGradient} opacity-5 pointer-events-none`} />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Animated Badge Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="p-4 border-4 border-black bg-white dark:bg-slate-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] mb-6 rounded-none"
          >
            <IconBadge className={`w-12 h-12 ${scoreClass} stroke-[2.5px]`} />
          </motion.div>

          <span className="text-xs font-mono font-black uppercase tracking-wider text-black dark:text-white bg-white dark:bg-slate-800 px-2.5 py-1 border-2 border-black">
            Skill Check Completed
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white mt-4 uppercase tracking-tighter">
            {domain.name}
          </h2>

          {/* Large Accuracy / Score Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-md w-full my-8">
            <div className="bg-white dark:bg-slate-950 border-4 border-black dark:border-white p-5 rounded-none text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Accuracy Score
              </span>
              <span className="text-3xl md:text-4xl font-black uppercase text-black bg-[#CCFF00] px-3 py-1 border-2 border-black inline-block shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                {accuracy}%
              </span>
            </div>
            <div className="bg-white dark:bg-slate-950 border-4 border-black dark:border-white p-5 rounded-none text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Correct Answers
              </span>
              <span className="text-3xl md:text-4xl font-black text-black dark:text-white inline-block pt-1 uppercase">
                {score} / {totalQuestions}
              </span>
            </div>
          </div>

          <div className="bg-[#F3F4F6] dark:bg-slate-950 p-5 rounded-none border-4 border-black dark:border-white max-w-xl text-left shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <span className="text-xs font-black font-mono tracking-wider uppercase px-2.5 py-1 border-2 border-black bg-[#7C3AED] text-white mr-2 inline-block mb-3 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              {scoreTier}
            </span>
            <p className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300 leading-relaxed">
              {summaryText}
            </p>
          </div>

          {/* Action Row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button
              id="retry-quiz-btn"
              onClick={onRetry}
              className="flex items-center justify-center gap-2 px-6 py-3.5 font-black uppercase text-white bg-black dark:bg-white dark:text-black border-2 border-black dark:border-white rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] transition-all cursor-pointer hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              <Icons.RotateCcw className="w-4 h-4 stroke-[3px]" />
              Retry Skill Check
            </button>
            <button
              id="home-selection-btn"
              onClick={onHome}
              className="flex items-center justify-center gap-2 px-6 py-3.5 font-black uppercase text-black dark:text-white bg-white dark:bg-slate-800 border-2 border-black dark:border-white rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] transition-all cursor-pointer hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              <Icons.Grid className="w-4 h-4 stroke-[3px]" />
              Explore Other Domains
            </button>
          </div>
        </div>
      </motion.div>

      {/* Misstep Review Panel */}
      <div className="mt-12">
        <h3 className="text-xl font-black text-black dark:text-white uppercase flex items-center gap-2 mb-6 border-b-4 border-black dark:border-white pb-2">
          <Icons.CheckSquare className="w-6 h-6 stroke-[3px]" />
          {missedQuestions.length === 0
            ? "Flawless Performance! Zero Incorrect Answers"
            : `Review Analysis: ${missedQuestions.length} Missteps`}
        </h3>

        {missedQuestions.length > 0 && (
          <div className="space-y-6" id="missed-questions-list">
            {missedQuestions.map(({ question, idx, selectedIdx }) => (
              <div
                key={question.id}
                id={`missed-card-${question.id}`}
                className="bg-white dark:bg-slate-900 rounded-none p-6 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono font-black px-2 py-1 border-2 border-black bg-[#CCFF00] text-black shrink-0 mt-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    Q{idx + 1}
                  </span>
                  <h4 className="font-black text-lg text-black dark:text-white leading-snug uppercase tracking-tight">
                    {question.text}
                  </h4>
                </div>

                <div className="mt-6 space-y-3.5 pl-0 sm:pl-10">
                  {/* Option Selected (Wrong) */}
                  {selectedIdx !== undefined && (
                    <div className="flex items-start gap-3 text-sm bg-[#FCA5A5] p-3 border-2 border-black text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      <Icons.XCircle className="w-5 h-5 shrink-0 mt-0.5 text-black font-black" />
                      <div>
                        <span className="font-black uppercase mr-1.5 block sm:inline-block">Your Selection:</span>
                        <span className="font-bold">{question.options[selectedIdx]}</span>
                      </div>
                    </div>
                  )}

                  {/* Correct Option */}
                  <div className="flex items-start gap-3 text-sm bg-[#86EFAC] p-3 border-2 border-black text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    <Icons.CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-black font-black" />
                    <div>
                      <span className="font-black uppercase mr-1.5 block sm:inline-block">Correct Answer:</span>
                      <span className="font-bold">{question.options[question.correctAnswerIndex]}</span>
                    </div>
                  </div>

                  {/* Explanation text */}
                  <div className="text-xs font-bold leading-relaxed bg-white dark:bg-slate-950 p-4 border-2 border-black text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                    <span className="font-black uppercase tracking-wider block mb-2 text-[#7C3AED] dark:text-[#CCFF00] font-mono text-[10px]">
                      Technical Concept Reinforcement
                    </span>
                    {question.explanation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
