import React, { useState } from "react";
import {
  Briefcase,
  HelpCircle,
  Shield,
  KeyRound,
  Mail,
  UserSearch,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

// Service
import careerService from "../../service/careerService";

// Import the separated components
import AccountSection from "../../components/CareerAssessment/AccountSection";
import BasicInfoSection from "../../components/CareerAssessment/BasicInfoSection";
import ExperienceSection from "../../components/CareerAssessment/ExperienceSection";
import SkillsInterestsSection from "../../components/CareerAssessment/SkillInterestsSection";

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative flex-col justify-center p-16 bg-gradient-to-br from-[#663399] via-[#6366F1] to-[#818CF8] overflow-hidden h-full">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#EA580C] blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#EEF2FF] blur-[100px]"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #EA580C 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <img src={logo} alt="Logo" className="h-8 w-8" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Dovetail
          </span>
        </div>

        <h1 className="text-5xl font-black text-white leading-[1.1] mb-6">
          Elevate your <br />
          <span className="text-[#EEF2FF]">professional trajectory.</span>
        </h1>

        <p className="text-white/90 text-lg max-w-md mb-12 leading-relaxed">
          Join over 50,000 professionals who use Dovetail to map their skills,
          discover opportunities, and reach the next level.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
            <div className="text-white font-bold text-2xl mb-1">94%</div>
            <div className="text-white/80 text-sm">Placement Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
            <div className="text-[#EA580C] font-bold text-2xl mb-1">12k+</div>
            <div className="text-white/80 text-sm">Active Mentors</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-16 right-16 z-10">
        <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <div className="h-10 w-10 rounded-full bg-white flex-shrink-0 overflow-hidden">
            <img
              alt="Portrait of a successful female professional"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfUPZxPg_snxv-mPFyWrLZEK5HiD9nW0oarhVtoYk_5pLEWF8Ulxy2jjwZ9FHuKovUK_N7hw1sLmTpKD0C68rgw85PtrSDH-jWJwR0MDTPT0Toq8iRSyWc5GS6mcNG3omjBoE9oc4Jx7qaeZTWVmT9l9GLcV6kdi3DCEulqMINMpy5pJ8LFjNgcyTfPhqZBYsUYcJ47TM3naBaIIeRJPE5blk9V0Qn2iSon2NluS1d89mm1oeZfJiYEnc-A5fNeHr9dod-h6cupJA"
            />
          </div>
          <p className="text-sm text-white/90 italic">
            "Dovetail gave me the roadmap I needed to transition from Marketing
            to Product Design in just 6 months."
          </p>
        </div>
      </div>
    </div>
  );
};

// Mobile Header Component
const MobileHeader = () => {
  return (
    <header className="lg:hidden flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-white">
      <div className="lg:hidden flex items-center gap-2">
        <div className="size-6 text-[#663399]">
          <Briefcase className="size-full" />
        </div>
        <span className="font-bold text-gray-900">Dovetail</span>
      </div>
      <div className="flex-1 flex justify-end items-center gap-4">
        <span className="text-sm text-gray-700 hidden sm:inline">
          Already have an account?
        </span>
        <a
          className="text-sm font-semibold text-[#663399] hover:text-[#6366F1] transition-colors"
          href="#"
        >
          Log in
        </a>
      </div>
    </header>
  );
};

// Progress Bar Component
const ProgressBar = ({ progress, step }) => {
  return (
    <div className="flex flex-col gap-2 mb-10">
      <div className="flex justify-between items-center">
        <p className="text-gray-800 text-sm font-medium">
          Step {step} of 4:{" "}
          {step === 1
            ? "Account Setup"
            : step === 2
              ? "Basic Information"
              : step === 3
                ? "Experience"
                : "Skills & Interests"}
        </p>
        <p className="text-[#663399] text-sm font-bold">{progress}%</p>
      </div>
      <div className="h-2 w-full rounded-full bg-[#EEF2FF]">
        <div
          className="h-full rounded-full bg-[#663399] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

// Tab Navigation Component
const TabNavigation = ({ activeTab, setActiveTab, progress }) => {
  const tabs = [
    { id: 1, label: "Account", icon: Mail },
    { id: 2, label: "Basic Info", icon: UserSearch },
    { id: 3, label: "Experience", icon: Briefcase },
    { id: 4, label: "Skills", icon: Target },
  ];

  return (
    <div className="flex justify-between items-center mb-8 border-b border-gray-200">
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-3 text-sm font-medium flex items-center gap-2 ${activeTab === tab.id ? "text-[#663399] border-b-2 border-[#663399]" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <tab.icon className="size-4" />
            {tab.label}
            {activeTab === tab.id && (
              <div className="ml-2 w-2 h-2 rounded-full bg-[#663399]" />
            )}
          </button>
        ))}
      </div>
      <div className="text-sm font-bold text-[#663399]">
        {progress}% Complete
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="px-8 py-6 border-t border-gray-200 bg-[#FDFCFB]">
      <div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-gray-700 uppercase tracking-widest">
        <a
          className="hover:text-[#663399] transition-colors flex items-center gap-1"
          href="#"
        >
          <HelpCircle className="size-3" /> Help Center
        </a>
        <a
          className="hover:text-[#663399] transition-colors flex items-center gap-1"
          href="#"
        >
          <Shield className="size-3" /> Privacy
        </a>
        <a
          className="hover:text-[#663399] transition-colors flex items-center gap-1"
          href="#"
        >
          <KeyRound className="size-3" /> Security
        </a>
        <span className="text-gray-600">© 2024 Dovetail Inc.</span>
      </div>
    </footer>
  );
};

