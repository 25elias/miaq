import navItems from "@@/components/navItems";
import Link from "next/link";

const Navs = () => {
  return (
    <ul className="hidden sm:flex justify-between gap-2 md:gap-4">
        {
            navItems.map(({title, path}) => {
                return(
                    <li key={path}>
                        <Link href={path} className="md:p-1 text-xs md:text-sm text-black/80 font-semibold tracking-wide">{title}</Link>
                    </li>
                );
            })
        }
    </ul>
  );
};
export default Navs;