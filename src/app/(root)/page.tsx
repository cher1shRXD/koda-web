import { Link } from "@cher1shrxd/loading";
import {
  ArrowRight,
  CheckCircle2,
  Monitor,
  Code,
  Settings2,
} from "lucide-react";
import Github from "@/shared/icons/Github";
import { ConnectionAnimation } from "@/features/landing/ui/ConnectionAnimation";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col">
      <section className="w-full max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 rounded-sm border border-primary/20">
            Coding-Style Profiler
          </div>
          <h2 className="font-extrabold text-5xl md:text-8xl mb-8 tracking-tighter leading-[1.1]">
            Clone your <br />
            <span className="text-primary italic">coding DNA.</span>
          </h2>
          <p className="text-xl text-text/60 mb-10 leading-tight max-w-2xl font-medium in">
            KODA analyzes your GitHub repos to create a precise &ldquo;Style
            Profile&rdquo;. <br />
            Make any AI agent write code exactly like you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/login"
              className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 hover:-translate-y-0.5 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-0 active:shadow-none">
              Analyze Repository
              <Github size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 p-10 bg-surface border border-border rounded-2xl flex flex-col justify-between min-h-80">
            <div>
              <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center mb-6">
                <Monitor size={24} className="text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">
                Project Architecture Mapping
              </h3>
              <p className="text-text/60 text-lg max-w-md">
                We don&apos;t just look at code. We understand your folder
                structure, module boundaries, and architectural layers.
              </p>
            </div>
            <div className="flex gap-2 mt-8">
              {["Atomic Design", "Feature-Sliced", "MVC"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-background border border-border rounded-full text-xs font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 p-10 bg-primary text-white rounded-2xl flex flex-col justify-between">
            <Code size={40} strokeWidth={2.5} />
            <div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight">
                Deep Linting
              </h3>
              <p className="text-white/80">
                Tabs, semi-colons, trailing commas. Every detail matters to your
                DNA.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 p-10 bg-surface border border-border rounded-2xl">
            <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center mb-6">
              <Settings2 size={20} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Instructions</h3>
            <p className="text-text/60">
              Optimized `.cursorrules` or system prompts tailored to you.
            </p>
          </div>
          <div className="md:col-span-8 p-10 bg-surface border border-border rounded-2xl flex items-center justify-between">
            <div className="max-w-sm">
              <h3 className="text-xl font-bold mb-2">Zero Friction</h3>
              <p className="text-text/60">
                Connect GitHub, pick a repo, and get your profile in seconds.
              </p>
            </div>
            <div className="hidden sm:block">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-surface bg-border flex items-center justify-center font-bold text-[10px]">
                    USER
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="w-full max-w-7xl mx-auto px-6 py-32 flex flex-col gap-20 items-start">
        <div>
          <h2 className="font-extrabold text-4xl mb-6 tracking-tight">
            Built for engineers who care about consistency.
          </h2>
          <div className="space-y-6">
            {[
              "Maintains codebase integrity across multiple contributors.",
              "Saves hours of 'fixing' AI-generated code style.",
              "Onboards AI agents to your project instantly.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="text-primary mt-1 shrink-0"
                />
                <p className="font-medium text-text/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <ConnectionAnimation />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="p-16 flex flex-col gap-4 items-center text-center">
          <h2 className="font-extrabold text-4xl md:text-6xl mb-8 tracking-tighter font-playpen">
            Start your profiling.
          </h2>
          <Link
            href="/login"
            className="bg-primary px-12 py-5 rounded-xl font-black text-xl hover:scale-[1.02] transition-transform flex items-center gap-3">
            Get Started <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
