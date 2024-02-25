import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import DonatedList1 from './DonatedList1';
import { MongoDBContext } from './useContext';

function DonatedList() {
const mongoDBData = useContext(MongoDBContext)
    return (
        <Container className='mt-5 bg-dark text-white'>
            <h1>Blood Available:</h1>
            <Table style={{ textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>Donor Name</th>
                        <th>Blood Group</th>
                        <th>Sex</th>
                        <th>Email</th>
                        <th>For Need</th>
                    </tr>
                </thead>
                <tbody>
                    {mongoDBData.length > 0 ? (
                        mongoDBData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.userName}</td>
                                <td>{item.bloodGroup}</td>
                                <td>{item.gender}</td>
                                <td>{item.email}</td>
                                {/* Link to navigate to the Chalan page and pass the entire item as state */}
                                <td><Link  to={`/receipt/${item._id}`}  style={{ textDecoration: "none" }}>Click</Link></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No data available</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <DonatedList1 />
        </Container>
    );
}

export default DonatedList;
