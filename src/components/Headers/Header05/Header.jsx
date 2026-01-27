"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import navItems from "../../navItems";
import { NavLogo } from "./NavLogo/NavLogo";
import { RightNavs } from "./RightNavs/RightNavs";
import { HeroContent } from "./HeroContent/HeroContent";



export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const blurHeader = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', blurHeader);
    return () => window.removeEventListener('scroll', blurHeader);
  }, []); 

  // Mobile Navgation
  const MobileMenu = () => {
    return (
      <div className="z-200 relative ">
        <div
          className={` bg-slate-300 ${
            isMenuOpen
              ? "w-50 px-4 fixed mt-16 top-12 right-8 lg:right-20  transition-all ease-out duration-150 "
              : "hidden"
          }`}
        >
          <ul
            className=" py-3 flex flex-col 
             text-cyan-950 uppercase"
          >
            {navItems.map(({ path, title }) => (
              <li className="p-2 w-max" key={path}>
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
      className="header03_nav bg-[url('/rental_img_4.jpg')]">
      <nav
         className={`z-200 px-4 py-1 fixed top-0 w-full transition-all duration-300 
         flex items-center justify-between ${isScrolled ? 
          "bg-black/40 backdrop-blur-lg shadow-sm" : 
          "bg-transparent"
        }  `}
      >
        <NavLogo />

        <RightNavs toggle={toggleMenu} isOpen={isMenuOpen}/>

      </nav>

      <MobileMenu />

      <HeroContent />

    </header>
  );
};

export default Header;
