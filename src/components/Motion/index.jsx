import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Motion = () => {
  const { scrollY } = useScroll();

  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const isInView = useInView(ref, { once: true });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  const yMidTransform = useTransform(
    scrollY,
    [(1200 * window.innerHeight) / 100, (1300 * window.innerHeight) / 100],
    [-10, (10 * window.innerHeight) / 100]
  );
  const yLastTransform = useTransform(
    scrollY,
    [(1200 * window.innerHeight) / 100, (1300 * window.innerHeight) / 100],
    [100, (-50 * window.innerHeight) / 100]
  );
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, x: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      className="pb-96 overflow-hidden "
    >
      <div className="mb-60">
        <h2 className="text-5xl lg:text-7xl font-medium flex flex-col">
          <span>
            <span className="text-[#A3A3A3] mr-5">Heres</span>
            <span>what others</span>
          </span>
          <span className="translate-x-48">say about us</span>
        </h2>
      </div>
      <div className="flex flex-nowrap justify-between px-40">
        <div>
          <img src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665d7f9b91d3b83cc07198aa_Rectangle%205.svg" />
        </div>
        <motion.div
          style={{ y: yMidTransform }}
          className="flex flex-col items-center"
        >
          <p className="flex flex-col text-3xl mb-10">
            <span>Testimonials</span>
            <span>coming soon!</span>
          </p>
          <img src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665d7f9b91d3b83cc07198aa_Rectangle%205.svg" />
        </motion.div>
        <motion.div style={{ y: yLastTransform }}>
          <img src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665d7f9b91d3b83cc07198aa_Rectangle%205.svg" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Motion;
