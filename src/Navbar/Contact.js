// Contact.js
import React from 'react';
import './Navbar.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="owner-info">
        <h3>About the Owner</h3>
        <p>
          <strong>Name:</strong> John Doe<br />
          <strong>Education:</strong> MBBS, XYZ Medical College<br />
          <strong>Address:</strong> 123 Main Street, City, Country<br />
          <strong>Instagram:</strong> <a href="https://www.instagram.com/example" target="_blank">@example</a><br />
          <strong>Twitter:</strong> <a href="https://twitter.com/example" target="_blank">@example</a><br />
        </p>
      </div>
    </div>
  );
}

export default Contact;
