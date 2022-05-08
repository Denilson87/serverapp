import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Header.css';

const Header = () => {
    const [activeTab, setActivetab] = useState ("Home");
    return (
        <div className="header">
             <p className="logo">Server Management</p>
             <div className="header-right">
                 <Link to="/">
                     <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActivetab("Home")}><b>Home</b></p>
                     <p className=""></p>
                 </Link>
                 <Link to="/add">
                     <p className={`${activeTab === "AddUser" ? "active" : ""}`} onClick={() => setActivetab("AddUser")}><b>Add-user</b></p>
                     <p className=""></p>
                 </Link>
                 <Link to="/about">
                     <p className={`${activeTab === "About" ? "active" : ""}`} onClick={() => setActivetab("About")}><b>About</b></p>
                     <p className=""></p>
                 </Link>
             </div>
        </div>
    )
}

export default Header