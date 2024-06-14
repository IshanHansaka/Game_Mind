import React from "react";
import "../styles/DashProgress.css";

export default function DashProgress() {
  return (
    <>
      <div className="pro-overlap">
        <div className="pro-chart" />
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
