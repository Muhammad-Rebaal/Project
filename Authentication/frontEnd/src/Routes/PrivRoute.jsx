import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivRoute = () => {
    return localStorage.getItem("authUser") ? <Outlet /> : <Navigate to={"/"} />;    
  }
  
export default PrivRoute
