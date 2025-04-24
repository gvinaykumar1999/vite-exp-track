import React from "react";
import { Routes, Route } from "react-router-dom";
import Accounts from "./Accounts";
import LoginForm from "./LoginForm";
import LandingNav from "./LandingNav";
import SignupPage from "./SignupPage";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import LandingPage from "./LandingPage";

const App = () => {
  return (
    <div>
      <LandingNav />
      <div style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
