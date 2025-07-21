"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as SelectPrimitive from "@radix-ui/react-select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Check } from "lucide-react";

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

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3om36yo", // Replace with your actual service ID
        "template_y0mqnfq", // Replace with your actual template ID
        formRef.current,
        "szm5rBcxM44y9nNqc" // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          form.Ref.current.reset();
          setSelectedService("");
        },
        (error) => {
          console.log("Email error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 min-h-screen"
    >
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-4xl"
            >
              <h3 className="text-accent text-4xl">Let&apos;s work together</h3>
              <p className="text-white/60">
                Bring your ideas to me and I&apos;ll transform them into live
                working projects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="first_name" type="text" placeholder="First name" />
                <Input name="last_name" type="text" placeholder="Last name" />
                <Input name="email" type="email" placeholder="Email" />
                <Input name="phone" type="tel" placeholder="Phone number" />
              </div>

              {/* Select */}
              <SelectPrimitive.Root
                value={selectedService}
                onValueChange={setSelectedService}
                name="service"
              >
                <SelectPrimitive.Trigger
                  className="flex h-[48px] w-full items-center justify-between rounded-md border border-white/10 bg-primary px-4 py-5 text-base text-white/60 placeholder:text-white/10 focus:border-accent outline-none"
                  aria-label="Service"
                >
                  <SelectPrimitive.Value placeholder="Select a service" />
                </SelectPrimitive.Trigger>
                <SelectPrimitive.Portal>
                  <SelectPrimitive.Content
                    className="z-50 bg-primary border border-white/10 rounded-md shadow-md"
                    position="popper"
                    side="top"
                    sideOffset={5}
                  >
                    <SelectPrimitive.Viewport>
                      <SelectPrimitive.Group>
                        <SelectPrimitive.Label className="text-white/40 px-4 py-2">
                          Select a service
                        </SelectPrimitive.Label>

                        {[
                          "Web Development",
                          "Mobile App Development",
                          "Web App Development",
                        ].map((service) => (
                          <SelectPrimitive.Item
                            key={service}
                            value={service}
                            className="px-4 py-2 cursor-pointer hover:bg-accent text-white flex items-center justify-between"
                          >
                            <SelectPrimitive.ItemText>
                              {service}
                            </SelectPrimitive.ItemText>
                            <SelectPrimitive.ItemIndicator>
                              <Check className="w-4 h-4 text-white" />
                            </SelectPrimitive.ItemIndicator>
                          </SelectPrimitive.Item>
                        ))}
                      </SelectPrimitive.Group>
                    </SelectPrimitive.Viewport>
                  </SelectPrimitive.Content>
                </SelectPrimitive.Portal>
              </SelectPrimitive.Root>

              {/* Hidden input for EmailJS */}
              <input type="hidden" name="service" value={selectedService} />

              <Textarea
                name="message"
                className="h-[200px] focus-visible:ring-accent focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-[10rem]" type="submit">
                Send Message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-72px bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
