import React from "react";
import iconDash from './analytics.svg'
import {Link} from "react-router-dom";
import './Sidebar.css'

function Sidebar () {
    return (
        <nav className="sidenav">
            <img src={iconDash} alt='icon'/>
            <Link to='/' >FINANCES</Link>
            <Link to='/dashboardEmployees' >EMPLOI</Link>
        </nav>
    )
}

export default Sidebar