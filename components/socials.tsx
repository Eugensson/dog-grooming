import Link from "next/link";

import { socialList } from "@/lib/data";

export const Socials = () => {
  return (
    <ul className="flex items-center justify-center gap-x-4">
      {socialList.map(({ icon: Icon, label, href }) => (
        <li
          key={label}
          className="size-10 flex items-center justify-center rounded-full bg-[#fe8d71a9] hover:bg-[#fe8d71] transition-colors duration-300"
        >
          <Link
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${label} link`}
          >
            <Icon size={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
