"use client";

import { Link as ScrollLink } from "react-scroll";

import { navList } from "@/lib/data";

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
  linkStyles?: string;
  onLinkClick?: () => void;
}

export const Nav = ({
  containerStyles,
  listStyles,
  linkStyles,
  onLinkClick,
}: NavProps) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {navList.map(({ label, path }) => (
          <li key={label} className={linkStyles}>
            <ScrollLink
              spy
              smooth
              to={path}
              activeClass="text-accent"
              className="cursor-pointer"
              duration={500}
              onClick={onLinkClick}
            >
              {label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
