import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate,Outlet } from 'react-router-dom';
//import './navBar.css'
const NavBar = ()=>{
const [click,setClick] = useState(false);
const navigate = useNavigate();

const handleClick = ()=>{

	setClick(!click);
}
const close = ()=>{
	setClick(false);
}


return(<>

<nav class="navbar navbar-expand-lg navbar-light " style = {{backgroundColor :'aquamarine'}}>
  <div class="container-fluid">
    <a class="navbar-brand " href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav " style = {{fontWeight:'bold'}}>
        <li class="nav-item " >
          <a class="nav-link active" aria-current="page" href="#" onClick={()=>navigate('main')}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={() => navigate('cars')}>Cars</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={() => navigate('boats')}>Boats</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#" onClick={() => navigate('bicycles')}>Bicycles</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#" onClick = {()=>navigate('cart')}>Cart</a>
        </li>
         <li class="nav-item" style = {{position:'relative', left:"1050px"}}>
          <a class="nav-link"  href="#" onClick = {()=>navigate('/')}>Log out</a>
        </li>



      </ul>
    </div>
  </div>
</nav>





<Outlet/>

	</>)
}

export default NavBar;