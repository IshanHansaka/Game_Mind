import React, { useState, useEffect } from "react";
import "../styles/Dancing.css";

export default function Dancing() {
  const [socket, setSocket] = useState(null);
  const integers = [0, 1, 2, 3, 2, 1, 0, 3, 1, 2, 0, 3, 0, 1, 3, 0, 2, 1, 2, 0];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [currentMessage, setCurrentMessage] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.8.153:81");
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    ws.onmessage = (message) => {
      console.log("Received: " + message.data);
      setCurrentMessage(message.data); // Update currentMessage state
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

  useEffect(() => {
    if (currentMessage !== null) {
      sendRandomInteger();
      setCurrentMessage(null); // Reset currentMessage after processing
    }
  }, [currentMessage]); // Only re-run when currentMessage changes

  const sendRandomInteger = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const nextInteger = integers[currentIndex];
      socket.send(nextInteger.toString());
      setVisibleIndex(nextInteger);
      console.log("Sent: " + nextInteger);
      setCurrentIndex((currentIndex + 1) % integers.length);
    } else {
      console.log("WebSocket is not connected");
    }
  };

  const polygons = [
    { points: "50,200 350,50 350,350", className: "left" },
    { points: "350,200 50,350 50,50", className: "right" },
    { points: "200,50 350,350 50,350", className: "up" },
    { points: "200,350 50,50 350,50", className: "down" },
  ];

  return (
    <div className="danc-container">
      <div className="danc-rectangle-2">
        <div className="danc-rectangle-3">
          <svg width="400" height="400">
            {polygons.map((polygon, index) => (
              <polygon
                key={index}
                points={polygon.points}
                style={{ display: visibleIndex === index ? "block" : "none" }}
              />
            ))}
          </svg>
        </div>
        <div className="danc-rectangle-4">
          <div className="danc-div-wrapper">
            <button className="danc-startbtn" onClick={sendRandomInteger}>
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
