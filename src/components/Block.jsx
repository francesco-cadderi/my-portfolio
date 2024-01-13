import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "../index.css";

function Block({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const triggerAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      triggerAnimation.start("visible");
      console.log("visible");
    } else {
        triggerAnimation.start("hidden");
        console.log("hidden");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="container">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={triggerAnimation}
        transition={{ duration: 0.5, delay: 0.3}}
        
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Block;
