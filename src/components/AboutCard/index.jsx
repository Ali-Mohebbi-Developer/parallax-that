import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

/* eslint-disable react/prop-types */
const AboutCard = ({ title, logo, number, desc }) => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const isInView = useInView(ref, ref1, ref2, { once: true });
  if (!hasAnimated && isInView) {
    setHasAnimated(true);
  }
  return (
    <div className={`flex flex-col justify-between`}>
      <div className=" flex items-center">
        <span className="bg-white px-2 py-1 mr-5 rounded-md text-2xl">
          <i className={`${logo}`}></i>
        </span>
        <motion.h3
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="text-xl font-medium"
        >
          {title}
        </motion.h3>
      </div>
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        className="py-24"
      >
        (0{number})
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      >
        {desc}
      </motion.div>
    </div>
  );
};

export default AboutCard;
