import React from 'react'

export default function BottomCardInfo() {
  return (
    cardInfo = [
        {icon: <MdBed  className="w-5 h-5 text-gray-500/80"/>, text: "2"},
        {icon: <MdBed  className="w-5 h-5 text-gray-500/80"/>, text: "2"},
        {icon: <MdOutlineSquare className="w-6 h-6 text-gray-500/80" />, text: "245 <br /> sqrft"},
    ],


    <div>
        {cardInfo.map(({ text, icon, idx }) => {
            return (
              <ul key={idx} className="flex flex-wrap gap-4 items-center font-black_xs">
                <li className="p-1 footer_links">
                  <span className="text-sm font-black_xs flex gap-1 items-center">
                    {icon}
                    <h5 className="text-xs font-black_xs ">{text}</h5>
                  </span>
                </li>
              </ul>
            );
          })}
    </div>
  )
}
