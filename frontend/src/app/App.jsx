import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../features/auth/Login';
import LeadsList from '../features/leads/LeadsList';

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/leads" element={token ? <LeadsList /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
