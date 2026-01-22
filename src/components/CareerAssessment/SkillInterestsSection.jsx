import React, { useState } from "react";
import { Trash2, Plus, Lock, LockOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SkillsInterestsSection = ({ formData, updateFormData, setActiveTab }) => {
  const navigate = useNavigate();
  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");
  const [lockedSkills, setLockedSkills] = useState({}); // Track which skills are locked

  const proficiencyLevels = [
    "Beginner (Concept only)",
    "Intermediate (Can do with help)",
    "Advanced (Independent)",
    "Expert (Can teach others)",
  ];

  const learningAppetiteOptions = [
    "Certifications",
    "Workshops",
    "Mentorship",
    "Hackathons",
    "Online Courses",
    "Bootcamps",
  ];

  const addTechnicalSkill = () => {
    if (newSkill.trim()) {
      const skill = {
        name: newSkill.trim(),
        proficiency: "beginner",
        years: "",
      };
      updateFormData("technicalSkills", [...formData.technicalSkills, skill]);
      setNewSkill("");
    }
  };

  const removeTechnicalSkill = (index) => {
    const updated = formData.technicalSkills.filter((_, i) => i !== index);
    updateFormData("technicalSkills", updated);

    // Remove lock state for this index
    const newLockedSkills = { ...lockedSkills };
    Object.keys(newLockedSkills).forEach((key) => {
      if (parseInt(key) > index) {
        newLockedSkills[parseInt(key) - 1] = newLockedSkills[key];
        delete newLockedSkills[key];
      }
    });
    delete newLockedSkills[index];
    setLockedSkills(newLockedSkills);
  };

  const updateTechnicalSkill = (index, field, value) => {
    if (lockedSkills[index]) return; // Don't update if locked
    const updated = [...formData.technicalSkills];

    // CHANGED: Handle empty string for years field
    if (field === "years") {
      updated[index][field] = value === "" ? "" : parseInt(value) || 0;
    } else {
      updated[index][field] = value;
    }

    updateFormData("technicalSkills", updated);
  };

  const toggleSkillLock = (index) => {
    setLockedSkills((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const addNonTechnicalSkill = () => {
    if (newInterest.trim()) {
      const skill = {
        name: newInterest.trim(),
        context: "",
      };
      updateFormData("nonTechnicalSkills", [
        ...formData.nonTechnicalSkills,
        skill,
      ]);
      setNewInterest("");
    }
  };

  const removeNonTechnicalSkill = (index) => {
    const updated = formData.nonTechnicalSkills.filter((_, i) => i !== index);
    updateFormData("nonTechnicalSkills", updated);
  };

  const updateNonTechnicalSkill = (index, field, value) => {
    const updated = [...formData.nonTechnicalSkills];
    updated[index][field] = value;
    updateFormData("nonTechnicalSkills", updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complete form submitted:", formData);
    navigate("/career-tree");
  };

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-gray-900 text-2xl font-bold mb-2">
          Skills & Interests
        </h2>
        <p className="text-gray-500">
          Tell us about your skills and career aspirations.
        </p>
      </div>

      <div className="space-y-8">
        {/* Technical Skills */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">
              Technical Skills
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Lock className="size-4" />
              <span>Click lock icon to prevent accidental changes</span>
            </div>
          </div>

          <div className="space-y-4">
            {formData.technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center"
              >
                <div>
                  <input
                    className={`w-full px-4 py-3 rounded-xl border ${lockedSkills[index] ? "border-gray-300 bg-gray-50/50" : "border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"} transition-all`}
                    placeholder={
                      index === 0
                        ? "e.g., JavaScript, Python, React"
                        : "Add another skill"
                    }
                    value={skill.name}
                    onChange={(e) =>
                      updateTechnicalSkill(index, "name", e.target.value)
                    }
                    readOnly={lockedSkills[index]}
                    required
                  />
                </div>
                <div>
                  <select
                    className={`w-full px-4 py-3 rounded-xl border ${lockedSkills[index] ? "border-gray-300 bg-gray-50/50" : "border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"} transition-all`}
                    value={skill.proficiency}
                    onChange={(e) =>
                      updateTechnicalSkill(index, "proficiency", e.target.value)
                    }
                    disabled={lockedSkills[index]}
                  >
                    {proficiencyLevels.map((level) => (
                      <option
                        key={level}
                        value={level.toLowerCase().split(" ")[0]}
                      >
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    className={`w-full px-4 py-3 rounded-xl border ${lockedSkills[index] ? "border-gray-300 bg-gray-50/50" : "border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"} transition-all`}
                    type="number"
                    placeholder="Years of experience"
                    min="0"
                    max="50"
                    value={skill.years || ""} // CHANGED: Show empty string when value is falsy
                    onChange={(e) =>
                      updateTechnicalSkill(
                        index,
                        "years",
                        e.target.value, // CHANGED: Pass the raw value, not parsed
                      )
                    }
                    readOnly={lockedSkills[index]}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => toggleSkillLock(index)}
                    className={`p-2 rounded-lg transition-colors ${lockedSkills[index] ? "bg-[#663399]/10 text-[#663399] hover:bg-[#663399]/20" : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"}`}
                    title={
                      lockedSkills[index]
                        ? "Unlock to edit"
                        : "Lock to prevent changes"
                    }
                  >
                    {lockedSkills[index] ? (
                      <Lock className="size-4" />
                    ) : (
                      <LockOpen className="size-4" />
                    )}
                  </button>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => removeTechnicalSkill(index)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                    title="Remove this skill"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
              <input
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30 placeholder:text-gray-500"
                placeholder="Type a technical skill and press Enter (e.g., Java, React, Python, SQL)"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTechnicalSkill()}
              />
              <button
                type="button"
                onClick={addTechnicalSkill}
                className="px-6 py-3 bg-[#EA580C] text-white font-bold rounded-xl hover:bg-[#EA580C]/90 transition-all flex items-center gap-2"
              >
                <Plus className="size-5" />
                Add Skill
              </button>
            </div>
          </div>
        </div>

        {/* Non-Technical Skills */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Non-Technical Skills
          </h3>
          <div className="space-y-4">
            {formData.nonTechnicalSkills.map((skill, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
              >
                <div>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30 placeholder:text-gray-500"
                    placeholder={
                      index === 0
                        ? "e.g., Leadership, Communication, Teamwork"
                        : "Add another soft skill"
                    }
                    value={skill.name}
                    onChange={(e) =>
                      updateNonTechnicalSkill(index, "name", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
                    value={skill.context}
                    onChange={(e) =>
                      updateNonTechnicalSkill(index, "context", e.target.value)
                    }
                  >
                    <option value="">Where did you use this skill?</option>
                    {formData.experience.map((exp) => (
                      <option key={exp.id} value={exp.jobTitle}>
                        {exp.jobTitle || "Untitled Position"}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => removeNonTechnicalSkill(index)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                    title="Remove this skill"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
              <input
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30 placeholder:text-gray-500"
                placeholder="Type a non-technical skill (e.g., Problem-solving, Time Management)"
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addNonTechnicalSkill()}
              />
              <button
                type="button"
                onClick={addNonTechnicalSkill}
                className="px-6 py-3 bg-[#EA580C] text-white font-bold rounded-xl hover:bg-[#EA580C]/90 transition-all flex items-center gap-2"
              >
                <Plus className="size-5" />
                Add Skill
              </button>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              Preferred Industries
            </label>
            <p className="text-xs text-gray-500 mb-3">
              Select industries you're interested in working in
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Fintech",
                "Construction",
                "Education",
                "Healthcare",
                "Technology",
                "Marketing",
                "Manufacturing",
                "Retail",
                "Hospitality",
                "Government",
              ].map((industry) => (
                <button
                  key={industry}
                  type="button"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${formData.preferredIndustries.includes(industry) ? "bg-[#663399] text-white shadow-sm" : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"}`}
                  onClick={() => {
                    const updated = formData.preferredIndustries.includes(
                      industry,
                    )
                      ? formData.preferredIndustries.filter(
                          (i) => i !== industry,
                        )
                      : [...formData.preferredIndustries, industry];
                    updateFormData("preferredIndustries", updated);
                  }}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Target Role (Next job)
              </label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30 placeholder:text-gray-500"
                placeholder="What position are you aiming for next? e.g., Senior Developer, Project Manager"
                value={formData.targetRole}
                onChange={(e) => updateFormData("targetRole", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Dream Role (5-10 years)
              </label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30 placeholder:text-gray-500"
                placeholder="Your long-term career goal e.g., CTO, Director of Engineering, Founder"
                value={formData.dreamRole}
                onChange={(e) => updateFormData("dreamRole", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">
              Learning Appetite
            </label>
            <p className="text-xs text-gray-500 mb-3">
              How do you prefer to learn and grow professionally?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {learningAppetiteOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`px-4 py-3 rounded-xl border-2 text-sm font-medium flex items-center justify-center gap-2 transition-all ${formData.learningAppetite.includes(option) ? "border-[#663399] bg-[#EEF2FF] text-[#663399] shadow-sm" : "border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                  onClick={() => {
                    const updated = formData.learningAppetite.includes(option)
                      ? formData.learningAppetite.filter((i) => i !== option)
                      : [...formData.learningAppetite, option];
                    updateFormData("learningAppetite", updated);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 space-y-4">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 rounded border-gray-300 text-[#663399] focus:ring-[#663399] h-5 w-5"
              checked={formData.agreedToTerms}
              onChange={(e) =>
                updateFormData("agreedToTerms", e.target.checked)
              }
              required
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-700 leading-relaxed"
            >
              I agree to the{" "}
              <a className="text-[#663399] font-bold hover:underline" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="text-[#663399] font-bold hover:underline" href="#">
                Privacy Policy
              </a>
              . I understand how my data will be used to personalize my career
              growth.
            </label>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="newsletter"
              className="mt-1 rounded border-gray-300 text-[#663399] focus:ring-[#663399] h-5 w-5"
              checked={formData.subscribeNewsletter}
              onChange={(e) =>
                updateFormData("subscribeNewsletter", e.target.checked)
              }
            />
            <label
              htmlFor="newsletter"
              className="text-sm text-gray-700 leading-relaxed"
            >
              Sign me up for the weekly "Career Insights" newsletter and
              exclusive job alerts.
            </label>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab(3)}
              className="flex-1 px-8 py-4 rounded-xl font-bold border-2 border-gray-200 hover:bg-gray-50 transition-all text-sm"
              type="button"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-8 py-4 rounded-xl bg-[#663399] text-white font-extrabold text-sm shadow-lg shadow-[#663399]/20 hover:brightness-95 active:scale-[0.98] transition-all"
              type="submit"
            >
              Complete Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsInterestsSection;
