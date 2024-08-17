import React from "react";
import { projects } from "@/app/api/data";
import Section from "@/components/ui/utils/Section";
import ProjectItem from "../ProjectItem";

export default function ProjectSection() {
  return (
    <Section>
      <div className="flex flex-col gap-10">
        <div className=" min-w-[250px]    flex flex-col  gap-6 ">
          <h2 className="text-3xl sm:text-5xl text-center ">Projects</h2>
        </div>
        <div className=" flex  flex-wrap justify-evenly gap-10">
          {projects.map((projectItem, index) => (
            <ProjectItem key={index} project={projectItem} />
          ))}
        </div>
      </div>
    </Section>
  );
}
