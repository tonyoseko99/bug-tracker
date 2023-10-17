"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex justify-between py-5 border-b mb-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li
            className={`${
              link.href === currentPath ? "text-blue-300" : "text-black"
            }`}
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
