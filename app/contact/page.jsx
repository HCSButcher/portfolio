"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+254) 748 092 687 ",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "trevor254oduol@gmail.com ",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Nakuru, Kabarak 20157 ",
  },
];
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/**form */}
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-4xl  ">
              <h3 className="text-accent text-4xl">Let&apos;s work together</h3>
              <p className="text-white/60">
                Bring your ideas to me and i&apos;ll transform them to live
                working projects
              </p>
              {/**input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstName" placeholder="First name" />
                <Input type="lastName" placeholder="Last name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="phone number" />
              </div>
              {/**select */}
              <Select>
                <SelectTrigger className="flex h-[48px] w-full items-center justify-between rounded-md border border-white/10 bg-primary px-4 py-5 text-base text-white/60 placeholder:text-white/10 focus:border-accent outline-none">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent
                  className="z-50 bg-[#1e1e23] border border-white/10 rounded-md shadow-md mt-2"
                  position="popper"
                  side="top"
                  sideOffset={5}
                >
                  <SelectGroup>
                    <SelectLabel className="text-white/40 px-4 py-2">
                      Select a service
                    </SelectLabel>
                    <SelectItem
                      value="web"
                      className="px-4 py-2 cursor-pointer hover:bg-accent hover:text-primary text-white"
                    >
                      Web Development
                    </SelectItem>
                    <SelectItem
                      value="mobile"
                      className="px-4 py-2 cursor-pointer hover:bg-accent hover:text-primary text-white"
                    >
                      Mobile App Development
                    </SelectItem>
                    <SelectItem
                      value="webapp"
                      className="px-4 py-2 cursor-pointer hover:bg-accent hover:text-primary text-white"
                    >
                      Web App Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/*text area */}
              <Textarea
                className="h-[200px] "
                placeholder="Type your message here"
              />
            </form>
          </div>
          {/**info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
