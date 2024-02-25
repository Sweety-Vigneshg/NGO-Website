import React from 'react'
import contact from "./New folder/con3.webp"
import Navbarr from './Navbarr'
function ContactUs() {
  return (
    <div>
      <div className="container">
      <Navbarr/>
      <header className="header">
        <div className="content">
          <h1><span>Contact Us</span><br /></h1>
          <p>
            The MVV Non-Government Organization provides Blood donation and Organ donation direct to the customers and doners. The NGO is Organized by the Founders Manikavasakar, Vengadeshwaran and Vignesh. Which was focus to deliver Organs without any interrupts or extra fee. For more details contact..
          </p>
          <h3> Our Teams</h3>
          <a style={{textDecoration:"none",color:"grey",fontSize:"30px",fontWeight:"400"}} href='mailto:batchamanic960@gmail.com'>
                Mr.Manikavasakar.
          </a><br/>
          <a style={{textDecoration:"none",color:"grey",fontSize:"30px",fontWeight:"400"}} href='mailto:vengadesh@gmail.com'>
                Mr.Vengadeshwaran.
          </a><br></br>
          <a style={{textDecoration:"none",color:"grey",fontSize:"30px",fontWeight:"400"}} href='mailto:vickstft@gmail.com'>
               Mr.Vignesh.
          </a>

        </div>
        <div className="image">
          <span className="image__bg"></span>
          <img src={contact} alt="header image" />
        </div>
      </header>
    </div>
    <footer>
        <p>&copy; 2024 MVV NGO. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default ContactUs