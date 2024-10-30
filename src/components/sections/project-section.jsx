import React from "react";
import Section from "@/components/ui/Section";
import ProjectItem from "../ProjectItem";

export default function ProjectSection({ projects }) {
  return (
    <Section>
      <div className="flex flex-col gap-10">
        <div className="w-full flex flex-col gap-6 ">
          <h2 className="text-3xl sm:text-5xl text-center ">Projects</h2>
        </div>
        <div className=" flex flex-wrap justify-center gap-4">
          {projects.map((projectItem, index) => (
            <ProjectItem key={index} project={projectItem} />
          ))}
        </div>
      </div>
    </Section>
  );
}
