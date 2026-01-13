import { generateExperienceHash } from "@/lib/url";
import type { Experience } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    id: generateExperienceHash("kyte-research"),
    iconImage: "/icons/kyte.webp",
    title: "Kyte Research",
    positions: [
      {
        id: generateExperienceHash(
          "kyte-research",
          "software-development-engineer"
        ),
        title: "Software Development Engineer",
        employmentPeriod: {
          start: "02.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Building [Airlyft.One](https://airlyft.one), a Web3 platform for managing competitions and giveaways to drive business growth and engagement.
- Integrated multiple social platforms including Instagram and Twitter (X) to enable automated workflows.
- Built an Instagram automation system for scheduled and programmatic post publishing using n8n.
- Designed and implemented automation pipelines powered by AI agents to streamline content and engagement workflows.
- Improved platform features and resolved production issues to ensure a seamless user experience.
- Implemented scalable and maintainable solutions using modern web frameworks and technologies to support a growing user base.`,
        skills: [
          "TypeScript",
          "JavaScript",
          "Next.js",
          "React.js",
          "Web3",
          "n8n",
          "Instagram API",
          "Twitter (X) API",
          "Automation",
          "AI Agents",
          "System Integration",
          "Scalable Systems",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: generateExperienceHash("digital-mart-lab"),
    iconImage: "/icons/digitalmartlab.webp",
    title: "Digital Mart Lab",
    positions: [
      {
        id: generateExperienceHash("digital-mart-lab", "web-developer"),
        title: "Web Developer",
        employmentPeriod: {
          start: "09.2024",
          end: "01.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Built and delivered web applications from scratch to production-ready deployment.
- Developed SaaS products aimed at improving digital accessibility for users.
- Implemented responsive and scalable UI using modern frontend tools.
- Integrated backend services and databases to support dynamic application features.
- Worked on deployment and hosting workflows to ensure stable production environments.`,
        skills: [
          "React.js",
          "Node.js",
          "MySQL",
          "Tailwind CSS",
          "shadcn/ui",
          "WordPress",
          "Hostinger",
          "JavaScript",
          "SaaS Development",
          "Problem-solving",
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: generateExperienceHash("aara-technologies"),
    iconImage: "/icons/aara.webp",
    title: "Aara Technologies",
    positions: [
      {
        id: generateExperienceHash("aara-technologies", "react-js-developer"),
        title: "React.js Developer",
        employmentPeriod: {
          start: "07.2024",
          end: "09.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Engineered B2B and B2C applications, increasing user engagement by 30%.
- Contributed to ERP system development, improving operational efficiency by 25%.
- Implemented features for invoice generation and payment tracking.
- Mentored 5 frontend trainees, teaching React.js, JavaScript, Tailwind CSS, and Material UI.
- Improved overall team productivity through code reviews and technical guidance.`,
        skills: [
          "React.js",
          "JavaScript",
          "Tailwind CSS",
          "Material UI",
          "ERP Systems",
          "Mentorship",
          "Teamwork",
          "Frontend Architecture",
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: generateExperienceHash("open-source"),
    iconImage: "/icons/opensource.webp",
    title: "Open Source Programs",
    positions: [
      {
        id: generateExperienceHash("open-source", "gssoc-contributor"),
        title: "GirlScript Summer of Code (GSSOC)",
        employmentPeriod: {
          start: "05.2024",
          end: "07.2024",
        },
        employmentType: "Program",
        icon: "code",
        description: `- Participated in GirlScript Summer of Code (GSSOC), a 3-month open-source program by GirlScript Foundation.
- Contributed to multiple open-source projects across different repositories.
- Collaborated with mentors and contributors to review, improve, and ship features.
- Worked with modern frontend technologies to build and enhance UI components.`,
        skills: [
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Bootstrap",
          "Redux",
          "Open Source",
          "Collaboration",
          "Git",
          "GitHub",
        ],
        isExpanded: false,
      },
      {
        id: generateExperienceHash("open-source", "hacktoberfest-contributor"),
        title: "Hacktoberfest",
        employmentPeriod: {
          start: "10.2023",
          end: "10.2023",
        },
        employmentType: "Program",
        icon: "code",
        description: `- Successfully completed Hacktoberfest, a month-long open-source program by DigitalOcean, Appwrite, and GitHub.
- Contributed to multiple open-source repositories using industry-standard workflows.
- Led the implementation of features such as a certificate generator.
- Gained recognition and earned swags for meaningful open-source contributions.`,
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "Open Source",
          "Git",
          "GitHub",
          "Problem-solving",
          "Project Ownership",
        ],
        isExpanded: false,
      },
    ],
  },
];
