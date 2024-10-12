import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import React from "react";
import { projects } from "@/app/api/data";
import ProjectItem from "@/components/ProjectItem";

export default  function Projects() {
  return (
    <Container>
      <Section>
        <div className=" flex  flex-wrap justify-evenly gap-10 mt-24">
          {projects.map((projectItem, index) => (
            <ProjectItem key={index} project={projectItem} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
