import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ClientUI = ()=>{
const [usernameSignup,setUsernameSignUp] = useState("");
const [passwordSignup,setPasswordSignUp] = useState("");
const [message,setMessage] = useState('');
const [date_,setDate_] = useState("");
 axios.defaults.withCredentials = true;
const navigate = useNavigate();
const reset=()=>{
  setMessage('');
}
const register = ()=>{

    axios.post("http://localhost:3001/register", {
  username: usernameSignup,
  password: passwordSignup,
  date_: date_
})
  .then((response) => {
    console.log(response);
    setMessage('Your account has been successfully registered, press done to log into your account')
  })
  .catch((error) => {
    console.error(error);
  });

}




return (
    <>
     <img class="mb-4 text-warning" src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png" alt="" width="72" height="82" />
        <div className="container mt-5" onLoad = {reset} >
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="text-center mb-5">
                        <h1 className="display-4" style = {{fontWeight:'bold'}}>Sign Up</h1>
                        <p className="text-muted">Join our shop-</p>
                    </div>
                   
                        <div className="mb-4" style ={{boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Username"
                                onChange={(e) => {
                                    setUsernameSignUp(e.target.value);
                                }} 
                            />
                        </div>

                        <div className="mb-4" style ={{boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password"
                                onChange={(e) => {
                                    setPasswordSignUp(e.target.value);
                                }} 
                            />
                        </div>


                         <div className="mb-4">
                            <input 
                                 type = 'date'
                                className="form-control" 
                                placeholder="Day of birth"
                                onChange={(e) => {
                                    setDate_(e.target.value)
                                }} 
                            />
                        </div>



                        <div className="d-grid">
                            <button className="btn-primary" onClick={register}>Register</button>
                            <h2 class = 'text-success'>{message} </h2>
                        </div>
                         <br/>
                        <br/>
                        <div className="d-grid">

                            <button className="btn-primary" onClick = {()=>navigate('/')}>Done</button>
                        </div>





                  
                </div>
            </div>
        </div>
    </>
);




}
export default ClientUI;