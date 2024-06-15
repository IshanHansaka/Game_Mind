import React, { useState } from "react";
import "../styles/Dashboard.css";
import DashboardNavbar from "../components/DashboardNavbar.js";
import DashboardMenu from "../components/DashboardMenu.js";
import DashboardHome from "../components/DashboardHome.js";
import DashPomodoro from "../components/DashPomodoro.js";
import DasboardStatus from "../components/DashboardStatus.js";
import DashProgress from "../components/DashProgress.js";
import Dancing from "../components/Dancing.js";
import Memory from "../components/Memory.js";
import Buzzwire from "../components/Buzzwire.js";

export default function Dashboard() {
  const [currentComponent, setCurrentComponent] = useState("home");
  const [currentMenu, setCurrentMenu] = useState("menu");

  const handleSettingsClick = () => {
    setCurrentComponent("pomodoro");
    setCurrentMenu("status");
  };

  const handleStatsClick = () => {
    setCurrentComponent("progress");
    setCurrentMenu("status");
  };

  const handleDashClick = () => {
    setCurrentComponent("home");
    setCurrentMenu("menu");
  };

  const handleDanceClick = () => {
    setCurrentComponent("dance");
    setCurrentMenu("status");
  };

  const handleMemoryClick = () => {
    setCurrentComponent("memory");
    setCurrentMenu("status");
  };

  const handleBuzzClick = () => {
    setCurrentComponent("buzz");
    setCurrentMenu("status");
  };

  let RenderedComponent;
  if (currentComponent === "home") {
    RenderedComponent = (
      <DashboardHome
        onSettingsClick={handleSettingsClick}
        onStatsClick={handleStatsClick}
        onDanceClick={handleDanceClick}
        onMemoryClick={handleMemoryClick}
        onBuzzClick={handleBuzzClick}
      />
    );
  } else if (currentComponent === "pomodoro") {
    RenderedComponent = <DashPomodoro />;
  } else if (currentComponent === "progress") {
    RenderedComponent = <DashProgress />;
  } else if (currentComponent === "dance") {
    RenderedComponent = <Dancing />;
  } else if (currentComponent === "memory") {
    RenderedComponent = <Memory />;
  } else if (currentComponent === "buzz") {
    RenderedComponent = <Buzzwire />;
  }

  let RenderedMenu;
  if (currentMenu === "menu") {
    RenderedMenu = <DashboardMenu />;
  } else if (currentMenu === "status") {
    RenderedMenu = <DasboardStatus onDashClick={handleDashClick} currentComponent={currentComponent}/>;
  }

  return (
    <div className="home-dashboard">
      <div className="container">
        <div className="outter-overlap" />
        <div className="overlap-0">
          <DashboardNavbar />
        </div>
        <div className="overlap-group-2">{RenderedMenu}</div>
        <div className="outter-overlap-group"></div>
        <div className="overlap-group">{RenderedComponent}</div>
      </div>
    </div>
  );
}
