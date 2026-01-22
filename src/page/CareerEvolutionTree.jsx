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
  Rocket,
  School,
  BookOpen,
  ExternalLink,
  Circle,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import AIRoadmapGeneration from "../components/AIRoadmapGeneration"; // Import the splash screen component
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

// Skill Module Component
const SkillModule = ({ label, completed }) => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-gray-100 text-[11px]">
      {completed ? (
        <Check className="size-3.5 text-[#663399]" />
      ) : (
        <Circle className="size-3.5 text-gray-400" />
      )}
      <span className={completed ? "" : "opacity-60"}>{label}</span>
    </div>
  );
};

// Resource Card Component
const ResourceCard = ({ icon: Icon, title, provider, color }) => {
  return (
    <div className="flex gap-3 items-center p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
      <div
        className={`w-10 h-10 rounded ${color} flex items-center justify-center`}
      >
        <Icon className="size-5" />
      </div>
      <div className="flex-1">
        <div className="text-[11px] font-bold leading-tight">{title}</div>
        <div className="text-[9px] text-gray-400 flex items-center justify-between">
          <span>{provider}</span>
          <ExternalLink className="size-3" />
        </div>
      </div>
    </div>
  );
};

// Legend Item Component
const LegendItem = ({ icon: Icon, label, color, type = "circle" }) => {
  return (
    <div className="flex items-center gap-2">
      {type === "circle" ? (
        <div
          className={`w-4 h-4 rounded-full ${color} flex items-center justify-center`}
        >
          {Icon && <Icon className="size-2.5" />}
        </div>
      ) : (
        <div className={`w-8 h-0.5 ${color}`}></div>
      )}
      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">
        {label}
      </span>
    </div>
  );
};

// Main Component
const CareerEvolutionTree = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [selectedNode, setSelectedNode] = useState("advanced-python");
  const [zoomLevel, setZoomLevel] = useState(1.2);
  const navigate = useNavigate();

  useEffect(() => {
    // Show splash screen for 3 seconds, then show content
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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

  const skillModules = [
    { label: "Decorators & Generators", completed: true },
    { label: "Multi-threading / Processing", completed: true },
    { label: "Memory Management", completed: false },
    { label: "Async Programming", completed: false },
    { label: "Performance Optimization", completed: false },
  ];

  const resources = [
    {
      icon: School,
      title: "Python for Data Engineering",
      provider: "Coursera Plus",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: BookOpen,
      title: "Expert Data Structures",
      provider: "O'Reilly Media",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: School,
      title: "Advanced Python Masterclass",
      provider: "Udemy",
      color: "bg-green-100 text-green-600",
    },
  ];

  const progressMetrics = [
    {
      label: "Required Skills",
      value: "85%",
      percentage: 85,
      color: "bg-[#663399]",
    },
    {
      label: "Experience Threshold",
      value: "Lvl 4 / 5",
      percentage: 80,
      color: "bg-[#663399]",
    },
    {
      label: "Career Alignment",
      value: "High Priority",
      percentage: 95,
      color: "bg-[#EA580C]",
    },
  ];

  const legendItems = [
    { icon: Check, label: "Completed", color: "bg-[#663399]" },
    {
      icon: null,
      label: "Active Node",
      color: "bg-white border-4 border-[#663399]",
    },
    { icon: Lock, label: "Locked", color: "bg-gray-200" },
    { label: "Mastered Path", color: "bg-[#663399]", type: "line" },
  ];

  const handleNodeClick = (nodeId) => {
    setSelectedNode(nodeId);
    navigate("/roadmap");
    console.log("Selected node:", nodeId);
  };

  const handleBeginChallenge = () => {
    console.log("Beginning challenge for:", selectedNode);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 2.0));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-gray-900 flex">
      {/* Main Content */}
      <main className="flex-1 ml-64 flex flex-col relative">
        {/* Zoom Controls */}
        <div className="fixed top-20 right-6 z-50 flex flex-col gap-2 bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl border border-gray-200 shadow-lg">
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={handleZoomIn}
            title="Zoom In"
          >
            <ZoomIn className="size-4 text-gray-600" />
          </button>
          <div className="text-center text-xs font-medium text-gray-600">
            {Math.round(zoomLevel * 100)}%
          </div>
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={handleZoomOut}
            title="Zoom Out"
          >
            <ZoomOut className="size-4 text-gray-600" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Tree Visualization */}
          <div className="flex-1 relative overflow-auto">
            <div
              className="relative mx-auto pt-12 transition-transform duration-200"
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

          {/* Side Panel */}
          <aside className="w-80 border-l border-gray-200 bg-white p-6 z-50 flex flex-col shadow-2xl overflow-y-auto">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-gray-900">
                  Node Analysis
                </h3>
                <span className="px-2 py-1 bg-[#EEF2FF] text-[#663399] text-[10px] font-bold rounded">
                  ACTIVE
                </span>
              </div>

              {/* Active Node Info */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center">
                    <Terminal className="text-[#663399] size-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      Advanced Python
                    </h4>
                    <div className="text-[10px] text-gray-400 font-medium">
                      Core Technical Competency
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 mb-4 leading-relaxed">
                  Focus on mastering Object-Oriented Programming patterns,
                  concurrency with AsyncIO, and performance optimization for
                  heavy data workloads.
                </p>

                {/* Progress Metrics */}
                <div className="space-y-4">
                  {progressMetrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-[10px] font-bold mb-1 uppercase text-gray-400">
                        <span>{metric.label}</span>
                        <span
                          className={
                            metric.color.includes("EA580C")
                              ? "text-[#EA580C]"
                              : "text-[#663399]"
                          }
                        >
                          {metric.value}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${metric.color}`}
                          style={{ width: `${metric.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skill Modules */}
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Skill Modules
              </h4>
              <div className="space-y-2 mb-6">
                {skillModules.map((module, index) => (
                  <SkillModule key={index} {...module} />
                ))}
              </div>

              {/* Recommended Resources */}
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Recommended Resources
              </h4>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <ResourceCard key={index} {...resource} />
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <button
                className="w-full bg-[#663399] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#6366F1] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#663399]/20"
                onClick={handleBeginChallenge}
              >
                <Rocket className="size-4" />
                Begin Node Challenge
              </button>
            </div>
          </aside>
        </div>

        {/* Legend */}
        <div className="fixed bottom-6 left-72 flex gap-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-gray-200 shadow-2xl z-40">
          {legendItems.map((item, index) => (
            <React.Fragment key={index}>
              <LegendItem {...item} />
              {index === 2 && <div className="h-4 w-px bg-gray-200 mx-1"></div>}
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CareerEvolutionTree;
