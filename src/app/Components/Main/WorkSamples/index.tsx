import workSamples from "@/config/WorkSamples.json";
import ProjectCard from "./WorkCard";

const WorkSamples = () => {
  return (
    <div className="mx-auto md:p-6 px-4 md:my-5">
      <div className="md:flex flex-wrap justify-between">
        {workSamples.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            liveLink={project.liveLink || "null"}
            imageSrc={project.imagesrc}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkSamples;
