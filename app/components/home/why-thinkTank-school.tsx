"use client";
import { useState } from 'react';

export default function WhyThinkTankSchool() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Learn anywhere",
      description: "Why go to a lecture hall when you can learn from home, by the beach, at the recording studio or at your shop?"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Learning is fun",
      description: "Say goodbye to outdated curriculums, bulky lecture notes, and boring lectures."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Learning is Communal",
      description: "Learners are working together, sharing knowledge, and collaborating to enhance their understanding. You are not alone with your learning journey."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Learn from the best",
      description: "Our instructors are carefully selected to give you the best learning outcome. They are the best on the subject matter and poised to give you the learning you deserve."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Learn the profitable way",
      description: "Whether you're exploring a career path, embracing a new challenge, or acquiring new skills for your career, we will help you to achieve the desired results."
    }
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              WHY ALTSCHOOL
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Reimagining the African Dream
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              This is where dreams come to life. With our carefully crafted learning courses and diploma programs we will meet you where you are, and take you to where you want to be in your career.
            </p>

            {/* Video Embed */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Ordinary People Becoming Extraordinary"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="bg-gray-900 rounded-3xl p-10 lg:p-12">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-6 transform transition-all duration-300 ${
                    hoveredIndex === index 
                      ? 'scale-105 translate-x-2' 
                      : 'scale-100'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center text-gray-900 transition-all duration-300 ${
                    hoveredIndex === index 
                      ? 'shadow-lg shadow-blue-500/50 ring-4 ring-blue-500/30' 
                      : ''
                  }`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className={`transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-90'
                  }`}>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}