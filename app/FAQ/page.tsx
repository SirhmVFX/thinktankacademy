import React from 'react';
import { 
  Code2, 
  Layers, 
  BarChart3, 
  Calculator, 
  Palette, 
  GraduationCap 
} from 'lucide-react';

const CATEGORIES = [
  { title: "School of Engineering", icon: <Code2 className="w-6 h-6" /> },
  { title: "School of Product", icon: <Layers className="w-6 h-6" /> },
  { title: "School of Data", icon: <BarChart3 className="w-6 h-6" /> },
  { title: "School of Business", icon: <Calculator className="w-6 h-6" /> },
  { title: "School of Creative Arts", icon: <Palette className="w-6 h-6" /> },
  { title: "Scholarship Info", icon: <GraduationCap className="w-6 h-6" /> },
];

export default function FAQSection() {
  return (
    <div className="w-full font-sans">
      {/* HERO SECTION */}
      <section className="bg-[#020817] text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Feeling stuck? Rest assured, we've got you covered with all the help you need. 
            Get your questions answered one place.
          </p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category, index) => (
              <button
                key={index}
                className="flex items-center gap-5 p-8 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-left group"
              >
                <div className="text-black group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {category.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}