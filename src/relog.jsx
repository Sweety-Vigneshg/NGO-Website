import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
function reLog() {
    const hp1 = useNavigate()

    const [formData, setFormData] = useState({
        Email: "",
        password: "",
    })

    const handleClick = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Email:", formData.Email);
        console.log("password:", formData.password);
try{
    const res = await axios(
        {
            url: 'https://medical-donation-backend.vercel.app/user/customerlog',
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(formData),
            data: formData
        })

    if (res.status >= 200 && res.status < 300) {
        alert("login success")
        hp1("/donationlists")
    } else if (res.status >= 400){
        alert("User Not Found or Wrong Password ")
    }else{
        alert("login error")
    }



}catch{err => {
    console.log("err in log req",err);
}}
       
    }

    return (

        <div className='donerreg'>
            <Form onSubmit={handleSubmit}>
            <h1>Recipient Login</h1>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="Email" name='Email' value={formData.Email} onChange={handleClick} placeholder="Enter Email" />

            </Form.Group>


            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control name='password'  value={formData.password} onChange={handleClick} type="password" placeholder="Password" />
            </Form.Group>


            <Button onClick={handleSubmit} style={{ width: "100%" }} variant="primary" type="submit">
                Login
            </Button>


            <Button style={{width:'100%',marginTop:'4%'}}><Link style={{textDecoration:'none',color:"white"}} to="/donerreg">Create one</Link></Button>

        </Form>
     </div >
    )
}

export default reLog;