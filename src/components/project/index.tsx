import { IProject } from "@/types/projects";
import { FC } from "react";

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
    <div>
      <div>
        {startDate} - {endDate}
      </div>
      <div>
        <div>
          {projectName} - {companyName}
        </div>
        <div>{description}</div>
        <ul>
          {technologies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
