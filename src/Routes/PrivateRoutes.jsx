import React, { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <InfinitySpin width="200" color="#4fa94d" />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location}></Navigate>;
};

export default PrivateRoutes;
