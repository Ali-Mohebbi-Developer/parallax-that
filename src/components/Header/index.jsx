import Navbar from "../Navbar";
import { motion } from "framer-motion";
import "../../index.css";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
const Header = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="mb-20 ">
          <p className="text-4xl md:text-6xl lg:text-7xl pr-[50px] md:pr-[100px] lg:pr-[300px] xl:pr-[500px] flex flex-col font-medium">
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
              className="pb-5"
            >
              {" "}
              Design subscription
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
              className="pb-5"
            >
              <span className="text-[#a3a3a3]">to grow your</span> brand
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
              className="pb-5"
            >
              <span className="text-[#a3a3a3]">&</span>
              marketing
            </motion.span>
          </p>
        </div>
        <div className="flex flex-col translate-x-0 lg:translate-x-[65%] overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          >
            Access unlimited top-notch design services that
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
          >
            will take care of your design needs seamlessly
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
            className="mb-5"
          >
            and efficiently at one fixed monthly fee
          </motion.p>
          <a href="#about">
            <motion.button
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
              className="border group border-black rounded-full py-3 flex px-4 relative justify-start w-36"
            >
              <span> Learn More</span>
              <span className="absolute peer scale-50 group-hover:scale-[1.3] duration-300 flex justify-center items-center bg-black w-5 h-5 right-3 top-[50%] -translate-y-1/2 rounded-full">
                <span className="opacity-0 group-hover:opacity-100 duration-500 text-white">
                  <i className="bi bi-arrow-down"></i>
                </span>
              </span>
            </motion.button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
