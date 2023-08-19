import React from "react";
import "./display.css";

const Display = (props) => {
  const display = props.display;

  return (
    <div className="display">
      <p className="result">{display}</p>
    </div>
  );
};

export default Display;
