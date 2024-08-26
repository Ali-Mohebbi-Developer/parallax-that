import { motion, useScroll, useTransform } from "framer-motion";

const ScrollFixed = () => {
  const { scrollY } = useScroll();

  const startPoint = window.innerHeight / 2;
  const fadeInStart = window.innerHeight * 1.5;
  const fadeOutEnd = window.innerHeight * 4;

  const fadeInStartText = window.innerHeight * 1;
  const fadeMiddleText = window.innerHeight * 2;
  const fadeOutEndText = window.innerHeight * 4.5;
  const endPoint = 6000;

  const divY = useTransform(scrollY, [startPoint, endPoint], [0, 5900]);
  const div1X = useTransform(
    scrollY,
    [startPoint, endPoint * 0.33, endPoint * 0.4, endPoint],
    [0, -50, -100, 1300]
  );

  const div2X = useTransform(
    scrollY,
    [startPoint, endPoint * 0.15, endPoint * 0.66, endPoint],
    [0, 500, 250, 0]
  );

  const scale1 = useTransform(scrollY, [startPoint, endPoint], [4, 0.5]);
  const scale2 = useTransform(scrollY, [startPoint, endPoint], [4, 0.5]);

  const opacity = useTransform(scrollY, [fadeInStart, fadeOutEnd], [1, 0]);

  const textOpacity = useTransform(
    scrollY,
    [fadeInStartText, fadeMiddleText, fadeOutEndText],
    [0, 1, 0]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
      className="relative h-[400vh] pt-48"
    >
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-[rgba(42,42,42,0.1)] backdrop-blur-[10px] bg-cover bg-fixed bg-center rounded-3xl" />

      <div>
        <motion.figure
          style={{ y: divY, x: div1X, scale: scale1, opacity }}
          className="absolute top-10 left-[20%] w-[100px] h-[100px]"
        >
          <img
            className="rotate-12"
            src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/66562b5d2583e746c2d4f983_Rectangle%201.svg"
            alt=""
          />
        </motion.figure>

        <motion.figure
          style={{ y: divY, x: div2X, scale: scale2, opacity }}
          className="absolute top-10 left-[40%] w-[100px] h-[100px] "
        >
          <img
            className="-rotate-12"
            src="https://cdn.prod.website-files.com/66547507d69d70a29b5cb91e/66562b5d624da51b9bbcaba5_Rectangle%203.svg"
            alt=""
          />
        </motion.figure>
      </div>

      <motion.div
        className="fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-20 p-14 text-xl text-center"
        style={{ opacity: textOpacity }}
      >
        Design, but in a more efficient and simplified way
      </motion.div>
    </motion.div>
  );
};

export default ScrollFixed;
