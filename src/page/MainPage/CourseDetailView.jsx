import React, { useState } from "react";
import {
  Home,
  Map,
  Book,
  Database,
  User,
  LogOut,
  ChevronRight,
  CheckCircle,
  PlayCircle,
  Terminal,
  Circle,
  Video,
  FileText,
  Star,
  Calendar,
  Target,
  Zap,
  Paperclip,
  TrendingUp,
  Cpu,
  Brain,
  Rocket,
  List,
  Check,
} from "lucide-react";

const CourseDetailView = () => {
  const [darkMode, setDarkMode] = useState(false);

  const modules = [
    {
      id: 1,
      title: "Python for Data Engineers",
      code: "Module 01",
      status: "completed",
      lessons: [
        {
          title: "Introduction to Modular Python",
          type: "Video",
          duration: "15 mins",
          status: "completed",
        },
        {
          title: "Object-Oriented Programming Patterns",
          type: "Interactive Lab",
          duration: "45 mins",
          status: "completed",
        },
      ],
    },
    {
      id: 2,
      title: "Advanced Window Functions",
      code: "Module 02",
      status: "in-progress",
      lessons: [
        {
          title: "Complex Partitioning & Ordering",
          type: "Video",
          duration: "22 mins",
          status: "now-playing",
        },
        {
          title: "Running Totals and Moving Averages",
          type: "Reading",
          duration: "10 mins",
          status: "locked",
        },
        {
          title: "Recursive CTEs vs Window Functions",
          type: "Lab",
          duration: "60 mins",
          status: "locked",
        },
      ],
    },
    {
      id: 3,
      title: "Asynchronous Processing",
      code: "Module 03",
      status: "locked",
      lessons: [],
    },
  ];

  const resources = [
    {
      id: 1,
      title: "Python Concurrency Mastery",
      description:
        "Deep dive into asyncio and threading for high-performance data pipelines.",
      type: "Video Course",
      icon: <Video className="size-8" />,
    },
    {
      id: 2,
      title: "SQL Optimizer Playground",
      description:
        "Practice indexing strategies and explain plans in a live Postgres env.",
      type: "Interactive Lab",
      icon: <Terminal className="size-8" />,
    },
    {
      id: 3,
      title: "Data Engineering Best Practices",
      description: "Official documentation on clean code for data processing.",
      type: "Documentation",
      icon: <FileText className="size-8" />,
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return (
          <span className="text-xs font-bold text-[#663399] bg-[#EEF2FF] px-3 py-1 rounded-full">
            Completed
          </span>
        );
      case "in-progress":
        return (
          <span className="text-xs font-bold text-[#EA580C] bg-[#FEE2E2] px-3 py-1 rounded-full">
            In Progress
          </span>
        );
      case "locked":
        return (
          <span className="text-gray-400">
            <Circle className="size-5" />
          </span>
        );
      default:
        return null;
    }
  };

  const getLessonIcon = (status) => {
    switch (status) {
      case "completed":
        return (
          <div className="size-8 rounded-lg bg-[#EEF2FF] flex items-center justify-center">
            <Check className="size-5 text-[#663399]" />
          </div>
        );
      case "now-playing":
        return (
          <div className="size-8 rounded-lg bg-[#663399] flex items-center justify-center">
            <PlayCircle className="size-5 text-white" />
          </div>
        );
      case "locked":
        return (
          <div className="size-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <Circle className="size-5 text-gray-300" />
          </div>
        );
      default:
        return (
          <div className="size-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <Circle className="size-5 text-gray-300" />
          </div>
        );
    }
  };

  const getActionIcon = (type) => {
    switch (type) {
      case "Video":
        return (
          <PlayCircle className="size-5 text-gray-400 group-hover:text-[#663399] cursor-pointer" />
        );
      case "Lab":
      case "Interactive Lab":
        return (
          <Terminal className="size-5 text-gray-400 group-hover:text-[#663399] cursor-pointer" />
        );
      case "Reading":
        return (
          <Book className="size-5 text-gray-400 group-hover:text-[#663399] cursor-pointer" />
        );
      default:
        return (
          <PlayCircle className="size-5 text-gray-400 group-hover:text-[#663399] cursor-pointer" />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8f6] font-sans text-gray-900 transition-colors duration-300 flex">
      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Main Content Area */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1400px] mx-auto">
          {/* Left Column - Curriculum */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <List className="size-6 text-[#663399]" />
              Curriculum Overview
            </h2>

            {/* Modules */}
            {modules.map((module) => (
              <div
                key={module.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm border ${
                  module.status === "in-progress"
                    ? "border-2 border-[#663399]"
                    : module.status === "locked"
                      ? "border border-gray-200 opacity-60"
                      : "border border-gray-200"
                }`}
              >
                <div
                  className={`p-5 border-b border-gray-200 ${
                    module.status === "in-progress"
                      ? "bg-[#EEF2FF]"
                      : "bg-gray-50"
                  } flex justify-between items-center`}
                >
                  <div>
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-widest block mb-0.5 ${
                        module.status === "locked"
                          ? "text-gray-400"
                          : "text-[#663399]"
                      }`}
                    >
                      {module.code}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900">
                      {module.title}
                    </h3>
                  </div>
                  {getStatusBadge(module.status)}
                </div>

                {module.status === "locked" ? (
                  <div className="p-4 flex items-center justify-center text-sm text-gray-400 h-24 italic">
                    Finish previous modules to unlock
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {module.lessons.map((lesson, index) => (
                      <div
                        key={index}
                        className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group ${
                          lesson.status === "now-playing" ? "bg-[#EEF2FF]" : ""
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {getLessonIcon(lesson.status)}
                          <div>
                            <h4 className="text-sm font-bold text-gray-900">
                              {lesson.title}
                            </h4>
                            <span className="text-xs text-gray-500">
                              {lesson.type} • {lesson.duration}
                            </span>
                          </div>
                        </div>

                        {lesson.status === "now-playing" ? (
                          <span className="text-[10px] font-bold text-[#663399] uppercase flex items-center gap-1">
                            <PlayCircle className="size-3" />
                            Now Playing
                          </span>
                        ) : (
                          getActionIcon(lesson.type)
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Sidebar Content */}
          <div className="lg:col-span-4 space-y-8">
            {/* Recommended Resources */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
                <Star className="size-6 text-[#EA580C]" />
                Recommended Resources
              </h2>

              <div className="space-y-4">
                {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="bg-white p-4 rounded-2xl border border-gray-200 hover:border-[#EA580C]/30 transition-all cursor-pointer group"
                  >
                    <div className="flex gap-4">
                      <div className="size-16 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0 flex items-center justify-center text-[#EA580C]">
                        {resource.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900 group-hover:text-[#EA580C] transition-colors">
                          {resource.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {resource.description}
                        </p>
                        <div className="mt-2">
                          <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-gray-500 font-bold uppercase">
                            {resource.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Mentor Section */}
            <section className="bg-gradient-to-br from-[#FEE2E2] to-[#FEE2E2]/50 rounded-2xl p-6 border border-[#EA580C]/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-12 rounded-full border-2 border-[#EA580C] p-0.5">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <User className="size-6 text-[#EA580C]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">
                    Need help with SQL?
                  </h4>
                  <p className="text-xs text-gray-500">
                    Mentor Sarah is online
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                Stuck on advanced window functions? Book a quick session to
                unblock your progress.
              </p>

              <button className="w-full bg-[#EA580C] text-white py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-[#EA580C]/20 flex items-center justify-center gap-2">
                <Calendar className="size-4" />
                Book 1-on-1 Session
              </button>
            </section>

            {/* Match Score */}
            <div className="bg-gray-900 p-6 rounded-2xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="size-4 text-[#663399]" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#663399]">
                  Your Match Score
                </h4>
              </div>

              <div className="flex items-end justify-between mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight">
                    84%
                  </span>
                  <Cpu className="size-4 text-gray-400" />
                </div>
                <span className="text-xs text-gray-400">
                  Compared to target role
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Skills Match</span>
                  <span className="text-[#663399] flex items-center gap-1">
                    <Brain className="size-3" />
                    +5% this week
                  </span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full">
                  <div className="bg-[#663399] h-full w-[84%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 py-8 border-t border-gray-200 text-center text-xs text-gray-400">
          © 2024 CareerDev Dashboard. Step 1 Curriculum Detail. All rights
          reserved.
        </footer>
      </main>
    </div>
  );
};

export default CourseDetailView;
