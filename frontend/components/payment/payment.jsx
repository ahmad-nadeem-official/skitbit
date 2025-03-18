import React, { useState } from "react";
import "./payment.css";

const Payment = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="pay">
        <div className="pay-left">
          {/* Billing Information */}
          <div className="pay-l-top">
            <h6 className="mm">Billing Information</h6>
            <div className="pay-l-top1">
              <div className="main">
                <p>Your invoice will be issued according to the details listed here</p>
                <h6 style={{ color: "#62646A" }}>Adnan Akhtar, Skitbit International</h6>
                <p>
                  C-11/191 Yamuna Vihar Shahdra, New Delhi, India 110053 Tax ID: vv
                </p>
              </div>
              <div className="edit">Edit</div>
            </div>
          </div>

          {/* Saved Payment Options */}
          <div className="pay-l-mid">
            <h6>Saved Payment Options</h6>
            <div className="pay-l-mid1">
              <label className="mian2">
                <div className="main-i">
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedCard === "card1"}
                    onChange={() => {
                      setSelectedCard("card1");
                      setShowForm(false);
                    }}
                  />
                  <img src="resources/visa.png" alt="Visa Card" />
                  <div className="mian-j">
                    <p>Adnan Akhtar</p>
                    <p>... ... ... 7109. Expire 1/31. Default</p>
                  </div>
                </div>
              </label>
              <div className="mian2">More Payment Options &#9660;</div>
            </div>
          </div>

          {/* Payment Form Section */}
          <div className="pay-l-bot">
            <h6>Payment Options</h6>
            <div className="pay-l-bot1">
              <div className="wrap-d">
                <label className="mian3">
                  <div className="main-x">
                    <input
                      type="radio"
                      name="payment"
                      checked={selectedCard === "new"}
                      onChange={() => {
                        setSelectedCard("new");
                        setShowForm(true);
                      }}
                    />
                    <img src="resources/visa.png" alt="Visa Card" />
                    <div className="mian-h">
                      <p>Adnan Akhtar</p>
                      <p>... ... ... 7109. Expire 1/31. Default</p>
                    </div>
                  </div>
                </label>
                {!showForm && (
                  <div className="mian3x" onClick={() => setShowForm(true)}>Add New</div>
                )}
              </div>

              {/* Payment Form - Only Visible When "Add New" is Selected */}
              {showForm && (
                <div className="formi">
                  <div className="payment-form">
                    {/* First Row */}
                    <div className="first-row">
                      <div className="input-group">
                        <label>Card Number</label>
                        <input type="text" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="input-group">
                        <label>Expiration Date</label>
                        <input type="text" placeholder="00/00" />
                      </div>
                      <div className="input-group">
                        <label>CVV</label>
                        <input type="text" placeholder="000" />
                      </div>
                    </div>

                    {/* Second Row */}
                    <div className="second-row">
                      <div className="input-group">
                        <label>First Name</label>
                        <input type="text" placeholder="Adnan" />
                      </div>
                      <div className="input-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="Akhtar" />
                      </div>
                    </div>

                    {/* Third Row */}
                    <div className="checkbox-group">
                      <input type="checkbox" id="default-card" />
                      <label htmlFor="default-card">Save as default</label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="pay-right">
          <div className="pay-r-top">
            <img src="resources/slide/img1.png" alt="skitbit-images"/>
            <p>3D Product Animation for tech products & Gadgets</p>
          </div>
          <div className="pay-r-mid">
            <h6>10 secs</h6>
            <h6>$999</h6>
          </div>
          <div className="pay-r-mid2">
            <div className="midi">
              <img src="resources/tm.png" alt="skitbit-images"/>
              <p>7-day delivery</p>
            </div>
            <div className="midj">
              <img src="resources/rev.png" alt="skitbit-images"/>
              <p>3 Revisions</p>
            </div>
          </div>
          <div className="bot">
            <div className="servs">
              <p><span style={{color:"#222325"}}>✓</span>Character design</p>
              <p><span style={{color:"#C8CAD0"}}>✓</span>3D modeling</p>
              <p><span style={{color:"#222325"}}>✓</span>Rigging</p>
              <p><span style={{color:"#C8CAD0"}}>✓</span>Detailed Movements</p>
              <p><span style={{color:"#222325"}}>✓</span>1 Character</p>
              <p><span style={{color:"#C8CAD0"}}>✓</span>Project File Delivery</p>
              <p><span style={{color:"#222325"}}>✓</span>0 Seconds Running Time</p>
              <p><span style={{color:"#C8CAD0"}}>✓</span>X-ray view</p>
            </div>
          </div>
          <div className="p">confirm & pay</div>
        </div>
      </div>
    </>
  );
};

export default Payment;
