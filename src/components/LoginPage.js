import React from "react";
import "../styles/LoginPage.css";
import LoginPageImage from "../assets/images/LoginPageImage.png";

export default function LoginPage() {
  return (
    <>
      <div className="logging">
        <div className="container">
          <div className="overlap">
            <div className="navbar">
              <a href="#" className="text-wrapper">Home</a>
              <a href="#" className="text-wrapper">About</a>
              <a href="#" className="text-wrapper">Contact</a>
              <a href="#" className="text-wrapper">FAQ</a>
            </div>
            <div className="game-mind">
              <div className="text-wrapper-2">GAME</div>
              <div className="text-wrapper-2">MIND</div>
            </div>
            <div className="sign-in">
              <button className="text-wrapper-3">Sign in</button>
            </div>
          </div>
          <div className="overlap-group">
            <img src={LoginPageImage} className="clip-online" alt="Login page"
            />
            <div className="register">
              <div className="text-wrapper-4">Register</div>
            </div>
            <p className="lets-begin-the">
              <span className="span">Lets begin the</span>
              <span className="text-wrapper-5">&nbsp;</span>
              <span className="span">
                journey
                <br />
                to the{" "}
              </span>
              <span className="text-wrapper-6">success</span>
            </p>
            <p className="the-road-to-success">
              The road to success is paved with focused effort and effective
              time management. But let&#39;s face it, staying concentrated for
              long stretches can be tough. That&#39;s where the Pomodoro
              Technique comes in!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
