"use client";

import { useEffect, useState } from "react";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Program } from "@/components/program";
import { MobileNav } from "@/components/mobile-nav";

import { cn } from "@/lib/utils";

export const Header = () => {
  const [bg, setBg] = useState<boolean>(false);

  useEffect(() => {
    return window.addEventListener("scroll", () =>
      window.scrollY > 50 ? setBg(true) : setBg(false)
    );
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-10 w-full py-5 bg-transparent transition-all duration-300",
        bg && "bg-white py-3 shadow-md"
      )}
    >
      <div className="container flex items-center justify-between">
        <Logo />
        <Nav
          containerStyles="hidden lg:block"
          listStyles="flex items-center gap-x-10 xl:text-lg"
          linkStyles="capitalize hover:text-orange transition-colors duration-300"
        />
        <Program />
        <MobileNav />
      </div>
    </header>
  );
};
