"use client";

import { motion } from "framer-motion";
import { EXAMPLE_CODE } from "@/shared/constants/example-code";
import { FileJson, Cpu } from "lucide-react";

export const ConnectionAnimation = () => {
  const agents = [
    { name: "Claude Code", file: "claudecode.json", color: "#D97757" },
    { name: "GitHub Copilot", file: ".github/copilot-instructions.md", color: "#0969DA" },
    { name: "Gemini", file: "custom-instructions.txt", color: "#4285F4" },
    { name: "Cursor", file: ".cursorrules", color: "#FFFFFF" },
  ];

  const durations = [7, 5, 8.5, 6.2];
  const delays = [0, 1.5, 0.7, 2.3];

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-0 py-20 relative">
      <div className="z-10 w-full md:w-80 shrink-0">
        <div className="bg-surface border-2 border-border rounded-2xl overflow-hidden shadow-2xl relative h-105 flex flex-col">
          <div className="w-full py-2 px-4 bg-border/50 border-b border-border flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-red-500/50 rounded-full" />
              <div className="w-2.5 h-2.5 bg-yellow-500/50 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-500/50 rounded-full" />
            </div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-text/40">DNA Profile</p>
          </div>
          <div className="p-4 flex-1 overflow-hidden relative">
            <pre className="text-[10px] font-mono text-text/70 leading-tight">
              <code>{EXAMPLE_CODE}</code>
            </pre>
            <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent" />
          </div>
          <div className="p-4 bg-primary/5 border-t border-border flex items-center justify-center">
            <div className="flex items-center gap-2 text-primary">
              <Cpu size={16} />
              <span className="text-xs font-black uppercase tracking-tighter">Analyzed Patterns</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {agents.map((_, i) => {
            const yTarget = 100 + i * 100;
            const yStart = 185 + i * 25;
            const xStart = 318;
            const xEnd = 682;
            
            return (
              <g key={i}>
                <path
                  d={`M ${xStart} ${yStart} C 450 ${yStart}, 550 ${yTarget}, ${xEnd} ${yTarget}`}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  className="text-border"
                />
                <motion.path
                  d={`M ${xStart} ${yStart} C 450 ${yStart}, 550 ${yTarget}, ${xEnd} ${yTarget}`}
                  stroke="var(--theme-color-primary)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="40 600"
                  initial={{ strokeDashoffset: 40 }}
                  animate={{ 
                    strokeDashoffset: -600 
                  }}
                  transition={{
                    duration: durations[i],
                    repeat: Infinity,
                    delay: delays[i],
                    ease: "linear",
                  }}
                  filter="url(#glow)"
                  style={{ strokeLinecap: "round" }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="z-10 flex flex-col gap-4 w-full md:w-80 shrink-0">
        {agents.map((agent, i) => (
          <motion.div
            key={agent.name}
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group flex items-center gap-4 p-4 h-21 bg-surface border border-border rounded-xl transition-all cursor-default shadow-sm hover:shadow-md"
          >
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-border transition-colors"
              style={{ backgroundColor: `${agent.color}15` }}
            >
              <FileJson size={20} style={{ color: agent.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-black uppercase tracking-widest text-text/40 transition-colors">
                {agent.name}
              </p>
              <p className="text-sm font-mono font-bold truncate">
                {agent.file}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
