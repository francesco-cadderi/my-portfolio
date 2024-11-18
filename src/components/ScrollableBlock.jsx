import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import TypewriterText from "./TypewriterText";
import HighlightedTitle from "./HighlightedTitle";
import { sections } from "../data_obj";

// Funzione di debouncing
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

function ScrollableBlock() {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(1);

  // Ottimizzare lo scroll con debounce per evitare troppi aggiornamenti
  const handleScroll = useCallback(
    debounce((event) => {
      const delta = event.deltaY;

      // Verifica la direzione dello scroll e limita i cambiamenti
      if (delta > 0 && currentSection < sections.length - 1) {
        setDirection(1);
        setCurrentSection((prev) => prev + 1);
      } else if (delta < 0 && currentSection > 0) {
        setDirection(-1);
        setCurrentSection((prev) => prev - 1);
      }
    }, 150),
    [currentSection]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  // Varianti per le animazioni di ingresso/uscita
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
    <div className="flex md:w-4/5 h-[40rem] py-4 md:py-0 md:h-80">
      {/* Colonna dei Breadcrumbs */}
      <div className="w-7 flex flex-col justify-start items-center h-full">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, backgroundColor: "#ffffff" }}
            animate={{
              opacity: currentSection === index ? 1 : 0,
              backgroundColor:
                currentSection === index ? section.color : "#ffffff",
            }}
            transition={{
              opacity: { duration: 0.5 },
              backgroundColor: { duration: 0.5 },
            }}
            className="w-full h-full transition-all duration-200"
          />
        ))}
      </div>

      {/* Blocco di contenuto */}
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
  );
}

export default ScrollableBlock;
