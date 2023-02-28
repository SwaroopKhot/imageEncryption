import React from "react";
import './NavBar.css'

import {pageTitle} from '../variables/variable'

import {Link, useNavigate} from 'react-router-dom'


import { useStateValue } from '../../utils/provider/StateProvider';
  




function NavBar() {

    const [{ user }, dispatch] = useStateValue();
    const navigate = useNavigate()

    return (
        <div>

            <div className="nav_bar_div">
                <div className="nav_bar_page_title" onClick={() => navigate("/")}>
                    {pageTitle}
                </div>

                <div className="nav_bar_quick_links">
                    <Link to="/">Home</Link>
                    <Link to="/storage">History</Link>
                    <Link to={user ? "/profile" : "/login"}>{user ? "Welcome, " + user.name : "login"}</Link>
                </div>
            </div>

            
            <div className="header_bottom_spacing"></div>
        </div>
        
    )
}

export default NavBar