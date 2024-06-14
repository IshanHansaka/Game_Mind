import React from "react";
import "../styles/Dashboard.css";
import DashboardNavbar from "./DashboardNavbar";
import DashboardMenu from "./DashboardMenu";
import DashboardHome from "./DashboardHome";
import DashboardStatus from "./DashboardStatus";
import DashPomodoro from "./DashPomodoro.js";
import DashProgress from "./DashProgress.js";
import Dancing from "./Dancing.js";
import Memory from "./Memory.js";
import Buzziwre from "./Buzzwire.js";

export default function Dashboard() {
  return (
    <div className="home-dashboard">
      <div className="container">
        <div className="outter-overlap" />
        <div className="overlap-0">
          <DashboardNavbar />
        </div>
        <div className="overlap-group-2">
          <DashboardStatus />
        </div>
        <div className="outter-overlap-group"></div>
        <div className="overlap-group">
          <Buzziwre />
        </div>
      </div>
    </div>
  );
}
