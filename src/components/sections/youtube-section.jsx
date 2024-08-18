import React from "react";
import Section from "@/components/ui/utils/Section";
import { Josefin_Slab } from "next/font/google";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const josefinSlab = Josefin_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function YoutubeSection() {
  return (
    <Section>
      <div className={`${josefinSlab.className} flex flex-col  `}>
        <div className="h-fit  rounded  min-w-[250px] px-10 flex flex-col gap-4 p-2 items-center">
          <div className=" min-w-[250px]    flex flex-col  gap-6 ">
            <h2 className="text-3xl sm:text-5xl text-center ">
              <span className="opacity-70">take a look at my youtube</span>
              <span className="text-[#f04848] "> channel</span>{" "}
            </h2>
          </div>
          <iframe
            className="aspect-video"
            width={"100%"}
            height={"100%"}
            src="https://www.youtube.com/embed/XXZxTPRYjmk"
            title="Lets do some JavaScript quiz"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <Link
            href={"youtube://www.youtube.com/@modouaicha023"}
            className="flex items-center justify-center"
          >
            <button className="flex gap-2 items-center justify-center w-full text-xl font-extrabold text-center cursor-pointer group relative  px-8 py-4 bg-[#f04848] rounded-3xl hover:bg-opacity-90 hover:text-opacity-80  transition  shadow-md ">
              Ma chaine <span className="animate-pulse">✨🎥</span>
            </button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
