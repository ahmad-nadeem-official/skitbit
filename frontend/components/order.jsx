import React from 'react';
import Nav from './indexcomp/nav';
import Req from './requirmnets/req';
import Payment from './payment/payment';
import Footer from './footer/footer';
import './order.css'

const Order = () => {
  return (
    <>
    <div className="mydi">
    <img className='imagi' style={{marginLeft:'140px'}} src="resources/logo.png"alt="" />
    <div className="nope">
      <Nav />
    </div>      
    <Req/>
    <Payment/>
    <Footer/>
    </div>
    </>
  );
}

export default Order;
