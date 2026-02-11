import Image from "next/image";



 const Hero = () => {
  return (
    <div className="wrapper flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col items-start gap-4">
            <h1>Discover the <br /> worlds <span className="text-black/50">hidden</span> wonders</h1>
            <p className="body-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor amet at necessitatibus ea autem. Ipsa error debitis ut amet est tempora! Aspernatur quod ratione earum alias, beatae quibusdam magnam.</p>
            <button className="hidden btn-cta" >Plan your trip</button>
        </div>
        <div className="mt-2 grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 max-h-90">
            <div className="row-span-2 rounded-2xl overflow-hidden">
                <Image 
                    src="/rental_img_1.jpg" 
                    alt="discovery images"
                    width={200}
                    height={400}
                    className="rounded-2xl overflow-hidden" />
            </div>
            <div className=" rounded-2xl overflow-hidden">
                <Image 
                    src="/rental_img_2.jpg" 
                    alt="discovery images"
                    width={200}
                    height={300}
                    className="rounded-2xl overflow-hidden" />
            </div>
            <div className="rounded-2xl overflow-hidden">
                <Image 
                    src="/rental_img_3.jpg" 
                    alt="discovery images"
                    width={200}
                    height={200}
                    className="rounded-2xl overflow-hidden" />
            </div>

        </div>
        <button className="mt-4 mx-auto btn-cta_mobile" >Plan your trip</button>
    </div>
  )
}

export default Hero;