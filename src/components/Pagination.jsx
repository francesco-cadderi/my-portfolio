import React, { useState } from "react";
import Accordion from "./Accordion";
import { tecnologies, profile, hobbies, software } from "../data_obj";

const Pagination = () => {
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className=" md:flex w-full h-screen">
        {/* Colonna sinistra */}
        <div className="w-1/2 px-4 md:my-12 flex flex-col justify-between space-y-4 flex-grow">
          <Accordion
            id={1}
            title="Tecnologies"
            isOpen={openAccordion === 1}
            onToggle={toggleAccordion}
            tecnologies={tecnologies}
          />
          <Accordion
            id={2}
            title="Software"
            isOpen={openAccordion === 2}
            onToggle={toggleAccordion}
            software={software}
          />
        </div>

        {/* Colonna destra */}
        <div className="w-1/2 px-4 md:my-12 flex flex-col justify-between space-y-4 flex-grow">
          <div>
            <Accordion
              id={3}
              title="Profile"
              isOpen={openAccordion === 3}
              onToggle={toggleAccordion}
              profile={profile}
            />
          </div>
          <div>
            <Accordion
              id={4}
              title="Hobbies"
              isOpen={openAccordion === 4}
              onToggle={toggleAccordion}
              hobbies={hobbies}
            />
          </div>
        </div>
      </div>

      {/*
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
          <Accordion
            id={4}
            title="Software"
            isOpen={openAccordion === 4}
            onToggle={toggleAccordion}
            software={software}
          />
        </div> 
      </div>*/}
    </div>
  );
};

export default Pagination;
