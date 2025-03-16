import React from "react";
import "./service.css";

const Service = () => {
  return (
    <div className="service-container">
      <h1>Services</h1>
      <div className="service-list">
        <a href="#" >Presenters videos</a>
        <a href="#" >Animation</a>
        <a href="#" >Filmed Video production</a>
        <a href="#" >Explainer Videos</a>
        <a href="#" >Product videos</a>
        <a href="#" >AI videos</a>
        <span className="new-badge">New</span>
      </div>
    </div>
  );
};

export default Service;