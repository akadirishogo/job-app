import Image from 'next/image'
import React from 'react'

export default function CertificationForm({ onNext, onBack, data }) {
  return (
    <div>
        <div className='w-[456px] border border-background flex justify-center items-center py-[72px]'>
            <div className='flex flex-col items-center gap-4'>
                <div className='w-20 h-20 rounded-full border border-placeholder flex justify-center items-center'>
                    <Image src={'/images/add-01.svg'} width={30} height={30} alt='image' />   
                </div>
                <p className='font-sans font-semibold'>Add Experience</p>
            </div>
        </div>

        <div className="flex justify-between mt-[24px]">
        {onBack ? (
          <button type="button" onClick={onBack} className="text-gray-600 font-sans text-normal">
            Back
          </button>
        ) : (
          <div className="w-[75px]"></div>
        )}
        <button
          type="submit"
          className="bg-black font-sans text-normal text-white px-[40px] py-[12px] rounded-[5px]"
        >
          Next
        </button>
      </div>
    </div>
  )
}
