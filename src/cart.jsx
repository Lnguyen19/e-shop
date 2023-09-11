
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import {useState, useEffect} from 'react'

const Cart = ()=>{
const [inCart, setInCart] = useState([]);
const [inCarCart,setInCarCart] = useState([]);
const [inBikeCart, setInBikeCart] = useState([]);
const [user,setUser] = useState('');


const navigate = useNavigate();
useEffect(()=>{
axios.post('https://my-e-com-f96d9d63995b.herokuapp.com/currentSession').then(response=>{
if(response.data.username){
  console.log(response.data.username);
  setUser(response.data.username);
}
else {
  console.log('not logged in');
}

}).catch(error=>{
	console.error(error);
})
},[])

useEffect(()=>{
  axios.get(`https://my-e-com-f96d9d63995b.herokuapp.com/api/getCart?username=${user}`).then(response=>{
  	console.log(user);
  	     setInCart(response.data)
  }).catch(error=>{

  	console.error(error);
  })

axios.get(`https://my-e-com-f96d9d63995b.herokuapp.com/api/getCarCart?username=${user}`).then(response=>{
  	console.log(response.data)
  	     setInCarCart(response.data)
  }).catch(error=>{
  	console.error(error);
  })
  axios.get(`https://my-e-com-f96d9d63995b.herokuapp.com/api/getBikeCart?username=${user}`).then(response=>{
  	console.log(response.data)
  	     setInBikeCart(response.data)
  }).catch(error=>{
  	console.error(error);
  })









},[user])
const calculate =()=>{




  var boatTotal =  inCart.reduce((accumulator,currentValue)=> accumulator+ Number(currentValue.price),0);
    var carTotal =  inCarCart.reduce((accumulator,currentValue)=> accumulator+ Number(currentValue.price),0);
   var  bikeTotal = inBikeCart.reduce((accumulator,currentValue)=> accumulator+ Number(currentValue.price),0);

   return boatTotal+carTotal+bikeTotal
}
const confirm = ()=>{
//navigate('/order-confirmed');
	console.log("going to confirm order");
}


const remove_boat= (boat)=>{
    
 axios.delete(`https://my-e-com-f96d9d63995b.herokuapp.com/api/removeBoat?item_id=${boat.item_id}`).then(response=>{

if(response.data){
console.log('delete successful')
 setInCart((prevCart) => prevCart.filter((item) => item.item_id !== boat.item_id));
}
else {

}

 }).catch(error=>{
 	console.error(error);
 })
}
const remove_car= (car)=>{
    
 axios.delete(`https://my-e-com-f96d9d63995b.herokuapp.com/api/removeCar?item_id=${car.item_id}`).then(response=>{

if(response.data){
console.log('delete successful')
 setInCarCart((prevCart) => prevCart.filter((item) => item.item_id !== car.item_id));
}
else {

}
}).catch(error=>{
 	console.error(error);
 })
}
const remove_bike= (bike)=>{
    
 axios.delete(`https://my-e-com-f96d9d63995b.herokuapp.com/api/removeBike?item_id=${bike.item_id}`).then(response=>{

if(response.data){
console.log('delete successful')
 setInBikeCart((prevCart) => prevCart.filter((item) => item.item_id !== bike.item_id));
}
else {

}
}).catch(error=>{
 	console.error(error);
 })
}



return(<>

<h1>Checkout Section</h1>
 <div className="container mt-5">
        <div className="row">
          {inCart.map((cart, index) => (
            <div key={index} className="col-md-4" style={{marginBottom: '30px'}}>
     
        <div style={{border: '2px solid #ccc', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
         
          <div style={{position: 'relative'}}>
            <span style={{position: 'absolute', top: '10px', left: '10px', backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '3px'}}>In Stock</span>
            
            <img src={cart.imgScr} style={{width: '100%', height: 'auto'}} />
          </div>
          
                   <div style={{padding: '15px'}}>
            <h5 style={{marginBottom: '10px', color:'green', fontWeight:'bold'}}>{cart.name}</h5>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <span style={{fontSize: '20px', fontWeight: 'bold'}}>${cart.price}</span>
              <small style={{color: '#888'}}>Coupon code below</small>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <div><i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i>
                <i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i>
              </div>
              <div><i className="bi bi-water" style={{color: '#3399ff'}}></i></div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div><i className="fa fa-star-o" style={{color: '#ffcc00'}}></i><span style={{marginLeft: '5px'}}>4.8</span></div>
              <button class = 'btn-danger'style={{ padding: '10px', borderRadius: '5px'}} onClick={() => remove_boat(cart)}>Remove -</button>
            </div>
          </div>
  </div>
      </div>
            ))}
          {inCarCart.map((cart, index) => (
            <div key={index} className="col-md-4" style={{marginBottom: '30px'}}>
        <div style={{border: '2px solid #ccc', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
         <div style={{position: 'relative'}}>
            <span style={{position: 'absolute', top: '10px', left: '10px', backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '3px'}}>In Stock</span>
            <img src={cart.imgScr} style={{width: '100%', height: 'auto'}} />
          </div>
           <div style={{padding: '15px'}}>
            <h5 style={{marginBottom: '10px', color:'green', fontWeight:'bold'}}>{cart.name}</h5>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <span style={{fontSize: '20px', fontWeight: 'bold'}}>${cart.price}</span>
              <small style={{color: '#888'}}>Coupon code below</small>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <div><i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i>
                <i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i>
              </div>
              <div><i className="bi bi-water" style={{color: '#3399ff'}}></i></div>
            </div>
             <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div><i className="fa fa-star-o" style={{color: '#ffcc00'}}></i><span style={{marginLeft: '5px'}}>4.8</span></div>
              <button class = 'btn-danger'style={{ padding: '10px', borderRadius: '5px'}} onClick={() => remove_car(cart)}>Remove -</button>
            </div>
          </div> </div>
      </div>
          ))}
          {inBikeCart.map((cart, index) => (
             <div key={index} className="col-md-4" style={{marginBottom: '30px'}}>
    
        <div style={{border: '2px solid #ccc', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
          
          <div style={{position: 'relative'}}>
            <span style={{position: 'absolute', top: '10px', left: '10px', backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '3px'}}>In Stock</span>
            
            <img src={cart.imgScr} style={{width: '100%', height: 'auto'}} />
          </div>
           <div style={{padding: '15px'}}>
            <h5 style={{marginBottom: '10px', color:'green', fontWeight:'bold'}}>{cart.name}</h5>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <span style={{fontSize: '20px', fontWeight: 'bold'}}>${cart.price}</span>
              <small style={{color: '#888'}}>Coupon code below</small>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
              <div><i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i>
                <i className="bi bi-star" style={{color: '#ffcc00'}}></i><i className="bi bi-star" style={{color: '#ffcc00'}}></i>
              </div>
              <div><i className="bi bi-water" style={{color: '#3399ff'}}></i></div>
            </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div><i className="fa fa-star-o" style={{color: '#ffcc00'}}></i><span style={{marginLeft: '5px'}}>4.8</span></div>
              <button class = 'btn-danger'style={{ padding: '10px', borderRadius: '5px'}} onClick={() => remove_bike(cart)}>Remove -</button>
            </div>
          </div>
        </div>
      </div>
          ))}
      
             <div> 
               <h2>

                 Your Total is: ${calculate()}
                 <br/>
                 <button onClick = {()=>navigate('/order-confirmed')}>Confirmed </button>
               </h2>

             </div>


        </div>
      </div>
    

	</>)
}
export default Cart;