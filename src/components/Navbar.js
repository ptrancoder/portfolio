import React, {useState} from "react"; // { .. } "hook"
import logo from "../assets/metalComp.png";
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";
import { Button } from "@mui/material";

// React func's must start with an upper case  
function Navbar() {
  // State (react) --> Whenever the it's value is changed, it will re-render the website.
  // [name, func]
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks); // Toggle the bool
  };

  return (
    <div className = "navbar">
      <div className = "leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo}/>
        <div className = "hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
      <div className = "rightSide">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact Me</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}
export default Navbar
