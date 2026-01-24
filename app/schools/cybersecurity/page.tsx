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
    title: "CYBERSECURITY",
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
    videoTitle: "Introduction To Cybersecurity",
    videoSubtitle: "AltSchool Africa",
    aboutTitle: "About the program",
    aboutDescription:
      "Kickstart your career in Cybersecurity with our beginner-friendly program. An estimated 3.5 million cybersecurity jobs are unclaimed worldwide, signalling the availability of rewarding opportunities for skilled talent. In this program, you will be well-equipped to enter the workforce with a solid foundation in both theoretical and practical aspects of cybersecurity, with no degree or prior experience required. Enrol in this program now and begin your journey to becoming a cybersecurity expert!",
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
      "In this immersive 12-month Cybersecurity course, you will achieve the following learning outcomes",
    outcomes: [
      "Gain practical skills in managing and using tools for network security, threat detection, risk assessment, and incident response.",
      "Learn about encryption techniques and cryptographic protocols to safeguard sensitive information and ensure data integrity.",
      "Successfully deploy and manage security tools and software to monitor, detect, and respond to cyber incidents.",
      "Gain a clear understanding of the cybersecurity landscape, including current threats, defence strategies, and compliance requirements across different industries.",
      "Learn how to navigate getting industry certifications such as: CompTIA Security+, Certified Ethical Hacker (CEH), Cisco Certified CyberOps Associate, (ISC)² SSCP (Systems Security Certified Practitioner), and Microsoft Certified.",
      "Learn how to implement and configure security measures such as firewalls, antivirus software, intrusion detection systems, and encryption protocols.",
      "Gain insights into popular cybersecurity frameworks and standards, such as NIST and ISO/IEC 27001, enabling you to implement robust security measures.",
      "Learn how to analyse security breaches and effectively participate in mitigating and rectifying cybersecurity incidents.",
      "Skills in conducting vulnerability assessments and basic penetration tests to identify vulnerabilities in systems and networks.",
      "Prepare for cybersecurity job interviews by honing your skills and building a strong portfolio of security assessments and projects."
    ],
  },
  costs: {
    title: "Costs",
    subtitle: "High quality tech education at an affordable cost",
    pricingPlans: [
      {
        name: "Quarterly",
        price: "90",
        period: "per quarter",
        description:
          "Pay upfront and save an extra $40 when you choose this payment plan.",
      },
      {
        name: "Upfront",
        price: "348",
        period: "",
        description:
          "If you pay in full when you resume, you get $70 off the tuition fee..and nothing to pay when you're done.",
        isBestChoice: true,
      },
      {
        name: "Monthly",
        price: "34",
        period: "per month",
        description:
          "If you choose this plan, you will pay the same amount in tuition every month.",
      },
    ],
  },
  careerOutcome: {
    title: "Career Outcome",
    backgroundImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop",
    subtitle: "Prepare to become a Cybersecurity Professional",
    outcomes: [
      "Demonstrate your proficiency in portfolio-ready projects",
      "Earn your Diploma Certificate",
      "Qualify for in-demand job roles as a Cybersecurity Professional",
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

export default function CyberSecurityPage() {
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