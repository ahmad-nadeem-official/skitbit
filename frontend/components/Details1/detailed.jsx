import React from 'react';
import './detailed.css';

const D1 = () => {
  return (
    <>
    <div className="dtop">
        <div className="dtop-left">
            <h2>3D Product Animation for tech products & Gadgets</h2>
            <img className="di" src="resources/rated.png" alt="skitbit-imges" />
            <div className="p-detail">
                <img className="ti" src="resources/detail.png" alt="skitbit-images"/>
                <div className="slide">
                    <div className="lf"><img src="resources/left.png" alt="skitbit"/></div>
                    <img src="resources/play.png" alt="skitbit-images"/>
                    <div className="rf"><img src="resources/right.png" alt="skitbit"/></div>
                </div>
                <ul>
                    <li><img src="resources/slide/img1.png" alt="" /></li>
                    <li><img src="resources/slide/img2.png" alt="" /></li>
                    <li><img src="resources/slide/img3.png" alt="" /></li>
                    <li><img src="resources/slide/img4.png" alt="" /></li>
                    <li><img src="resources/slide/img5.png" alt="" /></li>
                    <li><img src="resources/slide/img6.png" alt="" /></li>
                    <li><img src="resources/slide/img7.png" alt="" /></li>
                </ul>
                <div className="dtop-bot">
                    <h2>About This Service</h2>
                    <h4>Best-Selling Pixar-Quality Modeler & Animator</h4>
                    <p>With over 8 years of experience in 3D modeling and animation, I specialize in crafting high-quality, visually stunning characters and animations. I have completed an Advanced Character Animation Workshop from iAnimate.net (United States), where I was mentored by industry experts from DreamWorks, Blizzard, and Disney Studios.</p>
                </div>
   
            </div>
        </div>
        <div className="dtop-right">
            <div className="dtop1">
              <p className="starts-at">Starts At</p>
              <h2 className="price">$999</h2>
              <p className="tax-info">*Price Excluding Any Taxes</p>
            </div>
        <div className="price-options">
            <button className="price-btn1">10 Secs <span>$999</span></button>
            <button className="price-btn">30 Secs <span>$3000</span></button>
            <button className="price-btn">45 Secs <span>$5000</span></button>
        </div>
        <div className="rev">
            <p>10 secs High Quality 3d product animation</p>
            <div className="rev2">
                <div className="tme">
                    <img src="resources/tm.png" alt="" />
                    <p>10-day turnaround </p>
                </div>
                <div className="riv">
                    <img src="resources/rev.png" alt="skitbit-images"/>
                    <p>1 Revision</p>
                </div>
            </div>
        </div>
        <div className="order">
        <div className="tick">
            <img src="resources/tick2.png" alt=""/>
            <img src="resources/tick1.png" alt=""/>
            <img src="resources/tick2.png" alt=""/>
            <img src="resources/tick1.png" alt=""/>
            <img src="resources/tick2.png" alt=""/>
            <img src="resources/tick1.png" alt=""/>
            <img src="resources/tick2.png" alt=""/>
        </div>
        <div className="features">
            <p>Character design</p>
            <p>3D modeling</p>
            <p>Rigging</p>
            <p>Detailed Movements</p>
            <p>1 Character</p>
            <p>Project File Delivery</p>
            <p>0 Seconds Running Time</p>
            <p>X-ray view</p>
        </div>
        </div>
        <button className="continue-btn">Continue <img src="resources/whiter.png" alt="skitbit"/></button>
    </div>
    </div>
    </>
  );
}

export default D1;
