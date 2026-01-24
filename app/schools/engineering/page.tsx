import {
  HeroSection,
  VideoInfoSection,
  ProgramsSection,
  CTASection,
  ScholarshipSection,
} from "@/app/components/school_reusable_component";

const pageData = {
  hero: {
    title: "Welcome to the School of Engineering!",
    description:
      "Prepare for a rewarding career in tech. We offer various technical courses that equip you with the knowledge and skills required to start, switch, or boost your career.",
    buttonText: "Start Learning",
    buttonLink: "/apply",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600",
  },

  videoInfo: {
    videoTitle: "Welcome to the School of Engineering!",
    videoSubtitle: "AltSchool Africa",
    infoTitle: "The School of Engineering",
    infoDescription:
      "It offers a range of extensive technical courses designed to equip learners with job-ready skills globally.",
    authorName: "Amara Onyeji",
    authorRole: "Program Manager",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },

  programs: {
    title: "Our Programs",
    programs: [
      {
        title: "Front-End Engineering",
        description:
          "Learn how to create functional and responsive websites.",
        image:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
        link: "/schools/frontend",
      },
      {
        title: "Back-End Engineering",
        description:
          "Program servers, build APIs, and design databases.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
        link: "/schools/backend",
      },
      {
        title: "Cloud Engineering",
        description:
          "Build and maintain scalable cloud infrastructure.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
        link: "/schools/cloud",
      },
      {
        title: "Cyber Security Engineering",
        description:
          "Gain practical and theoretical cybersecurity skills.",
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
        link: "/schools/cybersecurity",
      },
    ],
  },

  cta: {
    title: "What are you learning today?",
    description:
      "Explore our technical courses designed to kickstart or advance your career.",
    subtitle: "Ready to become a Software Engineer?",
    buttonText: "Start Learning",
    link: "/apply",
  },

  successStories: {
    title: "Read our success stories",
    stories: [
      {
        name: "David Olaleye",
        role: "Engineering Intern",
        company: "@Fort Tyres",
        testimonial:
          "AltSchool Africa came in with an opportunity of a lifetime.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      },
      {
        name: "Okoro Gift",
        role: "Frontend Developer",
        company: "@Ourpass",
        testimonial:
          "AltSchool helped me successfully transition into tech.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      },
      {
        name: "Adetunji Igbatayo",
        role: "Frontend Engineer",
        company: "@Octosoft Tech LTD",
        testimonial:
          "AltSchool Africa played a huge role in my career growth.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      },
    ],
  },

  scholarship: {
    title: "Scholarship available",
    description:
      "Scholarships are available for students who pass our entrance exams.",
    buttonText: "Learn more",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    link: "/scholarships",
  },
};

export default function EngineeringSchoolPage() {
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
