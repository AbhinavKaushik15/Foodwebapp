import ProtectedRoute from "@/components/ProtectedRoute";
import React from "react";

const admin = () => {
  return <ProtectedRoute>Admin</ProtectedRoute>;
};

export default admin;
