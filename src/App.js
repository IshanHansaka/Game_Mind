// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import Test from "./components/Test.js";
import Dancing from "./components/Dancing.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setCurrentUser(email);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
