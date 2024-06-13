import React from "react";
import "../styles/DashboardHome.css";
import Memorygame from "../assets/images/memorygame.png";
import Dancingpad from "../assets/images/dancingpad.png";
import Buzzwire from "../assets/images/buzzwire.svg";
import Ellipse1 from "../assets/images/ellipse 1.png";
import Ellipse2 from "../assets/images/ellipse 2.png";

export default function DashboardHome() {
  return (
    <>
      <div className="overlap-2 home-tiles">
        <div className="overlap-3">
          <img className="ellipse" alt="Ellipse" src={Ellipse1} />
          <img className="ellipse" alt="Ellipse2" src={Ellipse2} />
          <div className="text-wrapper-02">71%</div>
        </div>
        <div className="text-wrapper-03">Process Monitoring</div>
        <p className="p">
          <span className="span">
            <a href="#">view status</a>
          </span>
        </p>
      </div>
      <div className="overlap-4 home-tiles">
        <p className="p">
          <span className="span">
            <a href="#">settings</a>
          </span>
        </p>
        <div className="text-wrapper-05">25 : 00</div>
        <div className="text-wrapper-06">Pomodoro Timer</div>
      </div>
      <a href="#">
      <div className="overlap-5 game-tiles">
        <div className="text-wrapper-07">Buzzwire Game</div>
        <img className="ram-memory" alt="Ram memory" src={Buzzwire} />
      </div>
      </a>
      <a href="#">
        <div className="overlap-6 game-tiles">
          <div className="text-wrapper-07">Dancing Game</div>
          <img className="grade" alt="Grade" src={Dancingpad} />
        </div>
      </a>
      <a href="#">
      <div className="overlap-7 game-tiles">
        <div className="text-wrapper-07">Memory Game</div>
        <img className="element-f" alt="Element f" src={Memorygame} />
      </div>
      </a>
    </>
  );
}
