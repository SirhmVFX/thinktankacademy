import Image from "next/image";

export default function WhyThinkTank() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInGlow {
          0% {
            opacity: 0;
            text-shadow: 0 0 0 rgba(30, 58, 138, 0);
          }
          50% {
            text-shadow: 0 0 20px rgba(30, 58, 138, 0.5);
          }
          100% {
            opacity: 1;
            text-shadow: 0 0 30px rgba(30, 58, 138, 0.3);
          }
        }
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulseScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out;
        }
        .animate-fade-in-glow {
          animation: fadeInGlow 1.2s ease-out;
        }
        .animate-slide-in-left {
          animation: slideInFromLeft 0.9s ease-out;
        }
        .animate-pulse-scale {
          animation: pulseScale 0.8s ease-out;
        }
        .animate-bounce-in {
          animation: bounceIn 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
      {/* Hero Section */}
      <section className="px-6 py-16 md:px-16 md:py-32 bg-white dark:bg-gray-900 border-b-2 border-blue-900 dark:border-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text */}
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-blue-900 dark:text-white leading-tight tracking-tight animate-fade-in-glow">
                  Our journey began in 2021...
                </h1>
              </div>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  We caused a seismic shift in the way learning is perceived and consumed in Africa.
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  We built a fully-virtual platform where Africans, regardless of who they are can access global standard learning resources.
                </p>
              </div>
              <div className="pt-4">
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <Image
                  src="/career.png"
                  alt="ThinkTank team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-16 md:py-24 bg-white dark:bg-gray-900 border-b-2 border-blue-900 dark:border-blue-700 shadow-md">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-white mb-6 animate-slide-in-left">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              To democratize access to world-class education, empowering Africans with the skills and knowledge needed to thrive in the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-16 md:py-24 bg-white dark:bg-gray-900 border-b-2 border-blue-900 dark:border-blue-700 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-white text-center mb-16 animate-bounce-in">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Value Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-100 dark:border-blue-800">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center">
                  <span className="text-white text-3xl">🎯</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">
                Excellence
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                We strive for excellence in every aspect of our platform, ensuring the highest quality learning experience.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-100 dark:border-blue-800">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center">
                  <span className="text-white text-3xl">🤝</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">
                Community
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                We believe in the power of community and collaboration to drive positive change across Africa.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-100 dark:border-blue-800">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center">
                  <span className="text-white text-3xl">💡</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">
                Innovation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                We continuously innovate to provide cutting-edge solutions that empower learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="px-6 py-16 md:py-24 bg-white dark:bg-gray-900 border-b-2 border-blue-900 dark:border-blue-700 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-white text-center mb-16 animate-pulse-scale">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="py-10 px-6 bg-blue-50 dark:bg-blue-900 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-700">
              <div className="text-6xl font-bold text-blue-900 dark:text-white mb-3">50K+</div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Students Enrolled</p>
            </div>
            <div className="py-10 px-6 bg-blue-50 dark:bg-blue-900 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-700">
              <div className="text-6xl font-bold text-blue-900 dark:text-white mb-3">100+</div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Courses Available</p>
            </div>
            <div className="py-10 px-6 bg-blue-50 dark:bg-blue-900 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-700">
              <div className="text-6xl font-bold text-blue-900 dark:text-white mb-3">15+</div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Countries Served</p>
            </div>
            <div className="py-10 px-6 bg-blue-50 dark:bg-blue-900 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-700">
              <div className="text-6xl font-bold text-blue-900 dark:text-white mb-3">95%</div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are Headed Section */}
      <section className="px-6 py-16 md:py-24 bg-white dark:bg-gray-900 border-b-2 border-blue-900 dark:border-blue-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/headed.jpeg"
                  alt="Where we are headed"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 dark:text-white leading-tight tracking-tight animate-fade-in-glow">
                  Where We Are Headed
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  We're not just building a platform; we're creating a movement that will reshape the future of education in Africa and beyond.
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our vision is to become the go-to destination for world-class, affordable, and accessible education for every African, empowering them to compete globally and transform their communities.
                </p>
              </div>
              <div className="pt-4">
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Join Our Mission
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900 shadow-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-bounce-in">
            Ready to Transform Your Learning Journey?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed font-medium">
            Join thousands of Africans already learning on ThinkTank and unlock your potential today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg">
              Get Started
            </button>
            <button className="border-3 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg">
              Explore Courses
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
