import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProfileCreationMethod from "../page/ProfileCreationMethod";
import DovetailSignup from "../page/CareerDev/DovetailSignup";
import Roadmap from "../page/MainPage/Results/Roadmap";
import CareerTransitionHub from "../page/MainPage/CareerTransitionHub";
import UploadResume from "../page/UploadResume";
import JobInsights from "../page/MainPage/Results/JobInsights";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../page/MainPage/Dashboard";
import UserProfile from "../page/MainPage/UserProfile";
import CareerEvolutionTree from "../page/MainPage/Results/CareerEvolutionTree";
import CourseDetailView from "../page/MainPage/CourseDetailView";

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
        <Route
          path="/user-profile"
          element={
            <MainLayout>
              <UserProfile />
            </MainLayout>
          }
        />
        <Route path="/sign-up" element={<DovetailSignup />} />
        <Route path="/upload-resume" element={<UploadResume />} />
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
        <Route
          path="/course-detail"
          element={
            <MainLayout>
              <CourseDetailView />
            </MainLayout>
          }
        />
        <Route
          path="/career-tree"
          element={
            <MainLayout>
              <CareerEvolutionTree />
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
