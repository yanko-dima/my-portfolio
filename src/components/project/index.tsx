import { IProject } from "@/types/projects";
import { FC } from "react";
import Technologies from "@/components/technologies";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  project: IProject;
}

const Project: FC<Props> = ({ project }) => {
  const {
    startDate,
    endDate,
    projectName,
    companyName,
    description,
    technologies,
  } = project;

  return (
    <a href="#" className="grid grid-cols-8 gap-4">
      <div className="mt-1 text-xs font-semibold uppercase col-span-2">
        {startDate} - {endDate}
      </div>
      <div className="col-span-6">
        <h3 className="inline-flex items-center font-medium gap-2 mb-2">
          {projectName} - {companyName}
          <FaArrowRight size={12} className="-rotate-45" />
        </h3>
        <div className="mb-2 text-sm leading-normal">{description}</div>
        <Technologies technologies={technologies} />
      </div>
    </a>
  );
};

export default Project;
