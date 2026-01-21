import Image from "next/image";

export default function Career() {
  const coreValues = [
    {
      title: "People First",
      description: "We prioritize building strong relationships and fostering a culture of trust.",
      icon: "👥",
    },
    {
      title: "Excellence",
      description: "We empower our team to embrace success with excellence and continuous improvement.",
      icon: "⭐",
    },
    {
      title: "Growth Mindset",
      description: "We encourage curiosity, audacity, and learning from every experience.",
      icon: "📈",
    },
    {
      title: "Openness",
      description: "We embrace open communication, transparency, and collaboration.",
      icon: "🔓",
    },
  ];

  const jobListings = [
    {
      title: "Product Manager",
      type: "Full-time",
      location: "Remote",
    },
    {
      title: "Senior Developer",
      type: "Full-time",
      location: "Lagos, Nigeria",
    },
    {
      title: "UX/UI Designer",
      type: "Full-time",
      location: "Remote",
    },
    {
      title: "Marketing Specialist",
      type: "Full-time",
      location: "Hybrid",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Building the Future
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mb-8">
                Join our team of innovators and help us create transformative learning experiences for students across Africa.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                View Open Positions
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/career.png"
                  alt="Think Tank Career"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Team</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Our team shares a common trait: audacity. We are a collective of daring pioneers who fearlessly challenge the status quo. We constantly push boundaries, defy limits, and pursue extraordinary achievements. Our team represents a vibrant blend of diverse talents and backgrounds, collaborating harmoniously to innovate and impact the world.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Spotlight Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Employee Spotlight</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Life at Think Tank Academy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Meet our team members as they share their journey at Think Tank Academy. From their first day to their proudest achievements, discover what it's like to be part of our growing community of educators and innovators.
            </p>
            <p className="text-gray-600 italic">
              Tip: You will discover valuable insights about building a fulfilling career in education technology.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Help us shape the future of education in Africa
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View Open Positions
          </button>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Open Positions ({jobListings.length})</h2>
          <div className="space-y-4">
            {jobListings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-gray-600">
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Talent Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Talent Community</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn about future opportunities and stay up to date on the latest happenings at Think Tank Academy
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Join Talent Pool
          </button>
        </div>
      </section>
    </div>
  );
}
