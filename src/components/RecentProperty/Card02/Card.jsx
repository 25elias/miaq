import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import FloatingTop from "./Floating/FloatingTop";
import BottomCardInfo from "./CardInfo/BottomCardInfo";




export default function Card({ product }) {
  return (
    <div className="sm:max-w-80 max-h-max flex flex-col gap-4 shadow-xl border border-gray-200 overflow-hidden rounded-md ">
      <div className="relative group w-full min-h-70 sm:min-h-50 overflow-hidden ">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />        
        <FloatingTop product={product} />

        <div className="relative footer_links-small flex flex-col justify-start h-full">
          <div className="featured_style">
            featured
          </div>
        </div>
        <div className="absolute bottom-4 right-4 ">
          <FaRegHeart className="w-5 h-5 text-gray-200" />
        </div>
      </div>

      {/* // Selling/Renting Information */}
      <div className="w-full h-full p-4">
        <BottomCardInfo product={product} />
      </div>


      {/* Price Info */}
      <div className="w-full px-4 pb-4 mt-2 text-xl text-sky-900 font-bold flex items-center justify-between gap-4">
        <p className="py-1 capitalise">For sale</p>
        <p className="py-1">&euro; {product.price}.000</p>
      </div>
    </div>
  );
}

