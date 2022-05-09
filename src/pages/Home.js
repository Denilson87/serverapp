import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Homme.css';
import axios from 'axios';


const Home = () => {
    const [servers , setServers] = useState([]);
    useEffect(() => {
        getServers();
    },[])

    const getServers = async () => {
        const response = await axios.get("http://localhost:8080/server/list");
        if(response.status === 200){
            setServers(response.data);
        }
        console.log("servers=>",servers);
    }
    return (
        <div style={{marginTop:"150px"}}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>ID</th>
                        <th style={{textAlign:"center"}}>Ip Addres</th>
                        <th style={{textAlign:"center"}}>Name</th>
                        <th style={{textAlign:"center"}}>Status</th>
                        <th style={{textAlign:"center"}}>Type</th>
                        <th style={{textAlign:"center"}}>Memory</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {servers && servers.map((servers, index) =>{
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{servers.id}</td>
                                <td>{servers.ipAddress}</td>
                                <td>{servers.name}</td>
                                <td>{servers.memory}</td>
                                <td>{servers.status}</td>
                                <td>{servers.type}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
             

        </div>
    )
}

export default Home