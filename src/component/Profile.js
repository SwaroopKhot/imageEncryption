import React from "react";
import './Profile.css'

import { useStateValue } from '../utils/provider/StateProvider';
import {pageTitle} from '../component/variables/variable'

function Profile() {
    
    const [{ user }, dispatch] = useStateValue();



    return (
        <div className="profile_container">
            <div className="profile_welcome_section">
                <p>Welcome to <span>{pageTitle}</span></p>
            </div>


            <div className="profile_details_div">
                <div className="profile_details_div_row">
                    <label className="profile_details_div_lb_name">Name</label>
                    <p className="profile_details_div_lb_op">:&nbsp;{user && user.name}</p>
                </div>

                <div className="profile_details_div_row">
                    <label className="profile_details_div_lb_name">Email</label>
                    <p className="profile_details_div_lb_op">:&nbsp;{user && user.email}</p>
                </div>

                <div className="profile_details_div_row">
                    <label className="profile_details_div_lb_name">Password</label>
                    <p className="profile_details_div_lb_op">:&nbsp;{user && user.password}</p>
                </div>

                <div className="profile_details_div_row">
                    <label className="profile_details_div_lb_name">Rsa Public Key</label>
                    <p className="profile_details_div_lb_op">:&nbsp;{user && "AsdflSDF323sdf45lkeRKMVwkmdvkfmvejnfjk"}</p>
                </div>

                <div className="profile_details_div_row">
                    <label className="profile_details_div_lb_name">Rsa Private Key</label>
                    <p className="profile_details_div_lb_op">:&nbsp;{user && "asdkajlsediowje23498923nskjcn"}</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default Profile