"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function RoleSelectForm({ onSubmit }) {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      key: "recruiter",
      icon: "/images/new-office.jpg",
      title: "Recruiter",
      description: "Find the best talent for your organization.",
    },
    {
      key: "talent",
      icon: "/images/user-search-01.png",
      title: "Talent",
      description: "Looking to find and manage job as a freelancer.",
    },
  ];

  const handleSelect = (roleKey) => {
    setSelectedRole(roleKey);
    console.log(selectedRole)
    redirect('/signup')
  };

  return (
    <div className="flex justify-between gap-12 mt-[28px] font-sans">
      {roles.map((role) => (
        <div key={role.key}>
          <button
            type="button"
            onClick={() => handleSelect(role.key)}
            className={`w-[285px] h-[120px] flex justify-center items-center rounded-[5px] border transition ${
              selectedRole === role.key ? "border-black" : "border-gray-300"
            }`}
          >
            <Image src={role.icon} alt={role.title} width={30} height={30} />
          </button>
          <div className="mt-[14px]">
            <h1 className="text-[23px] font-heading font-semibold">{role.title}</h1>
            <p className="font-sans text-normal">{role.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
