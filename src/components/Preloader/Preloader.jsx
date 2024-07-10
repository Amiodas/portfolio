import React from 'react';
import './Preloader.css'; // Make sure to create a CSS file for styling

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="dot-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      {/* <p>Loading...</p> */}
    </div>
  );
};

export default Preloader;