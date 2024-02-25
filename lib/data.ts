import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ZealApp from "@/public/1.png";
import HiringPortal from "@/public/2.png";
import Simplee from "@/public/3.jpg";
import BreakoutGameImage from "@/public/4.png";
import LexterJobPortalImage from "@/public/5.png";
import IIATOImage from "@/public/6.png";
import NotesAppImage from "@/public/6.png";
import TodoListImage from "@/public/7.png";

NotesAppImage



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
    title: "Nickelfox Technologies",
    location: "Noida",
    description:
      "Software Development Engineer 2 (SDE 2) at Nickelfox Technologies. Architected technical solutions, ensured modular, scalable, and efficient code quality in React Js, Next Js & React Native.",
    icon: React.createElement(FaReact), // Replace LuGraduationCap with the appropriate icon component
    date: "2021 - Present",
  },
  {
    title: "Rastr Technologies",
    location: "California",
    description:
      "Worked as a React Js Freelancer for 2 months at Rastr Technologies. Oversaw performance and responsiveness of web applications.",
    icon: React.createElement(FaReact), // Replace LuGraduationCap with the appropriate icon component
    date: "Nov-Dec 2021",
  },
  {
    title: "Newton School",
    location: "Banglore",
    description:
      "Internship and Certifications at Newton School from May to November 2021. Upskilled in MERN Stack, mentored by industry experts from leading IT companies.",
    icon: React.createElement(CgWorkAlt), // Replace LuGraduationCap with the appropriate icon component
    date: "May - Nov 2021",
  },
  {
    title: "Ucodice Technologies",
    location: "Noida",
    description:
      "Software Engineer Trainee at Ucodice Technologies. Designed and developed responsive websites in HTML, CSS, Bootstrap 4, and Greensock Animation Platform (JS Library). Fixed UI and modified the company's website from Bootstrap 3 to Bootstrap 4 for faster page loading. Designed and developed a job portal in HTML, CSS, and Bootstrap. Produced blade templates in Laravel.",
    icon: React.createElement(LuGraduationCap), // Replace YourReactIconComponent with the appropriate icon component
    date: "October 2020 - April 2021",
  },
] as const;

export const projectsData = [
  {
    title: "ZEAL— Activities with Friends",
    description: "A social media application that helps you connect with your friends and engage in activities you shared.",
    tags: ["React JS", "React Native", "Expo", "Material UI", "CSS", "SCSS", "Redux", "Firebase", "CometChat"],
    imageUrl: ZealApp, // Replace with the actual image path
  },
  {
    title: "SIMPLEE— Real Estate Management",
    description: "Simplee is an online real estate software application that manages overall operational activities and processes.",
    tags: ["React JS", "Next Js", "Material UI", "CSS", "SCSS", "Redux", "Framer Motion"],
    imageUrl: Simplee, // Replace with the actual image path
  },
  {
    title: "NFX Hiring Portal— Hiring Portal",
    description: "Nickelfox's internal project streamlining the candidate hiring process with a user-friendly interface.",
    tags: ["React JS", "Material UI", "CSS/SCSS", "Redux"],
    imageUrl: HiringPortal, // Replace with the actual image path
  },
  {
    title: "Breakout Game in Canvas and Vanilla JS — Focus, calm & meditation",
    description: "A fun project based on core JavaScript, focusing on 2D animation and collision detection for the Breakout world.",
    tags: ["HTML", "CSS", "JavaScript", "Canvas"],
    imageUrl: BreakoutGameImage, // Replace with the actual image path
  },
  {
    title: "LEXTER— Job Portal",
    description: "Build a responsive job portal for internal recruitment purposes.",
    tags: ["HTML", "CSS", "SCSS", "Bootstrap 4.5", "JavaScript", "Material UI"],
    imageUrl: LexterJobPortalImage, // Replace with the actual image path
  },
  // {
  //   title: "IIATO— Order Management System",
  //   description: "A website with a high-quality SEO-friendly landing page to introduce customers to the product.",
  //   tags: ["HTML", "CSS", "SCSS", "Bootstrap 5", "JavaScript"],
  //   imageUrl: IIATOImage, // Replace with the actual image path
  // },
  {
    title: "Notes App— Productivity",
    description: "A personal project aiming to build a working React application to master React state management.",
    tags: ["React Js", "CSS", "SCSS", "JavaScript"],
    imageUrl: NotesAppImage, // Replace with the actual image path
  },
  {
    title: "Todo List— Productivity",
    description: "A personal project aiming to build a working React application to learn React hooks and state management.",
    tags: ["React Js", "CSS", "SCSS", "JavaScript"],
    imageUrl: TodoListImage, // Replace with the actual image path
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Next.js",
  "React-Native",
  "Git",
  "Jira",
  "Tailwind",
  "Bootstrap",
  "Styled Components",
  "Material UI",
  "Redux",
  "Framer Motion",
  "GSAP",
  "Firebase",
  "CometChat"
] as const;
