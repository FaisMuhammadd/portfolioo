import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
         <Image src={assets.profile_img} alt='profile' className='rounded-full w-32'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
         Hi! I'm MuhammadFais <Image src={assets.hand_icon} alt='icon' className='w-6'/>
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
         frontend web dev based in Wakanda Indonesia.
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
         I am a frontend dev from Makassar, Indonesia and newbie dev with strongly interest in web tech
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
         <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me <Image src={assets.right_arrow_white} alt='profile' className='w-4'/></a>
         <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume <Image src={assets.download_icon} alt='profile' className='w-4'/></a>
      </div>
    </div>
  )
}

export default Header