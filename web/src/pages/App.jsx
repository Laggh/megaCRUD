import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { useState, useEffect} from 'react'


import Ping from "./Ping.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/ping" element={<Ping />} />
      </Routes>
    </Router>
  );
} 

export default App
