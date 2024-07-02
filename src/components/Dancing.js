import React, { useState, useEffect } from "react";
import "../styles/Dancing.css";
import { rdb } from "../firebase/firebaseConfig.js";
import { ref, get, update } from "firebase/database";

export default function Dancing() {
  const [socket, setSocket] = useState(null);
  const integers = [0, 1, 2, 3, 1, 2, 0, 3, 1, 2, 3, 0, 1, 3, 0, 2, 1, 3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [currentMessage, setCurrentMessage] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentTime, setCurrentTime] = useState(60);
  const [isCountdown, setIsCountdown] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.8.154:81");
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    ws.onmessage = (message) => {
      console.log("Received: " + message.data);
      setCurrentScore((prevScore) => prevScore + 1);
      setCurrentMessage(message.data);
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

  //  handling received WebSocket messages
  useEffect(() => {
    if (currentMessage !== null) {
      sendRandomInteger();
      setCurrentMessage(null);
    }
  }, [currentMessage]);

  //get HighScore from RDB
  useEffect(() => {
    const fetchHighScore = async () => {
      const dbRef = ref(rdb, "highScore/");
      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setHighScore(data.dance);
          console.log("Fetched high score: " + data.dance);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching high score:", error);
      }
    };

    fetchHighScore();
  }, []);

  // Update high score if current score exceeds it
  useEffect(() => {
    if (currentScore > highScore) {
      updateHighScore(currentScore);
    }
  }, [currentScore]);

  //update RDB node
  const updateHighScore = (score) => {
    const dbRef = ref(rdb, "highScore/");
    const updatedScore = { dance: score };
    update(dbRef, updatedScore)
      .then(() => {
        console.log("High score updated successfully");
        setHighScore(score);
      })
      .catch((error) => {
        console.error("Error updating high score:", error);
      });
  };

  const sendRandomInteger = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      startCountdown();
      const nextInteger = integers[currentIndex];
      socket.send(nextInteger.toString());
      setVisibleIndex(nextInteger);
      console.log("Sent: " + nextInteger);
      setCurrentIndex((currentIndex + 1) % integers.length);
    } else {
      console.log("WebSocket is not connected or countdown is not active");
    }
  };

  //countdown
  const startCountdown = () => {
    if (!isCountdown) {
      setIsCountdown(true);
      const timer = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timer);
            setIsCountdown(false);
            if (socket) {
              socket.close();
              setSocket(null);
            }
            return 0;
          }
        });
      }, 1000);
    }
  };

  //convert seconds to formated time 00:00
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
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
                className={polygon.className}
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
          <div className="danc-time">
            <p className="danc-title">Time</p>
            <p>:</p>
            <span className="danc-text-wrapper-6">
              {formatTime(currentTime)}
            </span>
          </div>
          <div className="danc-score">
            <p className="danc-title">Score</p>
            <p>:</p>
            <span className="danc-text-wrapper-4">{currentScore}</span>
          </div>
          <div className="danc-h-score">
            <p className="danc-title">H.Score</p>
            <p>:</p>
            <span className="danc-text-wrapper-5">{highScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
