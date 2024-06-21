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
      </div>
    </>
  );
}
