"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import ExperienceForms from "@/components/Forms/ExperienceForms";

export default function WorkExperienceForm({ onNext, onBack, data }) {
  const [experiences, setExperiences] = useState(data.experiences || []);
  const [showModal, setShowModal] = useState(false);

  const handleSaveExperience = (exp) => {
    setExperiences([...experiences, exp]);
    setShowModal(false);
  };

  const handleNext = (e) => {
    e.preventDefault();
    onNext({ experiences });
  };

  return (
    <form onSubmit={handleNext}>
      <div
        className="w-[456px] font-sans border border-background flex justify-center items-center py-[72px] cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full border border-placeholder flex justify-center items-center">
            <Image src="/images/add-01.svg" width={30} height={30} alt="add" />
          </div>
          <p className="font-sans font-semibold">Add Experience</p>
        </div>
      </div>

      {/* Render each added experience */}
      {experiences.length > 0 && (
        <div className="mt-4 space-y-3">
          {experiences.map((exp, idx) => (
            <div
              key={`${exp.title}-${idx}`}
              className="w-[456px] border border-background flex justify-center items-center py-[72px]"
            >
              <div className="text-center">
                <p className="font-semibold">{exp.title}</p>
                <p className="text-sm text-gray-600">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between mt-[24px]">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="text-gray-600 font-sans"
          >
            Back
          </button>
        ) : (
          <div className="w-[75px]" />
        )}
        <button
          type="submit"
          className="bg-black font-sans text-white px-[40px] py-[12px] rounded-[5px]"
        >
          Next
        </button>
      </div>

      {/* Modal for experience form */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Add Work Experience"
      >
        <ExperienceForms
          onSave={handleSaveExperience}
          onCancel={() => setShowModal(false)}
        />
      </Modal>
    </form>
  );
}
