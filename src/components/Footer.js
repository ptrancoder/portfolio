import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn"
// Tags can self close when nothing goes inside.
function Footer() {
  return (
    <div className='footer'>
      <div className = "socialMedia">
        <LinkedInIcon /> 
      </div>
      <p> &copy; 2024 philliptran.io</p>

    </div>
  )
}

export default Footer
