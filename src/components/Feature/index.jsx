import { useRef, useState } from "react";
import "../../index.css";
import FeatureCard from "../FeatureCard";
import { useInView, motion } from "framer-motion";

const Feature = () => {
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          ref={ref}
          className="text-5xl lg:text-7xl font-medium flex flex-col pl-5 py-32"
        >
          <span>
            <span className="text-[#A3A3A3]">So,</span>
            <span className="text-white">why work</span>
          </span>
          <span className="text-white translate-x-48">with DesignThat?</span>
        </motion.p>
        <div className=" w-full flex flex-wrap pb-20">
          <div className="w-1/2 md:w-1/3 p-10">
            <FeatureCard
              title={"Speed"}
              icon={
                "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21ba40744cc3dd7b44_mdi_globe.svg"
              }
              desc="Receive your designs ASAP without compromising quality. Our model doesn’t require long meetings and dozens of emails, which gives us the ability to focus 98% of the time doing the actual work."
            />
          </div>
          <div className="w-1/2 md:w-1/3 p-10">
            <FeatureCard
              title={"Transparency"}
              icon={
                "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21bb25e8a020cdcfb4_Frame%20124.svg"
              }
              desc={
                "Say bye-bye to budget uncertainties with our transparent and fixed pricing model. You’re free to pause or cancel anytime."
              }
            />
          </div>
          <div className="w-1/2 md:w-1/3 p-10">
            <FeatureCard
              title={"Results"}
              icon={
                "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c2142595a5d630ce530_zondicons_checkmark-outline.svg"
              }
              desc={
                "Good design is the one that performs well and leaves a memorable mark on your audience. So, we combine both worlds - performance and beauty."
              }
            />
          </div>
          <div className="w-1/2 md:w-1/3 p-10">
            <FeatureCard
              title={"Engagement"}
              icon={
                "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21f4dab3ad725e8c3b_jam_messages-alt.svg"
              }
              desc={
                "Even though we work asynchronously, we will update you daily on Slack (if you don’t mind) and do calls and looms, when needed"
              }
            />
          </div>
          <div className="w-1/2 md:w-1/3 p-10">
            <FeatureCard
              title={"Flexibility"}
              icon={
                "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c21585e5de6d45d3d7a_fluent_board-24-filled.svg"
              }
              desc={
                "Once signed up, you’ll get your own easy-to-manage Trello board, where you can add and oversee all of your requests. No user limit, add as many people as you need"
              }
            />
          </div>
          <div className="w-1/2 md:w-1/3 p-10">
            <FeatureCard
              title={"Scalability"}
              icon={
                "https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4c2174ead105a6e3891d_fluent_align-top-24-filled.svg"
              }
              desc={
                "Whether you're one-person business or a large company, our subscription plans scale with your needs."
              }
            />
          </div>
        </div>
      </div>
      <div>
        <div className="feature-container relative overflow-hidden -translate-x-10 w-[200%]">
          <div className="feature-images w-full flex">
            <img
              className="feature-image flex"
              src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4030585e5de6d45565d6_Group%201000002261.svg"
              alt="Feature"
            />
            <img
              className="feature-image -translate-x-1"
              src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/665c4030585e5de6d45565d6_Group%201000002261.svg"
              alt="Feature"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
