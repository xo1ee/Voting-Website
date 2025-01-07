"use client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home"
import Voting from "./pages/voting"
import AboutUs from "./pages/about_us"


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Voting" element={<Voting />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}
