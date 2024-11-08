import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";

function Block({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <AnimatePresence>
        {isScrolled ? (
          <motion.div
            key="new"
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -75 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 bg-blue-300 flex justify-center items-center"
          >
            <h1>Nuovo Contenuto</h1>
          </motion.div>
        ) : (
          <motion.div
            key="old"
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -75 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 bg-slate-700 flex justify-center items-center"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Block;
