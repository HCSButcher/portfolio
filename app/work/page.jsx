"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import "swiper.css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
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
    num: "02",
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

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]  ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[20px] h-[50%]  ">
              {/**outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              {/**project category */}

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize  ">
                {project.category}project
              </h2>
              {/**project description */}
              <p className="text-white/60">{project.description} </p>
              {/**stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/**remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/** buttons */}

              <div className="flex  items-center gap-4 ">
                {/**live project icon */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p> Live project </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/**live project icon */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p> Github repository </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] cursor-pointer ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[490px]  mb-12 "
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                      {/**overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                      {/**Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/**slider buttons */}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[25px] h-[25px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
