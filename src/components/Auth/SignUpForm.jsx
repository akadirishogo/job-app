"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signUpUser } from '../../../apiService'

export default function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  
  
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const res = await signUpUser( fullName, email, password )
        if (res.status === true) {
          localStorage.setItem('verifyEmail', email);
          router.push('/verifyEmail')
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
      <div>
        <label className="block text-normal">Full name</label>
        <input
          type="string"
          className="mt-1 text-placeholder focus:outline-none focus:ring-0 block w-full rounded bg-background py-[12px] px-[14px]"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Owojori Habeebah"
          required
        />
      </div>

      <div>
        <label className="block text-normal">Email</label>
        <input
          type="email"
          className="mt-1 text-placeholder focus:outline-none focus:ring-0 block w-full rounded bg-background py-[12px] px-[14px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="owojorihabeebah@gmail.com"
          required
        />
      </div>

      <div className="mt-[16px]">
        <label className="block text-normal">Password</label>
        <input
          type="password"
          className="mt-1 text-placeholder focus:outline-none focus:ring-0 block w-full rounded bg-background py-[12px] px-[14px]"
          value={password}
          placeholder="***************"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full mt-[18px] bg-black text-white py-[12px] px-[40px] font-sans rounded"
      >
        {loading?'Signing up...' : 'Continue'}
      </button>
    </form>
  );
}