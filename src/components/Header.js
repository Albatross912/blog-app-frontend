import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";
import AddButton from "./AddButton";
export default function Header({ backgroundImage }) {
  const headerStyle = {
    backgroundImage: backgroundImage, // Set the background image here
  };

  return (
    <div className="container home-page">
      <Link className="newpost" to="/newpost">
        <AddButton />
      </Link>
      <header style={headerStyle}>
        {" "}
        {/* Apply the background image to the header */}
        <div className="header-container">
          <div className="profile-image"></div>
          <div className="title">Piyush Sharma</div>
          <div className="subtext">Welcome to my blog!</div>
        </div>
      </header>
    </div>
  );
}
