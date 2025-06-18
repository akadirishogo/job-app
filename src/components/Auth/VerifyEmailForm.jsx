"use client";

import { useState, useRef, useEffect } from "react";

export default function VerifyEmailForm({ onSubmit, buttonText }) {
   const [code, setCode] = useState("");
  const inputRef = useRef(null);

 useEffect(() => {
    inputRef.current?.focus();
  }, []);


 const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow digits only
    if (value.length <= 6) setCode(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.length === 6) {
      onSubmit({ code });
    }
  };



  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[28px] font-sans flex flex-col items-center"
    >
      <div className="flex gap-4 w-full mb-6">
        <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={code}
            onChange={handleChange}
            ref={inputRef}
            placeholder="******"
            className="verify-input text-center w-25 h-12 rounded bg-background text-xl font-medium focus:outline-none focus:ring-0"
          />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-[12px] px-[40px] font-sans rounded"
        disabled={code.length !== 6}
      >
        {buttonText}
      </button>
    </form>
  );
}
