import { useNavigate } from 'react-router-dom';
import './boats.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
const Boats = ()=>{
	const navigate = useNavigate();
const [boatInventory, setBoatInventory] = useState([]);
const [picture,setPicture] = useState();

var pic;
var pic_
 var stars = [
 {id:1,
 icon:"bi bi-star"
},
{id:2,
 icon:"bi bi-star"
},{id:3,
 icon:"bi bi-star"
},
{id:4,
 icon:"bi bi-star"
},
{id:5,
 icon:"bi bi-star"
}

    ]

useEffect(()=>{
axios.get('https://my-e-com-f96d9d63995b.herokuapp.com/api/boatinventory').
then(response=>{setBoatInventory(response.data)})
.catch(error => console.error('Error fetching data:', error));


},[]);


const view = (boat)=>{
navigate('/boatitem', { state: { boatData: boat } });
}
const setup = (boat)=>{
     pic_ = boat.imgScr;
}
const updatePicture = (boat)=>{
 if(boat.name=='2016 Sea Ray 350 SLX'){
    pic = '/boats_product/seaRay.JPG';

    //return seaRay;
 
 }
else if(boat.name=='2019 Sailfish 241 CC'){
    pic =  '/boats_product/sailFish.JPG'
    // return sailFish
}
else if(boat.name=='2016 Boston Whaler 320 Vantage'){
     pic = '/boats_product/whaler.JPG';
     //return whaler;
}
    
console.log('this function is being called')
}
const rated = (star)=>{
console.log(star)


}
return(
     <>

<h1 className="text-center text-uppercase">Boat Inventory</h1>
<button onClick={() => navigate('/main')} className=" btn-primary">Home</button>

<div className="container mt-5">
  <div className="row">
    {boatInventory.map((boat, index) => (
      <div key={index} className="col-md-4" onLoad={setup(boat)} style={{marginBottom: '30px'}}>
        <div style={{border: '3px solid #ccc', borderRadius: '10px',borderColor:'#ff9900' ,overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
          <div style={{position: 'relative'}}>
            <span style={{position: 'absolute', top: '10px', left: '10px', backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '3px'}}>In Stock</span>
            <img src={pic_} style={{width: '100%', height: 'auto'}} />
          </div>
          <div style={{padding: '15px'}}>
            <h5 style={{marginBottom: '10px', color:'green', fontWeight:'bold'}}>{boat.name}</h5>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <span style={{fontSize: '20px', fontWeight: 'bold'}}>${boat.price}</span>
              <small style={{color: '#888'}}>Coupon code below</small>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <div>{stars.map((star,index)=>(
               <i  key = {index}className = "bi bi-star"></i>
                ))}
              </div>
              <div><i className="bi bi-water" style={{color: '#3399ff'}}></i></div>
            </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div><i className="fa fa-star-o" style={{color: '#ffcc00'}}></i><span style={{marginLeft: '5px'}}>4.8</span></div>
              <button style={{backgroundColor: '#ff9900', color: 'white', padding: '10px', borderRadius: '5px'}} onClick={() => view(boat)}>VIEW +</button>
              <label>  </label>
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
export default Boats;