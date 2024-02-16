import React, { useEffect, useState } from 'react';
import notesData from '../notesData';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import "../HomePage/Home.css"
const Cart = () => {
  const note = useSelector((state)=>state.CartReducer.note)

  const [cartItems, setCartItems] = useState([]);
  
  
  useEffect(() => {
    // const filteredNote = notesData.find(item => item.id === parseInt(note.id));
    setCartItems([...cartItems,{...note}]);
    
  }, []); 
  // Only include id in the dependency array

  return (
    <>
      {/* <h2>Cart</h2> */}
      <ul>
        {cartItems.map((item, index) => {
          return(
            <div className="cart-item">
            <div className="images">
              {note.imageUrls.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Note ${index + 1}`} />
              ))}
            </div>
            <div className="details">
              <h3>{note.name}</h3>
              <p>{note.description}</p>
              <p>Price: ${note.price}</p>
              <Link to= "/buyer" className="buy-now-button">Buy Now </Link>
            </div>
          </div>
          )
}
)}
      </ul>

      
    </>
  );
};

export default Cart;
