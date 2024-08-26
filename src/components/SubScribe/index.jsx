import { useRef, useState } from "react";
import SubScribeCard from "../SubScribeCard";
import { motion, useInView } from "framer-motion";

const SubScribe = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const isInView = useInView(ref, ref1, ref2, { once: true });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <div className="my-60">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="pb-10 mb-10 border-b border-black"
      >
        <h3 className="text-5xl lg:text-7xl font-medium flex flex-col lg:translate-x-[22%] ">
          <span>
            <span className="text-[#A3A3A3] mr-5">Select</span>
            <span>a subscription</span>
          </span>
          <span className="translate-x-48">
            <span className="mr-5">that works</span>
            <span className="text-[#A3A3A3]">for you</span>
          </span>
        </h3>
      </motion.div>

      <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-5">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="w-full md:w-1/2"
        >
          <SubScribeCard
            bg={"#ECFFA0"}
            color={"black"}
            price={955}
            btnBg={"#343434"}
            btnColor={"white"}
            title={"Standard"}
            desc={[
              "1 Request at a time",
              "Trello board with unlimited users",
              "Average 48h turnaround",
              "Daily Slack updates",
              "Pause or cancel anytime",
              "Available 5 days a week",
              "Priority support",
              "Goodnight wishes",
            ]}
          />
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="w-full md:w-1/2"
        >
          <SubScribeCard
            bg={"#8882ee"}
            color={"white"}
            price={1500}
            btnBg={"white"}
            btnColor={"#343434"}
            title={"Plus"}
            desc={[
              "2 Request at a time",
              "Trello board with unlimited users",
              "Average 24-48h turnaround",
              "Daily Slack updates",
              "Pause or cancel anytime",
              "Available 5 days a week",
              "Priority support",
              "Goodnight wishes",
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SubScribe;
