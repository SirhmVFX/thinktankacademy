"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SponsorALearner() {
  const router = useRouter();
  const sponsorshipRef = useRef<HTMLElement>(null);

  const handleSponsorClick = () => {
    sponsorshipRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactUs = () => {
    router.push("mailto:business@altschoolafrica.com");
  };

  const handleDonation = () => {
    router.push("/donation");
  };

  const stats = [
    {
      number: "10,000,000",
      description: "Africans will be skilled by 2030",
      icon: "🎯",
    },
    {
      number: "60,000+",
      description: "Learners already enrolled",
      icon: "👥",
    },
    {
      number: "100%",
      description: "Practical curriculum",
      icon: "⚡",
    },
    {
      number: "20,000+",
      description: "Beneficiaries supported",
      icon: "🌟",
    },
  ];

  const sponsors = [
    { name: "Don Jazzy", image: "/sponsors/don-jazzy.jpg" },
    { name: "Sani Yusuf", image: "/sponsors/sani-yusuf.jpg" },
    { name: "Karen Chukwu", image: "/sponsors/karen-chukwu.jpg" },
    { name: "Ruby Laren", image: "/sponsors/ruby-laren.jpg" },
    { name: "Falz", image: "/sponsors/falz.jpg" },
    { name: "Glory Emanerame", image: "/sponsors/glory-emanerame.jpg" },
    { name: "Bowale Odumade", image: "/sponsors/bowale-odumade.jpg" },
    { name: "Oluebube Princess Egbuna", image: "/sponsors/oluebube-egbuna.jpg" },
  ];

  const studentStories = [
    {
      name: "Chibuzo Obiano",
      date: "Jun 30, 2023",
      story:
        "Thank you very much to the entire team. Your selflessness, kindness and generosity made this possible. Your support has transformed my journey.",
    },
    {
      name: "Ebere Ugochukwu",
      date: "Aug 23, 2025",
      story:
        "My deepest gratitude for selecting me as a recipient of the scholarship award. This generous support is more than financial assistance. It is an investment in my future.",
    },
    {
      name: "Blessing-Ojo Adeniyi",
      date: "Jun 30, 2023",
      story:
        "I am deeply grateful for giving me the opportunity to pursue my journey. This experience has been life-changing and equipped me with valuable knowledge and skills.",
    },
    {
      name: "Cynthia Edejon",
      date: "Aug 23, 2025",
      story:
        "This scholarship has been more than financial support. It is a stepping stone that has changed the way I see myself and my future.",
    },
  ];

  const corporateSponsors = [
    { name: "Vesicash", image: "/sponsors/vesicash.svg" },
    { name: "Partner 2", image: "/sponsors/partner2.svg" },
    { name: "Partner 3", image: "/sponsors/partner3.svg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            SPONSOR A LEARNER
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-8">
            Give learners the chance to build skills that transform generations
          </p>
          <button onClick={handleSponsorClick} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
            Sponsor a Learner
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 font-semibold mb-2">
              These aren't just stats
            </p>
            <p className="text-gray-600">
              They're proof that your support rides on a platform that works
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Educate One. Empower Thousands.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our scholarships have helped tens of thousands of people globally and that number keeps
            growing every day.
          </p>
          <button onClick={handleSponsorClick} className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
            BECOME A SPONSOR
          </button>
        </div>
      </section>

      {/* Why Think Tank Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Think Tank Academy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Trained thousands of learners across the continent
              </h3>
              <p className="text-gray-600">
                Think Tank Academy has equipped students with in-demand skills in tech, business,
                and creativity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Helped students launch new careers and start companies
              </h3>
              <p className="text-gray-600">
                Our graduates are building the future and transforming industries across Africa.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Uplifting communities across Africa
              </h3>
              <p className="text-gray-600">
                Every learner we support creates a ripple effect, empowering families and
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Sponsorship Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">How Sponsorship Works</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sponsor Individual Learners</h3>
              <p className="text-gray-700 mb-6">
                With as little as ₦435,000 / $290, you can fund a learner's access to
                world-class education and mentorship for a full year.
              </p>
              <p className="text-gray-600 mb-6">
                You'll receive personal updates, progress reports, and stories of transformation
                from the learners you support.
              </p>
              <button onClick={handleContactUs} className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors cursor-pointer">
                Talk to us
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner as an Organization</h3>
              <p className="text-gray-700 mb-6">
                Join global brands who are transforming Africa's workforce by investing in
                education.
              </p>
              <p className="text-gray-600 mb-6">
                We'll work with your company to design a scholarship program that reflects your
                brand's values and impact goals.
              </p>
              <button onClick={handleContactUs} className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer">
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Sponsors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Some of Our Individual Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="bg-gray-200 w-full aspect-square rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <span className="text-gray-500 font-semibold text-sm px-2 text-center">
                    {sponsor.name}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-900">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Sponsors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Some of Our Corporate Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {corporateSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="w-full max-w-xs bg-gray-50 p-6 rounded-lg flex items-center justify-center h-24"
              >
                <p className="font-semibold text-gray-600">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Offer Scholarships To */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">WHO WE OFFER SCHOLARSHIPS TO</h2>
          <p className="text-2xl font-semibold mb-6">
            Hundreds have applied. 5,000+ still need sponsors.
          </p>
          <p className="text-lg mb-8">
            Every day you wait, a learner waits too for someone to believe in their dreams and
            invest in their journey
          </p>
          <p className="text-lg mb-8">
            You can be the reason one more African gets a fair chance at the future.
          </p>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Student Success Stories</h2>
          <p className="text-lg text-gray-600 mb-12">
            Every sponsorship creates a ripple empowering one learner who, in turn, uplifts
            families, communities, and entire industries.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {studentStories.map((story, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{story.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{story.date}</p>
                <p className="text-gray-700 leading-relaxed">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Your contribution doesn't just fund education
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            It funds dignity, purpose, and growth.
          </p>
          <button onClick={handleDonation} className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
            Sponsor a Learner Now
          </button>
        </div>
      </section>

      {/* Every Contribution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Every contribution moves Africa closer to equitable access to education
          </h2>
          <p className="text-lg text-gray-600">
            Join our community of sponsors and be part of the transformation
          </p>
        </div>
      </section>

      {/* Accreditation Section */}
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
        </div>
      </section>
    </div>
  );
}
