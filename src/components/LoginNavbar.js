import React from "react";
import "../styles/LoginNavbar.css";

export default function LoginNavbar() {
  return (
    <div>
      <div className="navbar">
        <a href="#" className="text-wrapper">
          Home
        </a>
        <a href="#" className="text-wrapper">
          About
        </a>
        <a href="#" className="text-wrapper">
          Contact
        </a>
        <a href="#" className="text-wrapper">
          FAQ
        </a>
      </div>
      <div className="game-mind">
        <div className="text-wrapper-2">GAME</div>
        <div className="text-wrapper-2">MIND</div>
      </div>
      <div className="sign-in">
        <button className="text-wrapper-3">Sign in</button>
      </div>
    </div>
  );
}
