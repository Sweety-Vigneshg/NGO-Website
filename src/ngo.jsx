import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import axios

function Ngolog() {
    const hp = useNavigate()
    const [formData, setFormData] = useState({
        ngoid: "",
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
        console.log("Email:", formData.ngoid);
        console.log("password:", formData.password);
        try {
            const res = await axios.post(
                'https://medical-donation-backend.vercel.app/user/ngolog',
                formData, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            if (res.status >= 200 && res.status < 300) {
                alert("login success")
                hp("/donorcard")
            } else {
                alert("login error")
            }
        } catch (err) {
            console.error("Error in log req", err);
        }
    }

    return (

        <div className='donerreg'>
            <Form onSubmit={handleSubmit}>
                <h1>NGO Login</h1>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter UserId</Form.Label>
                    <Form.Control type="text" name='ngoid' value={formData.ngoid} onChange={handleClick} placeholder="Enter id" />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' value={formData.password} onChange={handleClick} placeholder="Password" />
                </Form.Group>
                <Button style={{ width: "100%" }} variant="primary" type="submit">
                Login
            </Button>
                

            </Form>
        </div>
    )
}

export default Ngolog;
