import React from "react";
import LoginNavbar from "../components/LoginNavbar";
import LoginHome from "../components/LoginHome";
import "../styles/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login">
      <div className="container">
        <div className="overlap">
          <LoginNavbar />
        </div>
        <div className="overlap-group">
          <LoginHome />
        </div>
      </div>
    </div>
  );
}
