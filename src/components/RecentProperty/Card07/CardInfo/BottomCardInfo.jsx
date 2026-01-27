import Link from 'next/link';
import { FaArrowDown19, FaArrowRightLong } from 'react-icons/fa6';
import { MdArrowLeft } from 'react-icons/md';

export default function BottomCardInfo({product}) {

  return (
    <div className='py-4 px-6 flex flex-col gap-1'>
      <Link href="/" className="text-lg text-green-500 font-bold tracking-wider">
        {product.title}
      </Link>
      <Link href="/" className="flex gap-4 text-xs italic text-blue-500 font-medium tracking-wider">
        Check details <FaArrowRightLong className='w-4 h-4 text-green-500' />
      </Link>
    </div>
  )
}
