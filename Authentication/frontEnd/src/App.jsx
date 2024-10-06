import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Dashboard from './Screens/Dashboard';
import AuthState from './Routes/AuthState';
import PrivRoute from './Routes/PrivRoute';


function App() {
  return (

      <Routes>
        <Route element={<AuthState/>}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Route>
        
        <Route element={<PrivRoute/>}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
       
      </Routes>

  );
}

export default App;
