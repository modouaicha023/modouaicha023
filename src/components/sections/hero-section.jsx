import React from "react";
import Section from "@/components/ui/Section";

export default function HeroSection() {
  return (
    <Section>
      <div className="flex flex-col">
        <div className="mt-20 h-fit  rounded  min-w-[250px] px-10 flex flex-col gap-4 p-2 items-center">
          <div className=" min-w-[250px] flex flex-col items-center  gap-6 ">
            <h2 className="text-3xl sm:text-5xl text-center ">
              modou&apos;s playground?
            </h2>
            <div className="text-1xl sm:text-2xl text-center sm:max-w-[400px] rounded-md ">
              !Experienced{" "}
              <span className="text-[#f04848]">software developer</span>{" "}
              dedicated to solving business challenges with innovative
              solutions. Passionate about crafting{" "}
              <span className="text-[#f04848]">custom software</span> that
              brings your vision to life.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
