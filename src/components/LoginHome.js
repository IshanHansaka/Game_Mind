import React from "react";
import "../styles/LoginHome.css";
import LoginPageImage from "../assets/images/LoginPageImage.png";

export default function LoginHome({onRegister}) {
  return (
    <>
      <img src={LoginPageImage} className="clip-online" alt="Login page" />
      <div className="register">
        <button className="text-wrapper-4" onClick={onRegister}>Register</button>
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
        The road to success is paved with focused effort and effective time
        management. But let&#39;s face it, staying concentrated for long
        stretches can be tough. That&#39;s where the Pomodoro Technique comes
        in!
      </p>
    </>
  );
}
