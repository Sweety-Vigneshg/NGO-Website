import React from 'react'
import bdonate from "./New folder/bdonate.jpg"
import odonate from "./New folder/odonate.jpg"
import { Card, CardLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbarr from './Navbarr'

function DonarSelect() {
  return (
 <>
 <Navbarr/>   
    <div style={{display:"flex",backgroundColor:"#f1ffff",justifyContent:"center",alignItems:"center",height:"100vh",gap:"40px"}}>
<h4>blood &#8811;</h4>
          <Card style={{ width: '18rem', height: "18rem", alignItems: "center" }}>
          <Link to="/blood-donate">
            <Card.Img variant="top" src={bdonate} />
          </Link>
          <Card.Body>
          </Card.Body>
        </Card>
   
   <h4>Organs &#8811;</h4>
        <Card style={{ width: '18rem', height: "18rem", alignItems: "center" }}>
          <Link to="/organ-donate">
            <Card.Img variant="top" src={odonate} />
          </Link>
          <Card.Body>
          </Card.Body>
        </Card>
    </div>
    </>
  )
}

export default DonarSelect