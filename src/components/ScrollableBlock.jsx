import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import TypewriterText from "./TypewriterText";
import HighlightedTitle from "./HighlightedTitle";
import sql from "../assets/sql.png";

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
    color: "white",
  },
  {
    id: 2,
    title: "JavaScript",
    subtitle: "Junior Full-stack Developer | Web Designer",
    content:
      "Developer & Web designer curioso e dinamico, sempre pronto ad assorbire nuove tecniche da aggiungere al proprio skillset. Grazie a pregresse esperienze ho sviluppato responsabilità ed organizzazione, nonché una buona dose di empatia e pazienza.",
    color: "#F0DB4F",
    icon: "https://brandpalettes.com/wp-content/uploads/2021/06/javascript-color-codes.svg",
  },
  {
    id: 3,
    title: "React",
    subtitle: "Junior Full-stack Developer | Web Designer",
    content:
      "Developer & Web designer curioso e dinamico, sempre pronto ad assorbire nuove tecniche da aggiungere al proprio skillset. Grazie a pregresse esperienze ho sviluppato responsabilità ed organizzazione, nonché una buona dose di empatia e pazienza.",
    color: "#61DBFB",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: 4,
    title: "PHP",
    subtitle: "Junior Full-stack Developer | Web Designer",
    content:
      "Developer & Web designer curioso e dinamico, sempre pronto ad assorbire nuove tecniche da aggiungere al proprio skillset. Grazie a pregresse esperienze ho sviluppato responsabilità ed organizzazione, nonché una buona dose di empatia e pazienza.",
    color: "#777BB3",
    icon: "https://nehalist.io/content/images/2024/05/php.svg",
  },
  {
    id: 5,
    title: "Laravel",
    subtitle: "Junior Full-stack Developer | Web Designer",
    content:
      "Developer & Web designer curioso e dinamico, sempre pronto ad assorbire nuove tecniche da aggiungere al proprio skillset. Grazie a pregresse esperienze ho sviluppato responsabilità ed organizzazione, nonché una buona dose di empatia e pazienza.",
    color: "#F05340",
    icon: "https://brandpalettes.com/wp-content/uploads/2021/06/laravel-color-codes.svg",
  },
  {
    id: 6,
    title: "MySQL",
    subtitle: "Junior Full-stack Developer | Web Designer",
    content:
      "Developer & Web designer curioso e dinamico, sempre pronto ad assorbire nuove tecniche da aggiungere al proprio skillset. Grazie a pregresse esperienze ho sviluppato responsabilità ed organizzazione, nonché una buona dose di empatia e pazienza.",
    color: "#F05340",
    icon: sql,
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
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex w-4/5 h-full py-24 md:py-0 md:h-80">
        {/* Breadcrumbs Column */}
        <div className="w-7 flex flex-col justify-start items-center h-full">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ backgroundColor: "transparent" }}
              animate={{
                backgroundColor:
                  currentSection === index ? section.color : "transparent",
              }}
              transition={{ duration: 0.5 }}
              className={`w-full h-full transition-all duration-200`}
            />
          ))}
        </div>

        {/* Content Block */}
        <div className="flex-1 flex justify-start items-center relative overflow-hidden">
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
                    className="w-[30rem] h-full md:h-80 flex flex-col pl-10"
                  >
                    {/* Animazione del bordo */}
                    <motion.div
                      className="absolute top-0 left-0 w-1 border-l-4 border-black"
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <HighlightedTitle
                      title={section.title}
                      color={section.color}
                      icon={section.icon} // Passa l'icona correttamente
                    />
                    <p className="self-start mt-5 mb-20 font-semibold">
                      {section.subtitle}
                    </p>

                    <div className="self-start">
                      <TypewriterText text={section.content} />
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default ScrollableBlock;
