import { generateProjectHash } from "@/lib/url";
import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: generateProjectHash("crypto-vault"),
    title: "Crypto Vault",
    period: {
      start: "08.2024",
      end: "08.2024",
    },
    href: "https://crypto-vault-one.vercel.app/",
    skills: ["Next.js", "Web3"],
    description: `A web-based crypto wallet inspired by MetaMask.

- Enabled account creation using mnemonic seed phrases
- Implemented multi-account support for managing multiple wallets
- Added account recovery by importing wallets via seed phrase
- Supported secure transaction viewing and execution

**Links:**
- Live: https://crypto-vault-one.vercel.app/
- GitHub: https://github.com/thevaibhavmaurya/CryptoVault
- Demo: https://www.youtube.com/watch?v=hmPLyYaOOas`,
    isExpanded: true,
  },
  {
    id: generateProjectHash("rexteria"),
    title: "Rexteria",
    period: {
      start: "09.2024",
      end: "10.2024",
    },
    href: "https://modtopia.vercel.app/",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
      "Cloudinary",
    ],
    description: `A full-stack e-commerce platform for GTA 5 mods.

- Architected a scalable marketplace serving 100+ users
- Built an admin dashboard to manage mods, categories, and inquiries
- Improved operational efficiency by 25% through streamlined workflows
- Implemented secure authentication to enhance buyer experience
- Increased customer satisfaction and engagement by 30%

**Links:**
- Live: https://modtopia.vercel.app/
- GitHub: https://github.com/thevaibhavmaurya/Rexteria
- Demo: https://www.youtube.com/watch?v=xopUB6D-jEc`,
    isExpanded: true,
  },
  {
    id: generateProjectHash("zyprolix-player"),
    title: "Zyprolix Player",
    period: {
      start: "10.2023",
      end: "10.2023",
    },
    href: "https://zyprolix-player.vercel.app/",
    skills: ["Next.js", "Material UI", "YouTube API"],
    description: `A modern video streaming platform with personalized dashboards.

- Built a video player supporting 1,000+ users
- Integrated YouTube API to enable global video search and playback
- Implemented authentication and user dashboards
- Increased user engagement by 40% through improved UX

**Links:**
- Live: https://zyprolix-player.vercel.app/
- GitHub: https://github.com/thevaibhavmaurya/Zyprolix-Player
- Demo: https://www.instagram.com/reel/C2SPEzYNgAK/`,
    isExpanded: true,
  },
  {
    id: generateProjectHash("physics-concept"),
    title: "Physics Concept",
    period: {
      start: "08.2023",
      end: "09.2023",
    },
    href: "https://restitution.onrender.com/",
    skills: ["p5.js", "JavaScript"],
    description: `An interactive educational project focused on Physics concepts.

- Delivered a client project to explain Physics concepts visually
- Built engaging animations using the p5.js library
- Implemented interactive controls to improve student understanding
- Enhanced learning engagement through visual simulations

**Links:**
- Live: https://restitution.onrender.com/
- GitHub: https://github.com/thevaibhavmaurya/Animation-P5js`,
    isExpanded: true,
  },
  {
    id: generateProjectHash("chingari-design"),
    title: "Chingari Design",
    period: {
      start: "07.2023",
      end: "07.2023",
    },
    href: "https://www.figma.com/proto/EzXsQGMRm84IQTuykDqgeT/Chingari?node-id=1-2",
    skills: ["Figma"],
    description: `A UI/UX design project created during the Octernship program.

- Built my first-ever Figma design while learning Figma
- Participated in Octernship to gain real-world design experience
- Designed the Chingari interface from scratch as a hands-on learning project
- Focused on layout, flow, and basic usability while exploring design fundamentals

**Links:**
- Prototype: https://www.figma.com/proto/EzXsQGMRm84IQTuykDqgeT/Chingari`,
    isExpanded: true,
  },
];
