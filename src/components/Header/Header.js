import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Header.css';

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");
    return (
        <div className="header">
             <p className="logo">Server Management</p>
             <div className="header-right">
                 <Link to="/">
                     <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}><b>Home</b></p>                     
                 </Link>
                 <Link to="/add">
                     <p className={`${activeTab === "AddUser" ? "active" : ""}`} onClick={() => setActiveTab("AddUser")}><b>AddUser</b></p>
                    </Link>
                 <Link to="/about">
                     <p className={`${activeTab === "About" ? "active" : ""}`} onClick={() => setActiveTab("About")}><b>About</b></p>
                 </Link>
             </div>
        </div>
    )
}

export default Header