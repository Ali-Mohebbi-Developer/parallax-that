import { useRef, useState } from "react";
import ServicesCard from "../ServicesCard";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const isInView = useInView(ref, { once: true });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <div className="my-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        ref={ref}
        className="border-b-2 border-[#D0D0D0] pb-10 mb-10"
      >
        <h2 className="text-5xl lg:text-7xl font-medium flex flex-col translate-x-[0] lg:translate-x-[50%]">
          <span>
            <span className="text-[#A3A3A3]">Our</span>services
          </span>
          <span className="translate-x-48">include</span>
        </h2>
      </motion.div>
      <div className="flex gap-4 flex-wrap lg:flex-nowrap">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="w-full lg:w-1/2 p-5 bg-[#F4F4F4] rounded-3xl"
        >
          <ServicesCard
            bgTexts={"#d1def8"}
            src={
              "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/6658cfd4077c20adfd2810fc_Macbook%20Pro%20Mockup.jpg"
            }
            texts={[
              "Landing pages",
              "Multipage websites",
              "Blogs",
              "On-site SEO ",
              "Webflow",
              "Animations & interactions",
              "Hosting",
              "CMS",
              "And more",
            ]}
            title={"Web"}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          ref={ref2}
          className="w-full  lg:w-1/2 p-5 bg-[#F4F4F4] rounded-3xl"
        >
          <ServicesCard
            bgTexts={"#ecffa0"}
            src={
              "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/6658cfd43cda5ce0b31fcd9f_Free_2_ID_Cards_Mockup.jpg"
            }
            texts={[
              "Ads",
              "Social media",
              "Logos",
              "Graphics",
              "Brand guides",
              "Posters",
              "Brochures",
              "Slide decks",
              "Buisness cards",
              "And more",
            ]}
            title={"Brand"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
