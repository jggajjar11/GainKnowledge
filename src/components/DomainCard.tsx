import React from "react";
import * as Icons from "lucide-react";
import { motion } from "motion/react";
import { Domain } from "../types";

interface DomainCardProps {
  domain: Domain;
  onSelect: (domainId: string) => void;
}

const colorMap: Record<string, string> = {
  genai: "bg-[#CCFF00] text-[#111827]",
  ml: "bg-white dark:bg-slate-900 text-[#111827] dark:text-white",
  frontend: "bg-[#60A5FA] text-[#111827]",
  backend: "bg-white dark:bg-slate-900 text-[#111827] dark:text-white",
  devops: "bg-[#F472B6] text-[#111827]",
  cloud: "bg-white dark:bg-slate-900 text-[#111827] dark:text-white",
  dataeng: "bg-[#FB923C] text-[#111827]",
  mobile: "bg-white dark:bg-slate-900 text-[#111827] dark:text-white",
  qa: "bg-white dark:bg-slate-900 text-[#111827] dark:text-white",
  security: "bg-[#A78BFA] text-[#111827]",
  sre: "bg-white dark:bg-slate-900 text-[#111827] dark:text-white",
  fullstack: "bg-[#2DD4BF] text-[#111827]",
};

export const DomainCard: React.FC<DomainCardProps> = ({ domain, onSelect }) => {
  // Dynamically resolve the icon component
  const IconComponent = (Icons as any)[domain.iconName] || Icons.BookOpen;
  const bgClass = colorMap[domain.id] || "bg-white dark:bg-slate-900 text-[#111827] dark:text-white";

  return (
    <motion.button
      id={`domain-card-${domain.id}`}
      whileHover={{ scale: 1.01, x: -1, y: -1 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onSelect(domain.id)}
      className={`group relative flex flex-col justify-between text-left rounded-none border-4 border-black dark:border-slate-100 ${bgClass} p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 cursor-pointer h-full`}
    >
      <div className="relative z-10 flex flex-col h-full justify-between w-full">
        <div>
          {/* Top Row: Icon & Difficulty */}
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2.5 border-2 border-black dark:border-white bg-white dark:bg-slate-800 text-black dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-none`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-black tracking-wider uppercase px-2 py-0.5 border-2 border-black dark:border-white bg-white dark:bg-slate-800 text-black dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
              {domain.difficulty}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-black leading-tight uppercase tracking-tight">
            {domain.name}
          </h3>
          <p className="mt-2 text-xs font-bold leading-relaxed line-clamp-3 opacity-90">
            {domain.description}
          </p>
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t-2 border-black dark:border-white/20 flex items-center justify-between text-[10px] font-black uppercase">
          <span className="flex items-center gap-1 opacity-85">
            <Icons.HelpCircle className="w-3.5 h-3.5" />
            {domain.questions.length} Scenario Questions
          </span>
          <button className="bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white px-3 py-1 text-[10px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]">
            Start
          </button>
        </div>
      </div>
    </motion.button>
  );
};
