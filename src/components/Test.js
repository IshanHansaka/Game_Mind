import React, { useEffect, useState } from "react";

const App = () => {
  const [socket, setSocket] = useState(null);
  const integers = [0, 1, 2, 3];

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

  const [visibleIndex, setVisibleIndex] = useState(null);
  
  const sendRandomInteger = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const randomInteger =
        integers[Math.floor(Math.random() * integers.length)];
      socket.send(randomInteger.toString());
      setVisibleIndex(randomInteger);
      console.log("Sent: " + randomInteger);
    } else {
      console.log("WebSocket is not connected");
    }
  };

  const polygons = [
    { points: "200,50 350,350 50,350", className: "up" },
    { points: "50,200 350,50 350,350", className: "left" },
    { points: "200,350 50,50 350,50", className: "down" },
    { points: "350,200 50,350 50,50", className: "right" },
  ];

  return (
    <div>
      <button onClick={sendRandomInteger}>Send Random Integer</button>
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
        </div>
      </div>
    </div>
  );
};

export default App;
