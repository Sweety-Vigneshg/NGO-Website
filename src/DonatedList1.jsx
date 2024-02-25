import axios from 'axios';
import { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function DonatedList1() {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://medical-donation-backend.vercel.app/user/donate-lists1');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
    <h1>Organs Available : </h1>
    <Table style={{textAlign:"center"}}>
      <thead>
        <tr>
            <th>Donar Name</th>
            <th>BloodGroup</th>
            <th>Sex</th>
            <th>email</th>
            <th>Organ Type</th>
            <th>For Need</th>
          
        </tr>
      </thead>
      <tbody>
          {data.map((data , index)=>(
        <tr key={index}>

                <td>{data.userName}</td>
         <td>{data.bloodGroup}</td>
         <td>{data.gender}</td> 
         <td>{data.email}</td>      
         <td>{data.donateOrgan}</td>  
         <td><Link style={{textDecoration:"none"}}>Click</Link></td>    

        </tr>
            )
            )}
        
      </tbody>
    </Table>
    </>
  );
}

export default DonatedList1;