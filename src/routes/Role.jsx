import React, { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import MainRoutes from "./MainRoutes";

const Role = () => {
  const { user } = useContext(AuthenticationContext);

  if (user) return <MainRoutes />;
  return null;
};

export default Role;
