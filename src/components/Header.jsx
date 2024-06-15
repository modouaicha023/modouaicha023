"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/images/Logo.png";
import {
  MoreHorizontal,
  Linkedin,
  Github,
  Twitter,
  FileText,
  Youtube,
} from "lucide-react";
// import dynamic from "next/dynamic";
import basketball from "../../public/images/ballBAsket.gif";
import ThemeToggle from "./ui/utils/ThemeToggle";
import LangSwitcher from "./LangSwitcher";

// const ThemeToggle = dynamic(() => import("./ui/utils/ThemeToggle"), {
//   ssr: false,
// });
export default function Header() {
  return (
    <header className="flex w-full  max-w-7xl items-center justify-between p-8 fixed top-0 z-10 backdrop-blur-sm">
      <Link href="/">
        <Image src={logo} alt="avatar" height={40} />
      </Link>
      <div className="flex gap-2 justify-center items-center">
        <div className="font-extrabold text-center hidden sm:flex items-center justify-center min-w-[250px] text-3xl">
          <span>modouaicha</span>
          <div className="relative w-12 h-12">
            <Image
              src={basketball}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              alt="Ball"
            />
          </div>
          <span>23</span>
        </div>
        <div className="flex gap-1">
          <Link href="https://github.com/modouaicha023">
            <Github
              size={16}
              className="hover:scale-125 transition duration-200 cursor-pointer"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/modouaicha023">
            <Linkedin size={16} />
          </Link>
          <Link href="https://www.youtube.com/@modouaicha023">
            <Youtube size={16} />
          </Link>
          <Link href="https://twitter.com/modouaicha023">
            <Twitter size={16} />
          </Link>
          <Link href="https://modouaicha023-cv.vercel.app/">
            <FileText size={16} />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <LangSwitcher />
        <ThemeToggle />
        <MoreHorizontal size={48} className="cursor-not-allowed" />
      </div>
    </header>
  );
}
