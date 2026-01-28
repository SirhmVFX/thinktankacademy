import {
  ProgramHeroBanner,
  TabNavigation,
  OverviewSection,
  AdmissionRequirements,
  CourseOutlineSection,
  CostsSection,
  CareerOutcomeSection,
  ScholarshipInfoSection,
} from "@/app/components/engineering_courses_reusable_component";

const frontendPageData = {
  hero: {
    title: "BACKEND ENGINEERING",
    backgroundImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop",
    programInfo: {
      school: "School of Engineering",
      certificate: "Diploma",
      applicationFee: "$30 $20 (Early Bird)",
      programLength: "12 Months/4 semesters",
      startDate: "March 30, 2026.",
      location: "Online",
    },
  },
  tabs: [
    { label: "Overview", id: "overview" },
    { label: "Admission Requirements", id: "admission-requirements" },
    { label: "Course outline", id: "course-outline" },
    { label: "Costs", id: "costs" },
    { label: "Career outcomes", id: "career-outcomes" },
    { label: "Scholarship Info", id: "scholarship-info" },
  ],
  overview: {
    videoTitle: "Introduction To Backend",
    videoSubtitle: "AltSchool Africa",
    aboutTitle: "About the program",
    aboutDescription:
      "Become a sought-after Backend Engineer! Gain in-depth knowledge to create functional websites using programming languages. With hands-on experience and project execution, guided by our esteemed faculty of top senior engineers, you'll be prepared to excel in this exciting field and make a lasting impact in the world of web development. Join us and unlock your potential as a Backend Engineer!",
  },
  admissionRequirements: [
    {
      title: "Educational Background:",
      items: [
        "You don't need to have a certificate to apply for this diploma program. We expect anyone to take the program.",
      ],
    },
    {
      title: "Language Proficiency:",
      items: [
        "The course is conducted in English, so applicants must have a basic understanding of the English language to effectively engage with the curriculum and participate in discussions.",
      ],
    },
    {
      title: "Assessment:",
      items: [
        "All applicants will be required to take an assessment. However, we would provide you with a study kit to prepare you for the assessment.",
        "The entrance exam will evaluate their problem-solving skills, programming knowledge, and readiness for a diploma program.",
      ],
    },
  ],
  courseOutline: {
    title: "Course Outline",
    description:
      "In this immersive 12-month Frontend Engineering course, you will achieve the following learning outcomes",
    outcomes: [
      "Become proficient in server-side development using popular technologies like Node.js and Express.js.",
      "Design and implement robust APIs for seamless data communication between frontend and backend systems.",
      "Master database integration and management to handle data efficiently in your web applications.",
      "Explore techniques for optimizing backend performance and ensuring fast response times.",
      "Understand real-time communication using websockets to enable live updates and interactive features.",
      "Deploy backend applications to various hosting platforms, making your projects accessible to a broader audience.",
      "Acquire insights into industry best practices, code standards, and collaboration methods for efficient teamwork.",
      "Prepare for backend engineering job interviews by honing your skills and building a strong portfolio of projects.",
    ],
  },
  costs: {
    title: "Costs",
    subtitle: "High quality tech education at an affordable cost",
    pricingPlans: [
      {
        name: "Quarterly",
        price: "80",
        period: "per quarter",
        description:
          "Pay upfront and save an extra $40 when you choose this payment plan.",
      },
      {
        name: "Upfront",
        price: "290",
        period: "",
        description:
          "If you pay in full when you resume, you get $70 off the tuition fee..and nothing to pay when you're done.",
        isBestChoice: true,
      },
      {
        name: "Monthly",
        price: "30",
        period: "per month",
        description:
          "If you choose this plan, you will pay the same amount in tuition every month.",
      },
    ],
  },
  careerOutcome: {
    title: "Career Outcome",
    subtitle: "Prepare to become a Backend Engineer",
    outcomes: [
      "Demonstrate your proficiency in portfolio-ready projects",
      "Earn your Diploma Certificate",
      "Qualify for in-demand job roles as a Backend Engineer",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  scholarshipInfo: {
    title: "Scholarship Information",
    description:
      "AltSchool Scholarships are available for students who have successfully passed our entrance exams and meet the specific eligibility requirements of the scholarship funds they are interested in applying for. We believe in supporting talented individuals in their educational journey.",
    buttonText: "Apply for Scholarship",
  },
};

export default function BackendEngineeringPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProgramHeroBanner {...frontendPageData.hero} />
      <TabNavigation tabs={frontendPageData.tabs} />
      
      <OverviewSection {...frontendPageData.overview} />
      <AdmissionRequirements requirements={frontendPageData.admissionRequirements} />
      <CourseOutlineSection {...frontendPageData.courseOutline} />
      <CostsSection {...frontendPageData.costs} />
      <CareerOutcomeSection {...frontendPageData.careerOutcome} />
      <ScholarshipInfoSection {...frontendPageData.scholarshipInfo} />
    </div>
  );
}