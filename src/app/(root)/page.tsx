import { Link } from "@cher1shrxd/loading";
import {
  ArrowRight,
  GitBranch,
  Cpu,
  Fingerprint,
  Zap,
  LayoutTemplate,
  Terminal,
} from "lucide-react";
import Github from "@/shared/icons/Github";
import { ConnectionAnimation } from "@/features/landing/ui/ConnectionAnimation";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col overflow-hidden">
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-125 bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none -z-10" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-text/70">
            Now in Public Beta
          </span>
        </div>

        <h1 className="font-extrabold text-6xl md:text-8xl tracking-tighter mb-8 leading-[1.2] font-playpen">
          Don&apos;t let AI <br />
          <span className="font-playpen neon-sign">
            break your style.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-text/60 mb-12 max-w-2xl leading-relaxed">
          KODA extracts your <strong>coding DNA</strong> from your GitHub repos to ensure AI agents write code exactly like you do.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/login"
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
            <Github size={20} />
            Analyze Repository
          </Link>
          <a
            href="#how-it-works"
            className="bg-surface text-text border border-border px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-border/50 transition-all">
            How it Works
          </a>
        </div>
      </section>

      <section className="w-full border-y border-border bg-surface/50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Repos Analyzed", value: "10k+" },
            { label: "Lines of Code", value: "50M+" },
            { label: "Style Profiles", value: "15k+" },
            { label: "Accuracy", value: "99.9%" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-black tracking-tight">{stat.value}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-text/40">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
            Everything your AI needs to know.
          </h2>
          <p className="text-xl text-text/60 max-w-2xl mx-auto">
            We analyze more than just syntax. KODA captures the essence of your engineering culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <LayoutTemplate size={32} />,
              title: "Architecture Mapping",
              desc: "Understands your file structure, boundaries, and design patterns (MVC, DDD, Atomic).",
            },
            {
              icon: <Fingerprint size={32} />,
              title: "Syntax Fingerprinting",
              desc: "Tabs vs Spaces, semicolons, trailing commas. We capture your exact preferences.",
            },
            {
              icon: <Zap size={32} />,
              title: "Framework Detection",
              desc: "Automatically identifies React, Next.js, Tailwind, and other ecosystem tools.",
            },
            {
              icon: <GitBranch size={32} />,
              title: "Branch Awareness",
              desc: "Adapts to different coding styles across different branches or legacy codebases.",
            },
            {
              icon: <Terminal size={32} />,
              title: "CLI Integration",
              desc: "Use your style profile directly in your terminal with our specialized CLI tool.",
            },
            {
              icon: <Cpu size={32} />,
              title: "Agent Optimizations",
              desc: "Generates prompt-engineered instructions for Cursor, Copilot, and custom agents.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5 cursor-default relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500 text-primary">
                {feature.icon}
              </div>
              <div className="w-12 h-12 bg-background rounded-xl border border-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-text/60 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="w-full bg-surface border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col items-center">
           <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
              From Repo to Rules.
            </h2>
            <p className="text-xl text-text/60 max-w-2xl mx-auto">
              See how KODA transforms your raw code into precise instructions for any AI.
            </p>
          </div>
          
          <div className="w-full max-w-5xl">
            <ConnectionAnimation />
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-40 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/10 blur-[100px] rounded-full -z-10" />
        
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
          Ready to clone yourself?
        </h2>
        <p className="text-xl text-text/60 mb-12 max-w-xl mx-auto">
          Join thousands of developers who have stopped fighting with their AI assistants.
        </p>
        <Link
          href="/login"
          className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-primary/20">
          Get Started for Free <ArrowRight size={24} />
        </Link>
      </section>
    </div>
  );
}
