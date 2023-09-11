import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './mainPage';
import Boats from './boats';
import Cars from './cars';
import Bicycles from './bicycles'
import NavBar from './navBar'
import ClientUi from './clientUi'
import Login from "./login"
import Order_confirmed from './order_confirmed';
import Cart  from "./cart"
import ItemView from "./itemsView"
import BoatView from "./boatView"
import BikeView from "./bikeView"
function App() {
  return (
    <div className="App">
      <Router>
    
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path ="signup" element = {<ClientUi/>}/>
          <Route path ="main" element = {<MainPage/>}>
          <Route path="cars" element={<Cars />} >
         
 </Route>
           <Route path = "cart" element = {<Cart/>}/>
          <Route path="boats" element={<Boats />} />
          <Route path="bicycles" element={<Bicycles />} />
        
          </Route>
            <Route path="item" element={< ItemView  />} />
            <Route path = "boatitem" element = {<BoatView/>}/>
            <Route path = "bikeitem" element = {<BikeView/>}/>
          <Route path = "order-confirmed" element = {<Order_confirmed/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;