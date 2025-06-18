"use client";

import PageWrapper from "@/components/PageWrapper"
import SignInForm from "@/components/Auth/SignInForm";
import Image from "next/image"


export default function SignInPage() {

  return (
    <PageWrapper>
      <div className="flex gap-[72px] justify-between">
        <div className="py-[80px]">
            <div>
                <h1 className="font-heading text-headings tracking-tightest">It's nice to have you back</h1>
                <p className="font-sans text-subHeadings text-description">A place to connect with the right opportunities to advance your career.</p>

            </div>
            <SignInForm />

            <div className="flex justify-center mt-[24px]">
                <p className="font-sans text-placeholderDark">Don’t have an account?</p>
                <a href="/signup" className="font-sans text-bold">Sign up here</a>
            </div>
        </div>

        <div className="relative w-[385px] h-[533px] rounded-md">
            <Image
                src="/images/loginFrame.png" 
                alt="GirlImage"   
                fill
                className="object-cover rounded-md" 
                />
        </div>
      </div>
    </PageWrapper>
  );
}
