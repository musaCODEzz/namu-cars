import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Bookings from '../pages/Bookings';
import SellCars from '../pages/SellCars';
import Settings from '../pages/Settings';

const Router = () => {
  return (
    <Routes>
        <Route 
            path="/" 
            element={<Navigate to="/dashboard" element={<Dashboard />} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/sell-cars" element={<SellCars />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
  )
    
 
   
}

export default Router