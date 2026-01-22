import React, { useState } from "react";
import {
  Bell,
  Camera,
  CheckCircle,
  TrendingUp,
  Handshake,
  Download,
  Upload,
  Lightbulb,
  FileText,
  ChevronDown,
  Save,
  X,
} from "lucide-react";

// Skill Tag Component
const SkillTag = ({ skill, type }) => {
  return (
    <span
      className={`px-3 py-1 text-[11px] font-bold rounded-full ${
        type === "green"
          ? "bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20"
          : "bg-[#EA580C]/10 text-[#EA580C] border border-[#EA580C]/20"
      }`}
    >
      {skill}
    </span>
  );
};

// Profile Tab Component
const ProfileTab = ({ label, active, onClick }) => {
  return (
    <button
      className={`pb-4 text-sm font-medium transition-all ${
        active
          ? "font-bold text-[#4F46E5] border-b-2 border-[#4F46E5]"
          : "text-gray-500 hover:text-gray-700"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// Profile Stat Component
const ProfileStat = ({ icon: Icon, label, value, color }) => {
  return (
    <div className="flex items-center justify-between text-left">
      <div className="flex items-center gap-2">
        <Icon className={`size-4 ${color}`} />
        <span className="text-xs font-semibold text-gray-500">{label}</span>
      </div>
      <span className="text-xs font-bold">{value}</span>
    </div>
  );
};

// Main Component
const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("professional");
  const [careerStatus, setCareerStatus] = useState("Employed");
  const [primaryIndustry, setPrimaryIndustry] = useState(
    "Technology / Fintech",
  );
  const [bio, setBio] = useState(
    "Passionate Data Analyst transitioning into Data Engineering. Experienced in SQL, Python, and data visualization. Currently building robust ETL pipelines and mastering cloud infrastructure at ScaleUp Tech.",
  );

  const tabs = [
    { id: "professional", label: "Professional Info" },
    { id: "account", label: "Account Settings" },
    { id: "preferences", label: "Preferences" },
  ];

  const skills = [
    { skill: "Python", type: "green" },
    { skill: "SQL", type: "green" },
    { skill: "Apache Airflow", type: "orange" },
    { skill: "Tableau", type: "green" },
    { skill: "AWS S3", type: "orange" },
    { skill: "Pandas", type: "green" },
    { skill: "ETL Pipelines", type: "orange" },
    { skill: "Statistics", type: "green" },
  ];

  const careerStatusOptions = [
    "Employed",
    "Actively Looking",
    "Open to Offers",
    "Not Looking",
  ];

  const handleDownloadResume = () => {
    console.log("Downloading resume...");
    // Handle download logic
  };

  const handleUpdateResume = () => {
    console.log("Updating resume...");
    // Handle update logic
  };

  const handleSaveChanges = () => {
    console.log("Saving profile changes...", {
      careerStatus,
      primaryIndustry,
      bio,
    });
    // Handle save logic
  };

  const handleCancel = () => {
    console.log("Canceling changes...");
    // Reset form or navigate back
  };

  return (
    <div className="p-8 max-w-[1800px] mx-auto mr-64">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
            <div className="relative inline-block mb-4">
              <img
                alt="Alex Chen"
                className="w-32 h-32 rounded-full border-4 border-[#4F46E5]/20 p-1 mx-auto bg-gray-50"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCICyRybiBDgH1ZAXGhgBdrCl4TNdwHQfP1_YeHq-CGgKZ_Yu2rRa05Wrarw6BEqwHi0U3K-SIx4FvAKlOQfh4xdoXs0WSTeTC0VqA8UlGmjCw2cNT5OLk6anUQrlHzQ7J2EOIUAbawYOdrZrPXzV7QaeDdz1NWzG6f2Fd1kWT0qiAANYEVSUTCt208ygf3Q0gWxN6_K6w6IRVpqR42dN-QMU7Pb09tZ7tjxT4OTLVu7yrqILO40rkKUWq-E4hFaBxI5sDf5vQgkPc"
              />
              <button className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-lg border border-gray-100 text-gray-500 hover:text-[#4F46E5]">
                <Camera className="size-4" />
              </button>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Alex Chen</h2>
            <p className="text-sm text-gray-500 mb-6">Data Analyst</p>

            <div className="space-y-4 pt-6 border-t border-gray-100">
              <ProfileStat
                icon={CheckCircle}
                label="Skills Verified"
                value="12"
                color="text-[#4F46E5]"
              />
              <ProfileStat
                icon={TrendingUp}
                label="Roadmap Progress"
                value="65%"
                color="text-[#EA580C]"
              />
              <ProfileStat
                icon={Handshake}
                label="Mentor Connections"
                value="3"
                color="text-blue-500"
              />
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-sm mb-4 text-gray-900">Skill Set</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <SkillTag key={index} skill={skill.skill} type={skill.type} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Edit Profile */}
        <div className="lg:col-span-3 space-y-6">
          {/* Tabs */}
          <div className="border-b border-gray-200 flex gap-8">
            {tabs.map((tab) => (
              <ProfileTab
                key={tab.id}
                label={tab.label}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>

          {/* Professional Info Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Form Column */}
              <div className="space-y-6">
                {/* Career Status */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Career Status
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-[#4F46E5] focus:border-[#4F46E5] outline-none appearance-none text-gray-900"
                      value={careerStatus}
                      onChange={(e) => setCareerStatus(e.target.value)}
                    >
                      {careerStatusOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-3 text-gray-400 pointer-events-none size-5" />
                  </div>
                </div>

                {/* Primary Industry */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Primary Industry
                  </label>
                  <input
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-[#4F46E5] focus:border-[#4F46E5] outline-none text-gray-900"
                    type="text"
                    value={primaryIndustry}
                    onChange={(e) => setPrimaryIndustry(e.target.value)}
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Bio
                  </label>
                  <textarea
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-[#4F46E5] focus:border-[#4F46E5] outline-none resize-none text-gray-900"
                    rows="4"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
              </div>

              {/* Right Column - Resume & Profile Strength */}
              <div className="space-y-6">
                {/* Resume */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Resume
                  </label>
                  <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-[#4F46E5] transition-colors group">
                    <div className="flex flex-col items-center">
                      <div className="bg-[#EEF2FF] p-4 rounded-full mb-3 group-hover:bg-[#E0E7FF] transition-colors">
                        <FileText className="text-[#4F46E5] size-8" />
                      </div>
                      <h4 className="text-sm font-bold mb-1 text-gray-900">
                        Alex_Chen_Resume_2024.pdf
                      </h4>
                      <p className="text-[10px] text-gray-400 mb-4">
                        PDF • 2.4MB • Updated 2 days ago
                      </p>
                      <div className="flex gap-2">
                        <button
                          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold hover:border-[#4F46E5] transition-all"
                          onClick={handleDownloadResume}
                        >
                          <Download className="size-3.5" />
                          Download
                        </button>
                        <button
                          className="flex items-center gap-2 px-4 py-2 bg-[#4F46E5] text-white rounded-lg text-xs font-bold hover:bg-[#6366F1] transition-all"
                          onClick={handleUpdateResume}
                        >
                          <Upload className="size-3.5" />
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Strength */}
                <div className="bg-[#FEE2E2] rounded-2xl p-6 border border-[#EA580C]/10">
                  <h4 className="text-sm font-bold text-[#EA580C] mb-2 flex items-center gap-2">
                    <Lightbulb className="size-4" />
                    Profile Strength
                  </h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-700">
                      Almost complete!
                    </span>
                    <span className="text-xs font-bold text-[#EA580C]">
                      85%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-[#EA580C]/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#EA580C]"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-3 italic">
                    Add a link to your GitHub to reach 100% and unlock premium
                    job matches.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex justify-end gap-4 border-t border-gray-100 pt-8">
              <button
                className="px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-700 transition-colors"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="px-8 py-2.5 bg-[#4F46E5] text-white rounded-xl text-sm font-bold hover:bg-[#6366F1] hover:shadow-lg hover:shadow-[#4F46E5]/20 transition-all"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-gray-200 text-center text-xs text-gray-400">
        © 2024 CareerDev Dashboard. Profile Management. All rights reserved.
      </footer>
    </div>
  );
};

export default UserProfile;
