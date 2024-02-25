import humanbg from "./New folder/bg1.jpeg"
import React from 'react'
import { Button, NavDropdown } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import Navbarr from "./Navbarr"

function App() {
  const hp = useNavigate()
  const changeDir = ()=>{
  hp("/contact")
  }
  return (
    <>
      <div className="container">
        <Navbarr />
        <header className="header">
          <div className="content">
            <h1><span>A dose of kindness,a prescription for </span><br />Change.</h1>
            <Button className="btn" onClick={changeDir}>Contact Us</Button>
          </div>
          <div className="image">
            <span className="image__bg"></span>
            <img src={humanbg} alt="header image" />

          </div>
        </header>
      </div>
    </>

  )
}

export default App