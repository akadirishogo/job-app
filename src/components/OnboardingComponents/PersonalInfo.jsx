import Image from 'next/image'
import React from 'react'

export default function PersonalInfo() {
  return (
    <div className='min-w-[360px] bg-white relative'>
      <div className='rounded-[5px] border-[0.94px] py-[23.39px] px-[26.2px]'>
        <div className='flex justify-center'>
          <Image src={'/images/userImage.png'} width={90} height={90} alt='image' />
        </div>
        <h1 className='text-[20px] font-heading font-semibold flex justify-center mt-[27px]'>Suraj Ali Khalid</h1>
        <p className='text-normal font-sans flex justify-center text-center mt-[9px]'>Software engineer, Frontend developer, Full stack developer</p>
        <div className='mt-[18px] flex items-center gap-[2px]'>
          <div className='flex bg-background items-center gap-1 rounded-[37.4px] px-[13px] py-2'>
            <Image src={'/images/tabler-icon-map-pin.png'} width={20} height={20} alt='image' />
            <p className='text-[10px] font-sans'>New Delhi, India</p>
          </div>

          <div className='flex bg-background items-center gap-1 rounded-[37.4px] px-[13px] py-2'>
            <Image src={'/images/tabler-icon-circle-check.png'} width={20} height={20} alt='image'/>
            <p className='text-[10px] font-sans'>Available</p>
          </div>

          <div className='flex bg-background items-center gap-1 rounded-[37.4px] px-[13px] py-2'>
            <Image src={'/images/tabler-icon-briefcase.png'} width={20} height={20} alt='image' />
            <p className='text-[10px] font-sans'>Remote</p>
          </div>
        </div>

        <div className='absolute -top-[42px] -right-[18px]'>
          <Image src={'/Images/three-dimensional-casino-item-removebg-preview.png'} width={100} height={100} alt='image' />
        </div>
        
      </div>
      
    </div>
  )
}

