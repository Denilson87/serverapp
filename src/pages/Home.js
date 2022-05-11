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
    const response = await axios.get("http://localhost:8080/");
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
                        Nome                        
                        </th>
                        <th style={{textAlign: "center"}}>
                        Apelido                         
                        </th>
                        <th style={{textAlign: "center"}}>
                         Telefone                                                    
                        </th>
                        <th style={{textAlign: "center"}}>
                            Foto                                                 
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
                              <td>{item.nome}</td>
                              <td>{item.apelido}</td> 
                              <td>{item.telefone}</td>
                              <td><img src={item.imageUrl} width={25} height={25} alt="image" /></td>
                              <td><Link to={`/update/${item._id}`}>
                                  <button className="btn btn-edit">Edit</button>
                                  </Link>
                             </td>
                             <td><Link to={`/delete/${item._id}`}>
                                  <button className="btn btn-delete">Delete</button>
                                  </Link>
                             </td>  
                             <td><Link to={`/view/${item._id}`}>
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