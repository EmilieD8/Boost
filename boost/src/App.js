import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Onboarding from './pages/Onboarding';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import Community from './pages/Community'
// import Test from './pages/Test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/community" element={<Community/>} />
      </Routes>
    </Router>
  );
}

export default App;
