"use client"
import { useState, useEffect } from 'react'
import { NavLogo } from './NavLogo/NavLogo';
import { RightNavs } from './RightNavs/RightNavs';
import Navs from './Navs/Navs';


const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const blurHeader = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', blurHeader);
    return () => window.removeEventListener('scroll', blurHeader);
  }, []); 


  return (
    <header className={`wrapper py-2 flex items-center justify-between gap-3 ${isScrolled ? 
          "bg-black/40 backdrop-blur-lg shadow-sm" : 
          "bg-transparent"
        } `}>
        <NavLogo />
        <Navs />
        <RightNavs />
    </header>
  );
};
export default Header;