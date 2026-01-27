import Link from "next/link";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import { FaBars, FaXmark } from "react-icons/fa6";


export const RightNavs = ({toggle, isOpen}) => {
  return (
      <ul className="z-201 flex items-center md:justify-between gap-4">
          <li className="p-0 min-w-max">
            <Link href="/" className=" text-xs text-slate-200">
            <span className="hidden md:flex items-center gap-2">
              <MdWhatsapp  className="w-5 h-5 text-slate-200" />
              +251-94-345-0007-9
            </span>
            </Link>
          </li>
          <li className="p-0 min-w-max">
            <Link href="/" className=" text-xs text-slate-200">
            <span className="hidden md:flex items-center gap-2">
              <MdEmail  className="w-5 h-5 text-slate-200" />
              username@email.com
            </span>
            </Link>
          </li>

        {/* call-to-aaction Btn */}
        <button className="border-2 rounded-xs border-slate-200 w-max text-slate-200 px-4 py-2 text-xs font-semibold tracking-wide">
          Submit
        </button>

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
