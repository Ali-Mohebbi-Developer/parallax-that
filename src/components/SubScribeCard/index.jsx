import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* eslint-disable react/prop-types */
const SubScribeCard = ({ title, price, desc, bg, color, btnColor, btnBg }) => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const isInView = useInView(ref, ref1, ref2, ref3, ref4, { once: true });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }
  return (
    <div
      className={`flex flex-col rounded-3xl p-8 ${
        bg === "#ECFFA0" ? "bg-[#ECFFA0]" : "bg-[#8882ee]"
      } ${color === "black" ? "text-black" : "text-white"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        ref={ref}
        className={`font-medium text-3xl flex w-full justify-between border-b pb-5 mb-20 ${
          color === "black" ? "border-black" : "border-white"
        }`}
      >
        <p>{title}</p>
        <span>${price}/m</span>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        ref={ref1}
        className="w-full flex justify-between items-start flex-wrap border-dashed border-b-2 border-[#BABFA7] pb-10"
      >
        {desc.map((item, index) => {
          const lastTwo = index >= desc.length - 2;
          const isYellowBg = bg === "#ECFFA0";
          return (
            <motion.li
              initial={{ opacity: 0, x: 50 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              ref={ref2}
              key={item}
              className={`flex justify-start w-1/2 my-3 ${
                lastTwo && isYellowBg ? "text-[#8882ee] line-through" : ""
              }
`}
            >
              -{item}
            </motion.li>
          );
        })}
      </motion.ul>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        ref={ref3}
        className="w-full flex justify-start mt-5 font-bold"
      >
        <p>+ Webflow development</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        ref={ref4}
        className="w-full flex justify-end mt-5"
      >
        <button
          className={`flex justify-center items-center whitespace-nowrap  px-5 py-3 rounded-full font-bold transition-transform duration-500 ${
            btnBg === "#343434" ? "bg-[#343434]" : "bg-white"
          } ${btnColor === "white" ? "text-white" : "text-[#343434]"}`}
        >
          Book intro call
        </button>
      </motion.div>
    </div>
  );
};

export default SubScribeCard;
