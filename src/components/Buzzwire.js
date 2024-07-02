import React, { useState, useEffect } from "react";
import { rdb } from "../firebase/firebaseConfig.js";
import { ref, get} from "firebase/database";
import "../styles/Memory.css";

export default function Memory() {
  const [highScore, setHighScore] = useState(0);

  //get HighScore from RDB
  useEffect(() => {
    const fetchHighScore = async () => {
      const dbRef = ref(rdb, "highScore/");
      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setHighScore(data.buzzwire);
          console.log("Fetched high score: " + data.buzzwire);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching high score:", error);
      }
    };

    fetchHighScore();
  }, []);

  return (
    <div className="mem-container">
      <div className="mem-rectangle-2">
        <div className="mem-text-wrapper-2">
          <div className="mem-title">Highest Score</div>
        </div>
        <div className="mem-text-wrapper-3">
          <p className="mem-highscore">{highScore}</p>
        </div>
      </div>
    </div>
  );
}
