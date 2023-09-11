import React from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
const BoatView = () => {
 //const car = location.state.car;
  const[comment, setComment] = useState('');
  const [user,setUser] = useState('');
  const [reviews,setReviews] = useState([]);
  const location = useLocation();
  const boat = location.state.boatData;
  const [buying,setBuying] = useState('');
  const [message,setMessage] = useState('');
    const [commentMessage,setCommentMessage] = useState('');
  const quantity_ = 1;
  const navigate = useNavigate();
 
var pic_;
  console.log(boat.imgScr)
  useEffect(()=>{
axios.get(`https://my-e-shop-308930f57b47.herokuapp.com/api/getComments?boat_id=${boat.item_id}`).then(response => {
  if (response.data) {  // Changed to response.data
    setReviews(response.data);
    console.log('array added');
  } else {
    console.log('error');
  }
}).catch(error => {
  console.error(error);
});





    axios.post('https://my-e-shop-308930f57b47.herokuapp.com/currentSession').then(response=>{
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

const deter = (index)=>{
pic_ = index.imgScr;
return pic_;


}
const reset=()=>{
  setMessage('');
  setCommentMessage('');
}

 const buy = ()=>{

    setBuying(user);
    axios.post('https://my-e-shop-308930f57b47.herokuapp.com/api/addToCart',{
    item_id:boat.item_id,
     username:user,
     price :boat.price,
    quantity:quantity_,
    name : boat.name,
    imgScr: boat.imgScr
    }).then((response)=>{
   if(response.data.item === "item added"){
      setMessage(`${boat.name} has been added to your cart`)
    
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

axios.post('https://my-e-shop-308930f57b47.herokuapp.com/api/comments',{
boat_id : boat.item_id,
username : user,
rating : 2,
comment : comments_
}).then((response)=>{
  if(response.data.message=="Review added successfully"){

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
    <button onClick = {()=>navigate('/main')}> Return</button>
   <div style={{ marginBottom: '30px', display: 'flex', flexDirection: 'row' }} onLoad = {reset}>
  <div style={{ flex: 1, border: '2px solid #ccc', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginRight: '15px' }}>
    <div style={{ position: 'relative' }}>
      <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '3px' }}>In Stock</span>
       <img src={boat.imgScr} style={{ width: '100%', height: 'auto' }} />
    </div>
    <div style={{ padding: '15px' }}>
      <h5 style={{ marginBottom: '10px', color: 'green', fontWeight: 'bold' }}>{boat.name}</h5>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>${boat.price}</span>
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
 <div className="user-review">

  <ul className="list-group">
    <li className="list-group-item">
      <span className="review-username">{review.username}:</span>
      <span className="review-comment">{review.comment}</span>
    </li>
  </ul>
</div>

 
  </div>

))}

    </div>
  </div>
  <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
    <h4 className="fw-bold text-center mb-4">Boat Statistics</h4>
    <ul className="list-group">
      <li className="list-group-item">Price: ${boat.price}</li>
      <li className="list-group-item">Exterior: {boat.exterior}</li>
      <li className="list-group-item">Make: {boat.make}</li>
      <li className="list-group-item">Year: {boat.year}</li>
      <li className="list-group-item">Model: {boat.model}</li>
      <li className="list-group-item">Class: {boat.class}</li>
      <h3> Write a review about this product</h3>
        <textarea value = {comment} onChange = {changingComment}  >  </textarea>
        <button  onClick = {()=>commenting(comment)}> Submit</button>
        <h2> {commentMessage} </h2>
        <br/>
         <h2> {message} </h2>
    </ul>
 
  </div>

</div>

    </>
  )
}

export default BoatView;