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
    title: "Cloud ENGINEERING",
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
    videoTitle: "Introduction To Cloud Engineering",
    videoSubtitle: "AltSchool Africa",
    aboutTitle: "About the program",
    aboutDescription:
      "Cloud Engineering merges software development and IT operations to construct and manage cloud infrastructure. The demand for Cloud Engineers is surging, with companies increasingly migrating crucial processes and applications to cloud platforms. In this program, you'll gain practical experience with various cloud platforms, master cloud resource allocation, cost management, and streamline systems development life-cycle for optimal efficiency. Join us and unlock your potential as a Cloud Engineer!",
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
      "In this immersive 12-month Cloud Engineering course, you will achieve the following learning outcomes",
    outcomes: [
      "Proficiency in Cloud Platforms: Gain expertise in various cloud platforms, such as AWS or Google Cloud, to effectively build and manage cloud infrastructure.",
      "Understand how to allocate and optimize cloud resources efficiently, ensuring cost-effectiveness and scalability.",
      "Learn best practices to secure cloud-based systems and comply with industry regulations for data protection.",
      "Explore different deployment models like containers and serverless architecture, ensuring seamless application deployment.",
      "Master techniques to migrate existing applications to the cloud and integrate cloud services with on-premises systems.",
      "Embrace DevOps principles in cloud environments and implement continuous integration and continuous deployment (CI/CD) pipelines.",
      "Develop the ability to design scalable, resilient, and highly available cloud architectures for mission-critical applications.",
      "Explore techniques to optimize cloud application performance, ensuring smooth user experiences.",
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
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",
    subtitle: "Prepare to become a Cloud Engineer",
    outcomes: [
      "Demonstrate your proficiency in portfolio-ready projects",
      "Earn your Diploma Certificate",
      "Qualify for in-demand job roles as a Cloud Engineer",
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

export default function CloudEngineeringPage() {
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