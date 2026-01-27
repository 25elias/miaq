import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import FloatingTop from "./Floating/FloatingTop";
import BottomCardInfo from "./CardInfo/BottomCardInfo";

export default function Card({ product }) {
  return (
    <div className="shadow-xl border border-gray-200 overflow-hidden rounded-xl w-full max-w-80 h-max ">
      <div className="relative group w-full h-80 overflow-hidden ">
        <Link href="/" className=" ">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            
          />
        </Link>

        {/* Card Overlay */}
        <div className="absolute top-65 left-0 right-0 bottom-0 bg-linear-to-t from-black/70  to-transparent" />
        
        {/* Card Floatings */}
        <div className="relative footer_links-bold flex flex-col justify-end h-full pl-4 pb-3">
          <div className="max-w-max footer_links-small py-1 rounded px-3 bg-blue-700 capitalize">
            verified
          </div>
          <Link href="/" className="w-max mt-1">
            {product.title}
          </Link>
        </div>
        <div className="absolute bottom-4 right-4 ">
          <FaRegHeart className="w-5 h-5 text-gray-200 cursor-pointer" />
        </div>
        <FloatingTop product={product} />
      </div>

      {/* // Selling/Renting Information */}
      
      <div className="w-full h-full p-4 flex gap-2 justify-between items-center">
        <div className="">
          <p className="font-black_xs py-1 capitalise">For Rent</p>
          <p className="text-md text-blue-700 font-semibold">&euro; {product.price}.000</p>
        </div>
        {/* Card Info */}
        <BottomCardInfo />
      </div>
    </div>
  );
}

