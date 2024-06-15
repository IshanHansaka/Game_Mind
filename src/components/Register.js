import React from "react";
import "../styles/Register.css";
import Google from "../assets/images/google-icon.png";

export default function Register() {
  return (
    <div className="reg-container">
      <div className="reg-rectangle">
        <div className="reg-text-wrapper">
          <p>Create your Game Mind account</p>
        </div>
        <div className="reg-p">
          <p>
            By continuing, you agree to Game Mind’s Terms of Service and Privacy
            Policy
          </p>
        </div>
        <div className="reg-sign-in">
          <button className="reg-sign-in-btn">
            <img
              className="reg-logo-google-icon-PNG"
              alt="Logo google icon PNG"
              src={Google}
            />
            <div className="reg-text-wrapper-3">Sign up with Google</div>
          </button>
        </div>
        <div className="reg-already-have-an">
          <p>
            <span className="reg-span">Already have an account? </span>
            <span className="reg-text-wrapper-2">
              <a href="#">sign in</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
