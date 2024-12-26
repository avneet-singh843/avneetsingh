import { TbBrandCpp, TbBrandReactNative } from "react-icons/tb";
import { FaC } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoBitbucket, IoLogoJavascript } from "react-icons/io5";

import { SiJira, SiNextdotjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";

import { SiTailwindcss } from "react-icons/si";
import { PiGitMergeFill } from "react-icons/pi";

const Skills = () => {
  return (
    <div>
      <div className="w-[90%] text-[#FAFAFA] bg-[#232325] mx-auto my-[4vh] md:my-[9vh] rounded-md py-4 px-4 md:px-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-[#303030] border-[1px]">
        {/* Languages */}
        <div className="grid grid-cols-2 md:grid-cols-4 justify-start my-5">
          <div className="flex items-center my-3">
            <FaC size={30} />
            <span className="ml-2 text-[1.3rem] text-center">C</span>
          </div>
          <div className="flex items-center my-3">
            <TbBrandCpp size={40} />
            <span className="ml-2 text-[1.3rem] text-center">C++</span>
          </div>
          <div className="flex items-center my-3">
            <BiLogoTypescript size={40} />
            <span className="ml-2 text-[1rem] md:text-[1.3rem] text-center">
              TypeScript
            </span>
          </div>
          <div className="flex items-center my-3">
            <IoLogoJavascript size={40} />
            <span className="ml-2 text-[1rem] md:text-[1.3rem] text-center">
              JavaScript
            </span>
          </div>
        </div>
        <hr className="bg-[#383838] h-[0.1rem] w-[70%] mx-auto mt-[1vh] md:mt-[3vh] border-0"></hr>
        {/* Frameworks */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-start my-8">
            <div className="flex items-center my-3">
              <TbBrandReactNative size={30} />
              <span className="ml-2 text-[1.3rem] text-center">
                React Native
              </span>
            </div>
            <div className="flex items-center my-3">
              <IoLogoNodejs size={40} />
              <span className="ml-2 text-[1.3rem] text-center">Node</span>
            </div>
            <div className="flex items-center my-3">
              <IoLogoReact size={40} />
              <span className="ml-2 text-[1rem] md:text-[1.3rem] text-center">
                React
              </span>
            </div>
            <div className="flex items-center my-3">
              <DiMongodb size={40} />
              <span className="ml-2 text-[1rem] md:text-[1.3rem] text-center">
                MongoDB
              </span>
            </div>
            <div className="flex items-center my-3 mt-2">
              <SiExpress size={40} />
              <span className="ml-2 text-[1rem] md:text-[1.3rem] text-center">
                Express
              </span>
            </div>
            <div className="flex items-center my-3 mt-2">
              <SiTailwindcss size={40} />
              <span className="ml-2 text-[1rem] md:text-[1.3rem] text-center">
                TailwindCSS
              </span>
            </div>
          </div>
        </div>
        <hr className="bg-[#383838] h-[0.1rem] w-[70%] mx-auto mt-[1vh] md:mt-[3vh] border-0"></hr>
        {/* Tools */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-start my-8">
            <div className="flex items-center my-3">
              <PiGitMergeFill size={40} />
              <span className="ml-2 text-[1rem] md:text-[1.3rem] text-center">
                Git
              </span>
            </div>
            <div className="flex items-center my-3">
              <SiJira size={40} />
              <span className="ml-2 text-[1rem] md:text-[1.3rem] text-center">
                Jira
              </span>
            </div>
            <div className="flex items-center my-3">
              <IoLogoBitbucket size={40} />
              <span className="ml-2 text-[1rem] md:text-[1.3rem] text-center">
                Bit Bucket
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
