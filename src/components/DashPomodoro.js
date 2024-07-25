import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/DashPomodoro.css";
import Down from "../assets/images/down 1.png";
import Up from "../assets/images/up 1.png";

export default function DashPomodoro({ socket }) {
  const [currentSession, setCurrentSession] = useState(0);

  const handleSessionInc = () => {
    setCurrentSession((prevSession) => prevSession + 1);
  };

  const handleSessionDec = () => {
    setCurrentSession((prevSession) => (prevSession > 0 ? prevSession - 1 : 0));
  };

  const sessionHours = Math.floor(currentSession / 2);
  const sessionMinutes = (currentSession % 2) * 30;

  const handleStart = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(currentSession.toString());
      console.log("Sent: " + currentSession);
    } else {
      toast.error("WebSocket is not connected");
      console.log("WebSocket is not connected");
    }
  };
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
            <button className="btn-start" onClick={handleStart}>
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
      <ToastContainer />
    </>
  );
}
