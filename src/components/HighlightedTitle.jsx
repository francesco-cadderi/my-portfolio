import React from "react";
import { motion } from "framer-motion";

const HighlightedTitle = ({ title, color }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const highlight = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.4, ease: "easeInOut", delay: 0.5 },
    },
  };

  return (
    <motion.div
      className="relative inline-block"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ transformOrigin: "left" }}
        variants={highlight}
      />
      <div className="flex justify-between items-center">
        <h1
          className="text-4xl font-extrabold pl-2 relative z-10"
          style={{ color }}
        >
          {title}
        </h1>
      </div>
    </motion.div>
  );
};

export default HighlightedTitle;
