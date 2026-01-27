import Link from "next/link";
import { FaLocationPin, FaVectorSquare } from "react-icons/fa6";
import { MdBathtub, MdBed } from "react-icons/md";


export const Floating = () => {
  return(
          <div className="p-2 sm:p-4 text-sm text-slate-400">
            <div className="flex items-center justify-between gap-2 py-4">
              <div className="w-1/4  text-sm text-slate-400 flex flex-col items-center">
                  <MdBed  className="w-7 h-7" />
                  <p className="text-gray-900">4</p>
              </div>
              <div className="w-full ">
                <span className="flex gap-2">
                  <FaLocationPin  />
                  <Link className="underline" href="/">
                  10010 Bole, Addis Ababa, Ethiopia
                  </Link>
                </span>

              </div>
            </div>

            <div className="flex items-center justify-between gap-2 py-4 ">
              <div className="w-1/4 text-sm text-slate-400 flex flex-col items-center">
                  <MdBathtub  className="w-7 h-7" />
                  <p className=" text-gray-900">4</p>
              </div>
              <div className="w-full text-left">
                <h4  className="py-2 text-lg sm:text-xl text-gray-900 font-semibold capitalize">Vila on grand avenue</h4>
                <span>
                  atque et enim incidunt id iste? Mollitia eius eum maxime dolorem distinctio, maiores est voluptatibus.
                </span>

              </div>
            </div>

            <div className="flex items-center justify-between gap-2 py-4 ">
              <div className="w-1/4 text-sm text-slate-400 flex flex-col items-center">
                  <FaVectorSquare  className="w-7 h-7" />
                  <p className="text-gray-900">4</p>
              </div>
              <div className="w-full flex items-center justify-between gap-2  text-left">
                <span className="text-md sm:text-xl font-bold text-sky-900 tracking-wide">
                  $4520 Monthly
                </span>

                <button className="border-none text-xs sm:text-sm text-slate-100 font-bold w-max py-2 px-4 bg-sky-400 rounded-md overflow-hidden tracking-wide">
                  Know More
                </button>
              </div>
            </div>


          </div>
  );
};

export const HeroContent = () => {
  return (
      <div className="z-100 absolute inset-0  bg-black/30 flex w-full">
        <div className="bg-white wrapper w-110 h-max my-auto flex flex-col justify-center gap-6 text-wrap rounded-md mx-4">

          {/* Floating Content */}
          <Floating />

        </div>
      </div>
  );
};
