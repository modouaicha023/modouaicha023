import Container from "@/components/ui/utils/Container";
import Section from "@/components/ui/utils/Section";
import React from "react";
import { blogs } from "@/app/api/data";
import ProjectItem from "@/components/ProjectItem";

export default function Blogs() {
  return (
    <Container>
      <Section>
        <div className=" flex  flex-wrap justify-evenly gap-10 mt-24">
          {blogs.map((projectItem, index) => (
            <ProjectItem key={index} project={projectItem} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
