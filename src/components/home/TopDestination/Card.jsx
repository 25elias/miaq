import Image from "next/image";
import Link from "next/link";



 const Card = ({product}) => {
  return (
    <div className="mt-4 flex gap-3 md:gap-4 overflow-x-scroll scrollbar-hover pb-2 rounded-2xl overflow-hidden">
        {
            product.slice(0, 4).map(({path, title, image, category, id}) => {
                return(
                    <div key={id}>
                        <div>
                            <Image
                                src={image} 
                                alt={title}
                                width={200}
                                height={400}
                                className="min-w-60 max-w-60 sm:min-w-50 sm:max-w-50 min-h-60 max-h-60 sm:min-h-70 sm:max-h-70 rounded-2xl overflow-hidden" />
                        </div>
                        <div className="mt-3">
                            <Link href={path} className=" md:p-1 font-semibold sm:body-text_sm ">{title}</Link>
                            <p className="body-text">{category}</p>
                        </div>
                    </div>
                );
            })
        }
    </div>
  )
}
export default Card;