import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase/firebaseConfig.js";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import "../styles/Signin.css";
import Google from "../assets/images/google-icon.png";

export default function Signin({ onRegister }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.email);
        localStorage.setItem("email", user.email);
        localStorage.setItem("name", user.displayName);
        localStorage.setItem("profilepic", user.photoURL);
        window.location.reload();
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        localStorage.removeItem("profilepic");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    if (!currentUser) {
      provider.setCustomParameters({ prompt: "select_account" });
    }

    signInWithPopup(auth, provider)
      .then((data) => {
        setCurrentUser(data.user.email);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("name", data.user.displayName);
        localStorage.setItem("profilepic", data.user.photoURL);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sin-container">
      <div className="sin-rectangle">
        <div className="sin-text-wrapper">
          <p>Sign in to your account</p>
        </div>
        <div className="sin-sign-in">
          <div className="sin-space" />
          <button className="sin-sign-in-btn" onClick={handleClick}>
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
            <span
              className="sin-text-wrapper-2"
              role="button"
              tabIndex={0}
              onClick={onRegister}
            >
              create account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
