"use client";

import PageWrapper from "@/components/PageWrapper"
import ForgetPasswordForm from "@/components/Auth/ForgetPasswordForm";
import Image from "next/image"


export default function ForgotPassword() {

  const handleSubmit = (credentials) => {
    console.log("Login attempt:", credentials);
    // Call your login API here
  };

  return (
    <PageWrapper>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
            <div>
                <h1 className="font-heading text-headings tracking-tightest">Forget password?</h1>
                <p className="font-sans text-subHeadings text-description">No worries, we would send you a reset pin to change your password.</p>

            </div>
            <ForgetPasswordForm />
        </div>

        <div className="relative w-[385px] h-[533px] rounded-md">
            <Image
                src="/images/forgotImage.png" 
                alt="Image"   
                fill
                className="object-cover rounded-md" 
                />
        </div>
      </div>
    </PageWrapper>
  );
}
