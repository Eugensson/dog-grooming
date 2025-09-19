"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import logoImage from "@/public/assets/logo.svg";
import logoImageWhite from "@/public/assets/logo-white.svg";

interface LogoProps {
  light?: boolean;
}

export const Logo = ({ light = false }: LogoProps) => {
  return (
    <ScrollLink spy smooth to="home" className="cursor-pointer">
      <Image src={light ? logoImageWhite : logoImage} alt="logo" />
    </ScrollLink>
  );
};
