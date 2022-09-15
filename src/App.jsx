import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/NavBar/Navbar";
import { Routing } from "./navigation/Routing";
import Alert from "./components/alert/Alert";

function App() {
  // useState for dark mode
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode Has Been Enabled", "success");
    } else {
      setMode("light");
      showAlert("Light Mode Has Been Enabled", "success");
    }
  };
  if (mode === "light") {
    document.body.style.backgroundColor = "#8EC5FC";
    document.body.style.backgroundImage =
      "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)";
  }
  if (mode === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundImage =
      "none";
  }

  
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div className="app">
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routing mode={mode} showAlert={showAlert} />
    </div>
  );
}

export default App;
