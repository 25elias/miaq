import socials from '@@/components/socials';
import React from 'react'
import { FaEnvelope, FaGooglePlusG, FaHouse, FaLinkedin, FaLinkedinIn, FaMobileButton, FaPhone, FaRegEnvelope } from 'react-icons/fa6';

export default function About() {

    const contacts = [
        {icon: <FaPhone className='w-3-h-3 text-gray-300' />, info: "Lafto, Addis Ababa Ethiopia"},
        {icon: <FaRegEnvelope className='w-3-h-3 text-gray-300' />, info: "Diredawa, Ethiopia"},
        {icon: <FaHouse className='w-3-h-3 text-gray-300' />, info: "Bole, Addis Ababa Ethiopia"},
        {icon: <FaMobileButton className='w-3-h-3 text-gray-300' />, info: "Arada, Adama Ethiopia"},
        {icon: <FaLinkedinIn className='w-3-h-3 text-gray-300' />, info: "Shagar Addis Ababa, Ethiopia"},
        {icon: <FaGooglePlusG className='w-3-h-3 text-gray-300' />, info: "Bishoftu, Ethiopia"},
    ]



  return (
    <div className=''>
        <h4 className='text-gray-200 uppercase font-bold tracking-wider py-2'>Book Now</h4>
      <div className='flex flex-col gap-2 pt-8'>
        {
            contacts.slice(0,2).map((contact) => {
                return (
                    <div className='flex gap-2'>
                        {contact.icon}
                        <p className='text-xs text-gray-300 font-normal '>{contact.info}</p>
                    </div>

                )
            })
        }
        </div>
        <div className='flex flex-wrap items-center gap-2 py-6'>
        {
            socials.slice(0,6).map((social, idx) => {
                return (
                    <ul key={idx}>
                        <li className="rounded-full">{social.icon}</li>
                    </ul>

                );
            })
        }
        </div>
    </div>
  );
};
