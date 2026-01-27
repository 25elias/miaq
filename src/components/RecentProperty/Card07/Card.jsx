import Image from "next/image";
import BottomCardInfo from "./CardInfo/BottomCardInfo";





export default function Card({ product }) {
  return (
      <div className="relative min-w-100 max-w-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={240}
            height={280}
            className="object-cover min-w-100 max-w-100 min-h-70 max-h-70"
          />

          {/* // Selling/Renting Information */}
          <BottomCardInfo product={product} />
      </div>
  );
}

