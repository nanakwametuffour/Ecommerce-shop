import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

export default function PrivateUser() {
  const userInfo  = useSelector((state) => state.Emart.userInfo);
  return userInfo ? <Outlet /> : <Navigate to="/sign-in"/>; 
}
