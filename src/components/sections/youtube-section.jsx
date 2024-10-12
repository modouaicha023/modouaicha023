"use client";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function YoutubeSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const youtubeLink = isMobile
    ? "youtube://www.youtube.com/@modouaicha023"
    : "https://www.youtube.com/@modouaicha023";
  return (
    <Section>
      <div className={` flex flex-col  `}>
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
            href={youtubeLink}
            target={isMobile ? "_parent" : "_blank"}
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
