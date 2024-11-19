import React, { useState } from "react";
import Accordion from "./Accordion";
import { tecnologies, profile, hobbies } from "../data_obj";

const Pagination = () => {
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:flex w-full h-screen">
        {/* Colonna sinistra */}
        <div className="w-1/2 p-4 md:p-0 flex items-center justify-center">
          <Accordion
            id={1}
            title="Tecnologies"
            isOpen={openAccordion === 1}
            onToggle={toggleAccordion}
            tecnologies={tecnologies}
          />
        </div>

        {/* Colonna destra */}
        <div className="w-1/2 p-4 md:p-0 md:my-12 flex flex-col justify-between space-y-4 flex-grow">
          <div>
            <Accordion
              id={2}
              title="Profile"
              isOpen={openAccordion === 2}
              onToggle={toggleAccordion}
              profile={profile}
            />
          </div>
          <div>
            <Accordion
              id={3}
              title="Hobbies"
              isOpen={openAccordion === 3}
              onToggle={toggleAccordion}
              hobbies={hobbies}
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden w-full">
        <div className="w-full p-4 space-y-4">
          <Accordion
            id={1}
            title="Tecnologies"
            isOpen={openAccordion === 1}
            onToggle={toggleAccordion}
            tecnologies={tecnologies}
          />
          <Accordion
            id={2}
            title="Profile"
            isOpen={openAccordion === 2}
            onToggle={toggleAccordion}
            profile={profile}
          />
          <Accordion
            id={3}
            title="Hobbies"
            isOpen={openAccordion === 3}
            onToggle={toggleAccordion}
            hobbies={hobbies}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
