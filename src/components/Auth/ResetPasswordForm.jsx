"use client";

import { useState } from "react";
import { resetPassword } from "../../../apiService";
import Toast from "../Toast";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter()


  const onSubmit = async (e) => {
    e.preventDefault();
      if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
    const token = localStorage.getItem('authToken')
    setLoading(true)
    const res = await resetPassword(newPassword, token)
    if (res.status === true) {
        setSuccessMessage(`${res.message}`);
        setTimeout(() => {
          setSuccessMessage("");
          router.push('/dashboard');
        }, 2000);
    } else {
      alert('Error')
    }
  }
  
  return (
    <form
      onSubmit={onSubmit}
      className="mt-[28px] font-sans"
    >
      <Toast message={successMessage}/>
      <div>
        <label className="block text-normal">New password</label>
        <input
          type="password"
          className="mt-1 text-placeholder focus:outline-none focus:ring-0 block w-full rounded bg-background py-[12px] px-[14px]"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="***************"
          required
        />
      </div>

       <div className="mt-[24px]">
        <label className="block text-normal">Confirm password</label>
        <input
          type="password"
          className="mt-1 text-placeholder focus:outline-none focus:ring-0 block w-full rounded bg-background py-[12px] px-[14px]"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="***************"
          required
        />
      </div>


      <button
        type="submit"
        className="w-full mt-[18px] bg-black text-white py-[12px] px-[40px] font-sans rounded"
      >
        {loading ? 'Reseting...' : "Reset password"}
      </button>
    </form>
  );
}
