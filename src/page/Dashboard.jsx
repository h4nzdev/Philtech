import React from "react";
import {
  Bell,
  Check,
  Mail,
  UserPlus,
  Edit3,
  Calendar,
  HelpCircle,
  TrendingUp,
  ListTodo,
  Users,
  Briefcase,
  Zap,
  Target,
  BookOpen,
  BarChart3,
  ChevronRight,
} from "lucide-react";

// Weekly Task Component
const TaskItem = ({ title, category, completed }) => {
  return (
    <label className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
      <div className="mt-1">
        <div
          className={`w-4 h-4 rounded border ${completed ? "bg-[#4F46E5] border-[#4F46E5]" : "border-gray-300"} flex items-center justify-center`}
        >
          {completed && <Check className="size-3 text-white" />}
        </div>
      </div>
      <div className="flex-1">
        <p
          className={`text-sm font-semibold ${completed ? "line-through text-gray-400" : "text-gray-900"}`}
        >
          {title}
        </p>
        <p
          className={`text-[10px] ${completed ? "text-gray-400" : "text-gray-500"}`}
        >
          {category}
        </p>
      </div>
    </label>
  );
};

// Skill Progress Chart Component
const SkillChart = () => {
  const bars = [
    { height: "30%", opacity: 20 },
    { height: "45%", opacity: 30 },
    { height: "40%", opacity: 40 },
    { height: "65%", opacity: 60 },
    { height: "75%", opacity: 80 },
    { height: "90%", opacity: 100 },
  ];

  return (
    <div className="h-40 relative flex items-end gap-2 mb-4">
      {bars.map((bar, index) => (
        <div
          key={index}
          className="flex-1 rounded-t"
          style={{
            height: bar.height,
            backgroundColor: `rgba(79, 70, 229, ${bar.opacity / 100})`,
          }}
        ></div>
      ))}
    </div>
  );
};

// Course Progress Component
const CourseProgress = ({ title, progress }) => {
  return (
    <div className="p-4 rounded-xl bg-gray-50">
      <div className="flex justify-between mb-2">
        <span className="text-xs font-bold text-gray-900">{title}</span>
        <span className="text-xs text-[#4F46E5] font-bold">{progress}%</span>
      </div>
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#4F46E5]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

// Job Alert Component
const JobAlert = ({ title, matchScore, timeAgo }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="size-10 bg-[#FEE2E2] rounded-lg flex items-center justify-center">
        <Zap className="text-[#EA580C] size-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold truncate text-gray-900">{title}</p>
        <p className="text-[10px] text-gray-500">
          Match Score: {matchScore}% • {timeAgo}
        </p>
      </div>
      <button className="px-3 py-1 bg-[#FEE2E2] text-[#EA580C] text-[10px] font-bold rounded hover:bg-[#EA580C] hover:text-white transition-colors">
        Quick Apply
      </button>
    </div>
  );
};

// Network Activity Component
const NetworkActivity = ({ icon: Icon, title, description, colorClass }) => {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
      <div
        className={`w-8 h-8 rounded-full ${colorClass} flex items-center justify-center`}
      >
        <Icon className="size-4" />
      </div>
      <div className="flex-1">
        <p className="text-xs font-bold text-gray-900">{title}</p>
        <p className="text-[10px] text-gray-500 italic">{description}</p>
      </div>
    </div>
  );
};

