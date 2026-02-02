"use client";
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
    title: "Prouct Design",
    backgroundImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
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
    videoTitle: "Introduction To Product Design",
    videoSubtitle: "Thinktank Africa",
    aboutTitle: "About the program",
    aboutDescription:
      "Product Designers are creative masterminds. This course will take you through the basic principles of designing products that address user needs and align with business goals. Product design involves the entire process of researching and identifying user problems, crafting a solution to address these deficiencies and validating this solution with the end-users. Enroll now to shape impactful products and drive your career forward.",
  },
  admissionRequirements: [
    {
      title: "Educational Background",
      items: [
        "You don't need to have a certificate to apply for this diploma program. We expect anyone to take the program.",
      ],
    },
    {
      title: "Language Proficiency",
      items: [
        "The course is conducted in English, so applicants must have a basic understanding of the English language to effectively engage with the curriculum and participate in discussions.",
      ],
    },
    {
      title: "Assessment",
      items: [
        "All applicants will be required to take an assessment. However, we would provide you with a study kit to prepare you for the assessment.",
        "The entrance exam will evaluate their problem-solving skills, programming knowledge, and readiness for a diploma program.",
      ],
    },
  ],
  courseOutline: {
    title: "Course Outline",
    description:
      "In this immersive 12-month Product Design course, you will achieve the following learning outcomes",
    outcomes: [
      "Master Human-Centered Design principles, Design Thinking, and User Research to create intuitive and user-friendly products that address real user needs.",
      "Gain expertise in Figma, a leading design tool, to craft stunning and interactive prototypes that bring your design ideas to life.",
      "Acquire essential wireframing skills to create efficient and visually compelling blueprints for product designs.",
      "Become a skilled UX designer, proficient in understanding user needs, creating customer journey maps, and designing optimal user experiences.",
      "Learn to build comprehensive style guides and design systems, ensuring consistency and scalability across products and platforms.",
      "Master UI design elements and their application, creating visually appealing interfaces that enhance user interactions.",
      "Develop proficiency in prototyping, enabling you to iterate and validate designs quickly and efficiently.",
      "Acquire skills in creating comprehensive UX deliverables, streamlining the design handoff process to developers.",
      "Understand the intricacies of responsive design and create interfaces that seamlessly adapt to different screen sizes and devices.",
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
    subtitle: "Prepare to become a Product Designer",
    outcomes: [
      "Demonstrate your proficiency in portfolio-ready projects",
      "Earn your Diploma Certificate",
      "Qualify for in-demand job roles as a Product Designer",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  scholarshipInfo: {
    title: "Scholarship Information",
    description:
      "Thinktank Scholarships are available for students who have successfully passed our entrance exams and meet the specific eligibility requirements of the scholarship funds they are interested in applying for. We believe in supporting talented individuals in their educational journey.",
    buttonText: "Apply for Scholarship",
  },
};

export default function ProductDesignPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProgramHeroBanner 
        title={frontendPageData.hero.title}
        backgroundImage={frontendPageData.hero.backgroundImage}
        programInfo={frontendPageData.hero.programInfo}
      />
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