"use client";

import PageWrapper from "@/components/PageWrapper"
import ResetPasswordForm from "@/components/Auth/ResetPasswordForm";
import Image from "next/image"


export default function ResetPassword() {

  const handleSubmit = (credentials) => {
    console.log("Login attempt:", credentials);
    // Call your login API here
  };

  return (
    <PageWrapper>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
            <div>
                <h1 className="font-heading text-headings tracking-tightest">Reset password</h1>
                <p className="font-sans text-subHeadings text-description">No worries, we would send you a reset pin to change your password..</p>

            </div>
            <ResetPasswordForm />
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
