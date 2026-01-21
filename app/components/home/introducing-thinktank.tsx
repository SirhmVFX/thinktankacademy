export default function ThinkTankCTA() {
  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div className="p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Introducing Think-Tank
              </h2>
              
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Master a skill in less time, no long commitment. Each Nano-Diploma comes with real-world projects and a recognised certificate to showcase your expertise to your employer.
              </p>
              
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                View Programs
              </button>
            </div>

            <div className="relative h-full min-h-[400px] md:min-h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full max-w-md">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-400 to-orange-300 rounded-2xl transform rotate-3 translate-x-4 -translate-y-4"></div>
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-300 rounded-2xl transform rotate-1 translate-x-2 -translate-y-2"></div>
                  
                  <div className="relative bg-teal-500 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/showingApp.jpg" 
                      alt="Student showcasing mobile app"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}