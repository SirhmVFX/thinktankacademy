"use client";

import React, { useRef } from 'react';
import { useRouter } from "next/navigation";
import { CheckCircle2, ArrowRight, ExternalLink, Search } from 'lucide-react';

const SCHOLARSHIPS = [
  {
    id: 1,
    name: "Toluwaloope Scholarship Fund",
    status: "Application Open",
    description: "Designed for students who have passed entrance exams and show exceptional promise.",
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Luno Scholarship Fund",
    status: "Closed",
    description: "Empowering the next generation of blockchain and crypto experts across Africa.",
    color: "bg-purple-600",
  },
  {
    id: 3,
    name: "Binance Scholarship Fund",
    status: "Application Open",
    description: "Full-tuition support for 500 young Africans in tech and creative schools.",
    color: "bg-yellow-500",
  }
];

export default function SponsorALearner() {
  const router = useRouter();
  const scholarshipSectionRef = useRef<HTMLElement>(null);

  const handleApplyClick = () => {
    scholarshipSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* 1. HERO SECTION - Replicating Thinktank Dark Branding */}
      <section className="bg-[#020817] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Unleash Your Potential with <br /> 
            <span className="text-blue-500">Thinktank Scholarships</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
            Education is the single most powerful equalizer of opportunity. Join us in shaping 
            tomorrow's leaders, one scholarship at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={handleApplyClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-900/20"
            >
              Apply Now
            </button>
            <button className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR - Clean White Background */}
      <section className="border-b border-gray-100 py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Beneficiaries", val: "20,000+" },
            { label: "Enrolled Learners", val: "60,000+" },
            { label: "Scholarships Given", val: "10,000+" },
            { label: "Success Rate", val: "100%" }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-black text-blue-600 mb-1">{stat.val}</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SCHOLARSHIP FUNDS GRID - Section from image_fa774b.png */}
      <section ref={scholarshipSectionRef} className="py-20 bg-gray-50/50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Available Scholarships</h2>
            <p className="text-gray-600">Discover opportunities that ignite innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SCHOLARSHIPS.map((fund) => (
              <div key={fund.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col group">
                <div className={`w-14 h-14 ${fund.color} rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg`}>
                   <ExternalLink size={24} />
                </div>
                <div className="mb-4">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${fund.status === 'Closed' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-700'}`}>
                    {fund.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {fund.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {fund.description}
                </p>
                <button 
                  onClick={() => router.push(`/scholarships/${fund.id}`)}
                  className="mt-auto w-full py-3 border-2 border-gray-100 rounded-xl font-bold text-sm hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ELIGIBILITY SECTION - High Contrast Box */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8">General Eligibility Criteria</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Score at least 85% in Entrance Assessment",
                "Must be a resident of an African country",
                "Aged between 18 - 35 years",
                "Commit to 12 months of virtual training",
                "Must own or have access to a laptop",
                "Must provide proof of identity (National ID)"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="shrink-0 text-blue-200" size={20} />
                  <span className="text-blue-50 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-12 bg-white text-blue-600 px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
              Check Qualification
            </button>
          </div>
          {/* Decorative Design Element */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50" />
        </div>
      </section>

      {/* 5. FOOTER ACCREDITATION */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
           <div className="text-center md:text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2">Accredited By</p>
              <p className="text-sm font-medium">ASIC International Schools & Colleges</p>
           </div>
           <div className="text-center md:text-right">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2">Recognized As</p>
              <p className="text-sm font-medium">GSV CUP ELITE 200 Startup '23</p>
           </div>
        </div>
      </section>

    </div>
  );
}