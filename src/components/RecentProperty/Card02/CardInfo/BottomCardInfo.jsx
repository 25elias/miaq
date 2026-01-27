import Link from 'next/link';
import { MdBed, MdOutlineSquare, MdShower } from 'react-icons/md';

export default function BottomCardInfo({product}) {


  const cardInfo = [
       {icon: <MdBed  className="w-6 h-6 text-gray-500/80"/>, text: "2"},
       {icon: <MdShower  className="w-6 h-6 text-gray-500/80"/>, text: "2"},
       {icon: <MdOutlineSquare className="w-8 h-8 text-gray-500/80" />, text: "245/sqft"},
   ]


  return (


    <div>
        <div>
          <Link href="/" className="w-full hover:underline underline-offset-6 decoration-sky-900 text-lg font-black_xs">
            {product.title}
          </Link>
          <p className="mb-2 mt-4 line-clamp-1 text-xs font-black_xs">{product.content}</p>
          <p className="my-2 font_address tracking-wider ">{product.address}</p>
        </div>

        <div className="flex items-baseline gap-4">
          {cardInfo.map(({ text, icon, idx }) => {
              return (
                <ul key={idx}>

                  <li className="fp-1 footer_links my-2 py-1">
                    <div className="text-sm font-black_xs flex gap-1 items-center">
                      <div className="">
                        {icon}
                      </div>
                      <h5 className="text-xs font-black_xs">{text}</h5>
                    </div>
                  </li>
                </ul>
              );
            })}
        </div>
    </div>
  )
}
