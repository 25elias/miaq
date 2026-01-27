import socials from "@@/components/socials";
import Link from "next/link";
import { MdOutlineMosque } from "react-icons/md";




export const NavLogo = () => {
  return (
      <div className="z-201 flex gap-4">
        <Link href="/">
          <span className="flex items-center gap-2 text-md sm:text-xl text-slate-100 font-normal leading-5 tracking-widest uppercase">
            <MdOutlineMosque className="w-8 h-8 sm:w-15 sm:h-15 text-center" />
            Real <br /> Homes
          </span>
        </Link>
        <ul className="p-0 hidden lg:flex items-center gap-4">
              {socials.slice(0,7).map(({icon, idx }) => 
              (
                <li key={idx} className="p-0 min-w-max">
                  <Link key={idx} href='/' className="">
                    {icon}
                  </Link>
                </li>
              ))}
        </ul>
      </div>
  );
}
