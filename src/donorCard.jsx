import React, { useState, useEffect, useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import DonatedList1 from './DonatedList1';
import { MongoDBContext } from './useContext';

export default function DonorCard() {
  const mongoDBData = useContext(MongoDBContext)

    return (
        <Container className='mt-5 bg-dark text-white'>
        <h1>Datas:</h1>
        <Table style={{ textAlign: "center" }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Donor Name</th>
                    <th>Blood Group</th>
                    <th>Blood Quantity</th>
                    <th>Sex</th>
                    <th>Email</th>
                    <th>mobile number</th>
                   
                    <th>Dob</th>
                </tr>
            </thead>
            <tbody>
                {mongoDBData.length > 0 ? (
                    mongoDBData.map((item, index) => (
                        <tr key={index}>
                           <td>{item._id}</td>
                            <td>{item.userName}</td>
                            <td>{item.bloodGroup}</td>
                            <td>{item.bloodQuantity}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.dob}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5">No data available</td>
                    </tr>
                )}
            </tbody>
        </Table>

    </Container>

  )
}
