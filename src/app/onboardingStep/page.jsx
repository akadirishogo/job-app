"use client";

import { useState } from "react";
import PersonalInfoForm from "@/components/OnboardingForms/PersonalInfoForm"
import EducationForm from "@/components/OnboardingForms/EducationForm"
import WorkExperienceForm from "@/components/OnboardingForms/WorkExperienceForm"
import CareerInfoForm from "@/components/OnboardingForms/CareerInfoForm"
import Career from "@/components/OnboardingComponents/Career"
import PersonalInfo from "@/components/OnboardingComponents/PersonalInfo"
import Education from "@/components/OnboardingComponents/Education"
import Experience from "@/components/OnboardingComponents/Experience"
import Skill from "@/components/OnboardingComponents/Skill"
import Certification from "@/components/OnboardingComponents/Certification"
import Bio from "@/components/OnboardingComponents/Bio"
import SkillInfoForm from "@/components/OnboardingForms/SkillInfoForm"
import CertificationForm from "@/components/OnboardingForms/CertificationForm"
import BioForm from "@/components/OnboardingForms/BioForm"
import PageWrapper from "@/components/PageWrapper";

const steps = [
    { key: "career", label: "Let’s start your career glow-up!", Component: CareerInfoForm, imageComponent: <Career />},
    { key: "personal", label: "Personal information", Component: PersonalInfoForm, imageComponent: <PersonalInfo />},
    { key: "experience", label: "Relevant work experience", Component: WorkExperienceForm, imageComponent: <Experience/>},
    { key: "skills", label: "Skills in relation to your profession", Component: SkillInfoForm, imageComponent: <Skill /> },
    { key: "education", label: "Education", Component: EducationForm, imageComponent: <Education /> },
    { key: "certification", label: "Certifications", Component: CertificationForm, imageComponent: <Certification/> },
    { key: "end", label: "Almost done! Give a summary about yourself", Component: BioForm, imageComponent: <Bio /> },
];

export default function OnboardingStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const CurrentComponent = steps[currentStep].Component;

  const handleNext = (stepData) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Submit final payload
      console.log("All onboarding data:", { ...formData, ...stepData });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  return (
      <PageWrapper>
        <div className="">
          <div className="mb-[29px] flex justify-end">
            <a href="#" className="font-sans font-semibold">Skip for now</a>
          </div>
          <div className="flex gap-[72px] justify-between">
            <div>
              <div className="mt-4 font-sans text-[10px] text-gray-500">
                {currentStep + 1}/{steps.length}
              </div>
              <div className="mb-6">
                <p className="text-headings font-heading tracking-tightest">{steps[currentStep].label}</p>
              </div>
              <CurrentComponent onNext={handleNext} {...(currentStep > 0 && { onBack: handleBack })} data={formData} />
            </div>
            <div className="relative pl-[18px] pr-[7px] pt-[47px] pb-[130px] rounded-md bg-background">
                {steps[currentStep].imageComponent}
            </div>
          </div>
        </div>
      </PageWrapper>
  );
}



 {/* <div className=" bg-white">
      <div className="mb-6">
        <h2 className="text-lg font-bold">{steps[currentStep].label}</h2>
      </div>

      <CurrentComponent onNext={handleNext} {...(currentStep > 0 && { onBack: handleBack })} data={formData} />

      <div className="mt-4 text-sm text-gray-500 text-center">
        Step {currentStep + 1} of {steps.length}
      </div>
    </div> */}