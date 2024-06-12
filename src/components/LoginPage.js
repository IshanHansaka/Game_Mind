import React from "react";
import LoginNavbar from "./LoginNavbar";
import LoginHome from "./LoginHome";
import "../styles/LoginPage.css";

export default function LoginPage() {
  return (
    <>
      <div className="overlap">
        <LoginNavbar />
      </div>
      <div className="overlap-group">
        <LoginHome />
      </div>
    </>
  );
}
