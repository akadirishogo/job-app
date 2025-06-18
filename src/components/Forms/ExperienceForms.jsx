"use client";

import { useState } from "react";

export default function ExperienceForm({ onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !company) return;
    onSave({ title, company });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm">Job Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded bg-background"
          required
        />
      </div>

      <div>
        <label className="block text-sm">Company</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full border p-2 rounded bg-background"
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
