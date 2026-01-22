import React from "react";
import {
  CloudUpload,
  ArrowLeft,
  Sparkles,
  Lightbulb,
  FileText,
  Key,
  FileType,
  Shield,
  ChevronRight,
  X,
  Upload,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Header Component
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#4F46E5] p-1.5 rounded-lg">
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
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#4F46E5] transition-colors"
              href="#"
            >
              How it Works
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#4F46E5] transition-colors"
              href="#"
            >
              Resources
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#4F46E5] transition-colors"
              href="#"
            >
              Support
            </a>
          </nav>
          <button className="bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] px-5 py-2 rounded-lg text-sm font-bold transition-all">
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

// Tip Card Component
const TipCard = ({ icon: Icon, title, description, colorClass }) => {
  return (
    <div className="flex gap-4">
      <div
        className={`flex-shrink-0 w-10 h-10 ${colorClass} rounded-lg flex items-center justify-center`}
      >
        <Icon className="size-5" />
      </div>
      <div>
        <h4 className="font-bold text-sm mb-1 text-gray-900">{title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Main Component
const UploadResume = () => {
  const [isDragging, setIsDragging] = React.useState(false);
  const navigate = useNavigate();

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length) {
      console.log("File dropped:", files[0]);
      // Handle file upload logic here
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("File selected:", file);
      // Handle file upload logic here
    }
  };

  const handleScanAndContinue = () => {
    navigate("/goal-skills-onboarding");
  };

  const handleGoBack = () => {
    console.log("Going back...");
    // Handle back navigation
  };

  const handleSkipToManual = () => {
    console.log("Skipping to manual entry...");
    // Handle skip to manual entry
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-gray-900 flex flex-col">
      <Header />

      <main className="flex-grow max-w-[1100px] mx-auto w-full py-12 px-6 flex flex-col">
        {/* Progress Section */}
        <div className="mb-10 max-w-[800px]">
          <div className="flex justify-between items-end mb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
                Onboarding
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                Step 2 of 4: Profile Setup
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-700">40% Complete</p>
          </div>
          <div className="h-2.5 w-full bg-[#EEF2FF] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4F46E5] rounded-full transition-all duration-1000"
              style={{ width: "40%" }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Upload Area */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-gray-900">
                Upload Your Resume
              </h1>
              <p className="text-[#4F46E5] text-lg">
                We'll analyze your experience to personalize your roadmap.
              </p>
            </div>

            {/* Upload Area */}
            <div
              className={`bg-white border-2 border-dashed ${
                isDragging ? "border-[#4F46E5] bg-[#EEF2FF]" : "border-gray-300"
              } rounded-2xl p-12 flex flex-col items-center justify-center min-h-[400px] transition-all hover:bg-[#EEF2FF]/50 group cursor-pointer`}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput").click()}
            >
              <div className="w-20 h-20 bg-[#EEF2FF] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CloudUpload className="text-[#4F46E5] size-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Drag and drop your file here
              </h3>
              <p className="text-gray-500 mb-8">Limit 10MB per file</p>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileInput}
              />
              <button className="bg-[#4F46E5] hover:bg-[#6366F1] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg">
                Or browse files
              </button>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Supported Formats:
                </span>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-bold text-gray-700">
                    PDF
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-bold text-gray-700">
                    DOCX
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-200">
              <button
                className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                onClick={handleGoBack}
              >
                <ArrowLeft className="size-4" />
                Back
              </button>
              <button
                className="bg-[#4F46E5] text-white px-8 py-4 rounded-xl text-lg font-extrabold tracking-tight hover:bg-[#6366F1] transition-all active:scale-[0.98] flex items-center gap-3"
                onClick={handleScanAndContinue}
              >
                <Sparkles className="size-5" />
                Scan & Continue
              </button>
            </div>
          </div>

          {/* Right Column - Tips Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="text-[#EA580C] size-5" />
                <h2 className="text-xl font-bold text-gray-900">Resume Tips</h2>
              </div>

              <div className="space-y-6">
                <TipCard
                  icon={FileText}
                  title="Keep it concise"
                  description="Aim for under 2 pages to keep recruiters engaged with your best highlights."
                  colorClass="bg-[#FEE2E2] text-[#EA580C]"
                />

                <TipCard
                  icon={Key}
                  title="Use keywords"
                  description="Include industry-specific terms so our AI can accurately match you to roles."
                  colorClass="bg-[#EEF2FF] text-[#4F46E5]"
                />

                <TipCard
                  icon={FileType}
                  title="PDF is preferred"
                  description="PDF files preserve your formatting across all devices and platforms."
                  colorClass="bg-blue-50 text-blue-500"
                />

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="bg-[#EEF2FF] rounded-xl p-4 border border-[#4F46E5]/20">
                    <p className="text-xs font-medium text-[#4F46E5] mb-2 flex items-center gap-1">
                      <Shield className="size-3" />
                      AI-Ready
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      Don't have a resume?
                    </p>
                    <p className="text-xs text-gray-500 mt-1 mb-3">
                      You can manually fill your details in the next step.
                    </p>
                    <button
                      className="text-xs font-bold text-[#4F46E5] hover:underline flex items-center gap-1"
                      onClick={handleSkipToManual}
                    >
                      Skip and fill manually <ChevronRight className="size-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-auto pt-16 text-center text-sm text-gray-500 pb-8">
          <p>© 2024 CareerDev Onboarding System. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default UploadResume;
