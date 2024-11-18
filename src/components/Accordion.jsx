import React, { useState } from "react";
import ScrollableBlock from "./ScrollableBlock";

const Accordion = ({ id, title, isOpen, onToggle }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="cursor-pointer px-10 bg-gray-100 hover:bg-gray-100 transition-colors flex justify-between items-center"
          onClick={() => onToggle(id)}
        >
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-5xl">{isOpen ? "-" : "+"}</span>
        </div>

        {/* Contenuto Accordion: visibile solo se è aperto */}
        <div
          className={`accordion-content bg-[#e7e5e4] transition-all duration-300 ${
            isOpen ? "opacity-100 max-h-[400]" : "opacity-0 max-h-[400]"
          }`}
        >
          <ScrollableBlock />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
