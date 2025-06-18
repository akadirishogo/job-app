"use client";

import { useState } from "react";
import { login } from "../../../apiService"
import { useRouter } from 'next/navigation'
import Toast from '../Toast'



export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async (e) => {
          e.preventDefault();
          setLoading(true)
          const res = await login( email, password )
          if (res.status === true) {
             localStorage.setItem('token', res.data.token);
              setLoginMessage("Login successful!");
              setTimeout(() => {
                setLoginMessage("");
                router.push('/dashboard');
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
      <Toast message={loginMessage} />

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
        {loading ? "Signing in..." : "Continue"}
      </button>
      <div className="flex items-center justify-between mt-[24px]">
        <div
        className="flex items-center cursor-pointer select-none"
        onClick={() => setKeepLoggedIn(!keepLoggedIn)}
        >
        <div className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center">
            {keepLoggedIn && (
            <div className="h-2 w-2 bg-black rounded-[100%]" />
            )}
        </div>
        <label className="ml-2 text-sm text-placeholderDark">
            Keep me logged in
        </label>
    </div>

        <div>
            <a href="/forgotPassword" className="text-[13px]">Forget Password?</a>
        </div>
      </div>
    </form>
  );
}
