import { useState } from "react";
import "./Home.css"
import {useDispatch} from "react-redux";
import {getCartData} from "../Actions/Cart.action"
import { Link } from "react-router-dom";
function NoteCard({ note }) {
const dispatch = useDispatch()

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % note.imageUrls.length);
    };
  
    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + note.imageUrls.length) % note.imageUrls.length);
    };
  
    return (
      <div className="note-card">
        <img src={note.imageUrls[currentImageIndex]} alt={note.name} />
        <div className="image-nav">
          <button onClick={handlePrevImage}>&lt; </button>
          <span>{currentImageIndex + 1} / {note.imageUrls.length}</span>
          <button onClick={handleNextImage}> &gt;</button>
        </div>
        <h2>{note.name}</h2>
        <p>{note.description}</p>
        <Link to = "/cart" className="buy-button" onClick = {()=>dispatch(getCartData(note))}>Buy Now</Link>
      </div>
    );
  }
export default NoteCard;
