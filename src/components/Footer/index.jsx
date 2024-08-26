import { useInView, motion } from "framer-motion";
import { useRef, useState } from "react";
import FooterCard from "../FooterCard";

const Footer = () => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const isInView = useInView(ref, { once: true });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <div className="w-full ">
      <div className="feature-container relative overflow-hidden -translate-x-10 w-[200%]">
        <div className="feature-images w-full flex">
          <img
            className="feature-image flex"
            src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c40a10d97a0e199239c16_Group%201000002265.svg"
            alt="Feature"
          />
          <img
            className="feature-image -translate-x-1"
            src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c40a10d97a0e199239c16_Group%201000002265.svg"
            alt="Feature"
          />
        </div>
      </div>
      <div className="bg-[#2A2A2A] ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          ref={ref}
          className="text-5xl lg:text-7xl font-medium flex flex-col pl-5 py-32"
        >
          <div className="text-white">
            <p className="text-xl lg:text-4xl mb-10">you can find me here</p>
            <p className="text-4xl lg:text-6xl mb-10">
              alimohebbi565@gmail.com
            </p>
          </div>
          <div className="flex justify-end mr-10">
            <FooterCard
              color={"blue"}
              href={"https://www.linkedin.com/in/ali-mohebbi-7165b7265/"}
              title={"Linkedin"}
              icon={"bi bi-linkedin"}
            />
            <FooterCard
              color={"gray"}
              href={"https://github.com/Ali-Mohebbi-Developer"}
              title={"GitHub"}
              icon={"bi bi-github"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
