import React, { useState } from "react";
import Accordion from "./Accordion"; // Assicurati che il path sia corretto

const Pagination = () => {
  // Stato per tracciare quale accordion è aperto
  const [openAccordion, setOpenAccordion] = useState(1); // Inizializza con 1 per aprire il primo accordion di default

  // Funzione per gestire l'apertura/chiusura degli accordion
  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id); // Chiude se è già aperto, altrimenti apre
  };

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:flex w-full">
        {/* Colonna sinistra */}
        <div className="w-1/2 p-4">
          <Accordion
            id={1} // Ogni accordion deve avere un id unico
            title="Accordion 1 (Left)"
            isOpen={openAccordion === 1}
            onToggle={toggleAccordion}
          />
        </div>

        {/* Colonna destra */}
        <div className="w-1/2 p-4 flex flex-col space-y-4">
          <div className="mb-4">
            <Accordion
              id={2}
              title="Accordion 2 (Right - Top)"
              isOpen={openAccordion === 2}
              onToggle={toggleAccordion}
            />
          </div>
          <div className="mb-4">
            <Accordion
              id={3}
              title="Accordion 3 (Right - Bottom)"
              isOpen={openAccordion === 3}
              onToggle={toggleAccordion}
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden w-full">
        <div className="w-full p-4 space-y-4">
          <Accordion
            id={1}
            title="Accordion 1 (Mobile)"
            isOpen={openAccordion === 1}
            onToggle={toggleAccordion}
          />
          <Accordion
            id={2}
            title="Accordion 2 (Mobile)"
            isOpen={openAccordion === 2}
            onToggle={toggleAccordion}
          />
          <Accordion
            id={3}
            title="Accordion 3 (Mobile)"
            isOpen={openAccordion === 3}
            onToggle={toggleAccordion}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
