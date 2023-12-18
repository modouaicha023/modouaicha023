import Container from "@/components/ui/utils/Container";
import Section from "@/components/ui/utils/Section";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <Container>
      <Section>
        <Link href={"/"}>Home</Link>
        <div className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum ex
          incidunt culpa ipsa iusto cupiditate, porro repudiandae a dolore dicta
          tenetur quisquam deserunt, provident animi minima debitis temporibus
          sunt sint.
        </div>
      </Section>
    </Container>
  );
}
