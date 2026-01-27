
import { RightNavs } from "./RightNavs/RightNavs";
import { HeroContent } from "./HeroContent/HeroContent";
import { NavLogo } from "./NavLogo/NavLogo";
import TopBar from "./TopBar/TopBar";





export const Header = () => {

  return (
    <header
      className="header03_nav bg-[url('/rental_img_4.jpg')]">
      
      <nav
        className="z-200 pt-2 w-full min-h-full bg-sky-400"
      >
        <div className="z-200 wrapper flex flex-col min-h-max">
          
          <div className="flex items-center justify-between">
            <NavLogo />

            <RightNavs />
          </div>
        </div>


      </nav>

      {/* TopBar navs */}
      <TopBar />
      <HeroContent />

    </header>
  );
};

export default Header;
