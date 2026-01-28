// FILE: components/school-reusable-component.tsx
import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Volume2,
  Settings,
  Maximize,
  Heart,
} from "lucide-react";

/* =======================
   HERO SECTION
======================= */

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image?: string;
}

export const HeroSection = ({
  title,
  description,
  buttonText,
  buttonLink,
  image,
}: HeroSectionProps) => (
  <section
    className="relative min-h-screen flex items-center"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#002b2f]/90 via-[#003e42]/80 to-[#003e42]/40" />

    <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
      <div className="max-w-xl bg-black/40 backdrop-blur-xl rounded-2xl p-10 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>

        <p className="text-gray-200 text-lg leading-relaxed mb-10">
          {description}
        </p>

        <Link
          href={buttonLink}
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-4 rounded-lg hover:bg-blue-50 transition"
        >
          {buttonText} <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  </section>
);

/* =======================
   VIDEO & INFO SECTION
======================= */

interface VideoInfoSectionProps {
  videoTitle: string;
  videoSubtitle: string;
  infoTitle: string;
  infoDescription: string;
  authorName: string;
  authorRole: string;
  authorImage?: string;
}

export const VideoInfoSection = ({
  videoTitle,
  videoSubtitle,
  infoTitle,
  infoDescription,
  authorName,
  authorRole,
  authorImage,
}: VideoInfoSectionProps) => (
  <section className="max-w-6xl mx-auto px-6 py-20">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="bg-blue-600 rounded-lg overflow-hidden shadow-2xl">
        <div className="aspect-video relative bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
          <div className="text-center text-white w-full">
            <div className="text-sm font-semibold mb-2 px-6 pt-4 flex justify-between items-start">
              <div>
                <div className="bg-black/50 px-3 py-1 rounded mb-2 inline-block">
                  {videoTitle}
                </div>
                <div className="bg-black/50 px-3 py-1 rounded inline-block text-xs">
                  {videoSubtitle}
                </div>
              </div>
              <Heart size={22} />
            </div>

            <h2 className="text-6xl font-bold my-12">
              Quick <br /> Break <br /> Down
            </h2>
          </div>
        </div>

        <div className="bg-black/90 px-4 py-3 flex items-center gap-4">
          <Play size={20} className="text-white" />
          <div className="flex-1 bg-gray-700 h-1 rounded-full">
            <div className="bg-white h-1 w-1/4 rounded-full" />
          </div>
          <span className="text-white text-sm">03:30</span>
          <Volume2 size={20} className="text-white" />
          <Settings size={20} className="text-white" />
          <Maximize size={20} className="text-white" />
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-6">{infoTitle}</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          {infoDescription}
        </p>

        <div className="flex items-center gap-4">
          <img
            src={authorImage || "/api/placeholder/80/80"}
            alt={authorName}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-lg">{authorName}</h3>
            <p className="text-gray-600">{authorRole}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* =======================
   PROGRAMS SECTION
======================= */

interface Program {
  image?: string;
  title: string;
  description: string;
  link: string;
}

interface ProgramsSectionProps {
  title: string;
  programs: Program[];
}

export const ProgramsSection = ({ title, programs }: ProgramsSectionProps) => (
  <section className="bg-gradient-to-b from-blue-50 to-white py-20">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={program.image || "/api/placeholder/400/250"}
              alt={program.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="font-bold text-xl mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-6">
                {program.description}
              </p>

              <Link
                href={program.link}
                className="text-blue-600 font-semibold hover:text-blue-700 transition flex items-center gap-2"
              >
                Learn more <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* =======================
   CTA SECTION
======================= */

interface CTASectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  link: string;
}

export const CTASection = ({
  title,
  subtitle,
  description,
  buttonText,
  link,
}: CTASectionProps) => (
  <section className="py-20">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl px-12 py-16 text-white">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-blue-100 mb-6">{description}</p>
        <p className="text-xl mb-8">{subtitle}</p>

        <Link
          href={link}
          className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center gap-2 text-lg"
        >
          {buttonText} <ArrowRight size={22} />
        </Link>
      </div>
    </div>
  </section>
);

/* =======================
   SCHOLARSHIP SECTION
======================= */

interface ScholarshipSectionProps {
  title: string;
  description: string;
  buttonText: string;
  image?: string;
  link: string;
}

export const ScholarshipSection = ({
  title,
  description,
  buttonText,
  image,
  link,
}: ScholarshipSectionProps) => (
  <section className="bg-gradient-to-b from-blue-50 to-white py-20">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-gray-700 mb-8">{description}</p>

        <Link
          href={link}
          className="bg-blue-100 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-200 transition inline-flex items-center gap-2"
        >
          {buttonText} <ArrowRight size={20} />
        </Link>
      </div>

      <img
        src={image || "/api/placeholder/600/400"}
        alt="Scholarship"
        className="rounded-xl shadow-xl"
      />
    </div>
  </section>
);
