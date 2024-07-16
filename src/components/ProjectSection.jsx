"use client";
import React from "react";
import { projects } from "@/app/api/data";
import Section from "@/components/ui/utils/Section";
import ProjectItem from "./ProjectItem";

export default function ProjectSection() {
  //   const [currentProject, setCurrentProject] = useState(null);

  //   useEffect(() => {
  //     const randomizeProject = () => {
  //       const randomIndex = Math.floor(Math.random() * projects.length);
  //       setCurrentProject(projects[randomIndex]);
  //     };
  //     randomizeProject();
  //     const intervalId = setInterval(randomizeProject, 5000);
  //     return () => clearInterval(intervalId);
  //   }, []);
  return (
    <Section>
      <div className=" flex  flex-wrap justify-evenly gap-10 mt-24">
        {projects.map((projectItem, index) => (
          <ProjectItem key={index} project={projectItem} />
        ))}
      </div>
    </Section>
  );
}
