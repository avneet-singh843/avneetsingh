import { IoIosFolderOpen, IoMdCode } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";
import "./style.css";
import experienceData from "../../../../config/experience.json";
import educationData from "../../../../config/educationData.json";
import achievementsData from "../../../../config/achievementsData.json";

const Experience = () => {
  return (
    <div>
      <div className="p-8">
        <div className="w-[80%] md:w-[28%] md:ml-[72%]">
          <a href="/AvneetSingh_Resume.pdf" download>
            <div className="flex text-[#FFDB70] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-3 px-5 rounded-lg bg-gradient-to-r from-[#FFDB70]/30 to-[#202022]">
              <IoIosFolderOpen size={20} />
              <p className="pl-2">Download Resume</p>
            </div>
          </a>
        </div>
        <section className="timeline mt-5 md:mt-0">
          <div className="title-wrapper">
            <div>
              <IoMdCode
                className="text-[#FFDB70] rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                size={50}
              />
            </div>
            <h3 className="text-[#FAFAFA] font-[600] text-[1.5rem] tracking-wide">
              Experience
            </h3>
          </div>
          <ol className="timeline-list">
            {experienceData.map((item, index) => (
              <li className="timeline-item" key={index}>
                <h4 className="h4 timeline-item-title">{item.title}</h4>
                <span>
                  {item.company} - {item.location}
                </span>
                <div className="timeline-text">{item.period}</div>
                <br />
                <div className="timeline-text">
                  <ul style={{ paddingLeft: 0 }}>
                    {item.details.map((detail, index) => (
                      <li key={index} style={{ display: "flex" }}>
                        <span style={{ marginRight: "10px", color: "#d6d6d6" }}>
                          -
                        </span>{" "}
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <div>
          <p className="text-[#FAFAFA] font-[600] tracking-wide text-[1.5rem]">
            Achievements
          </p>
          <div className="w-[90%] text-[#FAFAFA] bg-[#232325] mx-auto my-[1vh] md:my-[2vh] rounded-md py-4 px-4 md:px-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-[#303030] border-[1px]">
            {achievementsData.map((achievement, index) => (
              <p key={index} className="mb-1">
                {achievement.description}
              </p>
            ))}
          </div>
        </div>
        <section className="timeline">
          <div className="title-wrapper">
            <div>
              <FaBookReader
                className="text-[#FFDB70] rounded-md p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                size={40}
              />
            </div>
            <h3 className="text-[#FAFAFA] font-[600] text-[1.5rem] tracking-wide">
              Education
            </h3>
          </div>
          <ol className="timeline-list">
            {educationData.map((item, index) => (
              <li className="timeline-item" key={index}>
                <h4 className="h4 timeline-item-title">{item.school}</h4>
                <span>{item.years}</span>
                <p className="timeline-text">{item.degree}</p>
                <p className="timeline-text">CGPA: {item.cgpa}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Experience;
