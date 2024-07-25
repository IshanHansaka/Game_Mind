import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Dancing.css";
import { rdb } from "../firebase/firebaseConfig.js";
import { ref, get, update } from "firebase/database";

export default function Dancing({ dance, danceTime, onWebSocketClose }) {
  const [socket, setSocket] = useState(null);
  const integers = [0, 1, 2, 3, 1, 2, 0, 3, 1, 2, 3, 0, 1, 3, 0, 2, 1, 3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [currentMessage, setCurrentMessage] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const seconds = Math.floor(danceTime / 1000);
  const [currentTime, setCurrentTime] = useState(seconds);
  const [isCountdown, setIsCountdown] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.8.153:81");
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

  // Handling received WebSocket messages
  useEffect(() => {
    if (currentMessage !== null) {
      sendRandomInteger();
      setCurrentMessage(null);
    }
  }, [currentMessage]);

  // Get HighScore from RDB
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

  // Update RDB node
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
    if (socket && socket.readyState === WebSocket.OPEN && dance) {
      startCountdown();
      const nextInteger = integers[currentIndex];
      socket.send(nextInteger.toString());
      setVisibleIndex(nextInteger);
      console.log("Sent: " + nextInteger);
      setCurrentIndex((currentIndex + 1) % integers.length);
    } else {
      toast.error("WebSocket is not connected or countdown is not active");
      console.log("WebSocket is not connected or countdown is not active");
    }
  };

  // Countdown
  const startCountdown = () => {
    if (!isCountdown) {
      setIsCountdown(true);
      const newAudio = new Audio("/song.mp3");
      newAudio.play();
      const timer = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timer);
            setIsCountdown(false);
            newAudio.pause();
            newAudio.currentTime = 0;
            if (socket) {
              socket.close();
              setSocket(null);
            }
            setTimeout(() => {
              onWebSocketClose();
            }, 3000); // Delay of 5 seconds
            return 0;
          }
        });
      }, 1000);
    }
  };

  // Convert seconds to formatted time 00:00
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const polygons = [
    {
      points: "0,200 200,50 200,125 400,125 400,275 200,275 200,350",
      className: "left",
    },
    {
      points: "400,200 200,50 200,125 0,125 0,275 200,275 200,350",
      className: "right",
    },
    {
      points: "200,0 50,200 125,200 125,400 275,400 275,200 350,200",
      className: "up",
    },
    {
      points: "200,400 50,200 125,200 125,0 275,0 275,200 350,200",
      className: "down",
    },
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
      <ToastContainer
        style={{
          width: "400px",
          fontSize: "25px",
        }}
      />
    </div>
  );
}
