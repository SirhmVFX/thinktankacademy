'use client';

import { useState, useRef, useEffect } from 'react';

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Learn anywhere",
      description: "Why go to a lecture hall when you can learn from home, by the beach, at the recording studio or at your shop?",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-400/10"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Learning is fun",
      description: "Say goodbye to outdated curriculums, bulky lecture notes, and boring lectures.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Learning is Communal",
      description: "Learners are working together, sharing knowledge, and collaborating to enhance their understanding.",
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-400/10"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Learn from the best",
      description: "Our instructors are carefully selected to give you the best learning outcome.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-500/10 to-orange-500/10"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Learn the profitable way",
      description: "We help you achieve desired results whether exploring careers or acquiring new skills.",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-red-500/10 to-rose-500/10"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const playVideo = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.src += "&autoplay=1";
    }
  };

  return (
    <>
      {/* Hero Section from your component */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-24 px-4 sm:px-6 lg:px-8">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  WHY ALTSCHOOL
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Reimagining
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Education
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                  Where ordinary people become extraordinary through carefully crafted learning experiences that meet you where you are and take you where you want to be.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">10K+</div>
                  <div className="text-gray-600 text-sm">Students</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">98%</div>
                  <div className="text-gray-600 text-sm">Satisfaction</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 text-transparent bg-clip-text">500+</div>
                  <div className="text-gray-600 text-sm">Instructors</div>
                </div>
              </div>

              {/* Video Preview */}
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
                  {!isPlaying && (
                    <div className="relative cursor-pointer" onClick={playVideo}>
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                        alt="Students learning together" 
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  {isPlaying && (
                    <div className="aspect-video">
                      <iframe
                        ref={videoRef}
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Ordinary People Becoming Extraordinary"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Interactive Features */}
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Why Choose Us</h3>
                <div className="flex gap-2">
                  {features.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFeature(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeFeature === idx 
                          ? 'w-6 bg-gradient-to-r from-blue-500 to-purple-500' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to feature ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Active Feature Display */}
              <div className="relative">
                <div className={`rounded-3xl p-8 transition-all duration-500 ${features[activeFeature].bgColor} border border-gray-200 shadow-xl`}>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${features[activeFeature].color} text-white mb-6`}>
                    {features[activeFeature].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {features[activeFeature].description}
                  </p>
                  <button className="group inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium">
                    Learn more
                    <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Feature Dots Navigation */}
              <div className="grid grid-cols-5 gap-4">
                {features.map((feature, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                      activeFeature === idx
                        ? 'bg-white shadow-lg border border-gray-100 transform -translate-y-1'
                        : 'bg-gray-50 hover:bg-white hover:shadow-md'
                    }`}
                    aria-pressed={activeFeature === idx}
                    aria-label={`Select ${feature.title}`}
                  >
                    <div className={`p-2 rounded-lg mb-2 ${
                      activeFeature === idx 
                        ? `bg-gradient-to-br ${feature.color} text-white` 
                        : 'bg-white text-gray-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <span className={`text-sm font-medium ${
                      activeFeature === idx ? 'text-gray-900' : 'text-gray-600'
                    }`}>
                      {feature.title.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                  Start Your Learning Journey Today
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  Join 10,000+ students transforming their careers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section (from original code) */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our journey began in 2021…</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We caused a seismic shift in the way learning is perceived and consumed in Africa.
                We built a fully-virtual platform where Africans, regardless of who they are can access 
                global standard learning resources.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Where we are headed</h3>
                <p className="text-gray-600 mb-6">
                  Like the name suggests, AltSchool Africa offers a more effective "alternative" to traditional 
                  academic institutions, in that it explores and offers practical & functional learning with 
                  the aid of modern technology.
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10 Million Africans</div>
                    <div className="text-gray-600">By 2030, armed with profitable skills</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our learning philosophy is simple:</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Education must be relevant, practical, and functionally empowering to achieve desired outcomes. 
                  Since 2021, we have remained committed to ensuring every program and learner interaction is 
                  intentional, inclusive, and impactful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Today Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What are you Learning today?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We offer various courses that will equip you with the knowledge and skills you need to start, 
            switch, or boost your career. We have also made the learning process super easy. Take advantage 
            of our live classes, functional curriculums, expert tutors and peer-to-peer training sessions.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 text-lg">
            Ready to begin your career journey?
          </button>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-3xl font-bold text-gray-900 mb-8">
            "At AltSchool, our curriculum isn't just about imparting skills and knowledge, 
            it's about shaping the people who shape the future."
          </div>
          <div className="mt-12">
            <div className="text-xl font-semibold text-gray-900">Adewale Yusuf</div>
            <div className="text-gray-600">CEO / Founder, AltSchool Africa</div>
          </div>
        </div>
      </section>

      {/* Add custom animation for blobs */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}