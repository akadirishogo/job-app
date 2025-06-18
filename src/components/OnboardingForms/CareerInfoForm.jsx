"use client";

import { useState } from "react";

export default function CareerInfoForm({ onNext, onBack, data }) {
  const [profession, setProfession] = useState(data.profession || "");
  const [experience, setExperience] = useState(data.experience || "");

  const professionOptions = [
    "Software Engineer",
    "Product Manager",
    "Designer",
    "Data Scientist",
    "Marketer",
  ];

  const experienceOptions = [
    "Less than 1 year",
    "1 - 2 years",
    "3 - 5 years",
    "6 - 10 years",
    "10+ years",
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext({ profession, experience });
      }}
      className="mt-[28px] font-sans"
    >
      <div>
        <label className="block text-normal">Your profession</label>
        <select
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="mt-1 text-placeholder focus:outline-none focus:ring-0 block w-full rounded bg-background py-[12px] px-[14px]"
          required
        >
          <option value="" disabled>
            Select...
          </option>
          {professionOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="mt-[16px]">
        <label className="block text-normal">Experience</label>
        <select
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="mt-1 text-placeholder focus:outline-none focus:ring-0 block w-full rounded bg-background py-[12px] px-[14px]"
          required
        >
          <option value="" disabled>
            Select...
          </option>
          {experienceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

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





{/* <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext({ name, phone });
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm">Your profession</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm">Your experience</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="flex justify-between">
        {onBack ? (
          <button type="button" onClick={onBack} className="text-gray-600">
            Back
          </button>
        ):(
            <div className="w-[75px]"></div>
        )}
        <button type="submit" className="bg-black text-white px-[40px] py-[12px] rounded-[5px]">
          Next
        </button>
      </div>
    </form> */}