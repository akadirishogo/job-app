"use client";

import PageWrapper from "@/components/PageWrapper"
import Image from "next/image"
import ResetCode from "@/components/Auth/ResetCode";
import { useEffect, useState } from "react";


export default function ConfirmCode() {
   const [email, setEmail] = useState('')
  
  useEffect(() => {
    setEmail(localStorage.getItem('Email'));
    if (!email) {
    return
  }
}, []);


  return (
    <PageWrapper>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
            <div>
                <h1 className="font-heading text-headings tracking-tightest">Password reset code</h1>
                <p className="font-sans text-subHeadings text-description">Please enter the 4-digit code that was sent to {email}</p>

            </div>
            <ResetCode />

            <div className="flex justify-center mt-[24px]">
              <p className="font-sans text-placeholderDark">Didn't get the code?</p>
              <span className="font-sans text-bold">Send a new code</span>
            </div>
        </div>

        <div className="relative w-[385px] h-[533px] rounded-md">
            <Image
                src="/images/resetImage.png" 
                alt="Image"   
                fill
                className="object-cover rounded-md" 
                />
        </div>
      </div>
    </PageWrapper>
  );
}
