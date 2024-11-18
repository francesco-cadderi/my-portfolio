import React, { useState } from "react";
import ScrollableBlock from "./ScrollableBlock"; // Assicurati che il path sia corretto

const Accordion = ({ id, title, isOpen, onToggle }) => {
  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      <div className="bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden">
        <div
          className="accordion-header cursor-pointer py-4 px-6 bg-gray-100 hover:bg-gray-200 transition-colors flex justify-between items-center"
          onClick={() => onToggle(id)} // Passa l'id per identificare quale accordion si è aperto
        >
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-xl">{isOpen ? "-" : "+"}</span>
        </div>

        {/* Contenuto dell'accordion, visibile solo quando isOpen è true */}
        {isOpen && (
          <div className="accordion-content py-6 px-6 bg-primary">
            {/* Qui puoi inserire il tuo componente ScrollableBlock */}
            <ScrollableBlock />
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
