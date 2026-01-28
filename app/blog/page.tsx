import React from 'react';
import { Search, Clock, ArrowRight, CheckSquare, Square } from 'lucide-react';

const COURSES = [
  {
    id: 1,
    title: "Crypto for Beginners: A Simple, Scam-Free Guide",
    category: "Creative Economy",
    credits: 10,
    duration: "6 Weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Introduction To Cybersecurity",
    category: "Engineering",
    credits: 12,
    duration: "8 Weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Fundamentals of Photography",
    category: "Creative Economy",
    credits: 12,
    duration: "8 Weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Data Analysis with Python",
    category: "Data",
    credits: 15,
    duration: "10 Weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Digital Marketing Essentials",
    category: "Business",
    credits: 10,
    duration: "6 Weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Product Management Basics",
    category: "Product",
    credits: 12,
    duration: "8 Weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  }
];

const FilterSection = ({ title, items }: { title: string, items: string[] }) => (
  <div className="mb-8">
    <h3 className="font-bold text-gray-800 mb-4 text-lg">{title}</h3>
    <div className="space-y-3">
      {items.map((item) => (
        <label key={item} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center group-hover:border-blue-500">
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-sm opacity-0 group-hover:opacity-20" />
          </div>
          <span className="text-gray-600 group-hover:text-black transition-colors">{item}</span>
        </label>
      ))}
    </div>
  </div>
);

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* SIDEBAR */}
        <aside className="w-full md:w-72 shrink-0">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Filter programs</h2>
            
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search programs..." 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Active filters</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Nano-Diploma
                </span>
                <button className="text-blue-600 text-sm ml-auto hover:underline">Clear all</button>
              </div>
            </div>

            <FilterSection title="Categories" items={['Business', 'Creative Economy', 'Data', 'Engineering', 'Product']} />
            <FilterSection title="Program Types" items={['Diploma', 'Nano Diploma']} />
            <FilterSection title="Skill Levels" items={['Beginner', 'Intermediate', 'Advanced']} />
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">BLOG</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <div key={course.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Image Header */}
                <div className="relative h-52">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10" />
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
                    {course.category}
                  </span>
                  <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {course.credits} Credits
                  </span>
                  <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow-lg">
                    Nano Diploma
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    The Foundations of this program are designed to introduce you to the core principles of the industry...
                  </p>
                  
                  <div className="flex items-center text-gray-600 text-sm font-medium mb-6">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    {course.duration}
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700 capitalize">{course.level}</span>
                    <button className="flex items-center gap-2 text-blue-600 font-bold text-sm group/btn">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}