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
const about = {
  title: "About me",
  description:
    " I am a motivated and self-driven individual with a strong passion for technology and innovation. Proficient in full-stack web, mobile, web app development (HTML, CSS, JavaScript, Node.js, React Native Next.js, React.js, and MongoDB as the database) with proven leadership experience and a track record of responsibility, both academically and professionally. Seeking opportunities to grow and contribute in dynamic tech environments.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Trevor Oduol ",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+254) 748 092 687 ",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years ",
    },
    {
      fieldName: "Instagram",
      fieldValue: "@the_Bu_tch_er",
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
    "I have been able to complete solo projects as a form of self teaching in order to better understand the various technologies I am proficient in.",
  items: [
    {
      project: "COURSE MATERIAL REPOSITORY",
      type: "Web app",
      description:
        "Full stack development (MERN stack). I used React.js as my frontend. Node.js,express as my backend and MongoDb as my database ",
    },
    {
      project: "BOOKSTORE APP",
      type: "Mobile app",
      description:
        "Full stack development. I used React native as my frontend. Node.js,express as my backend and MongoDb as my database ",
    },
    {
      project: "PORTFOLIO",
      type: "Website",
      description:
        "Full stack development. I used Next.js as my frontend and used tailwind for styling . Node.js,express as my backend and MongoDb as my database ",
    },
    {
      project: "EASERENT APP",
      type: "Mobile app",
      description:
        "Back-End development. I used Node.js,express to design the backend and MongoDb as the database ",
    },
  ],
};

//education
const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  description:
    "Throughout my education journey, I have been able to come across the various technologies which have in turn helped me better understand the various technologies I am proficient in",
  items: [
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
    "Throughout my self teaching journey I have been able to harness various skills in software programming ",
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
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/**content */}
          <div className="min-h-[70vh] w-full ">
            {/**experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left  ">
                <h3 className="text-4xl font-bold "> {experience.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] overflow-auto ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] xl:h-[300px]  py-6 px-10 rounded-xl flex-col justify-center items-start text-left lg:items-start gap-1  "
                        >
                          <span className="text-accent ">{item.project} </span>
                          <h3 className="text-xl max-w-[200px] min-h-[40px] text-left lg:items-start ">
                            {item.type}
                          </h3>
                          <div>
                            {/**dot */}
                            <p className="text-white/60">{item.description} </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/**education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left  ">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] overflow-auto ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px]  py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1  "
                        >
                          <span className="text-accent uppercase text-xl ">
                            {item.duration}
                          </span>
                          <h3 className="text-xl  min-h-[60px] justify-center items-center lg:items-start gap-1 ">
                            {item.degree}
                          </h3>
                          <div>
                            {/**dot */}
                            <p className="text-white/60">{item.institution} </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/**skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title} </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className=" h-[400px] overflow-auto">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  xl:gap-[30px]  ">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name} </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left min-h-screen "
            >
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold"> {about.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-start justify-start xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName} </span>
                        <span className="text-xl">{item.fieldValue} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
