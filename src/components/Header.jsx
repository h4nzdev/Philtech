import React, { useState, useRef, useEffect } from "react";
import { Bell, LogOut, Settings, ChevronDown, User } from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout logic here
    setIsDropdownOpen(false);
  };

  const handleEditPreferences = () => {
    console.log("Opening preferences...");
    // Add your preferences logic here
    setIsDropdownOpen(false);
  };

  return (
    <header className="h-16 border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between md:ml-64">
      <h1 className="text-lg font-bold">Data Engineering Transition Roadmap</h1>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
          <Bell className="size-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#EA580C] rounded-full"></span>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-2 hover:bg-gray-100 rounded-lg px-2 py-1.5 transition-colors"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center">
              <span className="text-xs font-bold text-[#663399]">DA</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium">Alex Chen</span>
              <span className="text-xs text-gray-500">Data Analyst</span>
            </div>
            <ChevronDown
              className={`size-4 text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg border border-gray-200 shadow-lg py-1 z-50">
              {/* Profile Section */}
              <div className="px-3 py-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center">
                    <User className="size-4 text-[#663399]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Alex Chen</p>
                    <p className="text-xs text-gray-500">
                      alex.chen@example.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <button
                onClick={handleEditPreferences}
                className="w-full px-3 py-2.5 text-left flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm text-gray-700"
              >
                <Settings className="size-4 text-gray-500" />
                <span>Edit Preferences</span>
              </button>

              <button
                onClick={handleLogout}
                className="w-full px-3 py-2.5 text-left flex items-center gap-2 hover:bg-gray-50 transition-colors text-sm text-red-600"
              >
                <LogOut className="size-4 text-red-500" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
