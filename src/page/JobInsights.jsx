import React, { useState } from "react";
import {
  Search,
  Bell,
  Bookmark,
  Share2,
  Building,
  MapPin,
  DollarSign,
  CheckCircle,
  Target,
  Users,
  Sparkles,
  Briefcase,
  Palette,
  Layers,
  Eye,
  Zap,
  ChevronRight,
} from "lucide-react";

// Header Component
const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 shrink-0">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-[#663399] p-1.5 rounded-lg">
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
          <nav className="hidden md:flex items-center gap-6">
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#663399] transition-colors"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-sm font-bold text-[#663399] border-b-2 border-[#663399] py-5 px-1"
              href="#"
            >
              Jobs
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#663399] transition-colors"
              href="#"
            >
              Roadmap
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-[#663399] transition-colors"
              href="#"
            >
              Resources
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="size-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center border border-[#663399]/40">
            <span className="text-xs font-bold text-[#663399]">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
};

// Job Card Component
const JobCard = ({ job, isSelected, onClick }) => {
  return (
    <div
      className={`p-4 rounded-xl ${isSelected ? "border-2 border-[#663399] bg-[#EEF2FF]" : "border border-gray-200 hover:border-[#663399]/50"} cursor-pointer transition-all`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100">
          {job.icon}
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-[#EA580C] flex flex-col items-center justify-center text-[10px] font-bold text-[#EA580C] bg-white">
          <span>{job.matchScore}%</span>
        </div>
      </div>
      <h3 className="font-bold text-base mb-1 text-gray-900">{job.title}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {job.company} • {job.location}
      </p>
      <div className="flex items-center gap-2">
        <span
          className={`px-2 py-0.5 ${isSelected ? "bg-[#663399] text-white" : "bg-[#EEF2FF] text-[#663399]"} text-[10px] font-bold rounded uppercase tracking-wider`}
        >
          {job.type}
        </span>
        <span className="text-[10px] text-gray-400">{job.timePosted}</span>
      </div>
    </div>
  );
};

// Skill Tag Component
const SkillTag = ({ skill }) => {
  return (
    <span className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
      {skill}
    </span>
  );
};

// Main Component
const JobInsights = () => {
  const [selectedJob, setSelectedJob] = useState(0);

  const jobs = [
    {
      id: 0,
      title: "Junior Product Designer",
      company: "DesignStudio",
      location: "London, UK (Remote)",
      type: "Full-time",
      timePosted: "2 hours ago",
      matchScore: 98,
      icon: <Target className="text-blue-600 size-5" />,
      salary: "£45k - £55k / year",
      description:
        "We are looking for a passionate Junior Product Designer to join our core team. You will work closely with senior designers and product managers to create intuitive and beautiful experiences for our global user base. This is a unique opportunity to grow your career in a fast-paced, design-led environment.",
      responsibilities: [
        "Collaborate on wireframes, prototypes, and high-fidelity UI designs.",
        "Participate in user research and usability testing sessions.",
        "Maintain and expand our internal design system in Figma.",
        "Work closely with engineering to ensure high-quality implementation.",
      ],
      skills: [
        "Figma",
        "UI Design",
        "Prototyping",
        "User Research",
        "English (C1)",
      ],
      matchReasons: [
        "Matches your goal: 'Find a Job'",
        "Fits preference: 'Remote'",
      ],
    },
    {
      id: 1,
      title: "UI/UX Designer",
      company: "TechFlow",
      location: "Berlin, Germany",
      type: "Hybrid",
      timePosted: "5 hours ago",
      matchScore: 85,
      icon: <Palette className="text-orange-500 size-5" />,
    },
    {
      id: 2,
      title: "Product Design Intern",
      company: "CreativeMind",
      location: "San Francisco, CA",
      type: "Remote",
      timePosted: "1 day ago",
      matchScore: 79,
      icon: <Layers className="text-purple-600 size-5" />,
    },
    {
      id: 3,
      title: "Visual Interaction Designer",
      company: "MetaOps",
      location: "Remote",
      type: "Contract",
      timePosted: "2 days ago",
      matchScore: 72,
      icon: <Eye className="text-green-600 size-5" />,
    },
  ];

  const selectedJobData = jobs[selectedJob];

  const handleApplyNow = () => {
    console.log("Applying for:", selectedJobData.title);
    // Handle apply logic
  };

  const handleBookmark = () => {
    console.log("Bookmarking job:", selectedJobData.title);
    // Handle bookmark logic
  };

  const handleShare = () => {
    console.log("Sharing job:", selectedJobData.title);
    // Handle share logic
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-[#FDFCFB] font-sans text-gray-900">
      <Header />

      <main className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Job Listings */}
        <aside className="w-[400px] border-r border-gray-200 flex flex-col bg-white">
          <div className="p-6 border-b border-gray-200 space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900">
                Recommended for You
              </h1>
              <button className="text-[#663399] text-xs font-bold hover:underline">
                Filter
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
              <input
                className="w-full pl-10 pr-4 py-2 bg-[#FDFCFB] border-none rounded-lg text-sm focus:ring-2 focus:ring-[#663399]/20 text-gray-900"
                placeholder="Search roles or companies"
                type="text"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isSelected={selectedJob === job.id}
                onClick={() => setSelectedJob(job.id)}
              />
            ))}
          </div>
        </aside>

        {/* Right Panel - Job Details */}
        <section className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-4xl mx-auto px-8 py-10">
            {/* Action Buttons */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-3">
                <button
                  className="px-6 py-2.5 bg-[#663399] text-white rounded-lg font-bold transition-all hover:bg-[#6366F1] active:scale-[0.98]"
                  onClick={handleApplyNow}
                >
                  Apply Now
                </button>
                <button
                  className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50"
                  onClick={handleBookmark}
                >
                  <Bookmark className="text-gray-600 size-5" />
                </button>
                <button
                  className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50"
                  onClick={handleShare}
                >
                  <Share2 className="text-gray-600 size-5" />
                </button>
              </div>
            </div>

            {/* Job Header */}
            <div className="flex gap-6 mb-10">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center border border-gray-200 shrink-0 shadow-sm">
                <Target className="text-blue-600 size-12" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold mb-2 text-gray-900">
                  {selectedJobData.title}
                </h2>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-gray-600 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Building className="text-[#663399] size-4" />
                    {selectedJobData.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="text-[#663399] size-4" />
                    {selectedJobData.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="text-[#663399] size-4" />
                    {selectedJobData.salary}
                  </span>
                </div>
              </div>
            </div>

            {/* Match Score Card */}
            <div className="bg-[#EEF2FF] border border-[#663399]/20 rounded-2xl p-6 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#EA580C] flex items-center justify-center text-white font-bold text-lg">
                  {selectedJobData.matchScore}%
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight text-gray-900">
                    Match Score: Excellent
                  </h4>
                  <p className="text-sm text-gray-600">
                    Based on your skills in Figma, UI Design, and Prototyping.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedJobData.matchReasons?.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-[#663399]"
                  >
                    <CheckCircle className="text-[#663399] size-5" />
                    {reason}
                  </div>
                ))}
              </div>
            </div>

            {/* Job Details */}
            <div className="space-y-8 pb-10">
              {/* About the role */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  About the role
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedJobData.description}
                </p>
              </section>

              {/* Responsibilities */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  What you'll do
                </h3>
                <ul className="list-none space-y-3 text-gray-600">
                  {selectedJobData.responsibilities?.map(
                    (responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="size-1.5 rounded-full bg-[#663399] mt-2 shrink-0"></div>
                        {responsibility}
                      </li>
                    ),
                  )}
                </ul>
              </section>

              {/* Required Skills */}
              <section>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedJobData.skills?.map((skill, index) => (
                    <SkillTag key={index} skill={skill} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JobInsights;
