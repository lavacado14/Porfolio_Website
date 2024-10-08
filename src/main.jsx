/*
  File: main.jsx
  Student's Name: Jamil Ibrahimi
  Student ID: 301377159
  Date: 25/09/2024

  Description:
  This file is the main entry point of the React application. It configures the routing for different pages and renders the Navbar, Footer, and other components based on the current route.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './myProjects.jsx';
import Services from './myServices.jsx';
import ContactMe from './ContactMe.jsx';
import './index.css';

// Define routing configuration
const App = () => (
  <div id="root">
    <Navbar />
    <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);