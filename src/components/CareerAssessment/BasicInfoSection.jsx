import React from "react";
import { School, Calendar, Globe, Linkedin, Github, Link } from "lucide-react";

const BasicInfoSection = ({ formData, updateFormData, setActiveTab }) => {
  const employmentStatusOptions = [
    "Fresh Graduate",
    "Unemployed",
    "Employed",
    "Freelancer",
  ];

  const relocationOptions = ["Yes", "No", "Remote Only"];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-gray-900 text-2xl font-bold mb-2">
          Basic Information
        </h2>
        <p className="text-gray-500">
          Tell us about yourself to help us personalize your experience.
        </p>
      </div>

      <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Full Name</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
              placeholder="e.g. Alex Rivera"
              type="text"
              value={formData.fullName}
              onChange={(e) => updateFormData("fullName", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Age</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
              placeholder="24"
              type="number"
              value={formData.age}
              onChange={(e) => updateFormData("age", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              Course / Degree
            </label>
            <div className="relative">
              <School className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
              <input
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
                placeholder="B.S. in Computer Science"
                type="text"
                value={formData.course}
                onChange={(e) => updateFormData("course", e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              Year Graduated
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
              <input
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
                placeholder="2023"
                type="number"
                value={formData.yearGraduated}
                onChange={(e) =>
                  updateFormData("yearGraduated", e.target.value)
                }
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">City</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
              placeholder="e.g. San Francisco"
              type="text"
              value={formData.city}
              onChange={(e) => updateFormData("city", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Province</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
              placeholder="e.g. California"
              type="text"
              value={formData.province}
              onChange={(e) => updateFormData("province", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Region</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
              placeholder="e.g. West Coast"
              type="text"
              value={formData.region}
              onChange={(e) => updateFormData("region", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="pt-4 p-4 bg-[#f6f8f6]/50 rounded-xl border border-dashed border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-gray-400 size-5" />
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Willingness to Relocate
                </p>
                <p className="text-xs text-gray-500">
                  Are you open to moving for the right role?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relocationOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`px-4 py-3 rounded-xl border-2 text-sm font-medium flex flex-col items-center justify-center ${
                    formData.willingnessToRelocate === option.toLowerCase()
                      ? "border-[#663399] bg-[#EEF2FF] text-[#663399]"
                      : "border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() =>
                    updateFormData(
                      "willingnessToRelocate",
                      option.toLowerCase(),
                    )
                  }
                >
                  <span className="font-medium">{option}</span>
                  {option === "Remote Only" && (
                    <span className="text-xs text-gray-500 mt-1">
                      No relocation needed
                    </span>
                  )}
                  {option === "Yes" && (
                    <span className="text-xs text-gray-500 mt-1">
                      Open to move
                    </span>
                  )}
                  {option === "No" && (
                    <span className="text-xs text-gray-500 mt-1">
                      Not willing to move
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              Current Employment Status
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {employmentStatusOptions.map((status) => (
                <button
                  key={status}
                  type="button"
                  className={`px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                    formData.employmentStatus === status.toLowerCase()
                      ? "border-[#663399] bg-[#EEF2FF] text-[#663399] shadow-sm"
                      : "border-gray-200/20 bg-transparent text-gray-500/50 hover:border-gray-300/40 hover:text-gray-600 hover:bg-gray-50/20"
                  }`}
                  onClick={() =>
                    updateFormData("employmentStatus", status.toLowerCase())
                  }
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-bold text-gray-700">
            Linked Accounts
          </label>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Linkedin className="text-[#0077B5] size-5" />
              <input
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
                placeholder="LinkedIn Profile URL"
                type="url"
                value={formData.linkedin}
                onChange={(e) => updateFormData("linkedin", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <Github className="text-gray-900 size-5" />
              <input
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
                placeholder="GitHub Profile URL"
                type="url"
                value={formData.github}
                onChange={(e) => updateFormData("github", e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <Link className="text-[#663399] size-5" />
              <input
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
                placeholder="Portfolio URL"
                type="url"
                value={formData.portfolio}
                onChange={(e) => updateFormData("portfolio", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-6 border-t border-gray-200">
          <button
            onClick={() => setActiveTab(1)}
            className="flex-1 px-8 py-4 rounded-xl font-bold border-2 border-gray-200 hover:bg-gray-50 transition-all text-sm"
            type="button"
          >
            Back
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className="flex-1 px-8 py-4 rounded-xl bg-[#663399] text-white font-extrabold text-sm shadow-lg shadow-[#663399]/20 hover:brightness-95 transition-all"
            type="button"
          >
            Continue to Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default BasicInfoSection;
