"use client"

import {useState, useEffect} from "react";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import navItems from "../../navItems";


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const blurHeader = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', blurHeader);
    return () => window.removeEventListener('scroll', blurHeader);
  }, []);  


  return (
    <header className="relative w-full mx-auto h-screen bg-cover bg-no-repeat bg-center 
        bg-[url('/rental_img_5.jpg')] ">
      <nav className={`z-200 px-4 py-4 fixed top-0 w-full transition-all duration-300 
         flex items-center justify-between ${isScrolled ? 
          "bg-black/40 backdrop-blur-lg shadow-sm" : 
          "bg-transparent"
        }  `}>
          

            <button onClick={toggleMenu}
                className="border-none w-max text-slate-50">
                {
                isMenuOpen ? 

                <span className="text-xs text-cyan-200 flex gap-1 items-baseline uppercase tracking-wider">
                    Close <FaChevronDown className="w-3 h-3"/> 
                </span>  
                : 
                <span className="text-xs text-cyan-200 flex gap-1 items-center uppercase tracking-wider">
                     Menu <FaChevronDown className="w-3 h-3"/>
                </span> 
                }
            </button>

            {/* navs/logo */}
            <div className="hidden sm:block text-center py-2">
                <Link href="/" className="text-xl text-slate-50 font-normal leading-4 tracking-widest uppercase">
                Hotel <br /> Master
                </Link>
            </div>

            <button
              className="py-1 px-6 bg-transparent text-slate-200 font-normal text-sm  border border-slate-200
              "
            >
              Book Now
            </button>

        
      </nav>

      {/* Mobile Navigation */}
      <div className="z-200 relative ">
        <div className={`ml-8 bg-slate-300 ${isMenuOpen ? "w-50 px-4 fixed mt-14 top-2 right-0 left-0 transition-all ease-out duration-150 " : "hidden"}`}>
          <ul className=" py-3 flex flex-col 
             text-cyan-950 uppercase">
            {navItems.map(({ path, title }) => (
              <li className="p-2" key={path}>
                <Link href={path}>{title}</Link>
              </li>

            ))}
          </ul>
        </div>

      </div>

      {/* Hero Content */}
      <div className="z-100 absolute inset-0 bg-black/30 flex w-full">
        <div className="mt-24 wrapper flex flex-1 flex-col items-start justify-center gap-6 text-slate-100 text-wrap ">
            <h1 className="primary_heading font-extralight tracking-normal">Homewood Suites <br /> Make Yourself at Home<br /> </h1>
            <p className=" text-sm font-normal text-teal-300">Wordpress theme of world</p>
        </div>
      </div>

    </header>

  );
};

export default Header;
