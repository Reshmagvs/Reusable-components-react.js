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