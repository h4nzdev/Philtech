import React, { useState } from "react";
import {
  Mail,
  Lock,
  Phone,
  Eye,
  EyeOff,
  ArrowRight,
  UserSearch,
  TrendingUp,
} from "lucide-react";
import CareerStatusCard from "./CareerStatusCard";

const AccountSection = ({ formData, updateFormData, setActiveTab }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-gray-900 text-2xl font-bold mb-2">
          Create Your Account
        </h2>
        <p className="text-gray-500">
          Start your career journey with us. All information is secure and
          encrypted.
        </p>
      </div>

      <div className="space-y-6">
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
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              required
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
                value={formData.password}
                onChange={(e) => updateFormData("password", e.target.value)}
                required
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
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-semibold text-gray-800 block">
            Choose your current path
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CareerStatusCard
              icon={UserSearch}
              title="Job Seeker"
              description="Currently unemployed or searching for new opportunities"
              isSelected={formData.careerStatus === "job-seeker"}
              onClick={() => updateFormData("careerStatus", "job-seeker")}
            />
            <CareerStatusCard
              icon={TrendingUp}
              title="Employed"
              description="Looking to advance or pivot in your current career"
              isSelected={formData.careerStatus === "employed"}
              onClick={() => updateFormData("careerStatus", "employed")}
            />
          </div>
        </div>

        <button
          onClick={() => setActiveTab(2)}
          className="w-full py-4 bg-[#663399] text-white font-bold rounded-xl hover:bg-[#6366F1] shadow-lg shadow-[#663399]/30 transition-all flex items-center justify-center gap-2"
          type="button"
        >
          <span>Continue to Basic Information</span>
          <ArrowRight className="size-5" />
        </button>
      </div>
    </section>
  );
};

export default AccountSection;
