import ProtectedRoute from "@/components/ProtectedRoute";
import React from "react";

export default function dashboard() {
  return (
    <ProtectedRoute>
      <div className="w-full h-[90vh] text-xl font-[700] flex items-center justify-center">
        Dashboard
      </div>
    </ProtectedRoute>
  );
}
