import React, { useState } from "react";
import { Trash2, Plus, ChevronUp, ChevronDown } from "lucide-react";

const ExperienceSection = ({ formData, updateFormData, setActiveTab }) => {
  const [expandedCard, setExpandedCard] = useState(1); // Track which card is expanded

  const addExperience = () => {
    const newExperience = {
      id: formData.experience.length + 1,
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      achievements: "",
      tools: "",
    };
    updateFormData("experience", [...formData.experience, newExperience]);
    setExpandedCard(formData.experience.length + 1); // Auto-expand new card
  };

  const removeExperience = (id) => {
    if (formData.experience.length > 1) {
      const updated = formData.experience.filter((exp) => exp.id !== id);
      updateFormData("experience", updated);

      // If we removed the expanded card, expand the first card
      if (expandedCard === id) {
        setExpandedCard(updated[0]?.id || 1);
      }
    }
  };

  const updateExperience = (id, field, value) => {
    const updated = formData.experience.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp,
    );
    updateFormData("experience", updated);
  };

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-gray-900 text-2xl font-bold mb-2">
          Work Experience
        </h2>
        <p className="text-gray-500">
          Add your professional experience to verify your skills.
        </p>
      </div>

      <div className="space-y-4">
        {formData.experience.map((exp) => (
          <div
            key={exp.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm relative overflow-hidden transition-all duration-300 hover:border-gray-300"
            onClick={() => setExpandedCard(exp.id)}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#663399]"></div>

            {/* Header - Always visible */}
            <div
              className="flex items-center justify-between p-6 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand(exp.id);
              }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(exp.id);
                    }}
                  >
                    {expandedCard === exp.id ? (
                      <ChevronUp className="size-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="size-5 text-gray-500" />
                    )}
                  </button>
                  <div className="overflow-hidden">
                    <h3 className="text-lg font-bold text-gray-900 truncate">
                      {exp.jobTitle || "Untitled Position"}
                    </h3>
                    <p className="text-sm text-gray-600 truncate">
                      {exp.company || "No company specified"}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-500">
                        {exp.startDate || "Start date not set"}
                      </span>
                      {exp.endDate ? (
                        <>
                          <span className="text-gray-300">-</span>
                          <span className="text-xs text-gray-500">
                            {exp.endDate}
                          </span>
                        </>
                      ) : (
                        <span className="text-xs text-gray-500">Present</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-4">
                {formData.experience.length > 1 && (
                  <button
                    type="button"
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeExperience(exp.id);
                    }}
                    title="Remove this entry"
                  >
                    <Trash2 className="size-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Expandable Content */}
            {expandedCard === exp.id && (
              <div className="px-6 pb-6 border-t border-gray-100 pt-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Job Title
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
                      placeholder="e.g. Junior Web Developer"
                      type="text"
                      value={exp.jobTitle}
                      onChange={(e) =>
                        updateExperience(exp.id, "jobTitle", e.target.value)
                      }
                      onClick={(e) => e.stopPropagation()}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Company Name
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
                      placeholder="e.g. TechFlow Solutions"
                      type="text"
                      value={exp.company}
                      onChange={(e) =>
                        updateExperience(exp.id, "company", e.target.value)
                      }
                      onClick={(e) => e.stopPropagation()}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Start Date
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
                      type="month"
                      value={exp.startDate}
                      onChange={(e) =>
                        updateExperience(exp.id, "startDate", e.target.value)
                      }
                      onClick={(e) => e.stopPropagation()}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      End Date
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30"
                      type="month"
                      placeholder="Present"
                      value={exp.endDate}
                      onChange={(e) =>
                        updateExperience(exp.id, "endDate", e.target.value)
                      }
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Description
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30 resize-none"
                      placeholder="Describe your role and responsibilities..."
                      rows="3"
                      value={exp.description}
                      onChange={(e) =>
                        updateExperience(exp.id, "description", e.target.value)
                      }
                      onClick={(e) => e.stopPropagation()}
                      required
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Key Achievements
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30 resize-none"
                      placeholder="List your key achievements, one per line..."
                      rows="3"
                      value={exp.achievements}
                      onChange={(e) =>
                        updateExperience(exp.id, "achievements", e.target.value)
                      }
                      onClick={(e) => e.stopPropagation()}
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Tools, Methodologies & Equipment
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-[#663399] focus:border-[#663399] bg-[#f6f8f6]/30 resize-none"
                      placeholder="Mention React, Agile, Figma, etc. and how you used them..."
                      rows="3"
                      value={exp.tools}
                      onChange={(e) =>
                        updateExperience(exp.id, "tools", e.target.value)
                      }
                      onClick={(e) => e.stopPropagation()}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        <div
          className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-[#663399]/50 transition-all"
          onClick={addExperience}
        >
          <div className="w-12 h-12 bg-gray-50 group-hover:bg-[#663399]/10 rounded-full flex items-center justify-center mb-3 transition-colors">
            <Plus className="text-gray-400 group-hover:text-[#663399] size-6" />
          </div>
          <p className="text-sm font-bold text-gray-500 group-hover:text-gray-700">
            Add another position
          </p>
          <p className="text-xs text-gray-400">
            Internships, freelance, or previous full-time roles
          </p>
        </div>
      </div>

      <div className="flex gap-4 pt-6 border-t border-gray-200">
        <button
          onClick={() => setActiveTab(2)}
          className="flex-1 px-8 py-4 rounded-xl font-bold border-2 border-gray-200 hover:bg-gray-50 transition-all text-sm"
          type="button"
        >
          Back
        </button>
        <button
          onClick={() => setActiveTab(4)}
          className="flex-1 px-8 py-4 rounded-xl bg-[#663399] text-white font-extrabold text-sm shadow-lg shadow-[#663399]/20 hover:brightness-95 transition-all"
          type="button"
        >
          Continue to Skills & Interests
        </button>
      </div>
    </section>
  );
};

export default ExperienceSection;
