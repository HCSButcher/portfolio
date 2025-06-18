import { animate, motion } from "framer-motion";

//variants
const stairAnimation = {
  initial: {
    top: "8%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculate the reverse index for  staggered delay
const reversIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reversIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative  "
          />
        );
      })}
    </>
  );
};

export default Stairs;