// Main App Component
const DovetailSignup = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [formData, setFormData] = useState({
    // Account
    email: "",
    password: "",
    phone: "",
    careerStatus: "job-seeker",

    // Basic Information
    fullName: "",
    age: "",
    course: "",
    yearGraduated: "",
    city: "",
    province: "",
    region: "",
    willingnessToRelocate: "no",
    employmentStatus: "fresh-graduate",
    linkedin: "",
    github: "",
    portfolio: "",

    // Experience
    experience: [
      {
        id: 1,
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        achievements: "",
        tools: "",
      },
    ],

    // Skills & Interests
    technicalSkills: [{ name: "", proficiency: "beginner", years: "" }],
    nonTechnicalSkills: [{ name: "", context: "" }],
    preferredIndustries: [],
    targetRole: "",
    dreamRole: "",
    learningAppetite: [],
    agreedToTerms: false,
    subscribeNewsletter: false,
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getProgress = () => {
    switch (activeTab) {
      case 1:
        return 25;
      case 2:
        return 50;
      case 3:
        return 75;
      case 4:
        return 100;
      default:
        return 0;
    }
  };

  // Function to format form data for API
  const formatFormDataForAPI = () => {
    // Combine location fields
    const location =
      `${formData.city}, ${formData.province}, ${formData.region}`
        .replace(/, ,/g, ",")
        .trim();

    // Map employment status to API format
    const employmentStatusMap = {
      "fresh-graduate": "Fresh Graduate",
      unemployed: "Unemployed",
      employed: "Employed",
      freelancer: "Freelancer",
    };

    // Calculate duration from start/end dates
    const parseDuration = (startDate, endDate) => {
      if (!startDate || !endDate) return "0 months";
      const start = new Date(startDate);
      const end = new Date(endDate);
      const months =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());
      return months <= 0 ? "0 months" : `${months} months`;
    };

    // Format experience array
    const formattedExperience = formData.experience.map((exp) => ({
      job_title: exp.jobTitle,
      company: exp.company,
      duration: parseDuration(exp.startDate, exp.endDate),
      description: exp.description,
      key_achievements: exp.achievements
        ? exp.achievements.split("\n").filter((a) => a.trim())
        : [],
      tools_methodologies: exp.tools
        ? exp.tools
            .split(",")
            .map((t) => t.trim())
            .filter((t) => t)
        : [],
    }));

    // Format technical skills
    const formattedTechnicalSkills = formData.technicalSkills
      .filter((skill) => skill.name.trim())
      .map((skill) => ({
        name: skill.name,
        proficiency:
          skill.proficiency.charAt(0).toUpperCase() +
          skill.proficiency.slice(1),
        years: parseFloat(skill.years) || 0,
      }));

    // Format non-technical skills
    const formattedNonTechnicalSkills = formData.nonTechnicalSkills
      .filter((skill) => skill.name.trim())
      .map((skill) => ({
        name: skill.name,
        context: skill.context || "",
      }));

    return {
      basic_info: {
        full_name: formData.fullName,
        age: parseInt(formData.age) || 0,
        course: formData.course,
        year_graduated: formData.yearGraduated,
        location: location,
        willingness_to_relocate:
          formData.willingnessToRelocate === "yes" ? "Yes" : "No",
        employment_status:
          employmentStatusMap[formData.employmentStatus] ||
          formData.employmentStatus,
        linkedin: formData.linkedin,
        github: formData.github,
        portfolio: formData.portfolio,
      },
      experience: formattedExperience,
      skills: {
        technical: formattedTechnicalSkills,
        non_technical: formattedNonTechnicalSkills,
      },
      interests: {
        preferred_industries: formData.preferredIndustries,
        target_roles: formData.targetRole ? [formData.targetRole] : [],
        dream_role: formData.dreamRole,
        learning_appetite: formData.learningAppetite,
      },
    };
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate terms agreement
    if (!formData.agreedToTerms) {
      setSubmitError("You must agree to the terms and conditions");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Format data for API
      const apiFormData = formatFormDataForAPI();
      console.log("Sending to API:", apiFormData);

      // Call the career service
      const response = await careerService.analyzeCareer(apiFormData);

      if (response.success) {
        console.log("Career analysis successful:", response);

        // Store the result for the next page
        localStorage.setItem("careerAnalysisResult", JSON.stringify(response));

        // Navigate to results page
        navigate("/career-tree", { state: { analysisResult: response } });
      } else {
        setSubmitError(response.error || "Analysis failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error.message || "Failed to submit form. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to test API health
  const testAPIHealth = async () => {
    try {
      const health = await careerService.checkHealth();
      console.log("API Health:", health);
      alert(`API is ${health.status}. Jobs loaded: ${health.jobs_loaded}`);
    } catch (error) {
      console.error("API health check failed:", error);
      alert(
        "API is not reachable. Make sure your Flask server is running on localhost:5000",
      );
    }
  };

  // Function to load sample form data
  const loadSampleData = async () => {
    try {
      const samples = await careerService.getSampleForms();
      const unemployedSample = samples.unemployed_sample;

      // Map the sample data to your form structure
      setFormData((prev) => ({
        ...prev,
        fullName: "Juan Dela Cruz",
        age: "24",
        course: "Computer Science",
        yearGraduated: "2023",
        city: "Manila",
        province: "Metro Manila",
        region: "NCR",
        willingnessToRelocate: "yes",
        employmentStatus: "fresh-graduate",
        technicalSkills: [
          { name: "Python", proficiency: "intermediate", years: "1" },
        ],
        targetRole: unemployedSample.interests.target_roles[0] || "",
        preferredIndustries:
          unemployedSample.interests.preferred_industries || [],
      }));

      console.log("Loaded sample data");
      alert("Sample data loaded successfully!");
    } catch (error) {
      console.error("Error loading sample:", error);
      alert("Failed to load sample data");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Hero Section - Fixed on desktop */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-5/12 xl:w-1/2">
        <HeroSection />
      </div>

      {/* Form Content - Scrollable */}
      <div className="w-full lg:w-7/12 xl:w-1/2 lg:ml-auto bg-white">
        <div className="flex flex-col min-h-screen">
          <MobileHeader />

          <div className="flex-1 overflow-y-auto">
            <main className="py-8 px-6 sm:px-8 md:px-12 bg-[#FDFCFB]">
              <div className="max-w-[800px] mx-auto">
                {/* API Test Button */}
                <div className="mb-4 flex gap-2">
                  <button
                    type="button"
                    onClick={testAPIHealth}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                  >
                    Test API Connection
                  </button>
                  <button
                    type="button"
                    onClick={loadSampleData}
                    className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200"
                  >
                    Load Sample Data
                  </button>
                </div>

                <div className="mb-8">
                  <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight mb-2">
                    {activeTab === 1
                      ? "Join Dovetail"
                      : activeTab === 2
                        ? "Basic Information"
                        : activeTab === 3
                          ? "Work Experience"
                          : "Skills & Interests"}
                  </h1>
                  <p className="text-gray-500">
                    {activeTab === 1
                      ? "Create your account to start your career journey."
                      : activeTab === 2
                        ? "Tell us about yourself to personalize your experience."
                        : activeTab === 3
                          ? "Add your professional experience to verify your skills."
                          : "Tell us about your skills and career aspirations."}
                  </p>
                </div>

                <TabNavigation
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  progress={getProgress()}
                />

                <ProgressBar progress={getProgress()} step={activeTab} />

                {/* Error Message */}
                {submitError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded">
                    {submitError}
                  </div>
                )}

                <form className="space-y-8" onSubmit={handleFormSubmit}>
                  {activeTab === 1 && (
                    <AccountSection
                      formData={formData}
                      updateFormData={updateFormData}
                      setActiveTab={setActiveTab}
                    />
                  )}

                  {activeTab === 2 && (
                    <BasicInfoSection
                      formData={formData}
                      updateFormData={updateFormData}
                      setActiveTab={setActiveTab}
                    />
                  )}

                  {activeTab === 3 && (
                    <ExperienceSection
                      formData={formData}
                      updateFormData={updateFormData}
                      setActiveTab={setActiveTab}
                    />
                  )}

                  {activeTab === 4 && (
                    <SkillsInterestsSection
                      formData={formData}
                      updateFormData={updateFormData}
                      setActiveTab={setActiveTab}
                      isSubmitting={isSubmitting}
                    />
                  )}
                </form>
              </div>
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DovetailSignup;
