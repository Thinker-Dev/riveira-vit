import { nav } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { oddvalRegular, oddvalSemiBold } from "@/app/fonts";

const Header = () => {
  return (
    <header className="sticky z-50 border-b border-separator left-0 right-0 top-0 bg-white/70  dark:bg-[#111111a7] backdrop-blur-[8px]">
      <div className="max-w-screen-xl px-10 mx-auto justify-between flex items-center h-16 text-sm font-medium  relative">
        <Link href={"/"}>
          <Image src="/logo.svg" alt="Logo" width={140} height={140} />
        </Link>
        <div className="flex justify-center absolute left-1/2 -translate-x-1/2">
          <Image src="/riveira.svg" alt="Logo" width={100} height={100} />
        </div>
        <nav className="flex space-x-5">
          {nav.map((item, index) => (
            <Link href={item.path} key={index} className="flex items-center">
              <span className={`${oddvalRegular.className}`}>{item.title}</span>
            </Link>
          ))}
          <Button size={"sm"} className={`${oddvalSemiBold.className}`}>
            Events
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
