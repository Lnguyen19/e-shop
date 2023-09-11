import React, { useEffect, useState } from "react";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
const Login = ()=>{
  const navigate = useNavigate();
const [usernameLogin,setUsernameLogin] = useState("");
const [passwordLogin,setPasswordLogin] = useState("");
const [userId, setUserId] = useState("");
const [log, setLog] = useState(false);
const [messageLabel,setMessageLabel] = useState('');
 axios.defaults.withCredentials = true;



const login = ()=>{


    axios.post("https://my-e-com-f96d9d63995b.herokuapp.com/login", {
  username: usernameLogin,
  password: passwordLogin,
})
  .then((response) => {
    console.log(response);
    if(response.data.success=="login successful"){
      //setUserId(response.data.username)
  navigate('/main');
  console.log("it worked")
}
else{
  console.log("did not work");
  setMessageLabel('Wrong login combination')



}
   // }
    
  })
  .catch((error) => {
    console.error(error);
   // navigate('main');
    //setLog(false);


  });
 
//if()navigate("main");
  //correct(log);
}

return(
  <>
      
      <img class="mb-4 text-warning" src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png" alt="" width="72" height="82"/>
      <h1 class="h3 mb-3 font-weight-bold">Please sign in</h1>
      <div class = 'm-3  border border-warning border-3'>
      <label  class="sr-only">Username</label>
      <input type="text" id="inputEmail" class="form-control" placeholder="Username"   onChange = {(e)=>{
    setUsernameLogin(e.target.value)
  }} />

     </div>

     <div class = 'm-3  border border-warning border-3'>
      <label  class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password"  onChange = {(e)=>{
    setPasswordLogin(e.target.value)
   }}/>
      </div>
      <button  class  ='btn-primary' onClick = {login}>Sign in</button>
      <br/>
      <label class = 'text-danger'> {messageLabel} </label>
      <div class = 'container mt-5'>
      <label >Don't have an account ? Sign up using the button below  </label>
      <br/>
      <button class = 'secondary' onClick = {()=>navigate('/signup')}> Sign Up</button>
      </div>
      
   
    </>
  )

}
export default Login;