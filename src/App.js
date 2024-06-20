// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

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
        <Route
          exact
          path="/"
          element={currentUser ? <Dashboard /> : <Dashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;
