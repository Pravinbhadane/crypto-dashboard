import React from "react";
import "./button.css";

function Button({ text, onClick, outlined }) {
  return (
    <div
      className={outlined ? "btn-outlined" : "btn"}
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

export default Button;