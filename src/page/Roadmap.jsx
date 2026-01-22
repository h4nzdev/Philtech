import React, { useState, useEffect } from "react";
import {
  Terminal,
  Cloud,
  Workflow,
  Rocket,
  TrendingUp,
  CheckCircle,
  Circle,
  School,
  PieChart,
  File,
  ListChecks,
} from "lucide-react";
import AIRoadmapGeneration from "../components/AIRoadmapGeneration"; // Import the splash screen component
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Roadmap Card Component
const RoadmapCard = ({ step, index, children }) => {
  return (
    <div className="relative flex gap-8 group">
      <div className="z-10 mt-1">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.4)] ${
            step.isActive
              ? "bg-[#EA580C]"
              : step.status === "locked"
                ? "bg-white border-2 border-[#EA580C]"
                : step.status === "future"
                  ? "bg-white border-2 border-[#EA580C]"
                  : "bg-gray-100 border-2 border-dashed border-gray-300"
          }`}
        >
          {step.icon}
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

// Skills Progress Component
const SkillsProgress = ({ skills }) => {
  return (
    <div className="space-y-2">
      {skills.map((skill, idx) => (
        <div key={idx}>
          <div className="flex items-center justify-between text-[11px]">
            <span>{skill.name}</span>
            <span
              className={`font-bold ${skill.match === "High Match" ? "text-[#4F46E5]" : "text-[#EA580C]"}`}
            >
              {skill.match}
            </span>
          </div>
          <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
            <div
              className={`h-full ${skill.match === "High Match" ? "bg-[#4F46E5]" : "bg-[#EA580C]"}`}
              style={{ width: `${skill.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Component
const Roadmap = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds, then show content
    const timer = setTimeout(() => {
      setShowSplash(false);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <AIRoadmapGeneration />;
  }

  const roadmapSteps = [
    {
      id: 1,
      title: "Step 1: Advanced SQL & Python for Engineering",
      subtitle: "Active Milestone",
      status: "active",
      progress: 42,
      description:
        "Mastering object-oriented programming in Python and window functions in SQL for complex data transformations.",
      icon: <Terminal className="size-6 text-white" />,
      color: "#4F46E5",
    },
    {
      id: 2,
      title: "Step 2: Cloud Data Warehousing (Snowflake/BigQuery)",
      subtitle: "Upcoming Milestone",
      status: "locked",
      description:
        "Designing scalable storage architectures and understanding compute separation in modern cloud environments.",
      icon: <Cloud className="size-6 text-[#EA580C]" />,
      color: "#EA580C",
    },
    {
      id: 3,
      title: "Step 3: ETL Pipeline Automation",
      subtitle: "Automation Phase",
      status: "future",
      description:
        "Learning orchestration tools like Airflow or dbt to automate data flows from raw sources to refined analytics layers.",
      icon: <Workflow className="size-6 text-[#EA580C]" />,
      color: "#EA580C",
    },
  ];

  const skillsData = [
    { name: "OOP & Modular Python", match: "High Match", progress: 85 },
    { name: "SQL Query Optimization", match: "Gap Identified", progress: 30 },
  ];

  const skillsMatch = [
    { name: "Analytical SQL (Existing)", status: "complete" },
    { name: "Data Modeling (Schema Design)", status: "pending" },
    { name: "Cloud Governance", status: "pending" },
    { name: "Report Optimization", status: "complete" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-gray-900 flex">
      {/* Main Content */}
      <main className="flex-1 ml-64">
        <div className="p-8 max-w-[1800px] mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-[#4F46E5] font-bold text-xs uppercase tracking-widest mb-2">
              <TrendingUp className="size-4" />
              Transition Path: Data Analyst → Data Engineer
            </div>
            <h2 className="text-3xl font-extrabold mb-3">
              Your Journey to Data Engineering
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Bridging the gap from data insights to robust data infrastructure.
              We've analyzed your current analyst profile to tailor these
              engineering milestones.
            </p>
          </div>

          {/* Roadmap Timeline */}
          <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-[24px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4F46E5] via-gray-200 to-gray-200 z-0"></div>

            {/* Step 1 */}
            <RoadmapCard step={roadmapSteps[0]} index={0}>
              <div className="bg-white border-2 border-[#4F46E5] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#4F46E5] mb-1 block">
                      Active Milestone
                    </span>
                    <h3 className="text-xl font-bold">
                      {roadmapSteps[0].title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold rounded-full border border-[#4F46E5]/20">
                    42% Progress
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  {roadmapSteps[0].description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-3">
                      Technical Skills Gap
                    </h4>
                    <SkillsProgress skills={skillsData} />
                  </div>
                  <div className="border-l border-gray-200 pl-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-3 text-center">
                      2nd Degree Analysis
                    </h4>
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="text-[#4F46E5] font-bold text-lg">
                          4y
                        </div>
                        <div className="text-[9px] uppercase text-gray-400">
                          Experience
                        </div>
                      </div>
                      <div className="h-8 w-px bg-gray-200"></div>
                      <div className="flex flex-col items-center">
                        <div className="text-[#EA580C] font-bold text-lg">
                          92%
                        </div>
                        <div className="text-[9px] uppercase text-gray-400">
                          Interests
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RoadmapCard>

            {/* Step 2 */}
            <RoadmapCard step={roadmapSteps[1]} index={1}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#EA580C] mb-1 block">
                      Upcoming Milestone
                    </span>
                    <h3 className="text-xl font-bold">
                      {roadmapSteps[1].title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-400 text-xs font-bold rounded-full">
                    Locked
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  {roadmapSteps[1].description}
                </p>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                      Skills Match Analysis
                    </h4>
                    <span className="text-[10px] text-[#EA580C] font-bold px-2 py-0.5 bg-[#FEE2E2] rounded">
                      Learning Required
                    </span>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {skillsMatch.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-[11px]"
                      >
                        {skill.status === "complete" ? (
                          <CheckCircle className="size-3.5 text-[#4F46E5]" />
                        ) : (
                          <Circle className="size-3.5 text-[#EA580C]" />
                        )}
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RoadmapCard>

            {/* Step 3 */}
            <RoadmapCard step={roadmapSteps[2]} index={2}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm opacity-80">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#EA580C] mb-1 block">
                      Automation Phase
                    </span>
                    <h3 className="text-xl font-bold">
                      {roadmapSteps[2].title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-400 text-xs font-bold rounded-full">
                    Future Goal
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  {roadmapSteps[2].description}
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg">
                    <ListChecks className="size-3.5" />
                    <span>Est. 12 weeks</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg">
                    <School className="size-3.5" />
                    <span>3 certifications</span>
                  </div>
                </div>
              </div>
            </RoadmapCard>

            {/* Final Goal */}
            <div className="relative flex gap-8">
              <div className="z-10 mt-1">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <Rocket className="size-6 text-gray-400" />
                </div>
              </div>
              <div className="flex-1 py-4">
                <h4 className="text-lg font-bold text-gray-400">
                  Goal: Certified Data Engineer Role
                </h4>
                <p className="text-sm text-gray-400">
                  Target completion: Q1 2025
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-[#EEF2FF] rounded-2xl p-8 border border-[#4F46E5]/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#4F46E5] rounded-full flex items-center justify-center">
                <PieChart className="size-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold">Accelerate your transition</h4>
                <p className="text-sm text-gray-500">
                  Our AI analyzed 500+ job descriptions for Data Engineers to
                  optimize your path.
                </p>
              </div>
            </div>
            <button className="w-full md:w-auto bg-[#4F46E5] text-white px-6 py-3 rounded-xl font-extrabold text-sm hover:bg-[#6366F1] transition-all shadow-lg shadow-[#4F46E5]/20 flex items-center justify-center gap-2">
              <File className="size-4" />
              Take Skills Assessment
            </button>
          </div>

          <footer className="mt-12 py-8 border-t border-gray-200 text-center text-xs text-gray-400">
            © 2024 CareerDev Dashboard. Data Engineering Track. All rights
            reserved.
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Roadmap;
