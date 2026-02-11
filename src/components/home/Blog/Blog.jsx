import places from "../../places";
import Card from "./Card";

import products from "../../../../public/api/products";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";



const Blog = () => {
    return(
        <div className="wrapper py-12">
            <h2>Latest Stories</h2>
            <div className="inline-flex justify-between items-center gap-4">
                <button className="inline-flex text-black/90 gap-2 mt-1 mb-2 font-semibold">Popular<MdArrowDropDown className="sm:hidden w-6
                 h-6" /></button>
                <ul className="hidden sm:flex gap-4">
                    {
                        places.map(({title, idx}) => {
                            return(
                                <li key={idx}>
                                    <span className="md:p-1 text-xs text-black/70 font-semibold tracking-wide">{title}</span>
                                </li>
                            );
                        })
                    }
                </ul>
                <Link href="/" className="hidden md:inline-flex btn-cta_secondary">Explore all destination</Link>
            </div>
            <div className="">
                <Card product={products} />
            </div>

            <Link href="/" className="mt-6 inline-flex ml-10 md:hidden btn-cta_secondary">Explore all destination</Link>
        </div>
    );
};



export default Blog;