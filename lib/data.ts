import yallaDeliver from "@/public/yallaDeliver.png";
import Strada from "@/public/Strada.png";
import chatRooms from "@/public/chatRooms.png";
import Antaka from "@/public/Antaka.png";

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
    tags: ["Prisma-PostgreSQL","React", "Next.js",  "Tailwind", "Typescript"],
    imageUrl: yallaDeliver,
    Url : "https://yallla-wep-sestem.vercel.app"
  },
  {
    title: "Strada-20",
    description:
      "e-commerce project with a shopping cart ,authentication , Great way to display products and Responsive.",
    tags: ["React","next.js","TypeScript" ,"Prisma-PostgreSQL" , "next-auth", "jsonWebToken", "tailwindcss", "dayse ui", ],
    imageUrl: Strada,
    Url : "https://strada-20.vercel.app"
  },
  {
    title: "Chat Roms",
    description:
      "A project similar to chat sites where the user enters and then creates a room or enters a room that was created by another person and starts chatting.",
    tags: ["react" , "firebase" , "manten-ui"],
    imageUrl: chatRooms,
    Url : "https://chat-rooms-app-a4711.web.app"
  },
  {
    title: "Antaka Qr-Menu",
    description:
      "Simple menu showing product details + admin dashboard to add and edit products.",
    tags: ["react" , "firebase" , "tailwindcss"],
    imageUrl: Antaka,
    Url : "https://antaka-qr-menu.vercel.app"
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
  "jsonWebToken",
  "firebase",

] as const;
