import React from "react";
import "../styles/DashboardHome.css";
import Memorygame from "../assets/images/memorygame.png";
import Dancingpad from "../assets/images/dancingpad.png";
import Buzzwire from "../assets/images/buzzwire.svg";
import Ellipse1 from "../assets/images/ellipse 1.png";
import Ellipse2 from "../assets/images/ellipse 2.png";
import Analytics from "../assets/images/analytics.png";

export default function DashboardHome({
  onSettingsClick,
  onStatsClick,
  onDanceClick,
  onMemoryClick,
  onBuzzClick,
}) {
  return (
    <>
      <div className="overlap-2 home-tiles">
        <div className="overlap-3">
          <img className="analytics" src={Analytics} alt="Process Monitoring" />
        </div>
        <div className="text-wrapper-03">Progress Monitoring</div>
        <p className="p">
          <span
            className="span"
            role="button"
            tabIndex={0}
            onClick={onStatsClick}
          >
            view stats
          </span>
        </p>
      </div>
      <div className="overlap-4 home-tiles">
        <p className="p">
          <span
            className="span"
            role="button"
            tabIndex={0}
            onClick={onSettingsClick}
          >
            settings
          </span>
        </p>
        <div className="text-wrapper-05">25 : 00</div>
        <div className="text-wrapper-06">Pomodoro Timer</div>
      </div>
      <div
        className="overlap-5 game-tiles"
        role="button"
        tabIndex={0}
        onClick={onBuzzClick}
      >
        <div className="text-wrapper-07">Buzzwire Game</div>
        <img className="ram-memory" alt="Ram memory" src={Buzzwire} />
      </div>
      <div
        className="overlap-6 game-tiles"
        role="button"
        tabIndex={0}
        onClick={onDanceClick}
      >
        <div className="text-wrapper-07">Dancing Game</div>
        <img className="grade" alt="Grade" src={Dancingpad} />
      </div>
      <div
        className="overlap-7 game-tiles"
        role="button"
        tabIndex={0}
        onClick={onMemoryClick}
      >
        <div className="text-wrapper-07">Memory Game</div>
        <img className="element-f" alt="Element f" src={Memorygame} />
      </div>
    </>
  );
}
