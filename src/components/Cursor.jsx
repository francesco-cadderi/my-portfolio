import React from "react";
import { motion } from "framer-motion";

const Cursor = ({ visible }) => {
  return (
    <motion.span
      className="border-l-2 border-black"
      style={{
        position: "absolute",
        top: 0,
        left: `100%`, // Posiziona il cursore alla fine del testo
        height: "1.2em", // Altezza della barra
      }}
      animate={{
        opacity: visible ? [1, 0] : 0, // La pulsazione della barra
        scaleY: visible ? [1, 0.5, 1] : 1, // La barra pulsa in altezza
      }}
      transition={{
        duration: 1, // Durata della pulsazione
        repeat: Infinity, // Ripete all'infinito
        repeatType: "reverse", // Alterna tra opacità 1 e 0
        ease: "ease-in-out", // Transizione naturale
      }}
    />
  );
};

export default Cursor;
