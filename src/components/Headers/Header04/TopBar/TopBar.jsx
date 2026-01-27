"use client";

import { useState } from "react";

import Link from "next/link";

import React from "react";
import { FaBars, FaRegCircleUser, FaXmark } from "react-icons/fa6";
import navItems from "@@/components/navItems";



export default function TopBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    // Mobile Navgation
    const MobileMenu = () => {
      return (
        <div className="z-202 relative ">
          <div
            className={`ml-8 bg-slate-200 ${
              isMenuOpen
                ? "w-50 px-4 fixed mt-14 -top-2 -left-5 right-0  transition-all ease-out duration-150 "
                : "hidden"
            }`}
          >
            <ul
              className=" py-3 flex flex-col 
               text-cyan-950 uppercase"
            >
              {navItems.map(({ path, title }) => (
                <li className="p-2" key={path}>
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
  



  return (
    <>
      <div className="z-200 py-3 wrapper flex items-center justify-between bg-slate-50">
        {/* left navs */}
        {/* Hamburger menu */}
        <button onClick={toggleMenu} className="sm:hidden border-none w-max text-slate-50">
          {isMenuOpen ? (
            <FaXmark className="w-6 h-6 text-slate-400" />
          ) : (
            <FaBars className="w-6 h-6 text-slate-400" />
          )}
        </button>
        <MobileMenu />


        <div className="w-full hidden sm:flex items-center gap-4">
          {navItems.map(({ title, path }) => {
            return (
              <ul key={path}>
                <li className="p-1 text-sm text-slate-600/90 font-medium">
                  <Link href={path}>{title}</Link>
                </li>
              </ul>
            );
          })}
        </div>

        {/* account */}
        <div className="w-full sm:w-max flex items-end justify-end">
          <FaRegCircleUser className="w-6 h-6 text-slate-400 overflow-hidden
           rounded-full" />
        </div>
      </div>
    </>
  );
}
