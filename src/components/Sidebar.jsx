import React from "react";
import { useLocation } from "react-router-dom";
import {
  Route,
  Database,
  User,
  LogOut,
  LayoutDashboard,
  LineChart,
  Upload,
  Briefcase,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      icon: <LayoutDashboard className="size-5" />,
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <Route className="size-5" />,
      label: "Roadmap",
      link: "/roadmap",
    },
    {
      icon: <LineChart className="size-5" />,
      label: "Career Hub",
      link: "/career-hub",
    },
    // {
    //   icon: <Briefcase className="size-5" />,
    //   label: "Jobs",
    //   link: "/jobs",
    // },
    // {
    //   icon: <Upload className="size-5" />,
    //   label: "Upload Resume",
    //   link: "/upload-resume",
    // },
    // {
    //   icon: <Database className="size-5" />,
    //   label: "Data Projects",
    //   link: "/projects",
    // },
    {
      icon: <User className="size-5" />,
      label: "Profile",
      link: "/profile",
    },
  ];

  // Check if the current path matches or starts with the link
  const isActive = (link) => {
    if (link === "/dashboard" && currentPath === "/") return true;
    return currentPath === link || currentPath.startsWith(link + "/");
  };

  return (
    <aside className="w-64 border-r border-gray-200 bg-white fixed h-full z-50">
      <div className="p-6 flex items-center gap-3">
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
      <nav className="mt-6 px-4 space-y-2">
        {navItems.map((item, index) => (
          <a
            key={index}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all ${
              isActive(item.link)
                ? "text-[#4F46E5] bg-[#EEF2FF] font-bold"
                : "text-gray-500 hover:bg-[#EEF2FF] hover:text-[#4F46E5]"
            }`}
            href={item.link}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>
      <div className="absolute bottom-0 w-full p-6 border-t border-gray-200">
        <button className="flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-[#EA580C] transition-colors">
          <LogOut className="size-4" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
