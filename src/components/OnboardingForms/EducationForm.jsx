import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import EducationForms from "@/components/Forms/EducationForms";

export default function EducationForm({ onNext, onBack, data }) {
  const [educations, setEducations] = useState(data.educations || []);
  const [showModal, setShowModal] = useState(false);

  const handleSaveEducation = (edu) => {
    setEducations([...educations, edu]);
    setShowModal(false);
  };

  const handleNext = (e) => {
    e.preventDefault();
    onNext({ educations });
  };

  return (
    <form onSubmit={handleNext}>
      <div
        className="w-[456px] border border-background flex justify-center items-center py-[72px] cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full border border-placeholder flex justify-center items-center">
            <Image src="/images/add-01.svg" width={30} height={30} alt="add" />
          </div>
          <p className="font-sans font-semibold">Add Education</p>
        </div>
      </div>

      {/* Render saved educations */}
      {educations.length > 0 && (
        <div className="mt-4 space-y-3">
          {educations.map((edu, idx) => (
            <div
              key={`${edu.school}-${idx}`}
              className="w-[456px] border border-background flex justify-center items-center py-[72px]"
            >
              <div className="text-center">
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between mt-[24px]">
        {onBack ? (
          <button type="button" onClick={onBack} className="text-gray-600 text-normal">
            Back
          </button>
        ) : (
          <div className="w-[75px]" />
        )}
        <button
          type="submit"
          className="bg-black text-white px-[40px] py-[12px] rounded-[5px]"
        >
          Next
        </button>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Add Education"
      >
        <EducationForms
          onSave={handleSaveEducation}
          onCancel={() => setShowModal(false)}
        />
      </Modal>
    </form>
  );
}
