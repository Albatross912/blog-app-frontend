import React from "react";
import "../Styles/Header.css";

export default function Header() {
  return (
    <div class="container home-page">
      <header>
        <div className="header-container">
          <div className="profile-image"></div>
          <div className="title">Nazariy Dumanskyy</div>
          <div className="subtext">Welcome to my blog!</div>
        </div>
      </header>
    </div>
  );
}
