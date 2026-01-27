import React from 'react'
import { MdOutlineCameraAlt, MdOutlineRemoveRedEye } from 'react-icons/md'

export default function FloatingTop({product}) {
  return (
        <div className="absolute top-0 right-6  footer_links-bold flex items-center gap-2">
          <div className="max-w-max footer_links-small p-2 rounded-b bg-blue-100/80">
            <MdOutlineCameraAlt className="w-4 h-4 text-gray-800 cursor-pointer"  />
          </div>
          <div className="max-w-max footer_links-small p-2 rounded-b bg-blue-100/80 capitalize">
            <MdOutlineRemoveRedEye className="w-4 h-4 text-gray-800 cursor-pointer"  />
          </div>
        </div>
  )
}
