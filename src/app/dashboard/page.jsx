"use client";
import Image from "next/image"


export default function Dashboard() {

  return (
    <div className="bg-background min-h-screen px-[220px] flex items-center justify-center">
        <div className="bg-white w-full flex items-center justify-center relative">
            <Image src={'/images/patterns.png'} width={950} height={950} />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center font-heading text-headings">Congratulations!! You are ready to start applying</h1>
        </div>
    </div>
    
  );
}
