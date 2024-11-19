import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import TypewriterText from "./TypewriterText";
import HighlightedTitle from "./HighlightedTitle";

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

function ScrollableBlock({ data }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleScroll = useCallback(
    debounce((event) => {
      const delta = event.deltaY;

      if (delta > 0 && currentSection < data.length - 1) {
        setDirection(1);
        setCurrentSection((prev) => prev + 1);
      } else if (delta < 0 && currentSection > 0) {
        setDirection(-1);
        setCurrentSection((prev) => prev - 1);
      }
    }, 150),
    [currentSection, data.length]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      y: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => ({
      y: direction > 0 ? -100 : 100,
      opacity: 0,
      position: "absolute",
      transition: { duration: 0.2 },
    }),
  };

  return (
    <div className="flex md:w-4/5 md:mt-6 h-[40rem] py-4 md:py-0 md:h-80">
      <div className="w-7 flex flex-col justify-start items-center h-full">
        {data.map((data, index) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, backgroundColor: "#ffffff" }}
            animate={{
              opacity: currentSection === index ? 1 : 0,
              backgroundColor:
                currentSection === index ? data.color : "#ffffff",
            }}
            transition={{
              opacity: { duration: 0.5 },
              backgroundColor: { duration: 0.5 },
            }}
            className="w-full h-full transition-all duration-200"
          />
        ))}
      </div>

      <div className="flex-1 flex justify-start items-center relative overflow-hidden">
        <AnimatePresence custom={direction}>
          {data.map(
            (data, index) =>
              index === currentSection && (
                <motion.div
                  key={data.id}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5 }}
                  className="w-[30rem] h-full md:h-80 flex flex-col pl-10"
                >
                  <motion.div
                    className="absolute top-0 left-0 w-1 border-l-4 border-black"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <HighlightedTitle title={data.title} color={data.color} />
                  <p className="self-start mt-5 mb-20 font-semibold">
                    {data.subtitle}
                  </p>
                  <div className="self-start">
                    <TypewriterText text={data.content} />
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ScrollableBlock;
