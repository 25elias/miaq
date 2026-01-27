import navItems from "@@/components/navItems";
import Link from "next/link";
import { FaBars, FaCircleUser, FaRegCircleUser, FaXmark } from "react-icons/fa6";

export const RightNavs = ({toggle, isOpen}) => {
  return (
    <div className="flex gap-2">
      <ul className="z-200 hidden md:flex items-center justify-between gap-2 lg:gap-4">
        {navItems.map(({ path, title }) => (
          <li className="min-w-max" key={path}>
            <Link href={path} className="text-xs text-slate-200 uppercase ">
              {title}
            </Link>
          </li>
        ))}


      </ul>
      {/* account */}
      <div className="w-full sm:w-max flex items-center gap-2">
        <FaCircleUser className="w-6 h-6 text-slate-300 overflow-hidden
          rounded-full" />
        <button className="border-none text-sm text-slate-100 font-semibold w-max py-2 px-4 bg-sky-400 rounded-md overflow-hidden tracking-wide">
          Submit
        </button>
      </div>

    </div>
  );
};
