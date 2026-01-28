import {
  HeroSection,
  VideoInfoSection,
  ProgramsSection,
  CTASection,
  ScholarshipSection,
} from "@/app/components/school_reusable_component";

const pageData = {
  hero: {
    title: "Welcome to the School of Data!",
    description:
      "Prepare for a rewarding career in tech. We offer data-focused courses that equip you with the knowledge and skills required to start, switch, or boost your data career.",
    buttonText: "Start Learning",
    buttonLink: "/apply",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600",
  },

  videoInfo: {
    videoTitle: "Welcome to the School of Data!",
    videoSubtitle: "AltSchool Africa",
    infoTitle: "The School of Data",
    infoDescription:
      "Welcome to the School of Data, offering specialized tracks in Data Engineering, Data Analysis, and Data Science. Learn how to transform raw data into valuable insights using modern tools, techniques, and hands-on projects designed for industry readiness.",
    authorName: "Amara Onyeji",
    authorRole: "Program Manager",
    authorImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },

  programs: {
    title: "Our Programs",
    programs: [
      {
        title: "Data Science",
        description:
          "Build predictive models and uncover insights using machine learning, statistics, and real-world datasets.",
        image:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
        link: "/schools/data-science",
      },
      {
        title: "Data Analysis",
        description:
          "Learn how to analyze, visualize, and communicate data effectively for informed decision-making.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
        link: "/schools/data-analysis",
      },
      {
        title: "Data Engineering",
        description:
          "Master the design and management of data pipelines, databases, and large-scale data systems.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
        link: "/schools/data-engineering",
      },
    ],
  },

  cta: {
    title: "What are you learning today?",
    description:
      "Explore our data courses designed to kickstart or advance your career.",
    subtitle: "Ready to become a Data Professional?",
    buttonText: "Start Learning",
    link: "/apply",
  },

  successStories: {
    title: "Read our success stories",
    stories: [
      {
        name: "David Olaleye",
        role: "Data Engineering Intern",
        company: "@Fort Tyres",
        testimonial:
          "AltSchool Africa came in with an opportunity of a lifetime.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      },
      {
        name: "Okoro Gift",
        role: "Data Analyst",
        company: "@Ourpass",
        testimonial:
          "AltSchool helped me transition successfully into data analysis.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      },
      {
        name: "Adetunji Igbatayo",
        role: "Data Scientist",
        company: "@Octosoft Tech LTD",
        testimonial:
          "AltSchool Africa played a crucial role in my data career growth.",
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
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    link: "/scholarships",
  },
};

export default function DataSchoolPage() {
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
