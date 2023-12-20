"use client";
import Container from "@/components/ui/utils/Container";
import Section from "@/components/ui/utils/Section";
import Image from "next/image";
import { Josefin_Slab } from "next/font/google";
import  githubLight from "../../public/images/github.svg";
import github from "../../public/images/github-light.svg";
import urlIcon from "../../public/images/external-link.svg";
import urlIconlight from "../../public/images/external-light.svg";
import Link from "next/link";
import { projects } from "./api/data";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const josefinSlab = Josefin_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  const [currentProject, setCurrentProject] = useState(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const randomizeProject = () => {
      const randomIndex = Math.floor(Math.random() * projects.length);
      setCurrentProject(projects[randomIndex]);
    };
    randomizeProject();
    const intervalId = setInterval(randomizeProject, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Section>
        <div
          className={`${josefinSlab.className} flex flex-col  bkpgrid:grid   bkpgrid:grid-rows-6 bkpgrid:grid-cols-10 bkpgrid:w-full bkpgrid:h-full  `}>
          <div className="self-center my-20 bkpgrid:my-0  min-h-[330px]  bkpgrid:row-start-2 bkpgrid:row-end-5 bkpgrid:col-start-2 bkpgrid:col-end-5 rounded  min-w-[250px] max-w-sm bkpgrid:max-w-none  flex flex-col gap-4 p-2">
            <div className=" min-w-[250px]  flex flex-col  gap-6 ">
              <h2 className="text-5xl text-center bkpgrid:text-left">
                Modou&apos;s playground?
              </h2>
              <p className="text-base   rounded-md">
                I am a fullstack developer, currently looking into learning new
                things (Astro, Next.JS, and backend technologies). Whenever I
                feel like I should share my knowledge with others, I like to do
                it via blog posts and social media.
              </p>
            </div>
            <Link href={"/projects"}>
              <button
                className="max-w-sm w-full text-xl font-extrabold text-center cursor-pointer group relative  px-8 py-4 bg-black text-[#f1f1f1] rounded-3xl hover:bg-opacity-90 hover:text-opacity-80  transition  shadow-md ">
                See Projects
              </button>
            </Link>
          </div>

          {currentProject && (
            <div className="flex-grow min-h-[400px] bkpgrid:row-start-2 bkpgrid:row-end-6 bkpgrid:col-start-6 bkpgrid:col-end-10 border border-white border-opacity-10 rounded min-w-[250px] flex flex-col gap-4 p-2 shadow-sm">
              <div className="min-w-[250px] h-full flex flex-col gap-6 p-2">
                <h2 className="text-xl text-center">{currentProject.name}</h2>
                <div className="w-full h-full min-h-[250px] p-4 relative">
                  <Image
                    src={currentProject.image}
                    className="rounded-md w-10/12 absolute border border-white border-opacity-10 object-cover shadow-lg"
                    fill
                    alt="Project image"
                  />
                </div>
              </div>

              <div className="w-full  p-4 flex flex-col gap-1">
                <div className="flex  gap-x-2 relative">
                  <div className="text-xl flex gap-3 truncate line-clamp-1  ">
                    {currentProject.stack.map((tech, index) => (
                      <span key={index} className="opacity-40 	">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="self-end flex gap-1 w-fit absolute right-0 -top-6 opacity-80">
                    <Link href={currentProject.githubUrl}>
                      {" "}
                      <Image
                        src={theme === "dark" ? github : githubLight}
                        width={16}
                        height={16}
                        alt="github"
                        className="dark:to-white"
                      />{" "}
                    </Link>
                    <Link href={currentProject.url}>
                      <Image
                        src={theme === "dark" ? urlIcon : urlIconlight}
                        width={16}
                        height={16}
                        alt="link"
                        className=""
                      />{" "}
                    </Link>
                  </div>
                </div>

                <div className="font-light text-sm text-opacity-40 line-clamp-2">
                  {currentProject.description}
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>
    </Container>
  );
}