import React from 'react';
import {Link} from "react-router-dom";
import backgroundImage from "../assets/r34.jpg"
import "../styles/Home.css";
import "../styles/Footer.css";


function Home() {
  return (
    <div className = "home" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '40%', backgroundPosition: 'right bottom'}}>
      <div className = "headerContainer" >
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

// npm start