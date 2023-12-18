"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/images/Logo.png";
import { MoreHorizontal } from "lucide-react";
import dynamic from "next/dynamic";
import basketball from "../../public/images/ballBAsket.gif";

const ThemeToggle = dynamic(() => import("./ui/utils/ThemeToggle"), {
  ssr: false,
});
export default function Header() {
  return (
    <header className="flex w-full max-w-7xl items-center justify-between p-8 fixed top-0">
      <Link href="/projects">
        <Image src={logo} alt="avatar" height={40} />
      </Link>
      <div className="font-extrabold text-center hidden sm:flex items-center justify-center min-w-[250px] text-3xl">
          <span>modouaicha</span>
          <Image src={basketball} width={48} height={48} alt="Ball" />
          <span>23</span>
        </div>
      <div className="flex items-center justify-center ">
        <ThemeToggle />
        <MoreHorizontal size={48} className="cursor-pointer" />
      </div>
    </header>
  );
}
