import { useNavigate } from 'react-router-dom';
import './bicycles.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
const Bicycles = ()=>{
	var pic_;
	const navigate = useNavigate();
   const [bikeInventory,setBikeInventory] = useState([]);
   const [message,setMessage] = useState('');
useEffect(()=>{
axios.get('https://my-e-com-f96d9d63995b.herokuapp.com/api/bikeinventory').
then(response=>{setBikeInventory(response.data)})
.catch(error => console.error('Error fetching data:', error));

},[]);


const view = (bike)=>{
navigate('/bikeitem', { state: { bikeData: bike } });



}


return(<>
<h1>Bike Section</h1>
      <button onClick = {()=>navigate('/main')} className=" btn-primary">home</button>
<div className="container mt-5">
  <div className="row">
    {bikeInventory.map((bike, index) => (
      <div key={index} className="col-md-4"  style={{marginBottom: '30px'}}>
      <div style={{border: '3px solid #ccc', borderRadius: '10px',borderColor:'#ff9900' , overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
          <div style={{position: 'relative'}}>
            <span style={{position: 'absolute', top: '10px', left: '10px', backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '3px'}}>In Stock</span>
           
            <img src={bike.imgScr} style={{width: '100%', height: 'auto'}} />
          </div> 
          <div style={{padding: '15px'}}>
            <h5 style={{marginBottom: '10px'}}>{bike.name}</h5>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <span style={{fontSize: '20px', fontWeight: 'bold'}}>${bike.price}</span>
              <small style={{color: '#888'}}>Coupon code below</small>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <div><i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i></div>
              <div><i className="bi bi-water" style={{color: '#3399ff'}}></i></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div><i className="fa fa-star-o" style={{color: '#ffcc00'}}></i><span style={{marginLeft: '5px'}}>4.8</span></div>
              <button style={{backgroundColor: '#ff9900', color: 'white', padding: '10px', borderRadius: '5px'}} onClick={() => view(bike)}>VIEW +</button>
            </div>
          </div>  
        </div>
      </div>
    ))}
  </div>
</div>
    

	</>
	)


} 
export default Bicycles;