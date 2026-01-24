"use client";

import Image from "next/image";
import { 
  Users, 
  Award, 
  TrendingUp, 
  LockOpen, 
  MapPin, 
  Clock, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Career() {
  const coreValues = [
    {
      title: "People First",
      description: "We prioritize building strong relationships and fostering a culture of trust.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Excellence",
      description: "We empower our team to embrace success with excellence and continuous improvement.",
      icon: <Award className="w-6 h-6" />,
      color: "bg-indigo-500",
    },
    {
      title: "Growth Mindset",
      description: "We encourage curiosity, audacity, and learning from every experience.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-emerald-500",
    },
    {
      title: "Openness",
      description: "We embrace open communication, transparency, and collaboration.",
      icon: <LockOpen className="w-6 h-6" />,
      color: "bg-amber-500",
    },
  ];

  const jobListings = [
    { title: "Product Manager", type: "Full-time", location: "Remote", department: "Product" },
    { title: "Senior Developer", type: "Full-time", location: "Lagos, Nigeria", department: "Engineering" },
    { title: "UX/UI Designer", type: "Full-time", location: "Remote", department: "Design" },
    { title: "Marketing Specialist", type: "Full-time", location: "Hybrid", department: "Growth" },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-[#020617] text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest animate-fade-in">
              <Sparkles size={14} /> We're Hiring
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              Build the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                future of learning.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join a team of audacious pioneers challenging the status quo and creating transformative experiences for students across Africa.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-2 group">
                View Open Positions <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-video lg:aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image src="/career.png" alt="Think Tank Team" fill className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES: BOLD BOXES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">Our Core Values</h2>
            <p className="text-slate-500 text-lg">The principles that guide our audacity and our impact.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <div key={index} className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className={`${value.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:rotate-6 transition-transform`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- EMPLOYEE SPOTLIGHT: THE GLASS CARD --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-indigo-600 rounded-[3.5rem] overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
          <div className="p-10 md:p-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">Life at Think Tank</h2>
              <p className="text-indigo-100 text-lg leading-relaxed mb-10">
                "Meet our team members as they share their journey. From their first day to their proudest achievements, discover what it's like to be part of our growing community of educators and innovators."
              </p>
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-colors">
                Read Stories
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-400 rounded-full" />
                <div>
                  <p className="font-bold">Join the Conversation</p>
                  <p className="text-xs text-indigo-200">@thinktankacademy</p>
                </div>
              </div>
              <p className="text-sm italic text-indigo-50">"Think Tank isn't just a workplace; it's an incubator for the boldest ideas in African education."</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- JOB LISTINGS: CLEAN & INTERACTIVE --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Open Roles</h2>
            <p className="text-slate-500">Find your place in our growing ecosystem.</p>
          </div>

          <div className="space-y-4">
            {jobListings.map((job, index) => (
              <div key={index} className="group bg-slate-50 hover:bg-white p-6 md:p-8 rounded-[2rem] border border-transparent hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full mb-3 inline-block">
                    {job.department}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                  <div className="flex gap-4 mt-2 text-slate-500 text-sm">
                    <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  </div>
                </div>
                <button className="w-full md:w-auto bg-slate-900 group-hover:bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
                  Apply Now <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mx-auto text-indigo-600">
             <Users size={40} />
          </div>
          <h2 className="text-4xl font-black">Don't see a fit?</h2>
          <p className="text-slate-500 text-lg">
            Join our talent community to stay updated on future opportunities and the latest happenings at Think Tank Academy.
          </p>
          <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20">
            Join Talent Pool
          </button>
        </div>
      </section>
    </div>
  );
}