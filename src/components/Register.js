import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase/firebaseConfig.js";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import "../styles/Register.css";
import Google from "../assets/images/google-icon.png";

export default function Register({ onSignin }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.email);
        localStorage.setItem("email", user.email);
        localStorage.setItem("name", getFirstName(user.displayName));
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
        localStorage.setItem("name", getFirstName(data.user.displayName));
        localStorage.setItem("profilepic", data.user.photoURL);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFirstName = (fullName) => {
    const parts = fullName.split(" ");
    return parts[0]; // Return the first part (first name)
  };
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
          <button className="reg-sign-in-btn" onClick={handleClick}>
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
            <span
              className="reg-text-wrapper-2"
              role="button"
              tabIndex={0}
              onClick={onSignin}
            >
              sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
