import Image from "next/image";
import Link from "next/link";



 const Card = ({blog}) => {
  return (
    <div className="mt-4 grid grid-cols-2 grid-rows-2 gap-2 rounded-2xl overflow-hidden">
        <div key={blog.id}>
            <div>
                <Image
                    src={blog.image} 
                    alt={blog.title}
                    width={200}
                    height={400}
                    className="rounded-2xl overflow-hidden" />
            </div>
            <div className="mt-3">
                <Link href={blog.path} className=" md:p-1 font-semibold sm:body-text_sm ">{blog.title}</Link>
                <p className="body-text">{blog.category}</p>
            </div>
        </div>
    </div>
  )
}
export default Card;