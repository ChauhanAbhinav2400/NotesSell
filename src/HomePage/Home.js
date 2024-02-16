import React, { useEffect, useState } from 'react';
import './Home.css';
import notesData from "../notesData"
import BuyerInfo from '../BuyerInfo/BuynerInfo';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';
import Cart from '../Navbar/CartIcon';
function Home() {
  const [notes, setNotes] = useState(notesData);

 
//   const [showBuyerInfo, setShowBuyerInfo] = useState(false);

//   const handleBuyNowClick = () => {
//     setShowBuyerInfo(true);
//   };

//   const handleCloseBuyerInfo = () => {
//     setShowBuyerInfo(false);
//   };
  useEffect(() => {
    // Fetch notes data from API and update state
    // Example: fetch('api/notes').then(response => response.json()).then(data => setNotes(data));
  }, []);

  return (
    <div>
    <div className="content">
      <div className="hero-section">
        <div className="slideshow">
          {/* <div className="slide" style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOd6_c_jqpN9rNrytxpk8giMs9hr_TbevdzA&usqp=CAU')`}}></div>
          <div className="slide" style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-WsHn8nd6nOjrUFCcaftG-D2lYMFQywUXg&usqp=CAU')`}}></div>
  <div className="slide" style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAhK-y0S-3r8RrCWm7Zwcb1tX3jThDjX3Qg&usqp=CAU')` }}></div>*/}
        </div> 
        <div className="hero-content">
          <h1>Master Your Medical Studies with Our Comprehensive MBBS Notes</h1>
          <p>Unlock the secrets of medicine with our meticulously crafted notes. Dive deep into the world of anatomy, physiology, pathology, and more. Achieve excellence in your medical career with our expertly curated study materials.</p>
          <Link to="/" className="cta-button">SCROLL TO SEE NOTES</Link>
        </div>
      </div>
    </div>
      <div className="notes-container">
        {notes.map((note, index) => (
           <NoteCard  key={index} note={note} />
        ))}
      </div>
      <footer>
        <div className="footer-content">
          <p>© 2024 Your MBBS Notes. All rights reserved.</p>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </footer>
      
      </div>
  );
}

export default Home;