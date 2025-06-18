"use client";

import PageWrapper from "@/components/PageWrapper"
import RoleSelectForm from "@/components/RoleSelectForm";


export default function OnboardingPage() {

const handleRoleSubmit = ({ role }) => {
    console.log("Selected role:", role);
    // Navigate or store role as needed
  };

  return (
    <PageWrapper>
      <div className="flex justify-center">
        <div className="py-[80px] flex flex-col items-center">
          <div className="flex">
            <h1 className="font-heading text-headings tracking-tightest">You are joining as a?</h1>
          </div>
          <RoleSelectForm onClick={handleRoleSubmit} />
        </div>
      </div>
    </PageWrapper>
  );
}
