import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <>
    <div className="card">
      <div className="card-container">
        <div className="card-top">
          <h6>${props.price} secs</h6>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#838383"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>
        </div>
        <img src={props.img} alt="skitbit-image" />
        <div className="card-bot">
          <img src="../../public/resources/rating.png" alt="skitbit-images"/>
          <h6>5.0</h6>
        </div>
      </div>
      <div className="card2">
        <p>{props.desc}</p>
        <span className="view-btn">view</span>
      </div>
    </div>
    </>
  );
};

export default Card;







