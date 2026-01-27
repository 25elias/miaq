import Link from 'next/link';

export default function BottomCardInfo({product}) {

  return (

      <div className='w-full h-full flex justify-between items-center my-2 py-2'>
        <div className=''>
          <Link href="/" className="text-sm text-gray-800/90 font-semibold">
            {product.title}
          </Link>
          <p className="text-xs text-gray-700/80 ">{product.address}</p>
        </div>
        <div className="">
          <p className="text-xs text-gray-700/50 capitalise">from</p>
          <p className="text-lg font-bold text-sky-700/70">${product.price}</p>
        </div>
    </div>
  )
}
