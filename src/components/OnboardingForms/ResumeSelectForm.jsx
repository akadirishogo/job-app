"use client";

import Image from "next/image";

export default function RoleSelectForm() {

 

  const options = [
    {
      key: "upload",
      icon: '/images/new-office.jpg',
      title: "Upload Resume",
      description: "Have a resume? Upload and leave the rest to us.",
    },
    {
      key: "create",
      icon: '/images/user-search-01.png',
      title: "Create Resume",
      description: "With 7 simple steps start your career glow-up.",
    },
  ];

  return (
    <div className="flex justify-between gap-12 mt-[28px]">
        {options.map((option) => (
            <div key={option.key}>
                <div className="w-[285px] h-[120px] border flex justify-center items-center rounded-[5px]">
                    <Image src={option.icon} alt={option.title} width={30} height={30} />
                </div>
                <div className="mt-[14px]">
                    <h1 className="text-[23px] font-medium">{option.title}</h1>
                    <p className="font-sans text-normal">{option.description}</p>
                </div>
            </div>
        ))}
    </div>
  );
}
