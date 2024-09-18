import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact
} from "react-icons/fa";
import {
  SiApollographql,
  SiExpress,
  SiFramer,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiTypescript
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";

import spreaddImage from "@/public/spreadd.png";
import publicPoll from "@/public/public-poll.png";
import finCast from "@/public/fin-cast.png";
import weatherApp from "@/public/weather-app.png";

import blossomLogo from '@/public/blossom_educational_logo.png'
import ghplLogo from '@/public/gowrie_healthcare_private_ltd_logo.png'
import heckylLogo from '@/public/heckyl_logo.png'
import comtekLogo from '@/public/comtek_logo.png'


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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Team leader (Front-end)",
    company: "Blossom educational",
    icon: blossomLogo,
    location: "Remote",
    description: "Actively Participate in full life cycle of UI development including transfers from requirement to architecture, high and low level design.",
    date: "June 2019 - Present",
  },
  {
    title: "Senior Front-end Developer",
    company: "Gowrie Healthcare Pvt Ltd",
    icon: ghplLogo,
    location: "Vadodara (Gujarat)",
    description: "Develop new products, troubleshoot software issues, and research critical problem. Participate in the development of several major software releases.",
    date: "October 2017 - May 2021",
  },
  {
    title: "Software Architect",
    company: "Heckyl Technologies",
    icon: heckylLogo,
    location: "Mumbai (Maharashtra)",
    description: "Actively Participate in full life cycle of UI development including transfers from requirement to architecture, high and low level design, and implementation.",
    date: "June 2016 - October 2017",
  },
  {
    title: "Senior Software Developer",
    company: "Comtek Software Systems",
    icon: comtekLogo,
    location: "Mumbai (Maharashtra)",
    description: "Coordinate the integration testing for the Software TestTeam. Develop new products, troubleshoot software issues, and research critical problem. Participate in the development of several major software releases.",
    date: "May 2005 - May 2016",
  },
] as const;

export const projectsData = [
  {
    title: "Spreadd",
    description:
      "Spreadd brings creators and brands closer together. I worked as a full-stack developer on this startup project for 1.5 years.",
    tags: ["React", "Redux", "Node.js", "Express.js", "Graphql", "Postgresql"],
    imageUrl: spreaddImage,
    url: 'https://spreadd.io'
  },
  {
    title: "Public Poll",
    description:
      "Next-gen digital democracy (Similar like social media). I worked as a full-stack developer on this startup project for 2 years.",
    tags: ["React", "Redux", "Node.js", "Express.js", "Postgresql"],
    imageUrl: publicPoll,
    url: 'https://publicpoll.com'
  },
  {
    title: "FinCast",
    description:
      "Financial forecasting mobile app. Predict the expenses upto 10 years based on the data entered by user.",
    tags: ["React Native", "Firebase", "Node.js", "Express", "MongoDb"],
    imageUrl: finCast,
    url: 'https://play.google.com/store/apps/details?id=com.sasvat.fincast&hl=en-in&pli=1'
  },
  {
    title: "Weather App",
    description:
      "Detailed weather statistics and predictions. Includes wind, map, pollution, etc.",
    tags: ["React", "Next.js", "Openweather api"],
    imageUrl: weatherApp,
    url: 'https://weather-app-puce-pi.vercel.app/'
  },
] as const;

export const skillsData = [
  { icon: FaHtml5, skill: "HTML", },
  { icon: FaCss3, skill: "CSS", },
  { icon: SiJavascript, skill: "JavaScript", },
  { icon: SiTypescript, skill: "TypeScript", },
  { icon: FaReact, skill: "React", },
  { icon: RiNextjsLine, skill: "Next.js", },
  { icon: FaNodeJs, skill: "Node.js", },
  { icon: FaGitAlt, skill: "Git" },
  { icon: BiLogoTailwindCss, skill: "Tailwind", },
  { icon: SiPrisma, skill: "Prisma", },
  { icon: SiMongodb, skill: "MongoDB", },
  { icon: SiRedux, skill: "Redux", },
  { icon: SiGraphql, skill: "GraphQL", },
  { icon: SiApollographql, skill: "Apollo", },
  { icon: SiExpress, skill: "Express", },
  { icon: SiPostgresql, skill: "PostgreSQL", },
  { icon: SiFramer, skill: "Framer Motion", },
] as const;