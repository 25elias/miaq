import Link from 'next/link';

export default function BottomCardInfo({product}) {

  return (

      <div className='w-full h-full flex flex-col gap-2 my-2 py-2'>
        <div className='w-full flex flex-col justify-center items-center'>
          <Link href="/" className="text-lg text-gray-800 font-semibold tracking-wider">
            {product.title}
          </Link>
          <div className="hr_line my-5"></div>
          <p className="text-xs text-gray-700/70 ">{product.address}</p>
        </div>
        <div className="w-full h-14 flex justify-center items-center gap-4 my-3 py-1 pl-5">
          <p className="text-xs text-gray-700/50 text-center">From
          <br />
          <span className="text-md font-extrabold text-black tracking-wide">${product.price}</span>
          </p>
          <div className="vr_line" />
          <p className="text-xs font-bold text-gray-900 underline underline-offset-5 decoration-gray-700 capitalize tracking-wide">View detail</p>
        </div>
    </div>
  )
}
