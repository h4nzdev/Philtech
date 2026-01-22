import React from "react";
import {
  Upload,
  FileText,
  Shield,
  ArrowRight,
  Zap,
  LogOut,
  ChevronsRight,
  Briefcase,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Header Component
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#663399] p-1.5 rounded-lg">
            <svg
              className="size-6 text-white"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            CareerDev
          </h2>
        </div>
        <div className="flex items-center gap-8">
          <button className="text-sm font-medium text-gray-500 hover:text-[#EA580C] transition-colors flex items-center gap-1">
            Sign Out
            <LogOut className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

// Profile Creation Card Component
const ProfileCreationCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  highlightColor,
  showBolt = false,
  onClick,
}) => {
  return (
    <button
      className="group relative bg-white border-2 border-transparent hover:border-[#663399] p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-left flex flex-col items-center md:items-start w-full"
      onClick={onClick}
    >
      <div
        className={`mb-6 w-20 h-20 ${highlightColor} rounded-2xl flex items-center justify-center group-hover:bg-[#663399] group-hover:text-white transition-colors duration-300`}
      >
        <Icon className="size-10" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-500 text-base leading-relaxed mb-6">
        {description}
      </p>
      <div className="mt-auto flex items-center text-[#663399] font-bold group-hover:translate-x-1 transition-transform">
        {buttonText} <ArrowRight className="ml-2 size-5" />
      </div>

      {showBolt && (
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
          <div className="absolute top-0 right-0 w-12 h-12 bg-[#EA580C]/10 flex items-center justify-center rounded-bl-3xl">
            <Zap className="size-4 text-[#EA580C]" />
          </div>
        </div>
      )}
    </button>
  );
};

// Main Component
const ProfileCreationMethod = () => {
  const navigate = useNavigate();
  const handleResumeUpload = () => {
    navigate("/upload-resume");
  };

  const handleManualEntry = () => {
    navigate("/sign-up");
  };

  const handleSkip = () => {
    console.log("Skip for now");
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-[900px] w-full text-center">
          <div className="mb-12 inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#663399]"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#663399]">
              Step 2: Profile Setup
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
            How would you like to build your profile?
          </h1>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Select the method that works best for you. Your profile helps us
            match you with the right opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ProfileCreationCard
              icon={Upload}
              title="Upload Your Resume"
              description="We'll automatically parse your details to save you time. Supports PDF, DOCX."
              buttonText="Get Started"
              highlightColor="bg-[#EEF2FF] text-[#663399]"
              showBolt={true}
              onClick={handleResumeUpload}
            />

            <ProfileCreationCard
              icon={FileText}
              title="Fill Out Manually"
              description="Type in your experience and skills step-by-step for full control over your narrative."
              buttonText="Start Manual Entry"
              highlightColor="bg-[#FEE2E2] text-[#EA580C]"
              onClick={handleManualEntry}
            />
          </div>

          <div className="flex flex-col items-center gap-6">
            <button
              className="text-sm font-bold text-gray-400 hover:text-[#EA580C] transition-colors flex items-center gap-1"
              onClick={handleSkip}
            >
              Skip for now
              <ChevronsRight className="size-4" />
            </button>

            <div className="pt-8 border-t border-gray-200 w-full max-w-xs">
              <p className="text-xs text-[#663399] flex items-center justify-center gap-2">
                <Shield className="size-4" />
                Your data is encrypted and secure
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-xs text-gray-500">
        <p>© 2024 CareerDev Onboarding System. Built for your success.</p>
      </footer>
    </div>
  );
};

export default ProfileCreationMethod;
