import './App.css';
import Countdown from './components/countdown';
import React from 'react';
import ReactDOM from "react-dom/client";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePg from './pages/home/HomePg';
import Sponsor from './pages/sponsor/Sponsors'
import HelpOrgPg from './pages/help_org/HelpOrgPg';
import PastProjPg from './pages/past_proj/PastProjPg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePg/>} />
        <Route path="/sponsors" element={<Sponsor/>}/>
        <Route path="/helporganize" element={<HelpOrgPg/>} />
        <Route path="/pastProjects" element={<PastProjPg/>} />
      </Routes>
    </Router>
  );
}

export default App;
