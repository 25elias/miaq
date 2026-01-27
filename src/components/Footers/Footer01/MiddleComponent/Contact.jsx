import Link from 'next/link';
import React from 'react'
import { FaChevronLeft, FaChevronRight, FaDesktop, FaEnvelope, FaHouse, FaMobileButton, FaPhone, FaS } from 'react-icons/fa6';

export default function RecentNews() {

    const contacts = [
        {
            link: "/",
            icon: <FaChevronRight className='w-3 h-3' />, 
            info: "Lafto, Addis Ababa Ethiopia"
        },
        {
            link: "/",
            icon: <FaChevronRight className='w-3 h-3' />, 
            info: "Diredawa, Ethiopia"
        },
        {
            link: "/",
            icon: <FaChevronRight className='w-3 h-3' />, 
            info: "Bole, Addis Ababa Ethiopia"
        
        },
        {
            link: "/",
            icon: <FaChevronRight className='w-3 h-3' />, 
            info: "Arada, Adama Ethiopia"
        },
        {
            link: "/",
            icon: <FaChevronRight className='w-3 h-3' />, 
            info: "Shagar Addis Ababa, Ethiopia"
        },
        {
            link: "/",
            icon: <FaChevronRight className='w-3 h-3' />, 
            info: "Bishoftu, Ethiopia"
        },
    ]

  return (
    <div className=''>
      <h4 className='text-gray-200 uppercase font-bold tracking-wider py-2'>Recent news</h4>
      <div className='flex flex-col gap-4 pt-4'>
        {
            contacts.map(({link, icon, info}) => {
                return (
                    <div className='flex items-center gap-2 text-gray-400'>
                        {icon}
                        <Link href={link} className='text-sm text-gray-400 font-normal leading-7  underline underline-offset-12'>{info}</Link>
                    </div>

                )
            })
        }
        </div>
    </div>
  );
};
