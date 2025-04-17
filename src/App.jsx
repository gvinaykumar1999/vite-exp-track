import React from "react";
import { Routes, Route } from "react-router-dom";
import Accounts from "./Accounts";
import LoginForm from "./LoginForm";
import LandingNav from "./LandingNav";
import SignupPage from "./SignupPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingNav />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default App;
