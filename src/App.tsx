import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { domains } from "./data";
import { DomainCard } from "./components/DomainCard";
import { QuizView } from "./components/QuizView";
import { ResultsView } from "./components/ResultsView";
import { Question } from "./types";

export default function App() {
  const [activeDomainId, setActiveDomainId] = useState<string | null>(null);
  const [quizState, setQuizState] = useState<"home" | "quiz" | "results">("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<"All" | "Intermediate" | "Advanced" | "Expert">("All");
  const [darkMode, setDarkMode] = useState<boolean>(true); // Default to a gorgeous modern dark mode
  const [highScores, setHighScores] = useState<{ [domainId: string]: number }>({});
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  
  // Track active session stats
  const [activeScore, setActiveScore] = useState(0);
  const [activeAnswers, setActiveAnswers] = useState<{ [key: number]: number }>({});
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);

  // Load high scores and theme from localStorage on mount
  useEffect(() => {
    const storedScores = localStorage.getItem("gainknowledge_high_scores");
    if (storedScores) {
      try {
        setHighScores(JSON.parse(storedScores));
      } catch (e) {
        console.error("Failed to parse high scores", e);
      }
    }

    const storedTheme = localStorage.getItem("gainknowledge_theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    }
  }, []);

  // Sync theme to document body
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("gainknowledge_theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Scroll to top when switching views (home, quiz, results)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [quizState, activeDomainId]);

  const activeDomain = domains.find((d) => d.id === activeDomainId);

  const handleSelectDomain = (domainId: string) => {
    setActiveDomainId(domainId);
    setQuizState("quiz");
  };

  const handleQuizComplete = (score: number, answers: { [key: number]: number }, questions: Question[]) => {
    setActiveScore(score);
    setActiveAnswers(answers);
    setActiveQuestions(questions);
    setQuizState("results");

    if (activeDomainId) {
      const currentHigh = highScores[activeDomainId] || 0;
      if (score > currentHigh) {
        const updated = { ...highScores, [activeDomainId]: score };
        setHighScores(updated);
        localStorage.setItem("gainknowledge_high_scores", JSON.stringify(updated));
      }
    }
  };

  const handleRetry = () => {
    setQuizState("quiz");
    setActiveScore(0);
    setActiveAnswers({});
    setActiveQuestions([]);
  };

  const handleHome = () => {
    setQuizState("home");
    setActiveDomainId(null);
    setActiveScore(0);
    setActiveAnswers({});
    setActiveQuestions([]);
  };

  // Filter logic
  const filteredDomains = domains.filter((domain) => {
    const matchesSearch =
      domain.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      domain.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      domain.shortName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDifficulty =
      selectedDifficulty === "All" || domain.difficulty === selectedDifficulty;

    return matchesSearch && matchesDifficulty;
  });

  // Global Progress metrics
  const totalCompleted = Object.keys(highScores).length;
  const averageAccuracy = totalCompleted > 0
    ? Math.round(
        (Object.entries(highScores).reduce<number>((acc, [domId, score]) => {
          const dom = domains.find((d) => d.id === domId);
          const totalQ = dom ? dom.questions.length : 20;
          return acc + (Number(score) / totalQ);
        }, 0) / totalCompleted) * 100
      )
    : 0;

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-[#F3F4F6] dark:bg-[#0B0F19] text-[#111827] dark:text-slate-100 font-sans ${darkMode ? "dark" : ""}`}>
      
      {/* Dynamic Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-[#111827] border-b-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={handleHome} className="flex items-center gap-3.5 group cursor-pointer text-left">
            <div className="w-10 h-10 bg-[#7C3AED] border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center text-white">
              <Icons.GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-black text-2xl tracking-tighter uppercase text-black dark:text-white">
                GainKnowledge
              </span>
              <span className="text-[10px] block -mt-0.5 font-black tracking-wider text-[#7C3AED] dark:text-[#CCFF00] uppercase">
                Interview Skill Check
              </span>
            </div>
          </button>

          <div className="hidden md:flex gap-2 text-sm font-black uppercase">
            <span className="px-3 py-1 bg-white dark:bg-slate-800 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
              Interview-Ready
            </span>
            <span className="px-3 py-1 bg-[#22C55E] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              2026 Edition
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark Mode toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 border-2 border-black dark:border-white bg-white dark:bg-slate-800 text-black dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all cursor-pointer"
              title="Toggle Dark Mode"
            >
              {darkMode ? <Icons.Sun className="w-4 h-4 text-amber-500 font-bold" /> : <Icons.Moon className="w-4 h-4 text-indigo-500 font-bold" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <AnimatePresence mode="wait">
          
          {/* HOME DASHBOARD */}
          {quizState === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Banner Slogan */}
              <div className="text-center max-w-3xl mx-auto mb-12 mt-4">
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 border-2 border-black dark:border-white bg-[#CCFF00] text-black text-xs font-black uppercase mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  <Icons.Zap className="w-3.5 h-3.5" />
                  The Night-Before Interview Prep Tool
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter uppercase leading-none mb-4">
                  Master Your Upcoming <span className="bg-[#7C3AED] text-white px-3 py-1 inline-block border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">Tech Interview</span>
                </h1>
                <p className="mt-6 text-sm md:text-base font-bold text-slate-700 dark:text-slate-300 leading-relaxed uppercase tracking-wide">
                  Fast, realistic, scenario-based skill checks built to match current <span className="underline decoration-[#7C3AED] decoration-4">2025-2026 engineering standards</span>. Zero placeholders, real technical evaluations.
                </p>
              </div>

              {/* Stats Bar */}
              {totalCompleted > 0 && (
                <div className="max-w-4xl mx-auto mb-12 border-4 border-black dark:border-white rounded-none bg-white dark:bg-slate-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x-4 divide-black dark:divide-white text-center">
                  <div className="p-5">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      Domains Reviewed
                    </span>
                    <span className="text-2xl font-black text-black dark:text-white uppercase">
                      {totalCompleted} / 12
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      Global Preparedness
                    </span>
                    <span className="text-2xl font-black text-[#7C3AED] dark:text-[#CCFF00] uppercase">
                      {averageAccuracy}% Accuracy
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      Scenarios Checked
                    </span>
                    <span className="text-2xl font-black text-black dark:text-white uppercase">
                      {Object.keys(highScores).reduce((acc, k) => acc + (domains.find(d => d.id === k)?.questions.length || 20), 0)}
                    </span>
                  </div>
                  <div className="p-5 bg-[#CCFF00] text-black flex flex-col items-center justify-center">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-black/70 block mb-1">
                      Session Action
                    </span>
                    {!showResetConfirm ? (
                      <button
                        id="reset-session-btn"
                        onClick={() => setShowResetConfirm(true)}
                        className="text-xs font-black uppercase tracking-wide inline-flex items-center gap-1 mt-1 border-2 border-black bg-rose-500 hover:bg-rose-600 text-white px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
                      >
                        <Icons.Trash2 className="w-3.5 h-3.5 stroke-[2.5px]" />
                        Reset Session
                      </button>
                    ) : (
                      <div className="flex flex-col gap-1 items-center w-full">
                        <span className="text-[9px] font-black uppercase tracking-wider text-rose-700 animate-pulse text-center">
                          Clear history?
                        </span>
                        <div className="flex gap-1.5 w-full justify-center">
                          <button
                            id="confirm-reset-btn"
                            onClick={() => {
                              setHighScores({});
                              localStorage.removeItem("gainknowledge_high_scores");
                              setShowResetConfirm(false);
                            }}
                            className="text-[10px] font-black uppercase bg-red-600 hover:bg-red-700 text-white px-2.5 py-1 border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                          >
                            Yes
                          </button>
                          <button
                            id="cancel-reset-btn"
                            onClick={() => setShowResetConfirm(false)}
                            className="text-[10px] font-black uppercase bg-white hover:bg-slate-100 text-black px-2.5 py-1 border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                          >
                            No
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Filters Block */}
              <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-slate-900 p-5 border-4 border-black dark:border-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                {/* Search input */}
                <div className="relative w-full md:max-w-md">
                  <Icons.Search className="absolute left-3.5 top-3.5 w-4 h-4 text-black dark:text-white font-black" />
                  <input
                    id="search-domains-input"
                    type="text"
                    placeholder="Search by tech keyword (e.g. React, Spark, GitOps)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 border-2 border-black dark:border-white bg-slate-50 dark:bg-slate-950 font-bold text-sm text-black dark:text-white placeholder:text-slate-400 rounded-none focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-3.5 text-black dark:text-white hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      <Icons.X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Difficulty Filters */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {(["All", "Intermediate", "Advanced", "Expert"] as const).map((diff) => (
                    <button
                      key={diff}
                      id={`filter-${diff}`}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`px-4 py-2 text-xs font-black uppercase border-2 border-black dark:border-white transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] ${
                        selectedDifficulty === diff
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "bg-white dark:bg-slate-800 text-black dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      {diff} Track
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of Domain Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="domains-grid">
                {filteredDomains.map((domain) => {
                  const high = highScores[domain.id];
                  const totalQ = domain.questions.length;
                  const isCompleted = high !== undefined;

                  return (
                    <div key={domain.id} className="relative h-full flex flex-col pt-2">
                      <DomainCard domain={domain} onSelect={handleSelectDomain} />
                      
                      {/* High Score Overlay Badge */}
                      {isCompleted && (
                        <div className="absolute -top-1 left-4 z-20 flex items-center gap-1 text-[9px] font-black text-black bg-[#CCFF00] px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
                          <Icons.Check className="w-3 h-3 font-bold" />
                          BEST: {high}/{totalQ} ({Math.round((high/totalQ)*100)}%)
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Empty state fallbacks */}
              {filteredDomains.length === 0 && (
                <div className="text-center py-16 bg-white dark:bg-slate-900 border-4 border-black dark:border-white p-8 max-w-lg mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] rounded-none">
                  <Icons.SearchX className="w-12 h-12 text-black dark:text-white mx-auto mb-4" />
                  <h3 className="text-xl font-black text-black dark:text-white uppercase">
                    No Matching Interview Domains
                  </h3>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-2 leading-relaxed uppercase">
                    We couldn't find any domains matching your search or filters. Try adjusting your keywords or switching your difficulty filter to "All Track".
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedDifficulty("All");
                    }}
                    className="mt-6 px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black font-black text-xs uppercase border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] cursor-pointer hover:translate-x-[-1px] hover:translate-y-[-1px]"
                  >
                    Clear Filters & Search
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* QUIZ WORKFLOW */}
          {quizState === "quiz" && activeDomain && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <QuizView
                domain={activeDomain}
                onBack={handleHome}
                onComplete={handleQuizComplete}
              />
            </motion.div>
          )}

          {/* RESULTS BREAKDOWN */}
          {quizState === "results" && activeDomain && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <ResultsView
                domain={activeDomain}
                score={activeScore}
                answers={activeAnswers}
                questions={activeQuestions}
                onRetry={handleRetry}
                onHome={handleHome}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Footer copyright */}
      <footer className="mt-24 border-t-4 border-black dark:border-white py-8 bg-white dark:bg-[#111827] text-xs font-black uppercase text-black dark:text-white transition-colors">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-black">
            <div className="w-2.5 h-2.5 bg-[#7C3AED] border-2 border-black dark:border-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
            GainKnowledge &copy; 2026
          </div>
          <p className="opacity-80">
            Curated with scenario engineering for elite tech interview preparation.
          </p>
        </div>
      </footer>
    </div>
  );
}
