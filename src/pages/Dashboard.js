import React from "react";
import "../styles/Dashboard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar.js";
import DashboardMenu from "../components/DashboardMenu.js";
import DashboardHome from "../components/DashboardHome.js";
import DashPomodoro from "../components/DashPomodoro.js";

export default function Dashboard() {
  const [currentComponent, setCurrentComponent] = useState("home");

  const handleSettingsClick = () => {
    setCurrentComponent("pomodoro");
  };

  return (
    <div className="home-dashboard">
      <div className="container">
        <div className="outter-overlap" />
        <div className="overlap-0">
          <DashboardNavbar />
        </div>
        <div className="overlap-group-2">
          <DashboardMenu />
        </div>
        <div className="outter-overlap-group"></div>
        <div className="overlap-group">
          <DashboardHome />
        </div>
      </div>
    </div>
  );
}
