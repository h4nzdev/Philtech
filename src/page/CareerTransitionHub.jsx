import React from "react";
import {
  Route,
  BarChart3,
  Database,
  User,
  LogOut,
  Bell,
  Radar,
  Target,
  School,
  PlayCircle,
  Users,
  Rocket,
  ChevronRight,
  Award,
  Cloud,
  Network,
  Briefcase,
  CheckCircle,
  LayoutDashboard,
} from "lucide-react";

// Skills Radar Component
const SkillsRadar = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold flex items-center gap-2">
          <Radar className="text-[#4F46E5] text-xl" />
          Skills Deep Dive
        </h3>
        <button className="text-[10px] font-bold text-[#4F46E5] uppercase hover:underline">
          Full Audit
        </button>
      </div>
      <div className="relative w-full aspect-square flex items-center justify-center mb-6">
        {/* Outer radar shape */}
        <div className="absolute inset-0 [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)] bg-gray-100 border border-dashed border-gray-300"></div>

        {/* Middle radar shape */}
        <div className="absolute inset-4 [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)] bg-gray-200 opacity-50 border border-gray-300"></div>

        {/* Inner radar shape */}
        <div className="absolute inset-8 [clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)] bg-[#4F46E5]/20 border-2 border-[#4F46E5]"></div>

        {/* Labels */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-0 text-[10px] font-bold text-gray-500 uppercase">
            Technical Skills
          </div>
          <div className="absolute top-[35%] right-0 text-[10px] font-bold text-gray-500 uppercase text-right">
            Experience
          </div>
          <div className="absolute bottom-4 right-8 text-[10px] font-bold text-gray-500 uppercase text-right">
            Interests
          </div>
          <div className="absolute bottom-4 left-8 text-[10px] font-bold text-gray-500 uppercase">
            Domain Knowledge
          </div>
          <div className="absolute top-[35%] left-0 text-[10px] font-bold text-gray-500 uppercase">
            Soft Skills
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
          <span className="text-xs font-medium">Technical Gap</span>
          <span className="text-xs font-bold text-[#EA580C]">-15%</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
          <span className="text-xs font-medium">Interest Match</span>
          <span className="text-xs font-bold text-[#4F46E5]">92%</span>
        </div>
        <p className="text-[11px] text-gray-500 leading-relaxed mt-4 italic">
          "Your analytical background provides a strong 2nd-degree foundation
          for Pipeline Architecture."
        </p>
      </div>
    </div>
  );
};

// Job Match Card Component
const JobMatchCard = ({ title, company, location, matchScore, icon: Icon }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#EA580C]/30 transition-colors group cursor-pointer">
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
        <Icon className="size-5 text-gray-500" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-sm group-hover:text-[#EA580C] transition-colors">
          {title}
        </h4>
        <p className="text-xs text-gray-500">
          {company} • {location}
        </p>
      </div>
      <div className="text-right">
        <div className="text-lg font-extrabold text-[#EA580C]">
          {matchScore}%
        </div>
        <div className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">
          Match Score
        </div>
      </div>
    </div>
  );
};

// Learning Card Component
const LearningCard = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-[#EEF2FF] border border-[#4F46E5]/10 rounded-2xl">
      <div className="w-full sm:w-32 h-24 bg-[#4F46E5]/20 rounded-xl flex items-center justify-center relative overflow-hidden group">
        <PlayCircle className="text-[#4F46E5] size-10" />
        <div className="absolute inset-0 bg-[#4F46E5]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-[#4F46E5] text-white text-[9px] font-bold rounded uppercase">
            Top Rated
          </span>
          <span className="text-[10px] text-gray-500 font-medium">
            4.9 ★ (2.4k reviews)
          </span>
        </div>
        <h4 className="font-bold text-sm leading-tight">
          Professional Data Engineer: Big Data and Machine Learning on Cloud
        </h4>
        <p className="text-xs text-gray-500">
          Provider: Coursera Specialist Track
        </p>
        <button className="text-xs font-bold text-[#4F46E5] flex items-center gap-1 hover:gap-2 transition-all">
          Start Learning <ChevronRight className="size-3" />
        </button>
      </div>
    </div>
  );
};

