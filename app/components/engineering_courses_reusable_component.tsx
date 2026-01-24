"use client";
import { ArrowRight, Play, Volume2, Settings, Maximize, Heart } from "lucide-react";

/* ================= HERO BANNER ================= */
export const ProgramHeroBanner = ({
  title,
  programInfo,
  backgroundImage,
}: {
  title: string;
  programInfo: {
    school: string;
    certificate: string;
    applicationFee: string;
    programLength: string;
    startDate: string;
    location: string;
  };
  backgroundImage?: string;
}) => (
  <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-32 pb-20 px-6 overflow-hidden">
    {/* Background Image with Overlay */}
    {backgroundImage && (
      <>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/85 to-gray-800/90" />
      </>
    )}
    
    <div className="max-w-6xl mx-auto relative z-10">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-wide">
        {title}
      </h1>

      <div className="bg-blue-900 rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">School:</h3>
            <p className="text-blue-100 mb-6">{programInfo.school}</p>

            <h3 className="font-semibold mb-2">Certificate:</h3>
            <p className="text-blue-100 mb-6">{programInfo.certificate}</p>

            <h3 className="font-semibold mb-2">Application Fee:</h3>
            <p className="text-blue-100">{programInfo.applicationFee}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Program Length:</h3>
            <p className="text-blue-100 mb-6">{programInfo.programLength}</p>

            <h3 className="font-semibold mb-2">Start Date:</h3>
            <p className="text-blue-100 mb-6">{programInfo.startDate}</p>

            <h3 className="font-semibold mb-2">Location:</h3>
            <p className="text-blue-100">{programInfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ================= TAB NAVIGATION ================= */
export const TabNavigation = ({
  tabs,
}: {
  tabs: { label: string; id: string }[];
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-200 py-4 px-6 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className="px-6 py-2 rounded-lg font-semibold transition bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
          Start Learning <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

/* ================= OVERVIEW SECTION ================= */
export const OverviewSection = ({
  videoTitle,
  videoSubtitle,
  aboutTitle,
  aboutDescription,
}: {
  videoTitle: string;
  videoSubtitle: string;
  aboutTitle: string;
  aboutDescription: string;
}) => (
  <div id="overview" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
    <div className="grid md:grid-cols-2 gap-16 items-start">
      {/* Video Player */}
      <div className="space-y-4">
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg relative">
          <div className="absolute top-4 left-4 z-10 space-y-2">
            <div className="bg-black px-3 py-1 rounded text-white text-sm font-semibold">
              {videoTitle}
            </div>
            <div className="bg-black px-3 py-1 rounded text-white text-xs">
              {videoSubtitle}
            </div>
          </div>
          
          <button className="absolute top-4 right-4 z-10 bg-black p-2 rounded hover:bg-gray-800 transition">
            <Heart className="text-white" size={20} />
          </button>

          <div className="aspect-video bg-gray-300 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Play size={32} fill="white" className="text-white" />
              </div>
              <p className="text-sm">Video Player</p>
            </div>
          </div>

          {/* Video Controls */}
          <div className="bg-black px-4 py-3 flex items-center gap-4 text-white">
            <button className="hover:text-blue-400 transition">
              <Play size={18} fill="white" />
            </button>
            <div className="flex-1 bg-gray-700 h-1 rounded">
              <div className="bg-white h-1 w-0 rounded"></div>
            </div>
            <span className="text-xs font-mono">00:00</span>
            <button className="hover:text-blue-400 transition">
              <Volume2 size={18} />
            </button>
            <button className="hover:text-blue-400 transition">
              <Settings size={18} />
            </button>
            <button className="hover:text-blue-400 transition">
              <Maximize size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div>
        <h2 className="text-4xl font-bold mb-6">{aboutTitle}</h2>
        <p className="text-gray-700 leading-relaxed">{aboutDescription}</p>
      </div>
    </div>
  </div>
);

/* ================= ADMISSION REQUIREMENTS ================= */
export const AdmissionRequirements = ({
  requirements,
}: {
  requirements: {
    title: string;
    items: string[];
  }[];
}) => (
  <div id="admission-requirements" className="bg-gray-900 text-white py-20 px-6 scroll-mt-20">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">Admission Requirements</h2>

      <div className="bg-gray-800 rounded-2xl p-8 md:p-12 space-y-8">
        {requirements.map((req, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-4">
              {index + 1}. {req.title}
            </h3>
            <ul className="space-y-3 ml-6">
              {req.items.map((item, i) => (
                <li key={i} className="text-gray-300 leading-relaxed list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ================= COURSE OUTLINE ================= */
export const CourseOutlineSection = ({
  title,
  description,
  outcomes,
}: {
  title: string;
  description: string;
  outcomes: string[];
}) => (
  <div id="course-outline" className="bg-white py-20 px-6 scroll-mt-20">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-12">{description}</p>

      <div className="grid md:grid-cols-2 gap-8">
        {outcomes.map((outcome, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-blue-600 rounded transform rotate-45"></div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{outcome}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ================= COSTS/PRICING SECTION ================= */
export const CostsSection = ({
  title,
  subtitle,
  pricingPlans,
}: {
  title: string;
  subtitle: string;
  pricingPlans: {
    name: string;
    price: string;
    period: string;
    description: string;
    isBestChoice?: boolean;
  }[];
}) => (
  <div id="costs" className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 scroll-mt-20">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-12">{subtitle}</p>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 text-center relative ${
              plan.isBestChoice
                ? "bg-blue-900 text-white shadow-2xl scale-105"
                : "bg-white text-gray-900 shadow-lg"
            }`}
          >
            {plan.isBestChoice && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-white text-blue-900 px-6 py-2 rounded-full text-sm font-bold">
                  Best Choice
                </span>
              </div>
            )}

            <h3 className="text-3xl font-bold mb-8">{plan.name}</h3>

            <div className="mb-8">
              <span className="text-2xl font-bold">$</span>
              <span className="text-6xl font-bold">{plan.price}</span>
              <p className={`text-sm mt-2 ${plan.isBestChoice ? "text-blue-200" : "text-gray-600"}`}>
                {plan.period}
              </p>
            </div>

            <p className={`text-sm leading-relaxed ${plan.isBestChoice ? "text-blue-100" : "text-gray-600"}`}>
              {plan.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ================= CAREER OUTCOME SECTION ================= */
export const CareerOutcomeSection = ({
  title,
  subtitle,
  outcomes,
  image,
}: {
  title: string;
  subtitle: string;
  outcomes: string[];
  image?: string;
}) => (
  <div id="career-outcomes" className="bg-gray-900 text-white py-20 px-6 scroll-mt-20">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 mb-8">{subtitle}</p>

          <div className="bg-gray-800 rounded-2xl p-8 space-y-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <p className="text-gray-300">{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {image && (
          <div className="flex justify-center">
            <img
              src={image}
              alt="Career outcome"
              className="rounded-xl shadow-2xl max-w-md w-full"
            />
          </div>
        )}
      </div>
    </div>
  </div>
);

/* ================= SCHOLARSHIP INFO SECTION ================= */
export const ScholarshipInfoSection = ({
  title,
  description,
  buttonText,
}: {
  title: string;
  description: string;
  buttonText: string;
}) => (
  <div id="scholarship-info" className="bg-white py-20 px-6 scroll-mt-20">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-gray-700 leading-relaxed mb-8">{description}</p>
      <button className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2">
        {buttonText} <ArrowRight size={20} />
      </button>
    </div>
  </div>
);