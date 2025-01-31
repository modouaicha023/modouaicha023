"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/images/Logo.png";
import {
  MoreHorizontal,
  Instagram,
  Linkedin,
  Github,
  Twitter,
  FileText,
  Youtube,
} from "lucide-react";
import basketball from "../../public/images/ballBAsket.gif";
import ThemeToggle from "./ui/ThemeToggle";

export default function Header() {
  return (
    <header className="flex w-full max-w-7xl items-center justify-between p-8 fixed top-0 z-10 backdrop-blur-sm">
      <Link href="/">
        <Image src={logo} alt="avatar" height={40} />
      </Link>
      <div className="flex gap-2 justify-center items-center">
        <div className="font-extrabold text-center hidden sm:flex items-center justify-center sm:min-w-[250px] text-3xl">
          <span>modouaicha</span>
          <div className="relative w-12 h-12">
            <Image src={basketball} fill alt="basketball" />
          </div>
          <span className="hover:scale-125 transition duration-200 text-[#f04848] ">
            23
          </span>
        </div>
        <div className="flex gap-1">
          <Link
            href="https://github.com/modouaicha023"
            className="hover:scale-125 transition duration-200 cursor-pointer"
          >
            <Github size={16} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/modouaicha023"
            className="hover:scale-125 transition duration-200 cursor-pointer"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href="https://www.youtube.com/@modouaicha023"
            className="hover:scale-125 transition duration-200 cursor-pointer"
          >
            <Youtube size={16} />
          </Link>

          <Link
            href="https://twitter.com/modouaicha023"
            className="hover:scale-125 transition duration-200 cursor-pointer"
          >
            <Twitter size={16} />
          </Link>
          <Link
            href="https://modouaicha023-cv.vercel.app/"
            className="hover:scale-125 transition duration-200 cursor-pointer"
          >
            <FileText size={16} />
          </Link>
          <Link
            href="https://www.instagram.com/modouaicha023/"
            className="hover:scale-125 transition duration-200 cursor-pointer"
          >
            <Instagram size={16} />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ThemeToggle />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide hover:cursor-pointer lucide-ellipsis hover:animate-bounce-1 hover:animate-bounce-2 hover:animate-bounce-3"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>
    </header>
  );
}
