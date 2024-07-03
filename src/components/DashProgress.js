import React from "react";
import "../styles/DashProgress.css";
import ProgressChartBar from "./ProgressChartBar.js";
import ProgressChartLine from "./ProgressChartLine.js";
import ProgressChartArea from "./ProgressChartArea.js";

export default function DashProgress() {
  return (
    <>
      <div className="pro-overlap">
        <div className="pro-chart">
          <div className="chart-container">
            <ProgressChartArea />
          </div>
        </div> 
      </div>
    </>
  );
}
