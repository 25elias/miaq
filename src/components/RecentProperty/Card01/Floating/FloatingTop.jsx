import React from 'react'
import { MdCameraAlt, MdVideocam } from 'react-icons/md'

export default function FloatingTop() {
  return (
        <div className="absolute top-2 left-6  footer_links-bold flex items-center gap-2">
          <div className="max-w-max footer_links-small p-1 rounded bg-black/20 shadow-md">
            <MdCameraAlt className="w-4 h-4 text-gray-200 cursor-pointer"  />
          </div>
          <div className="max-w-max footer_links-small p-2 rounded bg-black/20 shadow-md">
            <MdVideocam className="w-4 h-4 text-gray-200 cursor-pointer"  />
          </div>
        </div>
  )
}
