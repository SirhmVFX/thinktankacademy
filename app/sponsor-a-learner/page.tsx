"use client";

import React, { useRef } from 'react';
import { useRouter } from "next/navigation";
import { 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Users, 
  Target, 
  Zap, 
  Star,
  Quote
} from 'lucide-react';

const STATS = [
  { number: "10M", label: "Target skilled by 2030", icon: <Target className="w-6 h-6" /> },
  { number: "60K+", label: "Enrolled Learners", icon: <Users className="w-6 h-6" /> },
  { number: "100%", label: "Practical Focus", icon: <Zap className="w-6 h-6" /> },
  { number: "20K+", label: "Beneficiaries", icon: <Star className="w-6 h-6" /> },
];

const SCHOLARSHIPS = [
  {
    id: 1,
    name: "Toluwaloope Scholarship Fund",
    status: "Application Open",
    description: "Designed for students who have passed entrance exams and show exceptional promise.",
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: 2,
    name: "Luno Scholarship Fund",
    status: "Closed",
    description: "Empowering the next generation of blockchain and crypto experts across Africa.",
    color: "from-purple-600 to-fuchsia-700",
  },
  {
    id: 3,
    name: "Binance Scholarship Fund",
    status: "Application Open",
    description: "Full-tuition support for 500 young Africans in tech and creative schools.",
    color: "from-yellow-500 to-orange-600",
  }
];

export default function SponsorALearner() {
  const router = useRouter();
  const scholarshipRef = useRef<HTMLElement>(null);

  const handleSponsorClick = () => {
    scholarshipRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-[#020817] pt-32 pb-24 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Impact the future
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
              Educate One. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Empower Thousands.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Our scholarships have helped tens of thousands of people globally. 
              Give a learner the chance to build skills that transform generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleSponsorClick}
                className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Become a Sponsor
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all">
                View Impact Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="relative -mt-12 z-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-100">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.number}</h3>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SCHOLARSHIP GRID --- */}
      <section ref={scholarshipRef} className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Available Funds</h2>
              <p className="text-slate-600 text-lg">Every day you wait, a learner waits too. Support one of our specialized tracks today.</p>
            </div>
            <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View all 5,000+ applicants <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SCHOLARSHIPS.map((fund) => (
              <div key={fund.id} className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-br ${fund.color} rounded-2xl mb-8 flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform`}>
                   <ExternalLink size={28} />
                </div>
                <div className="mb-6">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full ${fund.status === 'Closed' ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>
                    {fund.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  {fund.name}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-10">
                  {fund.description}
                </p>
                <button className="mt-auto w-full py-4 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-900 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2">
                  Sponsor Fund <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ELIGIBILITY: THE BENTO BOX --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-600 rounded-[3.5rem] p-8 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">General Eligibility <br/> Criteria</h2>
                <div className="space-y-6">
                  {[
                    "Score 85%+ in Entrance Assessment",
                    "Resident of an African country",
                    "Aged between 18 - 35 years",
                    "Commitment to 12 months training",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-lg">
                      <div className="bg-white/20 p-1 rounded-full">
                        <CheckCircle2 className="text-blue-100" size={20} />
                      </div>
                      <span className="font-medium text-blue-50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-[2.5rem]">
                <h4 className="text-2xl font-bold mb-4">Why we screen?</h4>
                <p className="text-blue-100 leading-relaxed mb-8">
                  We ensure that every sponsored dollar goes to a learner with the grit and capability to finish the program.
                </p>
                <button className="w-full py-4 bg-white text-blue-600 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-50 transition-colors">
                  Take Assessment
                </button>
              </div>
            </div>
            {/* Background flourish */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Stories of Transformation</h2>
            <p className="text-slate-600">Real impact, real people, real change.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Chibuzo Obiano", story: "Your support has transformed my journey. I went from zero coding knowledge to building full-stack apps." },
              { name: "Ebere Ugochukwu", story: "This is more than financial assistance. It is an investment in my future that I don't take for granted." }
            ].map((story, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative">
                <Quote className="absolute top-8 right-10 text-blue-100 w-12 h-12" />
                <h3 className="font-bold text-xl mb-4">{story.name}</h3>
                <p className="text-slate-600 italic leading-relaxed">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER LOGOS --- */}
      <section className="py-16 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="text-center md:text-left">
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-slate-500">Accredited by</p>
            <span className="text-xl font-black text-slate-900">ASIC UK</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-slate-500">Recognized as</p>
            <span className="text-xl font-black text-slate-900">GSV ELITE 200</span>
          </div>
        </div>
      </section>
    </div>
  );
}