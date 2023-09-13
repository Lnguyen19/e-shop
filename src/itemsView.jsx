import React from 'react';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
const ItemView = () => {
 //const car = location.state.car;
 var user_name;
  const location = useLocation();
  const car = location.state.carData;
  const navigate = useNavigate();
  const [user,setUser] = useState('');
  const [reviews,setReviews] = useState([]);
  const [comment,setComment] = useState('');
  const [message,setMessage] = useState('');
  const [commentMessage,setCommentMessage] = useState('');
  const quantity_ =1;
  useEffect(()=>{

axios.get(`https://my-e-shop-308930f57b47.herokuapp.com/api/getCarComments?car_id=${car.item_id}`, { withCredentials: true }).then(response => {
  if (response.data) {  // Changed to response.data
    setReviews(response.data);
    console.log('array added');
  } else {
    console.log('error');
  }
}).catch(error => {
  console.error(error);
});



},[])
useEffect(()=>{
   axios.post('https://my-e-shop-308930f57b47.herokuapp.com/currentSession', { withCredentials: true }).then(response=>{


if(response.data.username){
  console.log(response.data.username);
  setUser(response.data.username);
  user_name = response.data.username;
   console.log(`the current user is ${user}`)
 console.log(`the current user is ${user_name}`)
}
else {


  
}




}).catch(error=>{
  console.error(error);
})

},[user])



const reset=()=>{
  setMessage('');
  setCommentMessage('');
}

 const buy = ()=>{
axios.post('https://my-e-shop-308930f57b47.herokuapp.com/api/addToCarPurchases',{
    item_id: car.item_id,
     username:user,
     price :car.price,
    quantity:quantity_,
    name : car.name,
    imgScr: car.imgScr
    }).then((response)=>{
   if(response.data.item === "item added"){
       console.log('buy sucessful');
       setMessage(`${car.name} has been added to your cart`)
   }
  else {
    console.log(response.data.issue);
  }


       }).catch((error)=>{
    console.error(error);
   })

 }

const changingComment= (e) => {
  setComment(e.target.value)
}
const commenting = (comments_)=>{

axios.post('https://my-e-shop-308930f57b47.herokuapp.com/api/car_comments',{
car_id : car.item_id,
username : user,
rating : 2,
comment : comments_
}).then((response)=>{
  if(response.data.message=="Review added successfully"){
     setCommentMessage('Your comment was successfully posted');
  }
  else{
    console.log(response.data);
  }

}).catch((error)=>{
  console.log(error);
})

}









  return (
    <>
    <button onClick = {()=>navigate('/main')}> Return </button>
      
   
   <div style={{ marginBottom: '30px', display: 'flex', flexDirection: 'row' }} onLoad = {reset}>

  <div style={{ flex: 1, border: '2px solid #ccc', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginRight: '15px' }}>
    <div style={{ position: 'relative' }}>
      <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '3px' }}>In Stock</span>
      <span style={{ position: 'absolute', top: '10px', right: '10px' }}><i className="fa fa-heart-o" style={{ color: '#ff3366' }}></i></span>
      <img src={car.imgScr} style={{ width: '100%', height: 'auto' }} />
    </div>
   
    <div style={{ padding: '15px' }}>
      <h5 style={{ marginBottom: '10px', color: 'green', fontWeight: 'bold' }}>{car.name}</h5>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>${car.price}</span>
        <small style={{ color: '#888' }}>Coupon code below</small>
      </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div><i className="bi bi-star" style={{ color: '#ffcc00' }}></i><i className="bi bi-star" style={{ color: '#ffcc00' }}></i><i className="bi bi-star" style={{ color: '#ffcc00' }}></i></div>
        <div><i className="bi bi-water" style={{ color: '#3399ff' }}></i></div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div><i className="fa fa-star-o" style={{ color: '#ffcc00' }}></i><span style={{ marginLeft: '5px' }}>4.8</span></div>
        <button style={{ backgroundColor: '#ff9900', color: 'white', padding: '10px', borderRadius: '5px'  } } onClick = {()=>buy()}>Buy +</button>
      </div>
       <h2> List of Reviews</h2>
      <br/>
      {reviews.map((review, index) => (
    <div key = {index}style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
        <ul className="list-group">
      <li className="list-group-item">{review.username}:  {review.comment}</li>
      
     
    </ul>
 
  </div>

))}
    </div>
    
  </div>
 
  <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
    <h4 className="fw-bold text-center mb-4">Car Statistics</h4>
    <ul className="list-group">
     
      <li className="list-group-item">Exterior: {car.exterior}</li>
      <li className="list-group-item">Make: {car.engine}</li>
      <li className="list-group-item">Year: {car.mpg}</li>
      <li className="list-group-item">Model: {car.transmission}</li>
      <h3> Write a review about this product</h3>
        <textarea value = {comment} onChange = {changingComment}  >  </textarea>
        <button  onClick = {()=>commenting(comment)}> Submit</button>
        <h2 class= 'text-success'>  {commentMessage}</h2>
        <br/>
          <h2> {message} </h2> 
    </ul>

  </div>
</div>

    
    </>
  )
}

export default ItemView;
