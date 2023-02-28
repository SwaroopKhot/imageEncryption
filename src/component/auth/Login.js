import React, {useState} from "react";
import './Login.css'

import {pageTitle} from '../variables/variable'


import { useStateValue } from '../../utils/provider/StateProvider';
import {useNavigate} from 'react-router-dom'



function Login(){
    
    const [{ user }, dispatch] = useStateValue();
    
    const navigate = useNavigate()
    const [email, setEmail ] = useState('');
    const [name, setName ] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("")

    const [toggleLogin, setToggleLogin] = useState(false)
    
    

    const signin = () => {
        
        if(!name){
            setError("User name not entered!")
        } else if(!password){
            setError("Password not entered !")
        } else {
            setError("")
            console.log(name, password)

            const user = {
                name: name,
                password: password
            }

            dispatch({
                type: 'ADD_USER',
                user: user
              })

            navigate("/")
        }
    }

    const createAccount = () => {
        

        if(!name){
            setError("User name not entered!")
        } else if(!email){
            setError("Email not entered !")
        } else if(!password){
            setError("Password not entered !")
        } else {
            setError("")
            console.log(name, email, password)

            const user = {
                name: name,
                password: password,
                email: email
            }

            dispatch({
                type: 'ADD_USER',
                user: user
              })

            navigate("/")


        }
    }


    return (
        <div className="login_main_div">
            
            {toggleLogin ? 
                <div className="login_container">
                <div>
                    <div className="login_container_title">
                        {pageTitle}
                    </div>
                    <div className="login_container_desc">
                        Welcome, please login to continue
                    </div>
                </div>

                <div className="login_container_form_content">
                    <div className="login_container_form_row">
                        <label>User Name</label>
                        <input type='text' placeholder="Enter username" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="login_container_form_row">
                        <label>Email</label>
                        <input type='text' placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="login_container_form_row">
                        <label>Password</label>
                        <input type='password' placeholder="Enter Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div className="login_container_form_signin_msg">By Sign-in you agree terms and conditions</div>


                <div className="login_container_form_button">
                    <button className="login_container_login_btn" onClick={() => createAccount()}>Login</button>
                    {/* <button className="login_container_account_btn" onClick={() => setToggleLogin(true)}>create your account ?</button> */}
                </div>

                {error && <p className="login_container_error_msg">{error}</p>}

            </div>

            :

            <div className="login_container">
                <div>
                    <div className="login_container_title">
                        {pageTitle}
                    </div>
                    <div className="login_container_desc">
                        Welcome, please login to continue
                    </div>
                </div>

                <div className="login_container_form_content">
                    <div className="login_container_form_row">
                        <label>User Name</label>
                        <input type='text' placeholder="Enter username" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="login_container_form_row">
                        <label>Password</label>
                        <input type='password' placeholder="Enter Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div className="login_container_form_signin_msg">By Sign-in you agree terms and conditions</div>


                <div className="login_container_form_button">
                    <button className="login_container_login_btn" onClick={() => signin()}>Login</button>
                    <button className="login_container_account_btn" onClick={() => setToggleLogin(true)}>create your account ?</button>
                </div>


                {error && <p className="login_container_error_msg">{error}</p>}

                
            </div>
            }
            

        </div>
    )
}


export default Login