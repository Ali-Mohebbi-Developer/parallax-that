import { useRef, useState } from "react";
import AboutCard from "../AboutCard";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const [hasAnimated, setHasAnimated] = useState(false);

  const isInView = useInView(ref, { once: true });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div className="flex flex-col items-center">
      <motion.h2
        ref={ref}
        className="text-3xl py-10 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        Here’s how you get it:
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        ref={ref1}
        className="flex flex-wrap lg:flex-nowrap gap-5 w-full"
      >
        <div className="bg-[#ecffa0] px-10 py-7 rounded-3xl w-full lg:w-4/12">
          <AboutCard
            title="Start right away!"
            number={1}
            logo="bi bi-camera-video"
            desc="Select one of our plans and book a free discovery call to learn how we can work together. If all good, we'll kick off in the same day."
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          ref={ref2}
          className="bg-[#d1def8] px-10 py-7  rounded-3xl w-full lg:w-4/12"
        >
          <AboutCard
            title="Request designs"
            number={2}
            logo="bi bi-magic"
            desc="Request as many designs as you want and sit back, as we craft your designs and deliver first drafts in under 48 hours. If all good"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          ref={ref3}
          className="bg-[#8882ee] px-10 py-7 rounded-3xl w-full lg:w-4/12"
        >
          <AboutCard
            title="Finalize"
            number={3}
            logo="bi bi-arrow-clockwise"
            desc="Even though we always do our best to hit the goal with the first take, you can ask for as many iterations as needed. No additional costs."
          />
        </motion.div>
      </motion.div>
      <div className="flex items-start w-full py-10 text-3xl lg:pr-96">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          ref={ref4}
        >
          At DesignThat, we go beyond the ordinary to ensure satisfaction of
          every step of the processes, as our subscription model is designed
          with you in mind.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
