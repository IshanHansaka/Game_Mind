import React from "react";
import "../styles/Signin.css";
import Google from "../assets/images/google-icon.png";

export default function Signin() {
  return (
    <div className="sin-container">
      <div className="sin-rectangle">
        <div className="sin-text-wrapper">
          <p>Sign in to your account</p>
        </div>
        <div className="sin-sign-in">
          <div className="sin-space"/>
          <button className="sin-sign-in-btn">
            <img
              className="sin-logo-google-icon-PNG"
              alt="Logo google icon PNG"
              src={Google}
            />
            <div className="sin-text-wrapper-3">Sign in with Google</div>
          </button>
        </div>
        <div className="sin-already-have-an">
          <p>
            <span className="sin-span">New to Game Mind? </span>
            <span className="sin-text-wrapper-2">
              <a href="#">create account</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
