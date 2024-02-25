import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function DetailsForm() {
    const hp = useNavigate()
    const [formData, setFormData] = useState({
        userName: '',
        gender: '',
        dob: '',
        email: '',
        phoneNumber: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        bloodGroup: '',
        bloodQuantity: '',
        adhar: ''
      });
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
          const res = await axios({
            url: 'https://medical-donation-backend.vercel.app/user/blood-donate',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(formData),
            data: formData
        });
        if (res.status >= 200 && res.status < 300) {
            alert("You Details Will be Shared.");
            hp("/ddonate")
        } else if(res.status > 300 && res.status < 502) {
            alert("Fill the Form Correctly")
        } else{
            console.log("internal err");
        }

    }
    catch (err) {
        console.error("catch error", err);
    }
      };
    
    return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Form style={{ width: '40%' }} onSubmit={handleSubmit}>
        <h1>Donar Details</h1>
        <Form.Group className="mb-3">
          <Form.Label>Enter Full Name</Form.Label>
          <Form.Control type="text" name='userName' placeholder="Enter your name" value={formData.userName} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gender:</Form.Label>
          <Form.Select name='gender' value={formData.gender} onChange={handleChange}>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date Of Birth:</Form.Label>
          <Form.Control type='date' name='dob' value={formData.dob} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter Email" value={formData.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="tel" name='phoneNumber' placeholder="Enter number" value={formData.phoneNumber} onChange={handleChange}/>
        </Form.Group>
        <div>
          <label htmlFor="street">Street Address:</label><br />
          <input value={formData.street} onChange={handleChange} style={{ width: '100%', border: '1px solid grey', borderRadius: '2px' }} type="text" id="street" name="street" /><br />

          <label htmlFor="city">City:</label><br />
          <input value={formData.city} onChange={handleChange} style={{ width: '100%', border: '1px solid grey', borderRadius: '2px' }} type="text" id="city" name="city" /><br />

          <label htmlFor="state">State:</label><br />
          <input value={formData.state} onChange={handleChange} style={{ width: '100%', border: '1px solid grey', borderRadius: '2px' }} type="text" id="state" name="state" /><br />

          <label htmlFor="zip">Postal Code:</label><br />
          <input value={formData.zip} onChange={handleChange} style={{ width: '100%', border: '1px solid grey', borderRadius: '2px' }} type="text" id="zip" name="zip" /><br />

          <label htmlFor="country">Country:</label><br />
          <input value={formData.country} onChange={handleChange} style={{ width: '100%', border: '1px solid grey',marginBottom:"8px", borderRadius: '2px' }} type="text" id="country" name="country" /><br />
        </div>
        <Form.Select name='bloodGroup' className='mb-3' value={formData.bloodGroup} onChange={handleChange}>
          <option>Select the blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </Form.Select>
        <Form.Group className="mb-3">
          <Form.Label>Units of blood:</Form.Label>
          <Form.Control type='number' placeholder='Quantity' name='bloodQuantity' value={formData.bloodQuantity} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Adhar Number:</Form.Label>
          <Form.Control type='file' id='adhar' value={formData.adhar} name="adhar" onChange={handleChange} />
        </Form.Group>
        <Button style={{ width: '100%', marginTop: '10px' }} variant="primary" type="submit">
          Submit
        </Button>
              </Form>
    </div>
  );
}

export default DetailsForm;
