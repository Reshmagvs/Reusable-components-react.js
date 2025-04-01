# Understanding Reusable components in React.js 

Output:

![Alt Text](https://github.com/Reshmagvs/Reusable-components-react.js/blob/main/reuse_js.png)

1. Setup a React Project in VS Code
````
npx create-react-app reusable-components
cd reusable-components
code . 
````
2. Create the Reusable Component
```
mkdir src/components
touch src/components/Button.js
```
3.Then, open src/components/Button.js and paste this:
```
import { useState } from "react";

const Button = ({ label, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      style={hover ? { ...styles.button, ...styles.hover } : styles.button}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const styles = {
  button: {
    background: "linear-gradient(90deg, #007BFF, #00C9FF)",
    color: "white",
    padding: "14px 24px",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    transition: "0.4s ease-in-out",
    boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.2)",
  },
  hover: {
    background: "linear-gradient(90deg, #0056b3, #0093E9)",
    transform: "scale(1.08)",
    boxShadow: "6px 6px 20px rgba(0, 0, 0, 0.3)",
  },
};

export default Button;
```
4. Use the Component in App.js
```
code src/App.js
```
5. Replace the contents with:
```
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
```
5. Styling : app.css
```
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```
6. Run the React App
```
npm start
```
