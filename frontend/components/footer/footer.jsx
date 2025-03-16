import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
            <div className="top-foot">
                <div className="top1">
                <div className="skit"><img src="../../public/resources/whitelogo.png" alt="skitbit"/></div>
                <p>By becoming a member of our blog. you have access article and content.</p>
                </div>
                <div className="top2">
                    <input type="email" placeholder='📩 Herexample@zahry.com'/>
                    <button>Subscribe</button>
                </div>
            </div>
            {/* <hr/> */}
            <div className="bot-foot">
                <div className="social">
                  <div className="fa"><img src="../../public/resources/social/x.png" alt="linkedin"/><span>LinkedIn</span></div>
                  <div className="fa"><img src="../../public/resources/social/x.png" alt="twitter"/><span>Twitter</span></div>
                  <div className="fa"><img src="../../public/resources/social/insta.png" alt="instagram"/><span>Instagram</span></div>
                  <div className="fa"><img src="../../public/resources/social/fa.png" alt="facebook"/><span>Facebook</span></div>
                </div>
                <div className="copy">
                 <p>&copy; Copyright 2025 Skitbit International.</p>
                 </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Footer;
