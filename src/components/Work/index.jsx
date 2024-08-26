import WorkCard from "../WorkCard";
import img1 from "../../img/coding-1-29.png";
import img2 from "../../img/coding-28.png";
import img3 from "../../img/completed-task-13.png";
import img4 from "../../img/customer-service-35.png";
import img5 from "../../img/profiling-100.png";
import img6 from "../../img/user-interface-42.png";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Work = () => {
  const { scrollY } = useScroll();

  const ref = useRef(null);
  const ref1 = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const isInView = useInView(ref, ref1, { once: true });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  const yTransform = useTransform(
    scrollY,
    [(700 * window.innerHeight) / 100, (800 * window.innerHeight) / 100],
    [-200, (10 * window.innerHeight) / 100]
  );

  return (
    <div className="overflow-hidden">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="text-5xl lg:text-7xl font-medium flex flex-col pl-5 pb-20"
      >
        <span className="text-[#A3A3A3]">Check out</span>
        <span className="translate-x-48">our portfolio</span>
      </motion.h2>
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="flex flex-col md:flex-row justify-center items-center"
      >
        <div
          className="flex flex-col justify-center items-center mb-96
        "
        >
          <WorkCard img={img1} />
          <WorkCard img={img2} />
          <WorkCard img={img3} />
        </div>
        <motion.div
          style={{ y: yTransform }}
          className="flex flex-col justify-center items-center"
        >
          <WorkCard img={img4} />
          <WorkCard img={img5} />
          <WorkCard img={img6} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Work;
