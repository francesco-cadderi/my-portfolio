import React, { useState } from "react";
import ScrollableBlock from "./ScrollableBlock";

const Accordion = ({ id, title, isOpen, onToggle }) => {
  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      <div className="overflow-hidden">
        <div
          className="cursor-pointer px-10 bg-gray-100 hover:bg-gray-100 transition-colors flex justify-between items-center"
          onClick={() => onToggle(id)}
        >
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-5xl">{isOpen ? "-" : "+"}</span>
        </div>

        {isOpen && (
          <div className="accordion-content md:py-6 md:px-6 bg-[#e7e5e4]">
            <ScrollableBlock />
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
