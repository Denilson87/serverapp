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
    const response = await axios.get("http://localhost:8080/server/list");
        if(response.status === 200){
            setData(response.data);
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
                            IP Address                        
                        </th>
                        <th style={{textAlign: "center"}}>
                            Name                        
                        </th>
                        <th style={{textAlign: "center"}}>
                            Status                         
                        </th>
                        <th style={{textAlign: "center"}}>
                            Type                         
                        </th>
                        <th style={{textAlign: "center"}}>
                            Action                         
                        </th>
                    </tr>
                </thead>
               
            </table>
        </div>
        
    );    
};

export default Home;