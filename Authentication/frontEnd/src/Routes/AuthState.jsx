import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AuthState = () => {
    return !localStorage.getItem("authUser") ? <Outlet /> : <Navigate to={"/dashboard"} />;  
  }
  
export default AuthState
