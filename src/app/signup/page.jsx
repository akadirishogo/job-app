"use client";

import PageWrapper from "@/components/PageWrapper"
import SignUpForm from "@/components/Auth/SignUpForm";
import Image from "next/image"
import { useState } from "react";


export default function SignupPage() {
  return (
    <PageWrapper>
      <div className="flex justify-between">
        <div className="py-[80px]">
            <div>
                <h1 className="font-heading text-headings tracking-tightest">Sign up for endless opportunities</h1>
                <p className="font-sans text-subHeadings text-description">A place to connect with the right opportunities to advance your career.</p>

            </div>
            <SignUpForm />

            <div className="flex justify-center mt-[24px]">
                <p className="font-sans text-placeholderDark">Already have an account?</p>
                <a href="/login" className="font-sans text-bold">Sign in here</a>
            </div>
        </div>

        <div className="relative w-[385px] h-[533px] rounded-md">
            <Image
                src="/images/signupImage.png" 
                alt="Image"   
                fill
                className="object-cover rounded-md" 
                />
        </div>
      </div>
    </PageWrapper>
  );
}
