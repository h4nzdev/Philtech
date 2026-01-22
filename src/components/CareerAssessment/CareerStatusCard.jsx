import React from "react";

const CareerStatusCard = ({
  icon: Icon,
  title,
  description,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`relative cursor-pointer group flex flex-col p-6 border-2 ${isSelected ? "border-[#663399] bg-[#EEF2FF]" : "border-gray-200 hover:border-[#663399]/50"} rounded-xl transition-all hover:bg-[#EEF2FF]/50`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`p-2 ${isSelected ? "bg-[#663399]" : "bg-gray-100 group-hover:bg-[#663399]/10"} rounded-lg transition-colors`}
        >
          <Icon
            className={`text-2xl ${isSelected ? "text-white" : "text-gray-700 group-hover:text-[#663399]"}`}
          />
        </div>
        <div
          className={`h-5 w-5 rounded-full border-2 ${isSelected ? "border-[#663399]" : "border-gray-400"} flex items-center justify-center`}
        >
          {isSelected && (
            <div className="h-2.5 w-2.5 rounded-full bg-[#663399]" />
          )}
        </div>
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-xs text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default CareerStatusCard;
