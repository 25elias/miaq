"use client"

import {useEffect, useState} from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
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
    <header className="relative w-full h-[90vh] bg-cover bg-no-repeat bg-center 
        bg-[url('/rental_img_2.jpg')] ">
      <nav className={`z-200 px-4 py-4 fixed top-0 w-full transition-all duration-300 
         flex items-center justify-between ${isScrolled ? 
          "bg-black/40 backdrop-blur-lg shadow-sm" : 
          "bg-transparent"
        }  `}>
          

          {/* right navs/logo */}
          <div className="w-1/2 pt-4">
            <Link href="/" className="text-3xl sm:text-xl text-slate-50 font-normal leading-8 tracking-widest uppercase">
              Hotel Master <br />
              <span className="hidden sm:block text-xs font-semibold text-slate-300 capitalize tracking-wider">
                WP Theme For Hotel
              </span>
            </Link>
          </div>

          {/* middle navs */}
          <ul className="z-200 w-full hidden md:flex md:items-center md:justify-between gap-4">
            {navItems.map(({path, title}) => (
              <li className="navs" key={path}>
                <Link href={path} className="text-xs text-slate-200 text-center uppercase p-2">{title}</Link>
              </li>
            ))}
          
            <button
              className="footer_links-small text-center uppercase
              "
            >
              Book now
              
            </button>
            <button
              className="hidden md:block ml-2
              bg-transparent text-slate-200 font-normal text-sm 
              "
            >
              <MdOutlineSearch className="w-4 h-4"/>
              
            </button>
          </ul>

            {/* Menu Bar */}
        <button onClick={toggleMenu}
          className="border-none w-max md:hidden text-slate-50">
            {
              isMenuOpen ? <FaXmark className="w-5 h-5"/> : <FaBars className="w-5 h-5"/>
            }
          </button>
      </nav>

      {/* Mobile Navigation */}
      <div className="z-200 relative ">
        <div className={` bg-slate-300 ${isMenuOpen ? "px-4 fixed mt-24 sm:mt-14 top-2 right-0 left-0 w-full transition-all ease-out duration-150 border-b border-gray-300" : "hidden"}`}>
          <ul className=" py-3 md:hidden flex flex-col 
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
      <div className="z-100 absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-6 text-slate-100 text-center text-wrap ">
        <span className="secondary_heading">This is the best</span>
        <h1 className="primary_heading">Room Reservation</h1>
        <p className="text-sm font-normal text-teal-300">Wordpress theme of world</p>
      </div>

    </header>

  );
};

export default Header;
