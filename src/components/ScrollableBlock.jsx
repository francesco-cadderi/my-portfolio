import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import TypewriterText from "./TipewriterText";

// Funzione debounce
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

const sections = [
  {
    id: 1,
    title: "Francesco Cadderi",
    subtitle: "Junior Full-stack Developer | Web Designer",
    content:
      "Developer & Web designer curioso e dinamico, sempre pronto ad assorbire nuove tecniche da aggiungere al proprio skillset. Grazie a pregresse esperienze ho sviluppato responsabilità ed organizzazione, nonché una buona dose di empatia e pazienza.",
    color: "bg-red-300",
  },
  {
    id: 2,
    title: "Francesco Cadderi",
    subtitle: "Junior Full-stack Developer | Web Designer",
    content:
      "Developer & Web designer curioso e dinamico, sempre pronto ad assorbire nuove tecniche da aggiungere al proprio skillset. Grazie a pregresse esperienze ho sviluppato responsabilità ed organizzazione, nonché una buona dose di empatia e pazienza.",
    color: "bg-red-300",
  },
  {
    id: 3,
    title: "Francesco Cadderi",
    subtitle: "Junior Full-stack Developer | Web Designer",
    content:
      "Developer & Web designer curioso e dinamico, sempre pronto ad assorbire nuove tecniche da aggiungere al proprio skillset. Grazie a pregresse esperienze ho sviluppato responsabilità ed organizzazione, nonché una buona dose di empatia e pazienza.",
    color: "bg-red-300",
  },
  {
    id: 4,
    title: "Francesco Cadderi",
    subtitle: "Junior Full-stack Developer | Web Designer",
    content:
      "Developer & Web designer curioso e dinamico, sempre pronto ad assorbire nuove tecniche da aggiungere al proprio skillset. Grazie a pregresse esperienze ho sviluppato responsabilità ed organizzazione, nonché una buona dose di empatia e pazienza.",
    color: "bg-red-300",
  },
];

function ScrollableBlock() {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleScroll = debounce((event) => {
    const delta = event.deltaY;
    if (delta > 0 && currentSection < sections.length - 1) {
      setDirection(1);
      setCurrentSection((prev) => prev + 1);
    } else if (delta < 0 && currentSection > 0) {
      setDirection(-1);
      setCurrentSection((prev) => prev - 1);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, handleScroll]);

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
    <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden">
      <AnimatePresence custom={direction}>
        {sections.map(
          (section, index) =>
            index === currentSection && (
              <motion.div
                key={section.id}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.5 }}
                className={`w-96 h-96 flex flex-col`}
              >
                <h1 className="self-start mt-2 ml-2">{section.title}</h1>{" "}
                <p className="self-start mt-5 ml-2 mb-24">{section.subtitle}</p>{" "}
                <div className="self-start mb-2 ml-2">
                  {" "}
                  <TypewriterText text={section.content} />{" "}
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
}

export default ScrollableBlock;
