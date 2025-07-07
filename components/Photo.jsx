"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative mt-0 xl:mb-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative w-[170px] h-[170px] xl:w-[400px] xl:h-[400px]"
      >
        {/* Circle */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 498 498"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="249"
            cy="249"
            r="240"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 450 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute inset-0 rounded-full overflow-hidden"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="profile photo"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
