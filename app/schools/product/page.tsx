import {
  HeroSection,
  VideoInfoSection,
  ProgramsSection,
  CTASection,
  ScholarshipSection,
} from "@/app/components/school_reusable_component";

const pageData = {
  hero: {
    title: "Welcome to the School of Product!",
    description:
      "Prepare for a rewarding career in Tech. We offer various product-focused courses that equip you with the knowledge and skills required to start, switch, or boost your product career.",
    buttonText: "Start Learning",
    buttonLink: "/apply",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1600", // UI/UX design workspace
  },

  videoInfo: {
    videoTitle: "Welcome to the School of Product!",
    videoSubtitle: "Thinktank Africa",
    infoTitle: "The School of Product",
    infoDescription:
      "The School of Product offers hands-on courses designed to help learners build, manage, and design impactful products that solve real-world problems.",
    authorName: "Amara Onyeji",
    authorRole: "Program Manager",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },

  programs: {
    title: "Our Programs",
    programs: [
      {
        title: "Product Design",
        description:
          "Learn the principles of designing user-centered products that align with business goals.",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800", // UX design wireframes
        link: "/schools/product-design",
      },
      {
        title: "Graphics Design",
        description:
          "Master visual communication and branding techniques for digital products.",
        image:
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800", // Graphic design tools
        link: "/schools/graphics-design",
      },
      {
        title: "Product Management",
        description:
          "Gain essential product management skills including market research, strategy, and stakeholder communication.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", // Team collaboration/planning
        link: "/schools/product-management",
      },
    ],
  },

  cta: {
    title: "What are you learning today?",
    description:
      "Explore our product courses designed to kickstart or advance your career.",
    subtitle: "Ready to become a Product Professional?",
    buttonText: "Start Learning",
    link: "/apply",
  },

  successStories: {
    title: "Read our success stories",
    stories: [
      {
        name: "David Olaleye",
        role: "Product Design Intern",
        company: "@Fort Tyres",
        testimonial:
          "Thinktank Africa came in with an opportunity of a lifetime.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      },
      {
        name: "Okoro Gift",
        role: "Product Designer",
        company: "@Ourpass",
        testimonial:
          "Thinktank helped me transition smoothly into product design.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      },
      {
        name: "Adetunji Igbatayo",
        role: "Product Manager",
        company: "@Octosoft Tech LTD",
        testimonial:
          "Thinktank Africa played a huge role in my product career growth.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      },
    ],
  },

  scholarship: {
    title: "Scholarship available",
    description:
      "Scholarships are available for students who successfully pass our entrance exams.",
    buttonText: "Learn more",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", // Students learning/studying
    link: "/scholarships",
  },
};

export default function ProductSchoolPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection {...pageData.hero} />
      <VideoInfoSection {...pageData.videoInfo} />
      <ProgramsSection {...pageData.programs} />
      <CTASection {...pageData.cta} />
      <ScholarshipSection {...pageData.scholarship} />
    </main>
  );
}