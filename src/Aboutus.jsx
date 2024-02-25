import React from 'react'
import about from "./New folder/donar.png"
import Navbarr from './Navbarr'
function Aboutus() {
  return (
    <div>
       <div >
  
  <>
    <div className="container">
      <Navbarr/>
      <header className="header">
        <div className="content">
          <h1><span>About Us</span><br /></h1>
          <p>
            The MVV NGO is the Non-Government Organization which provide blood donation and organ donation direct to the customers and doners with the aggrecation of NGO. The NGO is Organized by the Founders Manikavasakar, Vengadeshwaran and Vignesh. Which was focus to deliver Organs without any interrupts or extra fee.
          </p>
        </div>
        <div className="image">
          <span className="image__bg"></span>
          <img src={about} alt="header image" />
        </div>
      </header>
    </div>
    <footer>
      <p>&copy; 2024 MVV NGO. All rights reserved.</p>
    </footer>
  </>
</div>

    </div>
  )
}

export default Aboutus