// Mentor Card Component
const MentorCard = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-[#FEE2E2] border border-[#EA580C]/10 rounded-2xl">
      <div className="w-16 h-16 rounded-full bg-[#EA580C]/20 flex items-center justify-center shrink-0 border-2 border-white shadow-sm">
        <Users className="size-6 text-[#EA580C]" />
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-sm leading-tight">Sarah Jenkins</h4>
          <span className="px-2 py-0.5 border border-[#EA580C]/30 text-[#EA580C] text-[9px] font-bold rounded uppercase">
            Mentor Available
          </span>
        </div>
        <p className="text-xs font-medium text-gray-700">
          Senior Data Engineer at Google
        </p>
        <p className="text-[11px] text-gray-500">
          Specializes in: Data Migration & ETL Automation at Scale
        </p>
        <div className="flex gap-2 mt-2">
          <button className="px-3 py-1.5 bg-[#EA580C] text-white text-[10px] font-bold rounded-lg hover:bg-[#EA580C]/90 transition-all">
            Book Session
          </button>
          <button className="px-3 py-1.5 border border-gray-200 text-[10px] font-bold rounded-lg hover:bg-gray-50 transition-all">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const CareerTransitionHub = () => {
  const jobMatches = [
    {
      title: "Junior Data Engineer",
      company: "CloudScale Solutions",
      location: "Remote",
      matchScore: 94,
      icon: Database,
    },
    {
      title: "Data Infrastructure Analyst",
      company: "Nexus Data Systems",
      location: "London, UK",
      matchScore: 88,
      icon: Cloud,
    },
    {
      title: "ETL Developer (Data Engineering Track)",
      company: "GreenLogic Analytics",
      location: "Hybrid",
      matchScore: 82,
      icon: Network,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-gray-900 flex">
      {/* Main Content */}
      <main className="flex-1 ml-64">
        <div className="p-8 max-w-[1800px] mx-auto space-y-8">
          {/* Top Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Skills Radar */}
            <div className="lg:col-span-1">
              <SkillsRadar />
            </div>

            {/* Job Matches */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold flex items-center gap-2">
                  <Target className="text-[#EA580C] text-xl" />
                  Top Job Matches
                </h3>
                <span className="text-xs text-gray-400">
                  Based on your updated roadmap
                </span>
              </div>
              <div className="space-y-4">
                {jobMatches.map((job, index) => (
                  <JobMatchCard key={index} {...job} />
                ))}
              </div>
              <button className="w-full mt-6 py-3 text-xs font-bold text-gray-500 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                View 12 More Opportunities
              </button>
            </div>
          </div>

          {/* Learning & Networking */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-6 flex items-center gap-2">
              <School className="text-[#4F46E5] text-xl" />
              Learning & Networking
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <LearningCard />
              <MentorCard />
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-900 text-white rounded-2xl p-8 border border-[#4F46E5]/20 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F46E5]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 flex items-center gap-5">
              <div className="w-14 h-14 bg-[#4F46E5] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                <Rocket className="text-white size-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold">
                  Ready to take the next step?
                </h4>
                <p className="text-sm text-gray-400">
                  Your profile is 85% ready for the first batch of engineering
                  interviews.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-extrabold text-sm hover:bg-[#6366F1] transition-all shadow-lg shadow-[#4F46E5]/20">
                Apply for Matches
              </button>
              <button className="flex-1 md:flex-none bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-extrabold text-sm hover:bg-white/20 transition-all">
                Refine Skills
              </button>
            </div>
          </div>

          <footer className="mt-12 py-8 border-t border-gray-200 text-center text-xs text-gray-400">
            © 2024 CareerDev Dashboard. Transition Hub: Data Analyst → Data
            Engineer. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
};

export default CareerTransitionHub;
