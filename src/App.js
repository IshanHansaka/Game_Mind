import "./App.css";
import Dashboard from "./components/Dashboard.js";
import LoginPage from "./components/LoginPage.js";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <LoginPage />
        </div>
      </div>
    </>
  );
}

export default App;
