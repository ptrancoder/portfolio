import React from "react";
import logo from "../assets/metalComp.png";
import {Link} from "react-router-dom";
function navbar() {
  return (
    <div className = "navbar">
      <div className = "leftSide">
        <img src={logo}/>
      </div>
      <div className = "rightSide">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact Me</Link>

      </div>
    </div>
  )
}

export default navbar
