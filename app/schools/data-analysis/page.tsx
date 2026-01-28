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
    title: "Data Analysis",
    backgroundImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1920&h=1080&fit=crop",
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
    videoTitle: "Introduction To Data Analysis",
    videoSubtitle: "AltSchool Africa",
    aboutTitle: "About the program",
    aboutDescription:
      "The Data Analysis program empowers learners with the essential skills to extract valuable insights from raw data and make data-driven decisions. Dive into statistical analysis, data visualization, and storytelling with data. Master industry-leading tools and techniques, and gain hands-on experience with real-world datasets. Prepare for a rewarding career as a proficient data analyst in various industries. Enroll now to unleash the power of data and drive success with data-driven strategies.",
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
      "In this immersive 12-month Frontend Engineering course, you will achieve the following learning outcomes",
    outcomes: [
      "Develop a strong foundation in statistical concepts essential for data analysis and data-driven decision making.",
      "Master data manipulation and analysis using popular spreadsheet tools like Excel and Google Sheets.",
      "Gain an understanding of Relational Database Management Systems (RDBMS) such as MySQL and PostgreSQL.",
      "Learn to extract valuable information from databases using SQL queries.",
      "Acquire skills in presenting data insights effectively using tools like Google Slides and Powerpoint, creating compelling data-driven narratives.",
      "Understand the principles of effective data visualization to communicate data insights clearly and efficiently.",
      "Learn to create visually engaging and informative data visualizations using Spreadsheets, Slides/Powerpoint, Tableau Public, PowerBI, and Google Data Studio..",
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
    subtitle: "Prepare to become a Data Analyst",
    outcomes: [
      "Demonstrate your proficiency in portfolio-ready projects",
      "Earn your Diploma Certificate",
      "Qualify for in-demand job roles as a Data Analyst",
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

export default function DataAnalysisPage() {
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