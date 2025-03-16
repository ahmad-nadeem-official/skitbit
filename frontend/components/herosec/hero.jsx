import React, { useState } from "react";
import "./hero.css";

const sliderImages = [
  "/resources/login-images/skitbit-image1.jpeg",
  "/resources/login-images/skitbit-image2.jpeg",
  "/resources/login-images/skitbit-image3.jpeg",
  "/resources/login-images/skitbit-image4.jpeg",
  "/resources/login-images/skitbit-image5.jpeg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  return (
    <div className="hero-slider-container">
      {/* Left Arrow */}
      <button className="hero-slider-arrow hero-left-arrow" onClick={prevSlide}>
        <div className="hero-arrow-circle">
          <img src="/resources/leftarrow.png" alt="Left Arrow" />
        </div>
      </button>

      {/* Slide Images */}
      <div className="hero-slider-wrapper">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="hero-slider-arrow hero-right-arrow" onClick={nextSlide}>
        <div className="hero-arrow-circle">
          <img src="/resources/rightarrow.png" alt="Right Arrow" />
        </div>
      </button>

      {/* Dots Indicator */}
      <div className="hero-slider-dots">
        {sliderImages.map((_, index) => (
          <span
            key={index}
            className={`hero-dot ${index === currentIndex ? "hero-active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
