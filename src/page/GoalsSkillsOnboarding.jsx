import React, { useState } from "react";
import {
  Briefcase,
  School,
  TrendingUp,
  X,
  Sparkles,
  CheckCircle,
  LogOut,
  MapPin,
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
            Exit Signup
          </button>
        </div>
      </div>
    </header>
  );
};

// Goal Card Component
const GoalCard = ({ icon: Icon, title, description, isSelected, onClick }) => {
  return (
    <div
      className={`relative group cursor-pointer border-2 ${isSelected ? "border-[#4F46E5] bg-[#EEF2FF]" : "border-gray-200 hover:border-[#4F46E5]/50"} p-6 rounded-xl transition-all`}
      onClick={onClick}
    >
      {isSelected && (
        <div className="absolute top-3 right-3 text-[#4F46E5]">
          <CheckCircle className="size-5" />
        </div>
      )}
      <div
        className={`w-12 h-12 ${isSelected ? "bg-[#4F46E5]/20" : "bg-gray-100 group-hover:bg-[#4F46E5]/10"} rounded-lg flex items-center justify-center mb-4 transition-colors`}
      >
        <Icon
          className={`size-6 ${isSelected ? "text-[#4F46E5]" : "text-gray-500 group-hover:text-[#4F46E5]"}`}
        />
      </div>
      <p className="font-bold text-lg mb-1 text-gray-900">{title}</p>
      <p className="text-sm text-gray-500 leading-snug">{description}</p>
    </div>
  );
};

// Skill Tag Component
const SkillTag = ({ skill, onRemove }) => {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EEF2FF] text-[#4F46E5] text-sm font-semibold rounded-full">
      {skill}
      <X className="size-3 cursor-pointer" onClick={() => onRemove(skill)} />
    </span>
  );
};

// Suggested Skill Button
const SuggestedSkill = ({ skill, onClick }) => {
  return (
    <button
      className="px-3 py-1.5 border border-gray-200 hover:bg-[#EEF2FF] rounded-full text-xs font-medium text-gray-600 hover:text-[#4F46E5] transition-colors"
      onClick={() => onClick(skill)}
    >
      + {skill}
    </button>
  );
};

