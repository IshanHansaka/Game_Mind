import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig.js"
import ProfilePicture from "../assets/images/profilepicture.png";
import "../styles/DashboardNavbar.css";

export default function DashboardNavbar() {
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="game-mind-0">
        <div className="text-wrapper-0">GAME</div>
        <div className="text-wrapper-0">MIND</div>
      </div>
      <div
        className="profile-pic"
        role="button"
        tabIndex={0}
        onClick={handleSignout}
      >
        <img className="vector" alt="Vector" src={ProfilePicture} />
      </div>
    </>
  );
}
