"use client";

import { useState } from "react";

export default function EducationForm({ onSave, onCancel }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!school || !degree) return;
    onSave({ school, degree });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-sans">
      <div>
        <label className="block text-sm">School Name</label>
        <input
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          className="w-full border p-2 rounded bg-background focus:outline-none focus:ring-0"
          required
        />
      </div>

      <div>
        <label className="block text-sm">Degree / Qualification</label>
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          className="w-full border p-2 rounded bg-background focus:outline-none focus:ring-0"
          required
        />
      </div>

      <div className="flex justify-end gap-3">
        <button type="button" onClick={onCancel} className="text-sm text-gray-500">
          Cancel
        </button>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded text-sm">
          Save
        </button>
      </div>
    </form>
  );
}
