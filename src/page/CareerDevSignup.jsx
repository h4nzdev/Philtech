import React from "react";
import {
  Mail,
  Lock,
  Phone,
  Eye,
  EyeOff,
  ChevronDown,
  Search,
  TrendingUp,
  UserSearch,
  Briefcase,
  ArrowRight,
  HelpCircle,
  Shield,
  KeyRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="hidden lg:flex lg:w-5/12 xl:w-1/2 relative flex-col justify-center p-16 bg-gradient-to-br from-[#663399] via-[#6366F1] to-[#818CF8] overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#EA580C] blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#EEF2FF] blur-[100px]"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #EA580C 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-white p-2 rounded-lg shadow-lg">
            <Briefcase className="size-8 text-[#663399]" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            CareerDev
          </span>
        </div>

        <h1 className="text-5xl font-black text-white leading-[1.1] mb-6">
          Elevate your <br />
          <span className="text-[#EEF2FF]">professional trajectory.</span>
        </h1>

        <p className="text-white/90 text-lg max-w-md mb-12 leading-relaxed">
          Join over 50,000 professionals who use CareerDev to map their skills,
          discover opportunities, and reach the next level.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
            <div className="text-white font-bold text-2xl mb-1">94%</div>
            <div className="text-white/80 text-sm">Placement Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
            <div className="text-[#EA580C] font-bold text-2xl mb-1">12k+</div>
            <div className="text-white/80 text-sm">Active Mentors</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-16 right-16 z-10">
        <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <div className="h-10 w-10 rounded-full bg-white flex-shrink-0 overflow-hidden">
            <img
              alt="Portrait of a successful female professional"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfUPZxPg_snxv-mPFyWrLZEK5HiD9nW0oarhVtoYk_5pLEWF8Ulxy2jjwZ9FHuKovUK_N7hw1sLmTpKD0C68rgw85PtrSDH-jWJwR0MDTPT0Toq8iRSyWc5GS6mcNG3omjBoE9oc4Jx7qaeZTWVmT9l9GLcV6kdi3DCEulqMINMpy5pJ8LFjNgcyTfPhqZBYsUYcJ47TM3naBaIIeRJPE5blk9V0Qn2iSon2NluS1d89mm1oeZfJiYEnc-A5fNeHr9dod-h6cupJA"
            />
          </div>
          <p className="text-sm text-white/90 italic">
            "CareerDev gave me the roadmap I needed to transition from Marketing
            to Product Design in just 6 months."
          </p>
        </div>
      </div>
    </div>
  );
};

// Mobile Header Component
const MobileHeader = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-white">
      <div className="lg:hidden flex items-center gap-2">
        <div className="size-6 text-[#663399]">
          <Briefcase className="size-full" />
        </div>
        <span className="font-bold text-gray-900">CareerDev</span>
      </div>
      <div className="flex-1 flex justify-end items-center gap-4">
        <span className="text-sm text-gray-700 hidden sm:inline">
          Already have an account?
        </span>
        <a
          className="text-sm font-semibold text-[#663399] hover:text-[#6366F1] transition-colors"
          href="#"
        >
          Log in
        </a>
      </div>
    </header>
  );
};

// Progress Bar Component
const ProgressBar = () => {
  return (
    <div className="flex flex-col gap-2 mb-10">
      <div className="flex justify-between items-center">
        <p className="text-gray-800 text-sm font-medium">Profile Completion</p>
        <p className="text-[#663399] text-sm font-bold">50%</p>
      </div>
      <div className="h-2 w-full rounded-full bg-[#EEF2FF]">
        <div
          className="h-full rounded-full bg-[#663399]"
          style={{ width: "50%" }}
        />
      </div>
    </div>
  );
};

// Career Status Card Component
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

// Form Section Component
const AccountSection = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <section>
      <h2 className="text-gray-900 text-xl font-bold border-b border-gray-200 pb-3 mb-6">
        Section 1: Account Basics
      </h2>
      <div className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-800">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 size-5" />
            <input
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#663399] focus:ring-2 focus:ring-[#663399]/20 outline-none transition-all text-gray-900"
              placeholder="example@careerdev.com"
              type="email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-800">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 size-5" />
              <input
                className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#663399] focus:ring-2 focus:ring-[#663399]/20 outline-none transition-all text-gray-900"
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-800">
              Phone Number
            </label>
            <div className="flex">
              <div className="px-3 py-3 bg-[#EEF2FF] border border-r-0 border-gray-300 rounded-l-lg text-sm text-[#663399] font-medium">
                +1
              </div>
              <div className="relative flex-1">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 size-5" />
                <input
                  className="w-full pl-10 pr-4 py-3 rounded-r-lg border border-gray-300 bg-white focus:border-[#663399] focus:ring-2 focus:ring-[#663399]/20 outline-none transition-all text-gray-900"
                  placeholder="(555) 000-0000"
                  type="tel"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Career Snapshot Section Component
