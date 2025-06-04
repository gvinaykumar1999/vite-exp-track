import React, { useState } from "react";
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
import Profile from "./Profile";
import { CurrencyProvider } from "./CurrencyContext"; // adjust path
import IncomesPage from "./IncomesPage";
import ExpensesPage from "./ExpensesPage";
import Footer from "./Footer";

const App = () => {
  const [submittedData, setSubmittedData] = useState([]);
  return (
    <div>
      <CurrencyProvider>
        <LandingNav />
        <div style={{ paddingTop: "60px" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/accounts"
              element={
                <Accounts
                  submittedData={submittedData}
                  setSubmittedData={setSubmittedData}
                />
              }
            />
            <Route
              path="/incomespage"
              element={<IncomesPage submittedData={submittedData} />}
            />

            <Route
              path="/expensespage"
              element={<ExpensesPage submittedData={submittedData} />}
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/accounts" element={<Accounts />} />
          </Routes>
        </div>
      </CurrencyProvider>
    </div>
  );
};

export default App;
