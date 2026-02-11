"use client"

import navItems from "@@/components/navItems";
import Link from "next/link";
import {useState} from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

export const RightNavs = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


    // Mobile Navgation
    const MobileMenu = () => {
      return (
        <div className="z-10 relative ">
          <div
            className={`bg-white w-full ${
              isMenuOpen
                ? "w-50 px-4 fixed top-15 left-0 right-0  transition-all ease-out duration-150 "
                : "hidden"
            }`}
          >
            <ul
              className="flex flex-col 
               gap-4 min-w-full h-full"
            >
              {navItems.map(({ path, title }) => (
                <li className="border-b border-gray-200 py-2 text-xs md:text-sm text-black/80 font-semibold tracking-wide" key={path}>
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
  


  return (
      <div className="flex items-center md:justify-between gap-2">
        <IoMdSearch className="w-5 h-5 text-black" />
        <div className="p-2 max-w-25 hidden sm:block rounded-full border border-gray-200">
          <input type="text" placeholder="Search" className=" border-none outline-none h-full px-2 placeholder:text-sm placeholder:text-black/60" />
        </div>
        {/* btn-cta */}
        <button className="rounded-full w-max text-white bg-black px-4 py-2 text-sm font-medium tracking-wide">
          Sign in
        </button>

            {/* Menu Bar */}
        <button onClick={toggleMenu}
          className="border-none w-max sm:hidden text-black">
            {
              isMenuOpen ? <FaXmark className="w-5 h-5 cursor-pointer"/> : <FaBars className="w-5 h-5 cursor-pointer"/>
            }
        </button>
        <MobileMenu />

      </div>
  );
};
