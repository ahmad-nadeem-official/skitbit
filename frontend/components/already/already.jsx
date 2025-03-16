import { useRef } from 'react';
import React from 'react';
import '../create/create.css'
import { Link } from "react-router-dom";
import leftArrow from "../../public/resources/left arrow.png"; // Import left arrow PNG
import rightArrow from "../../public/resources/right arrow.png"; // Import right arrow PNG

const Already = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="main">
        <div className="split-left">
          <div className="slider-wrapper">
            <img src="../../resources/bitlogo.png" alt="skitbit-logo" />
            {/* Left Arrow */}
            <button className="arrow left-arrow" onClick={scrollLeft}>
              <img src={leftArrow} alt="Left Arrow" />
            </button>

            <div className="slider" ref={sliderRef}>
              <img
                id="si1"
                src="../../public/resources/login-images/skitbit-image2.jpeg"
                alt="skitbit"
              />
              <img
                id="si2"
                src="../../public/resources/login-images/skitbit-image4.jpeg"
                alt="skitbit"
              />
              <img
                id="si3"
                src="../../public/resources/login-images/skitbit-image5.jpeg"
                alt="skitbit"
              />
              <img
                id="si4"
                src="../../public/resources/login-images/skitbit-image6.jpeg"
                alt="skitbit"
              />
              <img
                id="si5"
                src="../../public/resources/login-images/skitbit-image7.jpeg"
                alt="skitbit"
              />
              <img
                id="si6"
                src="../../public/resources/login-images/skitbit-image8.jpeg"
                alt="skitbit"
              />
              <img
                id="si7"
                src="../../public/resources/login-images/skitbit-image9.jpeg"
                alt="skitbit"
              />
              <img
                id="si8"
                src="../../public/resources/login-images/skitbit-image1.jpeg"
                alt="skitbit"
              />
              <img
                id="si9"
                src="../../public/resources/login-images/skitbit-image3.jpeg"
                alt="skitbit"
              />
            </div>

            {/* Right Arrow */}
            <button className="arrow right-arrow" onClick={scrollRight}>
              <img src={rightArrow} alt="Right Arrow" />
            </button>

            <div className="slider-nav">
              <a href="#si1"></a>
              <a href="#si2"></a>
              <a href="#si3"></a>
              <a href="#si4"></a>
              <a href="#si5"></a>
              <a href="#si6"></a>
              <a href="#si7"></a>
              <a href="#si8"></a>
              <a href="#si9"></a>
            </div>
          </div>
        </div>
        <div className="split-right">
          <div className="signup">
            <div className="top">
              <img src="../../public/resources/logo.png" alt="skitbit-logo" />
              <h1 style={{ textTransform: "lowercase" }}>create an account</h1>
              <p>Let’s Get Started your 30 Day Trial</p>
            </div>
            <div className="midd">
              <form action={""}>
                <input placeholder="username" type="text" />
                <hr />
                <input placeholder="email" type="email" />
                <hr />
                <input placeholder="password" type="password" />
                <hr />
              </form>
            </div>
            <div className="bot">
              <button className="btn">Create an account</button>
              <button>
                <p>
                  <img
                    className="aut-img"
                    src="../../public/resources/google.png"
                    alt="google.png"
                  
                  />
                  Continue With Google
                </p>
              </button>
              <button>
                <p>
                  <img
                    className="aut-img"
                    src="../../public/resources/apple.png"
                    alt="apple.png"
                  />
                  Continue With Apple
                </p>
              </button>
            </div>
            <p className="bott">
              Already have an account ? <Link to="/create-account">login</Link>
            </p>
          </div>
          <div className="signin"></div>
        </div>
      </div>
    </>
  );
};

export default Already