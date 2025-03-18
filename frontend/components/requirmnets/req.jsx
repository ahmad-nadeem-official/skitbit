import React from "react";
import "./req.css";

const Req = () => {
  return (
    <>
      <div className="req">
        <div className="req1">
          <p className="tag">✓</p>
          <h5>Order detail</h5>
          <p>&gt;</p>
        </div>
        <div className="req1">
          <p className="tag">2</p>
          <h5>confirm & pay</h5>
          <p>&gt;</p>
        </div>
        <div className="req1">
          <p className="tag">3</p>
          <h5 className="cng">Submit Requirmnets</h5>
        </div>
      </div>
    </>
  );
};

export default Req;
