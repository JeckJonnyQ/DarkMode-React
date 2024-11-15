import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="dark-mode">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainSection darkMode={darkMode} />
    </div>
  );
}

export default App;
