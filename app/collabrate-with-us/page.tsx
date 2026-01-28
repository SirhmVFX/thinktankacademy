"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CollaborateWithUs() {
  const router = useRouter();

  const handlePartnerClick = () => {
    router.push("mailto:business@thinktankacademy.com");
  };

  const partnershipOptions = [
    {
      title: "Project Infra",
      description:
        "We invite institutions and individuals to feature and host training programs and courses on our robust and secure learning management system. Do you want to develop and co-create new, paid, or free courses? Team up with us to create top-notch educational content in any field.",
      icon: "🏗️",
    },
    {
      title: "Internship Placement",
      description:
        "Looking to snap up our standout talents? Tap into our network of highly skilled junior technologists and business professionals beaming with the right mix of competence, enthusiasm, and ambition to build your ideal team.",
      icon: "👔",
    },
    {
      title: "Corporate Training",
      description:
        "Think Tank Academy provides specialized learning and development services and solutions to businesses across Africa and beyond. Our customizable learning curriculum aligns with the business objectives and is most suitable for training and staff upskilling.",
      icon: "💼",
    },
    {
      title: "Blended Learning",
      description:
        "Embed our online programs and courses into students' academic curricula. A fusion of the standard curricula and career-focused, virtual learning tracks will produce more learning satisfaction for students and prepare them for the future of work after school.",
      icon: "📚",
    },
  ];

  const impactAreas = [
    {
      title: "Connect",
      description: "Connect with and provide value to our community of talents",
      icon: "🤝",
    },
    {
      title: "Power",
      description: "Power your community development initiatives with us",
      icon: "⚡",
    },
    {
      title: "Grow",
      description: "Grow your audience and build thought leadership.",
      icon: "📈",
    },
    {
      title: "Boost",
      description: "Boost your brand reputation by partnering with us",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Collaborate with us
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Power transformative learning with Think Tank Academy!
              </p>
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="flex justify-center">
              <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/collaborate.png"
                  alt="Think Tank Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Become a Partner</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Step into the forefront of online education with Think Tank Academy! Your
                collaboration will help shape the future of learning in Africa and beyond.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Together, we're equipping the younger generation of leaders with the knowledge and
                resources to excel and remain relevant in a rapidly evolving world.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Think Tank Academy is committed to empowering and equipping learners with skills
                and opportunities to build the careers and lives they want.
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Pathway</h3>
              <p className="text-gray-700 mb-6">
                We provide unique partnership options available to a wide range of organizations
                and individuals across different fields of work!
              </p>
              <button
                onClick={handlePartnerClick}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Options Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Partnership Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Let's Make Impact and Grow Together!
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-4 text-center">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Want to Change Someone's Life? $1/day can make all the difference.
              </h2>
              <p className="text-lg mb-6 text-blue-100">
                As a sponsor of Think Tank Academy Scholarships, you have the opportunity to be a
                part of the exciting technology revolution that is shaping the future. By supporting
                our program, you are investing in the education and development of learners who will
                be at the forefront of this revolution.
              </p>
              <p className="text-lg mb-8 text-blue-100">
                Our goal at Think Tank Academy is to empower individuals with the skills and
                knowledge necessary to excel in all industry verticals, and your support will play a
                crucial role in making that happen.
              </p>
              <button
                onClick={() => router.push("/sponsor-a-learner")}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Partner With Us
              </button>
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="flex justify-center">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg bg-white bg-opacity-20">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white font-semibold">Partnership Impact Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Make an Impact?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with Think Tank Academy and help us shape the future of education in Africa
          </p>
          <button
            onClick={handlePartnerClick}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">ACCREDITED BY</p>
              <p className="text-gray-700">
                ASIC (Accreditation Service for International Schools, Colleges, and Universities)
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">RECOGNIZED AS</p>
              <p className="text-gray-700">
                GSV CUP ELITE 200. World's most innovative Edtech startups '23
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:business@thinktankacademy.com" className="text-indigo-600 hover:underline">
                business@thinktankacademy.com
              </a>
            </p>
            <p className="text-gray-600">
              <strong>Tel:</strong>{" "}
              <a href="tel:+1234567890" className="text-indigo-600 hover:underline">
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
