"use client";

import Image from "next/image";
import { useState } from "react";
import SocialLinksInput from "../OnboardingComponents/Links";

export default function CareerInfoForm({ onNext, onBack, data }) {
  const [profilePicture, setProfilePicture] = useState(data.profilePicture || "");
  const [location, setLocation] = useState(data.location || "");

  const locations = [
  "Lagos, Nigeria",
  "Abuja, Nigeria",
  "Port Harcourt, Nigeria",
  "Kano, Nigeria",
  "Ibadan, Nigeria",
  "Accra, Ghana",
  "Nairobi, Kenya",
  "Cape Town, South Africa",
  "Johannesburg, South Africa",
];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext({ profilePicture, location });
      }}
      className="mt-[28px] font-sans"
    >
      <div className="">
        <label className="block text-normal">Profile picture</label>
        <div className="flex items-center border border-dashed text-placeholder focus:outline-none focus:ring-0 w-[454px] rounded bg-background py-[12px] px-[14px]">
            <Image src={'/images/imageIcon.png'} width={40} height={40} alt='image' />
            <input
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
              className="bg-background focus:outline-none focus:ring-0 w-full"
              placeholder="PNG, JPG or JPEG (max 20MB)"  
              required
            />
        </div>    
      </div>

      <div className="mt-[16px]">
        <label className="block text-normal">Location</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1 text-placeholder focus:outline-none focus:ring-0 block w-full rounded bg-background py-[12px] px-[14px]"
          required
        >
          <option value="" disabled>
            Select...
          </option>
          {locations.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <SocialLinksInput />

      <div className="flex justify-between mt-[24px]">
        {onBack ? (
          <button type="button" onClick={onBack} className="text-gray-600">
            Back
          </button>
        ) : (
          <div className="w-[75px]"></div>
        )}
        <button
          type="submit"
          className="bg-black text-white px-[40px] py-[12px] rounded-[5px]"
        >
          Next
        </button>
      </div>
    </form>
  );
}





