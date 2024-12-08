import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Magnetic from "../common/Magnetic";
import { Button } from "../ui/button";
import { oddvalRegular, oddvalSemiBold } from "@/app/fonts";
import { nav } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image src="/logo.svg" alt="Logo" width={140} height={140} />
          </Link>
          <div className="flex justify-center absolute left-1/2 -translate-x-1/2">
            <Image src="/riveira.svg" alt="Logo" width={100} height={100} />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {nav.map((item, index) => (
              <Link href={item.path} key={index} className="flex items-center">
                <span className={`${oddvalRegular.className}`}>
                  {item.title}
                </span>
              </Link>
            ))}
            <Magnetic>
              <Button size={"sm"} className={`${oddvalSemiBold.className}`}>
                Events
              </Button>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4">
            <div className="flex flex-col items-center space-y-4">
              <NavLink href="#lineup">Lineup</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
              <Magnetic>
                <Button size={"sm"} className={`${oddvalSemiBold.className}`}>
                  Events
                </Button>
              </Magnetic>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-white hover:text-purple-300 transition-colors"
    >
      {children}
    </a>
  );
}
