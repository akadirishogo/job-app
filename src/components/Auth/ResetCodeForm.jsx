"use client";

import { useState, useRef, useEffect } from "react";
import { verifyCode } from '../../../apiService'
import { redirect } from "next/navigation";

export default function ResetCodeForm() {
   const [code, setCode] = useState("");
   const [email, setEmail] = useState("")
   const [loading, setLoading] = useState(false)
  const inputRef = useRef(null);



  useEffect(() => {
    const storedEmail = localStorage.getItem('Email');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      alert("Email not found, please restart verification.");
      // Optionally redirect the user back to sign up
    }
}, []);


 useEffect(() => {
    inputRef.current?.focus();
  }, []);


 const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow digits only
    if (value.length <= 6) setCode(value);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (code.length === 6) {

    setLoading(true)
    const res = await verifyCode(email, code);

    if (res.status === true && res.data.token) {
      localStorage.setItem('authToken', res.data.token);
      setLoading(false)
      redirect('/')
    } else {
      alert(`${res.message}`);
    }
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
        {loading ? "Verifying code..." : "Verify email"}
      </button>
    </form>
  );
}
