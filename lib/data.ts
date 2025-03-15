import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Yallla Deliver System",
    description:
      "A complete management system for an authentication shipping company: financial management, employee management, delivery operations management, and inventory management.",
    tags: ["React", "Next.js", "Prisma-PostgreSQL", "Tailwind", "Typescript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "strada-20",
    description:
      "e-commerce project with a shopping cart ,authentication , Great way to display products and Responsive.",
    tags: ["React","next.js","TypeScript" ,"Prisma-PostgreSQL" , "next-auth", "jsonwebtoken", "tailwindcss", "dayse ui", ],
    imageUrl: rmtdevImg,
  },
  {
    title: "chat-roms",
    description:
      "A project similar to chat sites where the user enters and then creates a room or enters a room that was created by another person and starts chatting.",
    tags: ["react" , "firebase" , "manten-ui"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "moment.Js",
  "JWT",
] as const;
