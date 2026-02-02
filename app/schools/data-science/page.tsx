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
    title: "Data Science",
    backgroundImage: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800",
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
    videoSubtitle: "Thinktank Africa",
    aboutTitle: "About the program",
    aboutDescription:
      "This program offers a comprehensive and practical learning experience, empowering participants to become proficient Data Scientists. The program covers essential topics in Data Science with hands-on practice using popular libraries like NumPy, SciPy, Pandas, and visualization tools. Learners will gain valuable skills in data cleaning, mining, and analysis. From regression and decision trees to neural networks and recommendation systems, participants will develop expertise in diverse data science methodologies.",
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
      "Learn techniques to clean and preprocess data, as well as extract valuable insights through data mining.",
      "Acquire proficiency in working with data structures and algorithms, enabling effective data manipulation and analysis.",
      "Develop a deep understanding of linear regression, logistic regression, decision trees/forests, ensembles, and clustering.",
      "Gain practical experience in building and training neural networks using Keras and TensorFlow.",
      "Learn to implement recommendation systems to offer personalized user experiences.",
      "Explore feature engineering techniques and understand the workings of various optimizers for model training.",
      "Comprehend learning rates, schedules, and loss functions to optimize model performance effectively.",
      "Master data visualization using libraries like Matplotlib and Seaborn to present insights in a clear and compelling manner.",
      "Understand the ethical implications of data science and its responsible application in the real world."
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
    subtitle: "Prepare to become a Data Scientist",
    outcomes: [
      "You will be capable of developing neural networks using Keras and TensorFlow.",
      "You will become an expert in feature engineering, optimizers, learning rates, and loss functions for model optimization.",
      "You will be committed to ethical data practices in all professional endeavors.",
      "Earn your Diploma Certificate",
      "You will qualify for in-demand job roles as a data scientist",
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

export default function DataSciencePage() {
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