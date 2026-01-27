import Image from "next/image";
import BottomCardInfo from "./CardInfo/BottomCardInfo";





export default function Card({ product }) {
  return (
    <div className="shadow-md">
      <div className="w-full flex flex-col gap-4 justify-center">
          <div className=" overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={240}
              height={240}
              className="object-cover w-full min-h-70 max-h-70"
            />
          </div>
          {/* // Selling/Renting Information */}
          <BottomCardInfo product={product} />
      </div>


    </div>
  );
}

