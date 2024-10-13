import React from "react";
import { projects } from "@/constants/projects";
import Project from "@/components/project";
import { SECTIONS } from "@/constants/navigation";
import SectionTitle from "@/components/section-title";

const ProjectsSection = () => {
  return (
    <section id={SECTIONS.EXPERIENCE}>
      <SectionTitle text={SECTIONS.EXPERIENCE} />
      <ul className="flex flex-col gap-12">
        {projects.map((project) => (
          <li key={project.projectName}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
