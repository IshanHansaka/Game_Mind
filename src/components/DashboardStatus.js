import "../styles/DashboardStatus.css";

export default function DashboardStatus({ onDashClick, currentComponent }) {
  const renderStatus = () => {
    switch (currentComponent) {
      case "pomodoro":
        return "Pomodoro Timer";
      case "progress":
        return "Progress Monitoring";
      case "dance":
        return "Dancing Game";
      case "memory":
        return "Memory Game";
      case "buzz":
        return "Buzzwire Game";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="dashboard-pomodoro">
        <span
          className="status-span"
          onClick={onDashClick}
          role="button"
          tabIndex={0}
        >
          Dashboard
        </span>{" "}
        &gt; <span>{renderStatus()}</span>
      </div>
    </>
  );
}
