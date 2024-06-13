import React from "react";
import ProfilePicture from "../assets/images/profilepicture.png";
import "../styles/DashboardNavbar.css";

export default function DashboardNavbar() {
  return (
    <>
      <div className="game-mind-0">
        <div className="text-wrapper-0">GAME</div>
        <div className="text-wrapper-0">MIND</div>
      </div>
      <a href="#">
        <img className="vector" alt="Vector" src={ProfilePicture} />
      </a>
    </>
  );
}
