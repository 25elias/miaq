import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { MdBed } from "react-icons/md";
import FloatingTop from "./Floating/FloatingTop";

export default function Card({ product }) {
  return (
    <div className="flex shadow-xl border border-gray-200 overflow-hidden rounded-md w-full h-max ">
      <div className="relative group w-140 h-70 overflow-hidden ">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover "
          />

        <div className="absolute top-65 left-0 right-0 bottom-0 bg-linear-to-t from-black/70  to-transparent" />
        
        
        <FloatingTop product={product} />


        <div className="relative footer_links-bold flex flex-col justify-start h-full">
          <div className="max-w-max footer_links-small py-0.5 px-3 bg-blue-700 tracking-wider font-bold">
            featured
          </div>
        </div>
        <div className="absolute bottom-4 right-4 ">
          <FaRegHeart className="w-5 h-5 text-gray-200" />
        </div>
      </div>

      {/* // Selling/Renting Information */}
      <div className="w-full h-full p-4">
          <Link href="/" className="w-max mt-1 py-2 text-md font-black_xs">
            {product.title}
          </Link>
          <ul className="flex flex-col gap-4 items-start mt-2 py-2">
          <li className="line-clamp-1">
            {product.content}
          </li>
          <li className="line-clamp-1">
            <Link href="/" className="w-max mt-1 py-2 font_address">
              {product.address}
            </Link>
          </li>
          <li>
            <span className="flex gap-2 items-center">
                <MdBed  className="w-5 h-5 text-gray-800"/>
                <h5>Bedroom</h5>
            </span>
          </li>
          <li>
            <span className="flex gap-2 items-center">
                <MdBed className="w-5 h-5 text-gray-800" />
                <h5>Bathroom</h5>
            </span>
          </li>
        </ul>
      </div>
      {/* Price Info */}
      <div className="w-1/5 py-4 mt-2">
        <div className="font-black_xs">
          <p className="py-1 capitalise">For sale</p>
          <p className="">&euro; {product.price}.000</p>
        </div>
      </div>
    </div>
  );
}

