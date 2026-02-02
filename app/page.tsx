import Link from "next/link";

import BlogSection from "./components/home/blog-section";
import ThinkTankCTA from "./components/home/introducing-thinktank";
import TrendingPrograms from "./components/home/trending-program";
import WhyThinkTankSchool from "./components/home/why-thinkTank-school";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[90vh] items-center bg-cover bg-center"
        style={{ backgroundImage: `url(/images/bgg.jpg)` }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-white flex flex-col items-center">
          <h1 className="mb-6 text-7xl font-extrabold leading-tight text-center md:text-6xl">
            Africa’s Most Innovative Online School
          </h1>

          <p className="mb-8 text-lg text-center text-gray-200 md:text-xl">
            ThinkTank gives you career clarity and global relevance, your way.
            Learn through flexible{" "}
            <span className="font-semibold">Nano-Diplomas</span> you can complete
            fast, or immersive{" "}
            <span className="font-semibold">Diplomas</span> designed to launch
            you into international opportunities.
          </p>

          <button className="rounded-md bg-blue-400 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-500 transition">
            Explore All Programs
          </button>
        </div>
      </section>

      {/* PROGRAM TYPES */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            There's a path for everyone
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            Students! Professionals! Career Switchers!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Nano Diploma */}
            <div className="bg-white rounded-lg border p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold mb-4">Nano-Diploma</h3>
              <p className="text-gray-700 mb-6">
                Self-paced programs that let you go deeper into a focused skill.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Explore Nano-Diploma
              </button>
            </div>

            {/* Diploma */}
            <div className="bg-white rounded-lg border p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold mb-4">Diploma</h3>
              <p className="text-gray-700 mb-6">
                Instructor-led program with mentorship support.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Start a Diploma Program
              </button>
            </div>

            {/* Masterclass */}
            <div className="bg-white rounded-lg border p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold mb-4">Masterclass</h3>
              <p className="text-gray-700 mb-6">
                Bite-sized sessions for quick career wins.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Browse Masterclasses
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Schools
          </h2>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
            We ensure Africans can access the resources they need to learn and
            grow.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
            {[
              { title: "Engineering", image: "/images/engineer.jpg", slug: "engineering" },
              { title: "Data", image: "/images/data.jpg", slug: "data" },
              { title: "Product", image: "/images/product.jpg", slug: "product" },
            ].map((school) => (
              <Link
                key={school.slug}
                href={`/schools/${school.slug}`}
                className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square transition-transform group-active:scale-95"
              >
                <img
                  src={school.image}
                  alt={school.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <h3 className="absolute bottom-6 left-6 right-6 text-white text-2xl font-bold">
                  {school.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <ThinkTankCTA />
      <TrendingPrograms />
      <WhyThinkTankSchool />
      <BlogSection />
    </div>
  );
}
