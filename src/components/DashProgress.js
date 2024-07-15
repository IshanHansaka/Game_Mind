import React from "react";
import "../styles/DashProgress.css";
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
