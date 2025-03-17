import React from 'react';
import Nav from './indexcomp/nav';
import Service from './services/service';
import Filter from './filter/filter'; 
import D1 from './Details1/detailed';
import D2 from './detailed2/detailed2';
import Footer from './footer/footer';
import PricingTable from './pricetable/price';

const Detail = () => {
  return (
    <>
      <Nav/>
      <Service/>
      <Filter/>
      <D1/>
      <D2/>
      <PricingTable/>
      <Footer/>
    </>
  );
}

export default Detail;
