import React from 'react'
import { MdCameraAlt, MdOutlineVideoLibrary } from 'react-icons/md'

export default function FloatingTop() {
  return (
        <div className="absolute top-2 right-4  footer_links-bold flex items-center gap-4">
          <div className="flex gap-2 max-w-max footer_links-small p-1 rounded bg-black/40 shadow-md">
            <MdCameraAlt className="w-4 h-4 text-gray-200 cursor-pointer"  />
            <p className='footer_links-xs'>5</p>
          </div>
          <div className="flex gap-2 max-w-max footer_links-small p-1  rounded bg-black/40 shadow-md">
            <MdOutlineVideoLibrary className="w-4 h-4 text-gray-200 cursor-pointer"  />
            <p className='footer_links-xs'>1</p>
          </div>
        </div>
  )
}
