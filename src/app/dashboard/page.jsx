"use client";

import PageWrapper from "@/components/PageWrapper"
import SignInForm from "@/components/Auth/SignInForm";
import Image from "next/image"


export default function Dashboard() {

  return (
    <div className="bg-green-500 min-h-screen">
        <Image src={'/Images/dashboard.png'} width={390} height={390} alt='image' /> 
    </div>
    
  );
}
