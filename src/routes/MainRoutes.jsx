import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProfileCreationMethod from "../page/ProfileCreationMethod";
import CareerDevSignup from "../page/CareerDevSignup";
import GoalsSkillsOnboarding from "../page/GoalsSkillsOnboarding";
import Roadmap from "../page/Roadmap";
import CareerTransitionHub from "../page/CareerTransitionHub";
import UploadResume from "../page/UploadResume";
import JobInsights from "../page/JobInsights";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../page/Dashboard";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/profile-creation-method"
          element={<ProfileCreationMethod />}
        />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route path="/sign-up" element={<CareerDevSignup />} />
        <Route path="/upload-resume" element={<UploadResume />} />
        <Route
          path="/goal-skills-onboarding"
          element={<GoalsSkillsOnboarding />}
        />
        <Route
          path="/career-hub"
          element={
            <MainLayout>
              <CareerTransitionHub />
            </MainLayout>
          }
        />
        <Route
          path="/roadmap"
          element={
            <MainLayout>
              <Roadmap />
            </MainLayout>
          }
        />
        <Route path="/job-insights" element={<JobInsights />} />
        <Route path="*" element={<Navigate to="/profile-creation-method" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
