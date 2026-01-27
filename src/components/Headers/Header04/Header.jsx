"use client"

import Link from "next/link";
import navItems from "../../navItems";
import {useState} from "react";
import { RightNavs } from "./RightNavs/RightNavs";
import { HeroContent } from "./HeroContent/HeroContent";
import { NavLogo } from "./NavLogo/NavLogo";





export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    // Mobile Navgation
    const MobileMenu = () => {
      return (
        <div className="relative z-200">
          <div
            className={` bg-slate-300 ${
              isMenuOpen
                ? "w-60 px-4 fixed mt-10 top-4 right-4 lg:right-20  transition-all ease-out duration-150 "
                : "hidden"
            }`}
          >
            <ul
              className=" py-3 flex flex-col items-end 
               text-cyan-950 uppercase"
            >
              {navItems.map(({ path, title }) => (
                <li className="p-2 w-max hover:underline transition-all duration-300 underline-offset-6 decoration-gray-400" key={path}>
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
  

  return (
    <header
      className="header03_nav bg-[url('/rental_img_5.jpg')] ">
      
      <nav
        className="py-2 w-full bg-sky-400"
      >
        <div className="z-200 wrapper flex items-center justify-between ">
          <NavLogo />
          
          <RightNavs toggle={toggleMenu} isOpen={isMenuOpen}/>

        </div>
      </nav>

      <MobileMenu />

      <HeroContent />

    </header>
  );
};

export default Header;
