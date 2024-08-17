import React from "react";
import Section from "@/components/ui/utils/Section";
import { Josefin_Slab } from "next/font/google";

const josefinSlab = Josefin_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function HeroSection() {

  return (
    <Section>
      <div className={`${josefinSlab.className} flex flex-col  `}>
        <div className="mt-20 h-fit  rounded  min-w-[250px] px-10 flex flex-col gap-4 p-2 items-center">
          <div className=" min-w-[250px]    flex flex-col  gap-6 ">
            <h2 className="text-3xl sm:text-5xl text-center ">
              modou&apos;s playground?
            </h2>
            <div className="text-1xl sm:text-2xl text-center sm:max-w-[400px] rounded-md ">
              software <span className="text-[#f04848]">developer</span>, problem solver and manga addict. really
              passionate about <span className="text-[#f04848]">create</span> content
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
