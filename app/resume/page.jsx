"use client";

import { FaHtml5, FaCss3, FaJs, FaFigma, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiReact,
  SiExpo,
  SiMongodb,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

//about data
const data = {
  title: "About me",
  description:
    " A motivated and self-driven Bachelor of Business Management and Information Technology student at Kabarak University with a strong passion for technology and innovation. Proficient in full-stack web development (HTML, CSS, JavaScript, Node.js, React Native Next.js, React.js, and MongoDB as the database) with proven leadership experience and a track record of responsibility, both academically and professionally. Seeking opportunities to grow and contribute in dynamic tech environments.",
  info: [
    {
      fieldName: "name",
      fieldValue: "Trevor ",
    },
    {
      fieldName: "phone",
      fieldValue: "(+254) 748 092 687 ",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years ",
    },
    {
      fieldName: "Instagram",
      fieldValue: "the_Bu_tch_er",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Kenyan ",
    },
    {
      fieldName: "Email",
      fieldValue: "trevor254oduol@gmail.com ",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available ",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Swahili ",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have been able to complete solo projects as a form of self teaching in order to better understand the various technologies I am proficient in",
  item: [
    {
      project: "Course Material Repository App",
      type: "Web app",
      description:
        "Full stack development (MERN stack). I used React.js as my frontend. Node.js,express as my backend and MongoDb as my database ",
    },
    {
      project: "Bookstore App",
      type: "Mobile app",
      description:
        "Full stack development. I used React native as my frontend. Node.js,express as my backend and MongoDb as my database ",
    },
    {
      project: "Portfolio",
      type: "Website",
      description:
        "Full stack development. I used Next.js as my frontend and used tailwind for styling . Node.js,express as my backend and MongoDb as my database ",
    },
    {
      project: "EaseRent app",
      type: "Mobile app",
      description:
        "Back-End development. I used Node.js,express to design the backend and MongoDb as the database ",
    },
  ],
};

//education
const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have been able to complete solo projects as a form of self teaching in order to better understand the various technologies I am proficient in",
  item: [
    {
      institution: "online Course Platform (PLP) ",
      degree: "Software Development Scholarship ",
      duration: "July 2025 - Present ",
    },
    {
      institution: "Kabarak University ",
      degree: "Bachelor of Business Management and IT ",
      duration: "current - Expected Graduation: 2025 ",
    },
  ],
};

//skills data

const skills = {
  title: "My skills",
  description:
    "throughout my self teaching journey I have been able to hone various skills in software programming ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiExpress />,
      name: "express",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindCss",
    },
    {
      icon: <SiExpo />,
      name: "expo",
    },
    {
      icon: <SiMongodb />,
      name: "mongoDb",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs>
          <TabsList>
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
