import { IProject } from "@/types/projects";

export enum POSITIONS {
  FRONTEND_DEVELOPER = "Frontend Developer",
}

export enum TECHNOLOGIES {
  JAVA_SCRIPT = "JavaScript",
  TYPE_SCRIPT = "TypeScript",
  HTML_SCSS = "HTML & SCSS",
  HTML = "HTML",
  CSS = "CSS",
  NEXT = "Next",
  REACT = "React",
  REACT_QUERY = "React Query",
  TAILWIND = "Tailwind",
  BLOCKNOTE_JS = "Blocknotejs",
  AXIOS = "Axios",
  SHAD_SN = "Shadcn",
  AUTH0 = "Auth0",
  REACT_HOOK_FORM = "React Hook Form",
}

export const projects: IProject[] = [
  {
    projectName: "Kolo",
    companyName: "Levios",
    position: POSITIONS.FRONTEND_DEVELOPER,
    startDate: "2024",
    endDate: "Present",
    description:
      "Startups updates generator - kolo.so (Ukraine). Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: [
      TECHNOLOGIES.JAVA_SCRIPT,
      TECHNOLOGIES.TYPE_SCRIPT,
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.CSS,
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.BLOCKNOTE_JS,
      TECHNOLOGIES.REACT_QUERY,
      TECHNOLOGIES.AXIOS,
      TECHNOLOGIES.AXIOS,
      TECHNOLOGIES.SHAD_SN,
      TECHNOLOGIES.AUTH0,
      TECHNOLOGIES.REACT_HOOK_FORM,
    ],
  },
  {
    projectName: "Leafy Loop",
    companyName: "Levios",
    position: POSITIONS.FRONTEND_DEVELOPER,
    startDate: "2024",
    endDate: "2024",
    description:
      "Startups updates generator - kolo.so (Ukraine). Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: [
      TECHNOLOGIES.JAVA_SCRIPT,
      TECHNOLOGIES.TYPE_SCRIPT,
      TECHNOLOGIES.HTML,
      TECHNOLOGIES.CSS,
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.BLOCKNOTE_JS,
      TECHNOLOGIES.REACT_QUERY,
      TECHNOLOGIES.AXIOS,
      TECHNOLOGIES.AXIOS,
      TECHNOLOGIES.SHAD_SN,
      TECHNOLOGIES.AUTH0,
      TECHNOLOGIES.REACT_HOOK_FORM,
    ],
  },
];
