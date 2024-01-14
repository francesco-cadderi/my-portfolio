import React from "react";
import { motion } from "framer-motion";
import "../index.css";

function Block({ children }) {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Block;
