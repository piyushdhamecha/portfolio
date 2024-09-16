import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import spreaddImage from "@/public/spreadd.png";
import publicPoll from "@/public/public-poll.png";
import finCast from "@/public/fin-cast.png";
import weatherApp from "@/public/weather-app.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Spreadd",
    description:
      "Spreadd brings creators and brands closer together. I worked as a full-stack developer on this startup project for 1.5 years.",
    tags: ["React", "Redux", "Node.js", "Express.js", "Graphql", "Postgresql"],
    imageUrl: spreaddImage,
  },
  {
    title: "Public Poll",
    description:
      "Next-gen digital democracy (Similar like social media). I worked as a full-stack developer on this startup project for 2 years.",
    tags: ["React", "Redux", "Node.js", "Express.js", "Postgresql"],
    imageUrl: publicPoll,
  },
  {
    title: "FinCast",
    description:
      "Financial forecasting mobile app. Predict the expenses upto 10 years based on the data entered by user.",
    tags: ["React Native", "Firebase", "Node.js", "Express", "MongoDb"],
    imageUrl: finCast,
  },
  {
    title: "Weather App",
    description:
      "Detailed weather statistics and predictions. Includes wind, map, pollution, etc.",
    tags: ["React", "Next.js", "Openweather api"],
    imageUrl: weatherApp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;