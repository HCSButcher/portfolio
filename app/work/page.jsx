"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { swiper, swiperSlide } from "swiper/react";
//import "swiper.css";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Full Stack (Web app) ",
    title: "Course Material Repository App",
    description:
      "The  web app is a centralized repository where students access learning materials. The lecturers upload the learning materials and manage the access of materials. The administrators manage the students and enroll students to the system",
    stack: [
      {
        name: "React.js",
      },

      {
        name: "Css 3",
      },

      {
        name: "Nodejs",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Full Stack (Mobile app) ",
    title: "Bookstore App",
    description:
      "The  mobile app is a user friendly platform for book and novel enthusiasts to recommend books and novels so that others may get to know of the various good books available",
    stack: [
      {
        name: "React native",
      },
      {
        name: "Expo",
      },
      {
        name: "Css 3",
      },
      {
        name: "Nodejs",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend (website) ",
    title: "Personal portfolio",
    description:
      "This is my personal portfolio where every detail about my projects undertaken are found",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwindcss",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]  ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div>
              {/**outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              {/**project category */}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize  ">
              {project.category}project{" "}
            </h2>
            {/**project description */}
            <p className="text-white/60">{project.description} </p>
            {/**stack */}
            <ul>
              {project.stack.map((item, index) => {
                return <li key={index}> {item.name} </li>;
              })}
            </ul>
          </div>
          <div className="w-full xl:w-[50%] ">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
