export default function TrendingPrograms() {
  const programs = [
    {
      category: "Data",
      credits: "12 Credits",
      image: "/images/data.jpg",
      title: "Excel for Data Analytics",
      description: "Excel for Data Analytics is a hands-on course designed to help you turn raw data into actionable insights.",
      duration: "6 Weeks",
      level: "beginner"
    },
    {
      category: "Creative Economy",
      credits: "10 Credits",
      image: "/images/crypto.jpg",
      title: "Crypto for Beginners: A Simple,...",
      description: "Crypto for Beginners: A Simple, Scam-Free Guide is a simple, practical course that demystifies cryptocurrency.",
      duration: "6 Weeks",
      level: "beginner"
    },
    {
      category: "Engineering",
      credits: "12 Credits",
      image: "/images/engineer.jpg",
      title: "Introduction To Cybersecurity...",
      description: "The Foundations of Cybersecurity Program is designed to introduce you to one of the most in-demand fields.",
      duration: "8 Weeks",
      level: "Beginner"
    },
    {
      category: "Creative Economy",
      credits: "12 Credits",
      image: "/images/creative.jpg",
      title: "Fundamentals of Photography...",
      description: "Best introduction to photography course online in Africa. Learn composition, lighting, and editing.",
      duration: "8 Weeks",
      level: "Beginner"
    }
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Trending Nano-Diploma programs on AltSchool
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
             
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {program.category}
                  </span>
                  <span className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {program.credits}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4">
                  <span className="bg-orange-400 text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider">
                    NANO DIPLOMA
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{program.duration}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-gray-500 text-sm">{program.level}</span>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700 transition"
          >
            View more Nano Diploma programs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}