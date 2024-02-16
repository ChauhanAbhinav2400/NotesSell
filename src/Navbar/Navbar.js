import React from 'react';
import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img src = "https://img.freepik.com/premium-vector/letter-b-logo-with-music-notation-concept_101434-1022.jpg" alt = "logo" height = "90px" width = "90px" /></Link>
        
      </div>
      <Link to="/" className="website-name">CrackNEET</Link>
      <ul className="nav-links">
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        {/* <li><Link to="/cart"><FaShoppingCart /></Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
