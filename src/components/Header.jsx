import React from "react";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between md:ml-64">
      <h1 className="text-lg font-bold">Data Engineering Transition Roadmap</h1>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
          <Bell className="size-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#EA580C] rounded-full"></span>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center">
            <span className="text-xs font-bold text-[#4F46E5]">DA</span>
          </div>
          <span className="text-sm font-medium">Alex Chen</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
