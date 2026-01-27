import navItems from "@@/components/navItems";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

export const RightNavs = ({toggle, isOpen}) => {
  return (
    <ul className="z-200 hidden md:flex md:items-center md:justify-between gap-4">
      {navItems.slice(7, 8).map(({ path, title }) => (
        <li className="navs p-0 min-w-max" key={path}>
          <Link href={path} className="text-sm text-slate-200 uppercase ">
            {title}
          </Link>
        </li>
      ))}

      {/* Hamburger menu */}
      <button onClick={toggle} className="border-none w-max text-slate-50">
        {isOpen ? (
          <FaXmark className="w-10 h-10 bg-red-500 p-2" />
        ) : (
          <FaBars className="w-10 h-10 bg-red-500 p-2" />
        )}
      </button>
    </ul>
  );
};
