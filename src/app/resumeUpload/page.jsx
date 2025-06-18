"use client";

import PageWrapper from "@/components/PageWrapper"
import ResumeSelectForm from "@/components/OnboardingForms/ResumeSelectForm";


export default function ResumeUpload() {

const handleSubmit = ({ role }) => {
    console.log("Selected role:", role);
    // Navigate or store role as needed
  };

  return (
    <PageWrapper>
      <div className="flex justify-center">
        <div className="py-[80px] flex flex-col items-center">
          <div className="flex">
            <h1 className="font-heading text-headings tracking-tightest">How’d you like to start your career journey?</h1>
          </div>
          <ResumeSelectForm onSubmit={handleSubmit} />
        </div>
      </div>
    </PageWrapper>
  );
}
