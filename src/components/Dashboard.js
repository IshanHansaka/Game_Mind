import React from "react";
import "../styles/Dashboard.css";
import ProfilePicture from "../assets/images/profilepicture.png";
import Memorygame from "../assets/images/memorygame.png";
import Dancingpad from "../assets/images/dancingpad.png";
import Buzzwire from "../assets/images/buzzwire.svg";
import Ellipse1 from "../assets/images/ellipse 1.png";
import Ellipse2 from "../assets/images/ellipse 2.png";

export default function Dashboard() {
  return (
    <div className="home-dashboard">
      <div className="div">
        <div className="outter-overlap" />
        <div className="overlap">
          <div className="game-mind">
            <div className="text-wrapper">GAME</div>
            <div className="text-wrapper">MIND</div>
          </div>
          <img className="vector" alt="Vector" src={ProfilePicture} />
        </div>
        <div className="outter-overlap-group"></div>
        <div className="overlap-group">
          <div className="overlap-2">
            <div className="overlap-3">
              <img className="ellipse" alt="Ellipse" src={Ellipse1} />
              <img className="ellipse" alt="Ellipse2" src={Ellipse2} />
              <div className="text-wrapper-2">71%</div>
            </div>
            <div className="text-wrapper-03">Process Monitoring</div>
            <p className="p">
              <span className="span">view status</span>
            </p>
          </div>
          <div className="overlap-4">
            <p className="p">
              <span className="span">settings</span>
            </p>
            <div className="text-wrapper-5">25 : 00</div>
            <div className="text-wrapper-6">Pomodoro Timer</div>
          </div>
          <div className="overlap-5">
            <div className="text-wrapper-7">Buzzwire Game</div>
            <img className="ram-memory" alt="Ram memory" src={Buzzwire} />
          </div>
          <div className="overlap-6">
            <div className="text-wrapper-7">Dancing Game</div>
            <img className="grade" alt="Grade" src={Dancingpad} />
          </div>
          <div className="overlap-7">
            <div className="text-wrapper-7">Memory Game</div>
            <img className="element-f" alt="Element f" src={Memorygame} />
          </div>
        </div>
        <div className="overlap-group-2">
          <div className="rectangle" />
          <div className="text-wrapper-8">Hello, John !</div>
          <p className="text-wrapper-9">Nice to see you again</p>
          <div className="text-wrapper-10">Friday</div>
          <p className="element-jan">
            <span className="text-wrapper-11">22</span>
            <span className="text-wrapper-11">nd</span>
            <span className="text-wrapper-11"> Jan 2023</span>
          </p>
          <div className="text-wrapper-12">03:24PM</div>
        </div>
      </div>
    </div>
  );
}
