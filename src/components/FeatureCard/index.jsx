import { useInView, motion } from "framer-motion";
import { useRef, useState } from "react";

/* eslint-disable react/prop-types */
const FeatureCard = ({ title, icon, desc }) => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const isInView = useInView(ref, ref1, { once: true });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      className="w-full "
    >
      <div className="flex justify-between items-center pb-5 mb-5 border-b border-white">
        <h3 className="text-white text-2xl font-semibold">{title}</h3>
        <span className="bg-[#ECFFA0] p-1 rounded-lg">
          <img src={icon} alt="logo" />
        </span>
      </div>
      <p className="text-white text-sm font-light ">{desc}</p>
    </motion.div>
  );
};

export default FeatureCard;
