import React from 'react';
import {Link} from "react-router-dom";
import backgroundImage from "../assets/r34.jpg"
import "../styles/Home.css";

function Home() {
  return (
    <div className = "home">
      <div 
      className = "headerContainer" 
      style={{ backgroundImage: `url(${backgroundImage})`}}>
        <h1>Phillip Tran</h1>
        <p>My Portfolio</p> 
        <Link to ="contact">
          <button>Visit my Linkedin!</button>
        </Link>
      </div>
    </div>
  ) 
}

export default Home
