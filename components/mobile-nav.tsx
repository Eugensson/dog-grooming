"use client";

import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";

import { Nav } from "@/components/nav";

import { cn } from "@/lib/utils";

export const MobileNav = () => {
  const [navMobile, setNavMobile] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setNavMobile((prev) => !prev)}
        className="lg:hidden cursor-pointer"
      >
        <CgMenuRight size={30} className="text-blue" />
      </button>
      <div
        className={cn(
          "fixed left-0 top-19.5 w-full h-full shadow-lg overflow-hidden transition-all bg-transparent backdrop-blur-3xl",
          navMobile ? "max-h-80" : "max-h-0"
        )}
      >
        <Nav
          containerStyles="h-full"
          listStyles="h-full flex flex-col items-center justify-center gap-y-5"
          linkStyles="capitalize font-medium text-blue text-xl"
          onLinkClick={() => setNavMobile(false)}
        />
      </div>
    </>
  );
};
