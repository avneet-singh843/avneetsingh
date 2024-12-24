"use client";
import { useState } from "react";
import "./style.css";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import WorkSamples from "./WorkSamples";

const Main = () => {
  const [selectedCard, setSelectedCard] = useState("Experience");

  const tabs = [
    { name: "Skills", component: <Skills /> },
    { name: "Experience", component: <Experience /> },
    { name: "Projects", component: <Projects /> },
    { name: "Contact", component: <Contact /> },
    { name: "Work Samples", component: <WorkSamples /> },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <p className="md:pl-[3%] pl-[5%] text-[#FAFAFA] mt-[1vh] md:mt-[5vh] text-[1rem] md:text-[2rem] font-[600] tracking-wider">
          {selectedCard}
        </p>
        <div
          className={`z-[100] sidecard flex md:w-[57%] justify-between p-4 md:p-6 bg-[#282829] rounded-ss-2xl md:rounded-ss-none rounded-se-2xl border-[#303030] border-[1px] rounded-es-2xl tracking-wider font-[500]`}
        >
          {tabs.map((tab) => (
            <p
              key={tab.name}
              onClick={() => setSelectedCard(tab.name)}
              className={`${
                selectedCard === tab.name
                  ? "text-[#FFDB70]"
                  : "text-[#D6D6D6] hover:text-[#A2A2A2]"
              } cursor-pointer text-[0.8rem] sm:text-[0.6rem] md:text-[1.1rem]`}
            >
              {tab.name}
            </p>
          ))}
        </div>
      </div>
      <hr className="bg-[#FFDB70] rounded-lg h-[0.3rem] ml-[5%] md:ml-[3%] w-[7%] mt-[0.3vh] md:mt-[1.7vh] border-0" />
      {tabs.find((tab) => tab.name === selectedCard)?.component}
    </div>
  );
};

export default Main;
