import socials from "@@/components/socials";
import Link from "next/link";
import { MdOutlineMosque } from "react-icons/md";




export const NavLogo = () => {
  return (
      <div className="flex gap-4">
        <Link href="/">
          <span className="flex items-center gap-2 text-md sm:text-xl  font-semibold leading-5 tracking-widest uppercase">
            Logo          
          </span>
        </Link>
      </div>
  );
}
