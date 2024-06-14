import React from "react";
import "../styles/Memory.css";

export default function Memory() {
  return (
    <div className="mem-container">
      <div className="mem-rectangle-2">
        <div className="mem-text-wrapper-2">
          <div className="mem-title">Highest Score</div>
        </div>
        <div className="mem-text-wrapper-3">
          <p className="mem-highscore">250</p>
        </div>
      </div>
    </div>
  );
}
