import React, { useState, useEffect } from "react";
import "../styles/DashPomodoro.css";
import Down from "../assets/images/down 1.png";
import Up from "../assets/images/up 1.png";

export default function DashPomodoro() {
  const [currentSession, setCurrentSession] = useState(0);
  const [socket, setSocket] = useState(null);

  const handleSessionInc = () => {
    setCurrentSession((prevSession) => prevSession + 1);
  };

  const handleSessionDec = () => {
    setCurrentSession((prevSession) => (prevSession > 0 ? prevSession - 1 : 0));
  };

  const sessionHours = Math.floor(currentSession / 2);
  const sessionMinutes = (currentSession % 2) * 30;

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.8.116:81");
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    ws.onmessage = (message) => {
      console.log("Received: " + message.data);
    };

    ws.onerror = (error) => {
      console.error("WebSocket Error: ", error);
    };

    ws.onclose = () => {
      console.log("WebSocket Connection Closed");
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleStart = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(currentSession.toString());
      console.log("Sent: " + currentSession);
    } else {
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
    </>
  );
}
