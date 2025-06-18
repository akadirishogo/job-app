"use client";

import Image from "next/image";
import { useState } from "react";

export default function SocialLinksInput() {
  const [links, setLinks] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");

  const handleAddLink = () => {
    if (!platform || !url) return;
    setLinks([...links, { platform, url }]);
    setPlatform("");
    setUrl("");
    setShowInput(false);
  };

  return (
    <div className="mt-[16px]">
      <label className="block text-normal mb-2">Links</label>

      {/* Link Display Boxes */}
      <div className="flex flex-wrap gap-2">
        {links.map((link, index) => (
          <div
            key={index}
            className="px-3 py-2 bg-background border text-placeholder border-gray-300 rounded-md text-normal flex items-center gap-2"
          >
            <Image src={'/images/add-01.svg'} width={20} height={20} alt='image' />
            <span className="font-medium">{link.platform}</span>
          </div>
        ))}

        {/* Plus Button */}
        <button
          type="button"
          onClick={() => setShowInput(true)}
          className="px-3 py-2 flex items-center text-normal text-placeholder gap-2 border border-gray-300 bg-background rounded-md"
        >
          <Image src={'/images/add-01.svg'} width={20} height={20} alt='image' />
          <p>Another link</p>
        </button>
      </div>

      {/* Input Modal or Box */}
      {showInput && (
        <div className="mt-4 bg-white border border-gray-300 p-4 rounded-md space-y-2">
          <div>
            <label className="block text-sm">Platform</label>
            <input
              type="text"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              placeholder="e.g., LinkedIn"
              className="mt-1 text-placeholder focus:outline-none focus:ring-0 block w-full rounded bg-background py-[10px] px-[12px]"
            />
          </div>
          <div>
            <label className="block text-sm">URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://..."
              className="mt-1 text-placeholder focus:outline-none focus:ring-0 block w-full rounded bg-background py-[10px] px-[12px]"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowInput(false)}
              className="text-sm text-gray-500"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAddLink}
              className="text-sm bg-black text-white px-4 py-2 rounded"
            >
              Add Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
