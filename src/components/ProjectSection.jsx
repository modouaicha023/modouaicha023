"use client"
import React from 'react'
import { projects } from "@/app/api/data";
import { useEffect, useState } from "react";
import Section from "@/components/ui/utils/Section";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Josefin_Slab } from "next/font/google";


const josefinSlab = Josefin_Slab({
    weight: "700",
    subsets: ["latin"],
    display: "swap",
});

export default function ProjectSection() {
    const [currentProject, setCurrentProject] = useState(null);

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
        <Section>
            <div
                className={`${josefinSlab.className} flex flex-col  bkpgrid:grid   bkpgrid:grid-rows-6 bkpgrid:grid-cols-10 bkpgrid:w-full bkpgrid:h-full  `}>
                <div className="self-center my-20 bkpgrid:my-0  min-h-[330px]  bkpgrid:row-start-2 bkpgrid:row-end-5 bkpgrid:col-start-2 bkpgrid:col-end-5 rounded  min-w-[250px] px-10 bkpgrid:px-0  bkpgrid:max-w-none  flex flex-col gap-4 p-2 items-center">
                    <div className=" min-w-[250px]  flex flex-col  gap-6 ">
                        <h2 className="text-5xl text-center bkpgrid:text-left">
                            Modou&apos;s playground?
                        </h2>
                        <div className="text-base text-justify rounded-md ">
                            I&apos;m a software developer currently immersed in crafting a
                            personal project — an baker management app. <br />
                            My primary focus revolves around mastering JavaScript and its
                            surrounding technologies. <br />
                            Aspiring to become a software engineer , I&apos;m passionate
                            about beautiful user interfaces and curious about robust
                            engineering solutions . <br />
                            Wishing to improve my skills, I enjoy learning from others and I
                            am constantly looking for opportunities to elevate my abilities.
                        </div>
                    </div>
                    <Link
                        href={"/projects"}
                        className="flex items-center justify-center">
                        <button className=" w-full text-xl font-extrabold text-center cursor-pointer group relative  px-8 py-4 bg-black text-[#f1f1f1] rounded-3xl hover:bg-opacity-90 hover:text-opacity-80  transition  shadow-md ">
                            See Projects
                        </button>
                    </Link>
                </div>

                {currentProject && (
                    <div className="flex-grow min-h-fit max-h-[450px] bkpgrid:row-start-2 bkpgrid:row-end-6 bkpgrid:col-start-6 bkpgrid:col-end-10 border border-white border-opacity-10 rounded min-w-[250px] flex flex-col gap-4 p-2 shadow-sm">
                        <div className="min-w-[250px] h-full flex flex-col gap-6 p-2">
                            <h2 className="text-xl text-center">{currentProject.name}</h2>
                            <div className="w-full h-full min-h-[250px] p-4 relative">
                                <Image
                                    src={currentProject.image}
                                    className=" w-10/12 absolute border border-white border-opacity-10 object-cover shadow-lg"
                                    fill
                                    alt="Project image"
                                />
                            </div>
                        </div>

                        <div className="w-full  p-4 flex flex-col gap-1">
                            <div className="flex  gap-x-2 relative">
                                <div className="text-xl flex gap-3 truncate line-clamp-1  ">
                                    {currentProject.stack.map((tech, index) => (
                                        <span key={index} className="opacity-40">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="self-end flex gap-1 w-fit absolute right-0 -top-6 opacity-80">
                                    <Link href={currentProject.githubUrl} target="_blank">
                                        <Github size={16} />
                                    </Link>
                                    <Link href={currentProject.url} target="_blank">
                                        <ExternalLink size={16} />
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
    )
}
