// Navbar.js
import { useState } from "react";
import "../../index.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const li = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Work", link: "#work" },
    { name: "Benefits", link: "#benefits" },
    { name: "Contact", link: "#contact" },
  ];

  const variants = {
    open: { width: 280, height: 170 },
    closed: {
      width: 0,
      height: 0,
      opacity: 0.4,
      transition: { delay: 0.2, duration: 1 },
    },
  };
  const liVarients = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { delay: 0.8 } },
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="flex justify-between items-center w-full fixed z-20 left-0 top-6 px-5 md:px-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
    >
      <p className="text-4xl font-bold">that</p>
      <nav className="relative px-5 py-3 hidden lg:flex backdrop-blur rounded-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
          className="absolute top-0 left-0 bg-[#2a2a2a80]  w-full h-full rounded-lg"
        ></motion.div>
        <ul className="flex justify-between w-full">
          {li.map((item) => (
            <li key={item.name} className="px-5 text relative flex">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                href={item.link}
                className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:duration-300"
              >
                {item.name}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center">
        <button className="bg-[#2a2a2a] flex  justify-center items-center lg:w-32 h-10 overflow-hidden text-white px-5 py-3 rounded-full font-bold">
          <div className="flex flex-col translate-y-5 lg:hover:-translate-y-6 duration-500">
            <span className="mb-5">See plans</span>
            <span className="">See plans</span>
          </div>
        </button>
        <div className="flex flex-col relative lg:hidden items-center">
          <span className="relative px-5 py-3 ml-3 cursor-pointer backdrop-blur rounded-full">
            <span className=" rounded-full">Menu</span>
            <span
              className="absolute top-0 left-0 bg-[#2a2a2a80] opacity-10 w-full h-full rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            ></span>
          </span>
          <motion.div
            className="absolute z-10 top-14 right-0 rounded-lg backdrop-blur overflow-hidden"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="absolute top-0 left-0 bg-[#2a2a2a80] opacity-10  backdrop-blur-none w-full h-full rounded-lg"></span>

            <ul className="flex flex-wrap justify-between w-72 p-5 ">
              {li.map((item) => (
                <motion.li
                  key={item.name}
                  animate={isOpen ? "open" : "closed"}
                  variants={liVarients}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="px-6 flex py-2 "
                >
                  <a href={item.link} className="text-xl cursor-pointer">
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
