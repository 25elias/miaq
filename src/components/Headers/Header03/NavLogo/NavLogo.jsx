import Link from "next/link";
import { MdOutlineMosque } from "react-icons/md";

export const NavLogo = () => {
  return (
      <div className="md:w-full">
        <Link href="/">
          <span className="text-sm sm:text-xl text-slate-50 font-normal leading-5 tracking-widest uppercase flex flex-col gap-1 text-center items-center justify-center ">
            <MdOutlineMosque className="w-10 h-10 sm:w-20 sm:h-20 text-center" />
            Hotel <br /> Master
          </span>
        </Link>
      </div>
  );
}
