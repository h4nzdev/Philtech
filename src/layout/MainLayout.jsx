import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-gray-900 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {" "}
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
