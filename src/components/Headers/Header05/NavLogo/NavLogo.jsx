import Link from "next/link";
import { MdOutlineMosque } from "react-icons/md";

export const NavLogo = () => {
  return (
      <div className="w-full mr-2">
        <Link href="/">
          <span className="text-sm sm:text-xl font-bold text-slate-50 leading-4 sm:leading-6 tracking-widest uppercase flex items-center gap-2">
            <MdOutlineMosque className="w-9 h-9 sm:w-20 sm:h-20 text-center" />
            Real <br /> Homes
          </span>
        </Link>
      </div>
  );
}
