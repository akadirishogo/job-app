import Image from 'next/image'
import React from 'react'

export default function Career() {
  return (
    <div className='min-w-[359px] bg-white relative'>
      <div className='rounded-[5px] border-[0.94px] py-[23.39px] px-[26.2px]'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[10px]'>
              <Image src={'/images/productDesignerLogo.png'} width={40} height={40} alt='image' />
              <p className='text-[19px] font-heading font-medium'>Product Designer</p>
            </div>
            <div className='bg-black px-[13px] py-1 rounded-[37.4px] text-[12px] font-sans text-white'>Match: 96%</div>
        </div>
          
        <div className='mt-[18px] flex items-center gap-[4px]'>
          <div className='flex bg-background items-center gap-1 rounded-[37.4px] px-[13px] py-2'>
            <Image src={'/images/tabler-icon-users-group.png'} width={20} height={20} alt='image' />
            <p className='text-normal font-sans'>Real-estate</p>
          </div>

          <div className='flex bg-background items-center gap-1 rounded-[37.4px] px-[13px] py-2'>
            <Image src={'/images/tabler-icon-circle-check.png'} width={20} height={20} alt='image'/>
            <p className='text-normal font-sans'>Actively hiring</p>
          </div>

          <div className='flex bg-background items-center gap-1 rounded-[37.4px] px-[13px] py-2'>
            <Image src={'/images/tabler-icon-briefcase.png'} width={20} height={20} alt='image' />
            <p className='text-normal font-sans'>Remote</p>
          </div>
        </div>

        <div className='bg-linebreak w-full h-[0.94px] mt-[33px]'></div>

        <div className='mt-[14px] flex items-center justify-between'>
          <p className='text-[14px] font-heading'>Baseline</p>
          <div className='flex items-center justify-between'>
            <Image src={'/images/tabler-icon-reload.png'} width={20} height={20} alt='image' />
            <p className='font-sans'>Posted 2 days ago</p>
          </div>
        </div>

        <div className='absolute -top-[3] left-[0]'>
          <Image src={'/Images/3d-shapes-glowing-with-bright-holographic-colors-removebg-preview.png'} width={200} height={200} alt='image' />
        </div>
        
      </div>
      
    </div>
  )
}
