import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'

import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import axios from 'axios'

const Cars = ()=>{
 // const [user,setUser] = useState('');
  const [carInventory,setCarInventory] = useState([]);
  const [picture, setPicture] = useState('');
//var image;
var pic_;

	const navigate = useNavigate();











useEffect(()=>{
axios.get('https://my-e-shop-308930f57b47.herokuapp.com/api/carinventory').
then(response=>{setCarInventory(response.data)})
.catch(error => console.error('Error fetching data:', error));

},[]);


const view =(car)=>{
navigate('/item', { state: { carData: car } });
//navigate('item');
//console.log("viewing");

}

const buy = ()=>{

  
}

const setup = (car)=>{
pic_ = car.imgScr;
}
return(
    <>
      <h1>Car Section</h1>
      <button onClick={() => navigate('/main') } className=" btn-primary">home</button>
<div className="container mt-5">
  <div className="row">
    {carInventory.map((car, index) => (
      <div key={index} className="col-md-4" onLoad={setup(car)} style={{marginBottom: '30px'}}>
     
        <div style={{border: '3px solid #ccc', borderColor:'#ff9900',borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
              <div style={{position: 'relative'}}>
            <span style={{position: 'absolute', top: '10px', left: '10px', backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '3px'}}>In Stock</span>
            
            <img src={pic_} style={{width: '100%', height: 'auto'}} />
          </div>
          <div style={{padding: '15px'}}>
            <h5 style={{marginBottom: '10px'}}>{car.name}</h5>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <span style={{fontSize: '20px', fontWeight: 'bold'}}>${car.price}</span>
              <small style={{color: '#888'}}>Coupon code below</small>
            </div>
           <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <div><i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i></div>
              <div><i className="bi bi-water" style={{color: '#3399ff'}}></i></div>
            </div>
             <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div><i className="fa fa-star-o" style={{color: '#ffcc00'}}></i><span style={{marginLeft: '5px'}}>4.8</span></div>
              <button style={{backgroundColor: '#ff9900', color: 'white', padding: '10px', borderRadius: '5px'}} onClick={() => view(car)}>VIEW +</button>
            </div>
          </div>
</div>
      </div>
    ))}
  </div>
</div>
    
    </>
  );


}
export default Cars;