import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Terminal, ArrowUpRight, Cpu } from 'lucide-react';

export default function CollaborationBanner() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 sm:p-12 shadow-[0_8px_32px_0_rgba(245,158,11,0.05)] backdrop-blur-xl">
      
      {/* Structural Neon Backlit Accent - Shifts seamlessly from your page's purple into the services gold */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[300px] h-[300px] bg-amber-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none animate-pulse duration-7000"></div>
      <div className="absolute bottom-[-20%] left-[-5%] w-[250px] h-[250px] bg-purple-600 rounded-full mix-blend-screen filter blur-[90px] opacity-15 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        
        {/* Pitch Copy & Innovation Pitch */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 text-xs font-semibold text-amber-400 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-spin duration-3000" />
            Collaboration & Custom Production Open
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Have a Complex System Idea? <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-white bg-clip-text text-transparent">
              Let's Route it to Reality.
            </span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you need custom LLM weight fine-tuning on targeted domain datasets, production-grade Web3 smart contracts, or hyper-optimized reactive web architectures—I am accepting architectural freelancing orders and collaboration requests at highly competitive baseline rates.
          </p>

          {/* Interactive Feature Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs font-mono text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-amber-400" /> AIML Optimization
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs font-mono text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-purple-400" /> Web Development
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-xs font-mono text-slate-300">
              ⚡ Budget Friendly (₹)
            </span>
          </div>
        </div>

        {/* CTA Router Trigger Action */}
        <div className="w-full lg:w-auto flex-shrink-0">
          <button
            onClick={() => navigate('/services')}
            className="w-full lg:w-auto flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 text-sm tracking-wide uppercase shadow-lg shadow-amber-500/10 hover:opacity-95 transition-all group active:scale-[0.98]"
          >
            Request Service Router
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}