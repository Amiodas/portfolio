import React, { useEffect, useRef } from "react";
import "./Preloader.css"; // Make sure to create a CSS file for styling
import anime from "animejs";

const Preloader = () => {
  const animatedElement = useRef(null);

  useEffect(() => {
    anime({
      targets: ".line-drawing-demo .lines path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <div className="preloader">
      <div ref={animatedElement}>
        {/* Animate Me! */}

        <div className="dot-container mb-3 ml-3">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      {/* <p>Loading...</p> */}
    </div>
  );
};

export default Preloader;
