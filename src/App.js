import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './HomePage/Home';
import BuyerInfo from './BuyerInfo/BuynerInfo';
import Contact from './Navbar/Contact';
import SignUp from './Navbar/SignUp';
import LogIn from './Navbar/LogIn';
import Cart from './Navbar/CartIcon';
import PaymentGateway from './PaymentGateway/Payment';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<LogIn/>} />
           <Route path="/buyer" element={<BuyerInfo />} /> 
           <Route path="/cart" element={<Cart />} /> 
           <Route path = "/payment" element = {<PaymentGateway />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


