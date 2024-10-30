import React from "react";
import Section from "@/components/ui/Section";

export default function HeroSection() {
  return (
    <Section>
      <div className="flex flex-col">
        <div className="mt-20 h-fit  rounded sm:min-w-[250px] px-10 flex flex-col gap-4 p-2 items-center">
          <div className=" sm:min-w-[250px] flex flex-col items-center  gap-6 ">
            <h2 className="text-3xl sm:text-5xl text-center ">
              modou&apos;s playground?
            </h2>
            <div className="text-base sm:text-lg text-center sm:max-w-[400px] rounded-md">
              <span className="text-[#f04848]">Software developer</span>, I
              create websites & apps that solve problems.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
