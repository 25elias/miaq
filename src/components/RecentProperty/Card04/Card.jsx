import Image from "next/image";
import BottomCardInfo from "./CardInfo/BottomCardInfo";





export default function Card({ product }) {
  return (
    <div className="overflow-hidden ">
      <div className="w-full overflow-hidden ">
          <Image
            src={product.image}
            alt={product.title}
            width={240}
            height={280}
            className="object-cover min-h-70 max-h-70"
          />

          {/* // Selling/Renting Information */}
          <BottomCardInfo product={product} />
      </div>


    </div>
  );
}

