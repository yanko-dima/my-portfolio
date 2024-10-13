import { projects } from "@/constants/projects";
import Project from "@/components/project";
import AboutSection from "@/components/about-section";

export default function Home() {
  return (
    <>
      <AboutSection />

      <ul>
        {projects.map((project) => (
          <li key={project.projectName}>
            <Project project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
