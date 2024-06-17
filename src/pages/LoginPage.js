import React, { useState } from "react";
import LoginNavbar from "../components/LoginNavbar.js";
import LoginHome from "../components/LoginHome.js";
import Signin from "../components/Signin.js";
import Register from "../components/Register.js";
import "../styles/LoginPage.css";

export default function LoginPage() {
  const [currentComponent, setCurrentComponent] = useState("home");

  const handleSignin = () => {
    setCurrentComponent("signin");
  };

  const handleRegster = () => {
    setCurrentComponent("register");
  };

  let RenderedComponent;
  if (currentComponent === "home") {
    RenderedComponent = (
      <div className="login">
        <div className="container">
          <div className="overlap">
            <LoginNavbar onSignin={handleSignin}/>
          </div>
          <div className="overlap-group">
            <LoginHome onRegister={handleRegster}/>
          </div>
        </div>
      </div>
    );
  } else if (currentComponent === "signin") {
    RenderedComponent = <Signin onRegister={handleRegster}/>;
  } else if (currentComponent === "register") {
    RenderedComponent = <Register onSignin={handleSignin}/>;
  }

  return <>{RenderedComponent}</>;
}
