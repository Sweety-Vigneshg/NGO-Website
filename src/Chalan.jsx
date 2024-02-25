import React, { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MongoDBContext } from './useContext';
import html2canvas from 'html2canvas';

function Chalan(props) {
    const {id} = useParams()
    console.log(id);
    const data = useContext(MongoDBContext)
    const filteredData = data.filter(item => item._id === id);
//screenshot
const screenshotRef = useRef(null);

    const handleCapture = () => {
        if (screenshotRef.current) {
            html2canvas(screenshotRef.current).then(canvas => {
                const screenshot = canvas.toDataURL('image/png');
                downloadScreenshot(screenshot);
            });
        }
    };

    const downloadScreenshot = screenshot => {
        const link = document.createElement('a');
        link.href = screenshot;
        link.download = 'screenshot.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div  style={{ textAlign: "center", marginTop: "20px", backgroundColor: "Red" }} >
                <h1>Donor Details</h1>
                    <button style={{outline:"none",border:"none",background:"none",color:"whitesmoke",marginBottom:"10px"}} onClick={handleCapture}>Click Here To download A Copy of Card</button>
            </div>
            <div ref={screenshotRef} style={{ display: "flex", justifyContent: "center"  }}>
                    {filteredData.map((item, index) => (
                <div key={index} className='donorcard' style={{ width: "60%", backgroundColor: "#f1ffff",padding:"0px 0px 0px 15%"}}>
                    <span className='donorcd1'>Donation_id : </span>
                    <span className='donorcd2' > {`${item.userName}` + id}</span><br/>
                    <span className='donorcd1'>Name:  </span><span className='donorcd2'>{item.userName}</span><br/> 
                    <span className='donorcd1'>Gender: </span><span className='donorcd2'>{item.phoneNumber}</span><br/>
                    <span className='donorcd1'>Email: </span><span className='donorcd2'>{item.email}</span><br/>
                    <span className='donorcd1'>Gender: </span><span className='donorcd2'>{item.gender}</span><br/>
                    <span className='donorcd1'>Address: </span><span className='donorcd2'>{`${item.zip},${item.street},${item.city},${item.country}`}</span><br/>
                    <span className='donorcd1'>Blood Group : </span><span className='donorcd2'>{item.bloodGroup}</span><br/>
                    <span className='donorcd1'> Organ:  </span><span className='donorcd2'>{item.donateOrgan}</span><br/>
                </div>
                    ))}
            </div>
        </div>
    );
}

export default Chalan;
