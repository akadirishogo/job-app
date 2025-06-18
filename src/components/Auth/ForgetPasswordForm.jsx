"use client";

import { useState } from "react";
import { forgotPassword } from "../../../apiService";
import Toast from "../Toast";
import { useRouter } from 'next/navigation'



export default function ForgetPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const router = useRouter()


  const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const res = await forgotPassword(email)
        if (res.status === true) {
              setSuccessMessage(`Successful. ${res.message}`);
              setTimeout(() => {
                setSuccessMessage("");
                localStorage.setItem('Email', email);
                router.push('/confirmCode');
              }, 2000);
          } else {
            alert(`${res?.message}`)
          }
          setLoading(false)
      }

  
  return (
    <form
      onSubmit={onSubmit}
      className="mt-[28px] font-sans"
    >
      <Toast message={successMessage} />
      <div>
        <label className="block text-normal">Email</label>
        <input
          type="email"
          className="mt-1 text-placeholder focus:outline-none focus:ring-0 block w-full rounded bg-background py-[12px] px-[14px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Johndoe@gmail.com"
          required
        />
      </div>


      <button
        type="submit"
        className="w-full mt-[18px] bg-black text-white py-[12px] px-[40px] font-sans rounded"
      >
        {loading ? "Reseting..." : "Reset password"}
      </button>
    </form>
  );
}
