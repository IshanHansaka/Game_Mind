import React from "react";
import "../styles/Dancing.css";
export default function Dancing() {
  return (
    <div className="danc-container">
      <div className="danc-rectangle-2">
        <div className="danc-rectangle-3" />
        <div className="danc-rectangle-4">
          <div className="danc-div-wrapper">
            <button className="danc-startbtn">
              <div className="danc-text-wrapper-2">Start</div>
            </button>
          </div>
          <div className="danc-score">
            <p className="danc-scoretitle">Score&nbsp;&nbsp;&nbsp;&nbsp;:</p>
            <span className="danc-text-wrapper-4">09</span>
          </div>
          <div className="danc-h-score">
            <p className="danc-h-scoretitle">H.Score:</p>
            <span className="danc-text-wrapper-5">29</span>
          </div>
        </div>
      </div>
    </div>
  );
}
