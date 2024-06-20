import React from "react";
import "../styles/DashProgress.css";
import ProgressChartArea from "./ProgressChartArea.js";
import ProgressChartBar from "./ProgressChartBar.js";
import ProgressChartLine from "./ProgressChartLine.js";

export default function DashProgress() {
  return (
    <>
      <div className="pro-overlap">
        <div className="pro-chart">
          <div className="chart-container">
            <ProgressChartBar />
          </div>
        </div>
        <div className="pro-rectangle">
          <div className="pro-text-wrapper-2">Highest Work Duration</div>
          <div className="pro-text-wrapper-4">&gt;</div>
          <div className="pro-text-wrapper-3">
            <span className="pro-time">5</span> Hours,{" "}
            <span className="pro-date">22 January</span>
          </div>
        </div>
      </div>
    </>
  );
}
