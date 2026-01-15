import BlogSection from "./components/home/blog-section";

export default function Home() {
  return (
    <div>
      <div className="pt-16">
        <section
          className="relative flex min-h-[90vh] items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(/images/heroImg.jpg)`
          }}
        >
          <div className="absolute inset-0 bg-blue-900/80"></div>

          <div className="relative z-10 max-w-4xl px-8 text-white">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Africa’s Most Innovative <br /> Online School
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
              ThinkTank gives you career clarity and global relevance, your way.
              Learn through flexible <span className="font-semibold">Nano-Diplomas</span> you can
              complete fast, or immersive <span className="font-semibold">Diplomas</span> designed
              to launch you into international opportunities.
            </p>

            <button className="rounded-md bg-blue-400 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-500 transition">
              Explore All Programs
            </button>
          </div>
        </section>
      </div>

      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            There's a path for everyone
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            Students! Professionals! Career Switchers!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">💙</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nano-Diploma</h3>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Self-paced programs that let you go deeper into a focused skill. Earn recognized certificates to boost your profile and prove your expertise.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">🎯</span>
                  <span className="text-gray-700">4–8 weeks (flexible, self-paced)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">📍</span>
                  <span className="text-gray-700">Online with recorded lectures</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">📜</span>
                  <span className="text-gray-700">AltSchool Nano-Diploma certificate</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                Explore Nano-Diploma
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">💙</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Diploma</h3>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                A comprehensive, instructor-led program with community and mentorship support. In 12 months, you'll master a new career path and open global opportunities.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">🎯</span>
                  <span className="text-gray-700">12 months</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">📍</span>
                  <span className="text-gray-700">Live classes + recorded lectures</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">📜</span>
                  <span className="text-gray-700">AltSchool Diploma certificate</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                Start a Diploma Program
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 text-xl">💙</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Masterclass</h3>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Bite-sized sessions on practical topics to give you quick wins in your career. Perfect for busy professionals who want immediate results.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">🎯</span>
                  <span className="text-gray-700">1-3 hours</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">📍</span>
                  <span className="text-gray-700">Physical/Online, Live Sessions</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">📜</span>
                  <span className="text-gray-700">No certification</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                Browse Masterclasses
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Our Schools
          </h2>
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mb-16">
            We ensure that Africans interested in exploring various occupations can readily access the resources they need to learn and grow
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square">
              <img src="/images/engineer.jpg" alt="Engineering" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 right-6 text-white text-2xl font-bold">Engineering</h3>
            </div>

            <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square">
              <img src="/images/data.jpg" alt="Data" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 right-6 text-white text-2xl font-bold">Data</h3>
            </div>

            <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square">
              <img src="/images/product.jpg" alt="Product" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 right-6 text-white text-2xl font-bold">Product</h3>
            </div>

            <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square">
              <img src="/images/creative.jpg" alt="Creative Economy" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 right-6 text-white text-2xl font-bold">Creative Economy</h3>
            </div>

            <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square">
              <img src="/images/business.jpg" alt="Business" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 right-6 text-white text-2xl font-bold">Business</h3>
            </div>
          </div>
        </div>
      </section>
      <BlogSection />
    </div>
  );
}
