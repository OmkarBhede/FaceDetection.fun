import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import logo from "../icons/faceIcon.png";

function Logo() {
  return (
    <div className="logoDiv">
      <Tilt>
        <img src={logo} alt="logo" className="br4 shadow-4"></img>
      </Tilt>
    </div>
  );
}

export default Logo;
