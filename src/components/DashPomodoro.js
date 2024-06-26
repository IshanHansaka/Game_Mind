import React, { useState } from "react";
import "../styles/DashPomodoro.css";
import Down from "../assets/images/down 1.png";
import Up from "../assets/images/up 1.png";

export default function DashPomodoro() {
  const [currentSession, setCurrentSession] = useState(25);

  const handleSessionInc = () => {
    setCurrentSession((prevSession) => prevSession + 5);
  };

  const handleSessionDec = () => {
    setCurrentSession((prevSession) =>
      prevSession > 25 ? prevSession - 5 : 25
    );
  };

  const sessionHours = Math.floor(currentSession / 60);
  const sessionMinutes = currentSession % 60;

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
                <span className="pomo-hour">
                  {sessionHours.toString().padStart(2, "0")}
                </span>
                :
                <span className="pomo-min">
                  {sessionMinutes.toString().padStart(2, "0")}
                </span>
              </p>
            </div>
            <div className="up-down">
              <button className="btn-up" onClick={handleSessionInc}>
                <img className="pomo-up" alt="Up" src={Up} />
              </button>
              <button className="btn-down" onClick={handleSessionDec}>
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
            To get started, please specify the duration for your focus <span>Time in
            Minutes</span>. You can choose from the time menu provided.
          </p>
        </div>
      </div>
    </>
  );
}