// Quick Action Button Component
const QuickActionButton = ({ icon: Icon, label, hoverColor }) => {
  return (
    <button
      className={`flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold hover:border-${hoverColor} hover:text-${hoverColor} transition-all group shadow-sm`}
    >
      <Icon
        className={`size-5 text-gray-400 group-hover:text-${hoverColor} transition-colors`}
      />
      {label}
    </button>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const weeklyTasks = [
    {
      title: "Complete SQL Performance Tuning Module",
      category: "Roadmap Phase 3",
      completed: true,
    },
    {
      title: "Review Apache Airflow DAGs Project",
      category: "Infrastructure Skills",
      completed: false,
    },
    {
      title: "Study Cloud Architecture Patterns",
      category: "Theoretical Knowledge",
      completed: false,
    },
    {
      title: "Refine Portfolio Project Description",
      category: "Profile Optimization",
      completed: false,
    },
  ];

  const activeCourses = [
    { title: "Distributed Systems 101", progress: 42 },
    { title: "Advanced Python for Data", progress: 88 },
  ];

  const jobAlerts = [
    { title: "Data Engineer (L4)", matchScore: 92, timeAgo: "2h ago" },
    { title: "Junior Pipeline Dev", matchScore: 85, timeAgo: "5h ago" },
  ];

  const networkActivities = [
    {
      icon: Mail,
      title: "New message from Marcus",
      description: '"Thanks for the resume review!"',
      colorClass: "bg-gray-100 text-gray-500",
    },
    {
      icon: UserPlus,
      title: "Mentor Request accepted",
      description: "Sarah J. is now your mentor",
      colorClass: "bg-[#EEF2FF] text-[#4F46E5]",
    },
  ];

  const quickActions = [
    { icon: Edit3, label: "Update Profile", hoverColor: "[#4F46E5]" },
    { icon: Calendar, label: "Book a Mentor", hoverColor: "[#EA580C]" },
    { icon: HelpCircle, label: "Take a Skill Quiz", hoverColor: "[#4F46E5]" },
  ];

  return (
    <div className="p-8 max-w-[1800px] mx-auto space-y-8 mr-64">
      {/* Welcome & Progress Section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900">
              Welcome back, User! 👋
            </h2>
            <p className="text-gray-500">
              You're making great progress. Keep it up!
            </p>
          </div>
          <div className="flex-1 max-w-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-gray-900">
                Career Transition Progress
              </span>
              <span className="text-sm font-bold text-[#4F46E5]">
                65% complete
              </span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#4F46E5]"
                style={{ width: "65%" }}
              ></div>
            </div>
            <p className="text-[11px] text-gray-400 mt-2">
              65% through your Data Engineering transition from Data Analyst
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Weekly Focus */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold flex items-center gap-2 mb-6 text-gray-900">
              <ListTodo className="text-[#4F46E5] text-xl" />
              Weekly Focus
            </h3>
            <div className="space-y-4">
              {weeklyTasks.map((task, index) => (
                <TaskItem key={index} {...task} />
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-xs font-bold text-[#4F46E5] hover:underline">
              + Add Task
            </button>
          </div>
        </div>

        {/* Middle Column - Skills Growth & Active Courses */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold flex items-center gap-2 mb-6 text-gray-900">
              <TrendingUp className="text-[#4F46E5] text-xl" />
              Skills Growth
            </h3>
            <SkillChart />
            <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-4 text-sm text-gray-900">
              Active Courses
            </h3>
            <div className="space-y-4">
              {activeCourses.map((course, index) => (
                <CourseProgress key={index} {...course} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Job Alerts & Networking */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold flex items-center gap-2 text-gray-900">
                <Briefcase className="text-[#EA580C] text-xl" />
                Recent Job Alerts
              </h3>
            </div>
            <div className="space-y-4">
              {jobAlerts.map((job, index) => (
                <JobAlert key={index} {...job} />
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold flex items-center gap-2 mb-4 text-gray-900">
              <Users className="text-[#4F46E5] text-xl" />
              Networking Activity
            </h3>
            <div className="space-y-3">
              {networkActivities.map((activity, index) => (
                <NetworkActivity key={index} {...activity} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border-t border-b border-gray-200 py-6 px-8 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <h4 className="font-bold text-sm text-gray-500 uppercase tracking-widest">
          Quick Actions
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold transition-all group shadow-sm ${
                index === 1
                  ? "hover:border-[#EA580C] hover:text-[#EA580C]"
                  : "hover:border-[#4F46E5] hover:text-[#4F46E5]"
              }`}
            >
              <action.icon
                className={`size-5 text-gray-400 transition-colors ${
                  index === 1
                    ? "group-hover:text-[#EA580C]"
                    : "group-hover:text-[#4F46E5]"
                }`}
              />
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-gray-200 text-center text-xs text-gray-400">
        © 2026 CareerDev Dashboard. Central Overview Hub. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
