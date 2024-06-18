import React, { useEffect, useState } from "react";
import "../styles/DashboardMenu.css";

export default function DashboardMenu() {
  const userName = localStorage.getItem("name") || "John";

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const options = { weekday: "long", year: "numeric", month: "short", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  const formattedTime = currentDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  const day = currentDate.getDate();
  const monthYear = currentDate.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  const daySuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  return (
    <>
      <div className="rectangle" />
      <div className="text-wrapper-8">
        Hello, <span>{userName}</span>!
      </div>
      <p className="text-wrapper-9">Nice to see you again</p>
      <div className="text-wrapper-10">{formattedDate.split(" ")[0]}</div>
      <p className="element-jan">
        <span className="text-wrapper-11">{day}</span>
        <span className="text-wrapper-11">{daySuffix(day)}</span>
        <span className="text-wrapper-11"> {monthYear}</span>
      </p>
      <div className="text-wrapper-12">{formattedTime}</div>
    </>
  );
}
