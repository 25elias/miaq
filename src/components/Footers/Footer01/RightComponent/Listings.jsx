import React from 'react'
import { FaMosque } from 'react-icons/fa6'
import { MdOutlineMosque } from 'react-icons/md'

export default function RightComponent() {
  return (
    <div className=''>
        <h4 className='text-gray-200 uppercase font-bold tracking-wider py-2'>Our Awards</h4>
        <div className='flex flex-col xs:flex-row md:flex-col gap-4'>


          {/* Awards */}
          <div className='flex flex-col md:flex-row items-center gap-12 sm:gap-4 py-6 text-gray-200 uppercase font-bold tracking-wider'>
            <div className='flex flex-col items-center sm:flex-row  gap-6'>
              <MdOutlineMosque className='min-w-10 h-10 md:min-w-14  md:min-h-14 text-gray-400/50' />
              <span className='text-xs text-gray-200 font-bold text-wrap uppercase ' >corporis officiis animi 2017</span>
            </div>

            <div className='flex flex-col items-center sm:flex-row  gap-6'>
              <MdOutlineMosque  className='min-w-10 md:min-w-14  md:min-h-14 h-10 text-gray-400/50'/>
              <span className='text-xs text-gray-200 font-bold text-wrap uppercase ' >cofficiis laboriosam </span>
            </div>
          </div>

          {/* Additional Info/About */}

          <div className=' py-2'>
            <p className='text-sm text-gray-400/40 font-normal tracking-wide'> Natus iste architecto est deleniti odit officia perferendis? In qui accusantium voluptatibus nesciunt, animi nisi hic ad, cupiditate dolore aliquam, perferendis laudantium!</p>
          </div>

        </div>
    </div>
  )
}
