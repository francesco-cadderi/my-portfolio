import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText.split("").map((char, idx) => (
        <motion.span key={idx}>{char}</motion.span>
      ))}
    </motion.div>
  );
};

export default TypewriterText;
