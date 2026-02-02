"use client";

import Image from "next/image";
import { 
  Target, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  Globe, 
  Trophy, 
  Rocket, 
  TrendingUp 
} from "lucide-react";

export default function WhyThinkTank() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020617] text-slate-900 dark:text-slate-100 selection:bg-blue-100">
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .dark .glass-card {
          background: rgba(15, 23, 42, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest animate-fade-in">
              Establishing the Future
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
              Our journey <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                began in 2021.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl font-medium">
              We caused a seismic shift in the way learning is perceived in Africa, building a virtual gateway to global-standard resources.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-blue-500/25 flex items-center gap-2 group">
                Join the Mission <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2">
              <Image src="/career.jpg" alt="Team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-500 w-3 h-3 rounded-full animate-ping" />
                <p className="font-bold text-sm">60,000+ Active Learners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION: CENTERED & CLEAN --- */}
      <section className="py-24 px-6 bg-white dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Our Mission</h2>
          <p className="text-3xl md:text-5xl font-bold leading-tight text-slate-800 dark:text-slate-100">
            "To democratize access to world-class education, empowering Africans with the skills needed to thrive in the <span className="text-blue-600">digital economy</span>."
          </p>
        </div>
      </section>

      {/* --- CORE VALUES: GLASS CARDS --- */}
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-slate-900 dark:text-white">
        Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: "Excellence", 
            desc: "Highest quality learning experiences in every module.", 
            icon: <Trophy className="w-8 h-8" />, 
            color: "bg-amber-500" 
          },
          { 
            title: "Community", 
            desc: "Power of collaboration to drive change across the continent.", 
            icon: <Users className="w-8 h-8" />, 
            color: "bg-blue-600" 
          },
          { 
            title: "Innovation", 
            desc: "Cutting-edge solutions that keep our learners ahead.", 
            icon: <Lightbulb className="w-8 h-8" />, 
            color: "bg-purple-600" 
          }
        ].map((val, i) => (
          <div 
            key={i} 
            className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 p-10 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 group shadow-lg hover:shadow-2xl"
          >
            <div 
              className={`${val.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:rotate-12 transition-transform`}
            >
              {val.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              {val.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {val.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

      {/* --- IMPACT: BENTO GRID STYLE --- */}
      <section className="py-24 px-6 bg-slate-100 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 bg-blue-600 p-10 rounded-3xl text-white flex flex-col justify-between h-64 shadow-xl">
              <TrendingUp className="w-10 h-10 opacity-50" />
              <div>
                <h4 className="text-6xl font-black">50K+</h4>
                <p className="font-bold opacity-80 uppercase tracking-widest text-sm">Students Enrolled</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col justify-center items-center text-center">
              <h4 className="text-4xl font-black text-blue-600">100+</h4>
              <p className="font-bold text-slate-500 text-xs uppercase mt-2">Courses</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col justify-center items-center text-center">
              <h4 className="text-4xl font-black text-blue-600">15+</h4>
              <p className="font-bold text-slate-500 text-xs uppercase mt-2">Countries</p>
            </div>
            <div className="md:col-span-4 bg-slate-900 dark:bg-blue-900/20 p-8 rounded-3xl border border-slate-800 flex items-center justify-between">
              <p className="text-xl font-bold text-white">Our success rate is holding steady at 95%</p>
              <div className="w-24 h-2 bg-blue-600 rounded-full overflow-hidden">
                <div className="w-[95%] h-full bg-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISION: SPLIT DESIGN --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl -rotate-2">
            <Image src="/headed.jpeg" alt="Vision" width={600} height={800} className="object-cover" />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Where we are <br/> <span className="text-blue-600">Headed.</span></h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              <p>We're not just building a platform; we're creating a movement that will reshape the future of education in Africa and beyond.</p>
              <p>Our vision is to become the go-to destination for world-class, affordable, and accessible education for every African.</p>
            </div>
            <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold py-4 px-8 rounded-xl flex items-center gap-2 group transition-all">
              Learn about our 2030 Vision <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* --- CTA: HIGH CONTRAST --- */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Transform?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">Join thousands of Africans already learning on ThinkTank and unlock your potential today.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-blue-600 font-black py-4 px-10 rounded-2xl shadow-lg hover:scale-105 transition-transform">Get Started</button>
              <button className="border-2 border-white/30 hover:bg-white/10 font-bold py-4 px-10 rounded-2xl transition-all">Explore Courses</button>
            </div>
          </div>
          <Globe className="absolute -bottom-20 -right-20 w-80 h-80 opacity-10" />
        </div>
      </section>
    </div>
  );
}