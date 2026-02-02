// FILE: app/school/engineering/frontend/page.tsx
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
    title: "Data Engineering",
    backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
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
    videoTitle: "Introduction To Data Engineering",
    videoSubtitle: "Thinktank Africa",
    aboutTitle: "About the program",
    aboutDescription:
      "The Data Engineering program equips learners with essential skills in designing and managing robust data pipelines, ETL processes, and database management. Dive into the world of data infrastructure and learn to transform raw data into valuable insights. Gain hands-on experience with industry-relevant tools and technologies. Prepare for a successful career in data engineering and make a significant impact in the data-driven world. Enroll now to unlock your potential in this dynamic field.",
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
      "In this immersive 12-month Data Science course, you will achieve the following learning outcomes",
    outcomes: [
      "Acquire skills to handle and process binary large objects (BLOBs) and files efficiently.",
      "Master SQL querying to interact with relational databases effectively.",
      "Understand the principles and functionalities of relational databases.",
      "Explore No-SQL and object-oriented databases to manage unstructured data effectively.",
      "Learn to design and manage data warehouses and data lakes for efficient data storage and retrieval.",
      "Build data pipelines for both batch and real-time streaming data processing.",
      "Acquire skills in job scheduling and orchestration to manage data workflows efficiently.",
      "Explore Apache Beam for unified batch and streaming data processing.",
      "Learn to use DBT for data transformation and modeling.",
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
    subtitle: "Prepare to become a Data Engineer",
    outcomes: [
      "You will be well-prepared to embark on a successful career as a skilled Data Engineer, playing a crucial role in managing and processing data for data-driven decision-making in diverse industries.",
      "You will earn your Diploma Certificate",
      "You will qualify for in-demand job roles as a data engineer",
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

export default function DataEngineeringPage() {
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