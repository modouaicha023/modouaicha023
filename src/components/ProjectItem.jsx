import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

export default  function ProjectItem({project}) {
    
  return (
    <div className="flex-grow min-h-fit  max-w-[450px] bkpgrid:row-start-2 bkpgrid:row-end-6 bkpgrid:col-start-6 bkpgrid:col-end-10 border border-white border-opacity-10 rounded min-w-[250px] flex flex-col gap-4 p-2 shadow-sm">
      <div className="min-w-[250px] h-full flex flex-col gap-6 p-2">
        <h2 className="text-xl text-center">{project?.name}</h2>
        <div className="w-full h-full min-h-[250px] p-4 relative">
          <Image
            src={project?.image}
            className="rounded-md w-10/12 absolute border border-white border-opacity-10 object-cover shadow-lg"
            fill
            alt="Project image"
          />
        </div>
      </div>

      <div className="w-full  p-4 flex flex-col gap-1">
        <div className="flex  gap-x-2 relative">
          <div className="text-xl flex gap-3 truncate line-clamp-1  ">
            {project?.stack?.map((tech, index) => (
              <span key={index} className="opacity-40">
                {tech}
              </span>
            ))}
          </div>
          <div className="self-end flex gap-1 w-fit absolute right-0 -top-6 opacity-80">
            <Link href={project?.githubUrl || "#"}>
              <Github size={16} />
            </Link>
            <Link href={project?.url || "#"}>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>

        <div className="font-light text-sm text-opacity-40">
          {project?.description}
        </div>
      </div>
    </div>
  );
}
