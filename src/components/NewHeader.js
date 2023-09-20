import React from "react";
import "../Styles/NewHeader.css";
export default function NewHeader({ backgroundImage }) {
  return (
    <div
      className="homepage" 
    >
      <img className="header_s" src={backgroundImage} alt="Header" />{" "}
    </div>
  );
}
