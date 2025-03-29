import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div style={darkMode ? styles.darkContainer : styles.lightContainer}>
      <h1 style={styles.heading}>🚀 Reusable Component in React</h1>
      <Button label="Click Me" onClick={() => alert("Clicked!")} />
      <br />
      <button style={styles.themeButton} onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

const styles = {
  lightContainer: {
    textAlign: "center",
    marginTop: "50px",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.5s ease-in-out",
    background: "linear-gradient(135deg, #f8f9fa, #d6e4f0)",
  },
  darkContainer: {
    textAlign: "center",
    marginTop: "50px",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
    color: "white",
    transition: "all 0.5s ease-in-out",
    background: "linear-gradient(135deg, #1e1e1e, #333)",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
  },
  themeButton: {
    marginTop: "20px",
    background: "linear-gradient(90deg, #ffcc00, #ff8800)",
    color: "#333",
    padding: "12px 18px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    fontWeight: "bold",
    boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
  },
};

export default App;