// Work Environment Button
const WorkEnvButton = ({ label, isSelected, onClick }) => {
  return (
    <button
      className={`flex-1 py-3 px-4 rounded-lg border-2 ${isSelected ? "border-[#4F46E5] bg-[#EEF2FF] text-[#4F46E5] font-bold" : "border-gray-200 hover:bg-gray-50 text-gray-600 font-medium"} text-sm transition-all`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// Main Component
const GoalsSkillsOnboarding = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState("find-job");
  const [skills, setSkills] = useState([
    "UI Design",
    "Product Management",
    "Data Analysis",
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [selectedEnv, setSelectedEnv] = useState("remote");
  const [preferredLocation, setPreferredLocation] =
    useState("San Francisco, CA");
  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

  const suggestedSkills = [
    "React",
    "Figma",
    "Agile",
    "AWS",
    "Python",
    "Leadership",
  ];

  const handleAddSkill = (skill) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      if (skill.includes("+ ")) {
        setNewSkill("");
      }
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newSkill.trim()) {
      handleAddSkill(newSkill.trim());
      setNewSkill("");
    }
  };

  const handleCreateAccount = () => {
    navigate("/roadmap");
    console.log("Creating account with:", {
      selectedGoal,
      skills,
      selectedEnv,
      preferredLocation,
      agreedToTerms,
      subscribeNewsletter,
    });
    // Handle account creation logic
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] transition-colors duration-300">
      <Header />

      <main className="max-w-[800px] mx-auto py-12 px-6">
        {/* Progress Section */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
                Onboarding
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                Step 2 of 2: Goals & Skills
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-700">85% Complete</p>
          </div>
          <div className="h-3 w-full bg-[#EEF2FF] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4F46E5] rounded-full transition-all duration-1000"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-[#4F46E5] flex items-center gap-1">
            <Sparkles className="size-4" />
            You're almost there! Just a few more details.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Primary Goals */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-1 text-gray-900">
                Section 3: Primary Goals
              </h2>
              <p className="text-[#4F46E5]">
                What is your main objective on this platform?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GoalCard
                icon={Briefcase}
                title="Find a Job"
                description="Get matched with top global employers"
                isSelected={selectedGoal === "find-job"}
                onClick={() => setSelectedGoal("find-job")}
              />
              <GoalCard
                icon={School}
                title="Learn Skills"
                description="Upskill with industry-curated courses"
                isSelected={selectedGoal === "learn-skills"}
                onClick={() => setSelectedGoal("learn-skills")}
              />
              <GoalCard
                icon={TrendingUp}
                title="Career Pivot"
                description="Transition to a brand new industry"
                isSelected={selectedGoal === "career-pivot"}
                onClick={() => setSelectedGoal("career-pivot")}
              />
            </div>
          </section>

          {/* Section 2: Skills & Interests */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-1 text-gray-900">
                Section 4: Skills & Interests
              </h2>
              <p className="text-[#4F46E5]">
                Add keywords that highlight your professional expertise.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill) => (
                  <SkillTag
                    key={skill}
                    skill={skill}
                    onRemove={handleRemoveSkill}
                  />
                ))}
                <input
                  className="flex-1 min-w-[200px] border-none focus:ring-0 bg-transparent text-sm p-1.5 text-gray-900 placeholder-gray-400"
                  placeholder="Add a skill (e.g. Python, Leadership)"
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  Suggested for you
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedSkills.map((skill) => (
                    <SuggestedSkill
                      key={skill}
                      skill={skill}
                      onClick={handleAddSkill}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Preferences */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-1 text-gray-900">
                Section 5: Preferences
              </h2>
              <p className="text-[#4F46E5]">
                Tell us where and how you prefer to work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-3 text-gray-900">
                  Work Environment
                </label>
                <div className="flex gap-2">
                  <WorkEnvButton
                    label="Remote"
                    isSelected={selectedEnv === "remote"}
                    onClick={() => setSelectedEnv("remote")}
                  />
                  <WorkEnvButton
                    label="Hybrid"
                    isSelected={selectedEnv === "hybrid"}
                    onClick={() => setSelectedEnv("hybrid")}
                  />
                  <WorkEnvButton
                    label="On-site"
                    isSelected={selectedEnv === "on-site"}
                    onClick={() => setSelectedEnv("on-site")}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-3 text-gray-900">
                  Preferred Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                  <input
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-[#4F46E5] focus:border-[#4F46E5] transition-all text-gray-900"
                    placeholder="City or Country"
                    type="text"
                    value={preferredLocation}
                    onChange={(e) => setPreferredLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Terms and Submit Section */}
          <section className="pt-6 border-t border-gray-200">
            <div className="mb-8 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="mt-1">
                  <input
                    className="rounded border-gray-300 text-[#4F46E5] focus:ring-[#4F46E5] h-5 w-5"
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                  />
                </div>
                <span className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{" "}
                  <a
                    className="text-[#4F46E5] font-bold hover:underline"
                    href="#"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    className="text-[#4F46E5] font-bold hover:underline"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                  . I understand how my data will be used to personalize my
                  career growth.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="mt-1">
                  <input
                    className="rounded border-gray-300 text-[#4F46E5] focus:ring-[#4F46E5] h-5 w-5"
                    type="checkbox"
                    checked={subscribeNewsletter}
                    onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                  />
                </div>
                <span className="text-sm text-gray-600 leading-relaxed">
                  Sign me up for the weekly "Career Insights" newsletter and
                  exclusive job alerts tailored to my profile.
                </span>
              </label>
            </div>
            <div className="flex flex-col gap-4">
              <button
                className="w-full bg-[#4F46E5] hover:bg-[#6366F1] text-white py-4 rounded-xl text-lg font-extrabold tracking-tight transition-all shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] active:scale-[0.98]"
                onClick={handleCreateAccount}
              >
                Create Account
              </button>
              <p className="text-center text-xs text-gray-400">
                By clicking "Create Account", you confirm you are at least 18
                years old.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>© 2024 CareerDev Onboarding System. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default GoalsSkillsOnboarding;
