import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Homme.css';
import axios from 'axios';


const Home = () => {
    const [data , setData] = useState([]);
    useEffect(() => {
        getServers();
    },[])

    const getServers = async () => {
    const response = await axios.get("http://localhost:8080/parking-spot");
        if(response.status === 200){
             //setData(response.data.content);
             setData(response.data && response.data.content ? response.data.content : response.data);
        }    
           
    };
    console.log("data=>", data);   
    return (
        <div style={{marginTop:"150px"}}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>
                        ID                        
                        </th>
                        <th style={{textAlign: "center"}}>
                        ParkingSpot N                       
                        </th>
                        <th style={{textAlign: "center"}}>
                        License car                         
                        </th>
                        <th style={{textAlign: "center"}}>
                        Brand car                                                    
                        </th>
                        <th style={{textAlign: "center"}}>
                        Model car                                                 
                        </th>
                        <th style={{textAlign: "center"}}>
                        Car color                                                 
                        </th>
                        <th style={{textAlign: "center"}}>
                        Registration date                                                 
                        </th>
                        <th style={{textAlign: "center"}}>
                        Responsible name                                                 
                        </th>
                        <th style={{textAlign: "center"}}>
                        Apartment                                                 
                        </th>
                        <th style={{textAlign: "center"}}>
                        Block                                                 
                        </th>
                        <th style={{textAlign: "center"}}>                                                 
                        </th>
                        <th style={{textAlign: "center"}}>
                        Actions                         
                        </th>
                        <th style={{textAlign: "center"}}>                                                     
                        </th>
                    </tr>
                </thead>
                <tbody>
                   {data && 
                      data.map((item, index) => {
                        return (
                          <tr key={index}>
                             <th scope="row">{index + 1 }</th>                             
                              <td>{item.parkingSpotNumber}</td>
                              <td>{item.licensePlateCar}</td> 
                              <td>{item.brandCar}</td>
                              <td>{item.modelCar}</td>
                              <td>{item.colorCar}</td>
                              <td>{item.registrationDate}</td>
                              <td>{item.responsibleName}</td>
                              <td>{item.apartment}</td>
                              <td>{item.block}</td>
                              {/* <td><img src={item.imageUrl} width={30} height={30} alt="" /></td> */}
                              <td><Link to={`/update/${item.id}`}>
                                  <button className="btn btn-edit">Edit</button>
                                  </Link>
                             </td>
                             <td><Link to={`/delete/${item.id}`}>
                                  <button className="btn btn-delete">Delete</button>
                                  </Link>
                             </td>  
                             <td><Link to={`/view/${item.id}`}>
                                  <button className="btn btn-view">View</button>
                                  </Link>
                             </td>                            
                          </tr>
                        );
                    })}
                 </tbody>
            </table>
        </div>
        
    );
}

export default Home