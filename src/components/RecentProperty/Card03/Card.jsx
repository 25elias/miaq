import Image from "next/image";
import BottomCardInfo from "./CardInfo/BottomCardInfo";





export default function Card({ product }) {
  return (
    <div className="mt-8 min-w-dvw mx-auto px-4 gap-4 overflow-hidden ">
      <div className="relative max-w-lg mx-auto h-full overflow-hidden ">
          <Image
            src={product.image}
            alt={product.title}
            width={320}
            height={280}
            className="object-cover  max-h-70"
          />

          {/* // Selling/Renting Information */}
          <BottomCardInfo product={product} />
      </div>


      {/* Price Info */}
    </div>
  );
}

