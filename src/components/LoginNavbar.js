import React from "react";
import "../styles/LoginNavbar.css";

export default function LoginNavbar({onSignin}) {
  return (
    <>
      <div className="navbar">
        <a className="text-wrapper">
          Home
        </a>
        <a className="text-wrapper">
          About
        </a>
        <a className="text-wrapper">
          Contact
        </a>
        <a className="text-wrapper">
          FAQ
        </a>
      </div>
      <div className="game-mind">
        <div className="text-wrapper-2">GAME</div>
        <div className="text-wrapper-2">MIND</div>
      </div>
      <div className="sign-in">
        <button className="text-wrapper-3" onClick={onSignin}>Sign in</button>
      </div>
    </>
  );
}
