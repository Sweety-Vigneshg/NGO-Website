import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
function Donerreg() {
    const [formData, setFormData] = useState({

        userName: "",
        number: "",
        Email: "",
        password: "",
        passwordd: ""
    })
    const hp = useNavigate()
    const handleClick = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {

        e.preventDefault()
        console.log("userName:", formData.userName);
        console.log("Email:", formData.Email);
        console.log("password:", formData.password);
        try {
            const res = await axios(
                {
                    url: 'https://medical-donation-backend.vercel.app/user/donarreg',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }, body: JSON.stringify(formData),
                    data: formData
                })
            if (res.status >= 200 && res.status < 300) {
                alert("Register Successfull");
                hp("/donerlog")
            } else {
                console.log("error in saving data");
            }

        }
        catch (err) {
            console.error("catch error", err);
        }
    }

    return (

        <div className='donerreg'>
            <Form onSubmit={handleSubmit}>
                <h1>Donar Registration</h1>
                <Form.Group className="mb-3"  >
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="text" value={formData.userName} name='userName' onChange={handleClick} placeholder="Enter your name" />

                </Form.Group>
                <Form.Group className="mb-3"  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="Email" value={formData.Email} name='Email' onChange={handleClick} placeholder="Enter Email" />

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text"  value={formData.number} name='number' onChange={handleClick}  placeholder="Enter number" />

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  value={formData.password} name='password' onChange={handleClick} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" value={formData.passwordd} name='passwordd' onChange={handleClick} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" >
                </Form.Group>
                <Button onClick={handleSubmit} style={{ width: "100%" }} variant="primary" type="submit">
                    Register
                </Button>


            </Form>
        </div>
    )
}

export default Donerreg