const CareerSnapshotSection = () => {
  const [selectedStatus, setSelectedStatus] = React.useState("job-seeker");

  return (
    <section>
      <h2 className="text-gray-900 text-xl font-bold border-b border-gray-200 pb-3 mb-6">
        Section 2: Career Snapshot
      </h2>
      <div className="space-y-8">
        <div className="space-y-4">
          <label className="text-sm font-semibold text-gray-800 block">
            Choose your current path to identify the best matching strategy
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CareerStatusCard
              icon={UserSearch}
              title="I am a Job Seeker"
              description="For those currently unemployed or searching. We'll focus on new openings and rapid placement."
              isSelected={selectedStatus === "job-seeker"}
              onClick={() => setSelectedStatus("job-seeker")}
            />

            <CareerStatusCard
              icon={TrendingUp}
              title="I am currently Employed"
              description="For those looking to advance or pivot. We'll focus on promotion paths and skill growth."
              isSelected={selectedStatus === "employed"}
              onClick={() => setSelectedStatus("employed")}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-800">
            What's your primary industry?
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 size-5" />
            <input
              className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#663399] focus:ring-2 focus:ring-[#663399]/20 outline-none transition-all text-gray-900"
              placeholder="Type to search industries..."
              type="text"
            />
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 size-5" />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-[#EEF2FF] text-[#663399] rounded-full text-xs font-medium">
              Technology
            </span>
            <span className="px-3 py-1 bg-[#FEE2E2] text-[#EA580C] rounded-full text-xs font-medium">
              Healthcare
            </span>
            <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] rounded-full text-xs font-medium">
              Finance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="px-8 py-6 border-t border-gray-200 bg-[#FDFCFB]">
      <div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-gray-700 uppercase tracking-widest">
        <a
          className="hover:text-[#663399] transition-colors flex items-center gap-1"
          href="#"
        >
          <HelpCircle className="size-3" /> Help Center
        </a>
        <a
          className="hover:text-[#663399] transition-colors flex items-center gap-1"
          href="#"
        >
          <Shield className="size-3" /> Privacy
        </a>
        <a
          className="hover:text-[#663399] transition-colors flex items-center gap-1"
          href="#"
        >
          <KeyRound className="size-3" /> Security
        </a>
        <span className="text-gray-600">© 2024 CareerDev Inc.</span>
      </div>
    </footer>
  );
};

// Main Form Component
const SignupForm = () => {
  const navigate = useNavigate();
  return (
    <main className="flex-1 overflow-y-auto no-scrollbar py-12 px-8 sm:px-12 md:px-24 bg-[#FDFCFB]">
      <div className="mx-auto max-w-200">
        <div className="mb-10">
          <h1 className="text-gray-900 text-4xl font-black leading-tight tracking-[-0.033em] mb-2">
            Join CareerDev
          </h1>
          <p className="text-[#663399] text-base font-medium">
            Step 1 of 2: Basics & Snapshot
          </p>
        </div>

        <ProgressBar />

        <form className="space-y-12">
          <AccountSection />
          <CareerSnapshotSection />

          <div className="pt-6 space-y-4">
            <button
              onClick={() => navigate("/goal-skills-onboarding")}
              className="w-full py-4 bg-[#663399] text-white font-bold rounded-xl hover:bg-[#6366F1] shadow-lg shadow-[#663399]/30 transition-all flex items-center justify-center gap-2"
              type="button"
            >
              <span>Continue to Profile Details</span>
              <ArrowRight className="size-5" />
            </button>

            <p className="text-center text-xs text-gray-700 leading-relaxed px-6">
              By signing up, you agree to our{" "}
              <a
                className="underline hover:text-[#663399] transition-colors text-gray-900 font-medium"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="underline hover:text-[#663399] transition-colors text-gray-900 font-medium"
                href="#"
              >
                Privacy Policy
              </a>
              . We value your data security.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

// Main App Component
const CareerDevSignup = () => {
  return (
    <div className="flex min-h-screen">
      <HeroSection />

      <div className="w-full lg:w-7/12 xl:w-1/2 flex flex-col bg-white">
        <MobileHeader />
        <SignupForm />
        <Footer />
      </div>
    </div>
  );
};

export default CareerDevSignup;
