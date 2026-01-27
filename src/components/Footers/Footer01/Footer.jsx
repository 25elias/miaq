
import Contact from "./MiddleComponent/Contact";
import About from "./LeftComponent/About";
import Listings from "./RightComponent/Listings";
import navItems from "../../navItems";
import Link from "next/link";



    // const contacts = [
    //     {icon: <FaHouse />, info: "Bole, Addis Ababa Ethiopia"},
    //     {icon: <FaPhone />, info: "Lafto, Addis Ababa Ethiopia"},
    //     {icon: <FaMobileButton />, info: "Arada, Adama Ethiopia"},
    //     {icon: <FaEnvelope />, info: "Diredawa, Ethiopia"},
    //     {icon: <FaS />, info: "Shagar Addis Ababa, Ethiopia"},
    //     {icon: <FaDesktop />, info: "Bishoftu, Ethiopia"},
    // ]


const Footer = () => {

  return (
    <footer className="relative w-full h-full bg-black/90 ">
      <div className="py-12">
        {/* Footer */}
          <div className="w-full h-full wrapper space-y-4 flex justify-between flex-col sm:flex-row  gap-4 text-gray-900">
            <div className="w-full">
              <About />
            </div>
            <div className="w-full">
              <Contact />
            </div>
            <div className="w-full">
              <Listings />
            </div>
          
          </div>
      </div>

      {/* Bottom navs */}
      <div className="bg-black py-4 w-full ">
        <div className="wrapper flex flex-col sm:flex-row sm:justify-between items-center gap-4 ">
          <div className="flex items-center gap-4">
            {navItems.slice(0,5).map(({ title, path }) => {
              return (
                <ul key={path}>
                  <li className="p-1 text-sm text-gray-400 font-medium">
                    <Link href={path}>{title}</Link>
                  </li>
                </ul>
              );
            })}
          </div>
          <div>
            <span className="text-sm text-gray-400 ">All rights are reserved.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
