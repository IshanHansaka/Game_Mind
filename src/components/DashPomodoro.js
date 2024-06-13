import React from "react";
import "../styles/DashPomodoro.css";
import Down from "../assets/images/down 1.png";
import Up from "../assets/images/up 1.png";

export default function DashboardPomodoro() {
  return (
    <>
      <div className="pomo-rectangle-2">
        <div className="pomo-text-wrapper-3">
          <p>Time (Duration)</p>
        </div>
        <div className="pomo-settings">
          <div className="pomo-rectangle-3">
            <div className="pomo-text-wrapper-2">
              <p>
                <span className="pomo-hour">02</span> :{" "}
                <span className="pomo-min">30</span>
              </p>
            </div>
            <div className="up-down">
              <button className="btn-up">
                <img className="pomo-up" alt="Down" src={Up} />
              </button>
              <button className="btn-down">
                <img className="pomo-down" alt="Down" src={Down} />
              </button>
            </div>
          </div>
          <div className="pomo-rectangle-4">
            <button className="btn-start">
              <div className="pomo-text-wrapper-4">Start</div>
            </button>
          </div>
        </div>
        <div className="pomo-p">
          <p>
            To get started, please specify the duration for your focus sessions.
            You can choose from the time menu provided.
          </p>
        </div>
      </div>
    </>
  );
}
