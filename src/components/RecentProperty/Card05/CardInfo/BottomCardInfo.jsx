import Link from 'next/link';

export default function BottomCardInfo({product}) {

  return (
    <>
      <Link href="/" className="absolute bottom-8 text-lg text-gray-100 font-light tracking-wider">
        {product.title}
      </Link>
    </>
  )
}
