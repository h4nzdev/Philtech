import React, { useState, useEffect } from "react";
import {
  BarChart3,
  Code,
  Cloud,
  Users,
  Database,
  Terminal,
  Settings,
  Cpu,
  Mic,
  Brain,
  Check,
  Lock,
  Minus,
  Plus,
} from "lucide-react";
import AIRoadmapGeneration from "../../../components/AIRoadmapGeneration";
import { useNavigate } from "react-router-dom";

// Node Component
const Node = ({
  icon: Icon,
  label,
  type,
  status,
  position,
  badge,
  onClick,
}) => {
  const getNodeStyles = () => {
    switch (status) {
      case "completed":
        return "bg-[#663399] text-white shadow-lg hover:scale-105";
      case "active":
        return "bg-white border-4 border-[#663399] text-[#663399] shadow-lg hover:scale-105";
      case "locked":
        return "bg-gray-100 border-2 border-gray-300 text-gray-400 hover:border-[#EA580C]";
      default:
        return "bg-gray-100 border-2 border-gray-300 text-gray-400";
    }
  };

  const getBadgeContent = () => {
    if (badge === "current")
      return (
        <div className="absolute -top-3 px-2 py-0.5 bg-black text-white text-[9px] rounded-full whitespace-nowrap font-bold">
          CURRENT ROLE
        </div>
      );
    if (badge === "active")
      return (
        <div className="absolute -bottom-6 w-max text-[8px] font-bold text-[#663399] uppercase">
          Active Focus
        </div>
      );
    return null;
  };

  const getStatusIcon = () => {
    if (status === "completed")
      return <Check className="size-3 absolute bottom-1 right-2 font-bold" />;
    if (status === "locked")
      return (
        <Lock className="size-3.5 absolute top-2 right-2 text-[#EA580C]" />
      );
    return null;
  };

  const nodeSize = "w-28 h-28";
  const iconSize = "size-8";
  const textSize = "text-[10px]";

  return (
    <button
      className={`absolute ${nodeSize} rounded-full flex flex-col items-center justify-center transition-all group ${getNodeStyles()}`}
      style={{ top: position.top, left: position.left }}
      onClick={onClick}
    >
      {getBadgeContent()}
      {getStatusIcon()}
      <Icon
        className={`${iconSize} ${status === "active" ? "text-[#663399]" : ""}`}
      />
      <span
        className={`${textSize} font-bold text-center px-2 uppercase leading-tight mt-1`}
      >
        {label}
      </span>
    </button>
  );
};

// Connection Line Component
const ConnectionLine = ({ d, completed = false }) => {
  return (
    <path
      className={`fill-none stroke-2 ${completed ? "stroke-[#663399]" : "stroke-gray-300"}`}
      d={d}
      strokeDasharray={completed ? "0" : "6 4"}
    />
  );
};

// Simplified Zoom Controls Component with highest z-index
const ZoomControls = ({ zoomLevel, onZoomIn, onZoomOut }) => {
  return (
    <div className="fixed top-20 right-6 z-[9999] flex flex-col gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-gray-200 shadow-2xl">
      <div className="text-center">
        <div className="text-xs font-semibold text-gray-600 mb-1">ZOOM</div>
        <div className="text-lg font-bold text-[#663399]">
          {Math.round(zoomLevel * 100)}%
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <button
          className="p-3 hover:bg-gray-100 rounded-lg transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
          onClick={onZoomOut}
          disabled={zoomLevel <= 0.8}
          title="Zoom Out"
        >
          <Minus className="size-5 text-gray-600" />
        </button>

        <button
          className="p-3 hover:bg-gray-100 rounded-lg transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
          onClick={onZoomIn}
          disabled={zoomLevel >= 1.5}
          title="Zoom In"
        >
          <Plus className="size-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

// Main Component
const CareerEvolutionTree = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Show splash screen for 3 seconds, then show content
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleZoomIn = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.min(prev + 0.1, 1.5);
      return Math.round(newZoom * 10) / 10;
    });
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const newZoom = Math.max(prev - 0.1, 0.8);
      return Math.round(newZoom * 10) / 10;
    });
  };

  if (showSplash) {
    return <AIRoadmapGeneration />;
  }

  const nodes = [
    {
      id: "data-analyst",
      icon: BarChart3,
      label: "Data Analyst",
      type: "large",
      status: "completed",
      position: { top: "80px", left: "600px" },
      badge: "current",
    },
    {
      id: "technical-mastery",
      icon: Code,
      label: "Technical Mastery",
      type: "medium",
      status: "completed",
      position: { top: "250px", left: "300px" },
    },
    {
      id: "infrastructure",
      icon: Cloud,
      label: "Infrastructure",
      type: "medium",
      status: "locked",
      position: { top: "250px", left: "600px" },
    },
    {
      id: "soft-skills",
      icon: Users,
      label: "Soft Skills",
      type: "medium",
      status: "locked",
      position: { top: "250px", left: "900px" },
    },
    {
      id: "advanced-sql",
      icon: Database,
      label: "Advanced SQL",
      type: "small",
      status: "completed",
      position: { top: "480px", left: "150px" },
    },
    {
      id: "advanced-python",
      icon: Terminal,
      label: "Advanced Python",
      type: "small",
      status: "active",
      position: { top: "480px", left: "350px" },
      badge: "active",
    },
    {
      id: "etl-orchestration",
      icon: Settings,
      label: "ETL Orchestration",
      type: "small",
      status: "locked",
      position: { top: "480px", left: "550px" },
    },
    {
      id: "cloud-architecture",
      icon: Cpu,
      label: "Cloud Architecture",
      type: "small",
      status: "locked",
      position: { top: "480px", left: "750px" },
    },
    {
      id: "stakeholder-mgmt",
      icon: Mic,
      label: "Stakeholder Mgmt",
      type: "small",
      status: "locked",
      position: { top: "480px", left: "950px" },
    },
    {
      id: "strategic-design",
      icon: Brain,
      label: "Strategic Design",
      type: "small",
      status: "locked",
      position: { top: "480px", left: "1150px" },
    },
  ];

  const connections = [
    { d: "M 650 150 L 350 300", completed: true },
    { d: "M 650 150 L 650 300", completed: false },
    { d: "M 650 150 L 950 300", completed: false },
    { d: "M 350 300 L 200 530", completed: true },
    { d: "M 350 300 L 400 530", completed: false },
    { d: "M 650 300 L 570 530", completed: false },
    { d: "M 650 300 L 730 530", completed: false },
    { d: "M 950 300 L 900 530", completed: false },
    { d: "M 950 300 L 1100 530", completed: false },
  ];

  const handleNodeClick = (nodeId) => {
    navigate("/roadmap");
    console.log("Selected node:", nodeId);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-gray-900">
      {/* Zoom Controls with highest z-index */}
      <ZoomControls
        zoomLevel={zoomLevel}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
      />

      {/* Main Tree Visualization */}
      <div className="relative w-full h-screen overflow-auto">
        <div
          className="relative mx-auto pt-12 transition-transform duration-300 ease-out"
          style={{
            width: `${1200 * zoomLevel}px`,
            height: `${800 * zoomLevel}px`,
            transform: `scale(${zoomLevel})`,
            transformOrigin: "top left",
          }}
        >
          {/* Connection Lines */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {connections.map((conn, index) => (
              <ConnectionLine
                key={index}
                d={conn.d}
                completed={conn.completed}
              />
            ))}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <Node
              key={node.id}
              {...node}
              onClick={() => handleNodeClick(node.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerEvolutionTree;
