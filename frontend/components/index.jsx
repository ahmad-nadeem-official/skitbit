import React from 'react';
import Nav from './indexcomp/nav';
import Hero from './herosec/hero';
import Service from './services/service';
import Filter from './filter/filter';
import Card from './card/card';
import './index.css';
import Footer from './footer/footer';

const Have = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <Service/>
    <Filter/>
    <div className='product'>
      <Card price="1100/30" img="../../resources/card/football_shoes.png" desc="Football Shoes - 3D Product Animation"/>
      <Card price="1999/10" img="../../resources/card/mobile.png" desc="Mobile Phones & Tablet 3D Product Animation"/>
      <Card price="1100/30" img="../../resources/card/electronics.png" desc="Consumer Electronics - 3D Product Animation"/>
      <Card price="499/10" img="../../resources/card/beautyproduct.png" desc="Beauty Product - 3D Product Animation"/>
      <Card price="300/15" img="../../resources/card/football_shoes.png" desc="premium shoes - 3D Product Animation"/>
      <Card price="1499/15" img="../../resources/card/hanBag.png" desc="Hand Bags - 3D Product Animation"/>
      <Card price="999/15" img="../../resources/card/LuxuryPerfumes.png" desc="Luxury Perfumes - 3D Product Animation"/>
      <Card price="150/10" img="../../resources/card/mobile.png" desc="Creative Animation GIFS Visuals"/>
      <Card price="800/10" img="../../resources/card/packagedFood.png" desc="Packaged Food - 3D Product Animation"/>
      <Card price="300/15" img="../../resources/card/luxurywatches.png" desc="Luxury Watches - 3D Product Animation"/>
      <Card price="30,000/30" img="../../resources/card/automobile.png" desc="Automobiles - 3D Animation"/>
      <Card price="300/10" img="../../resources/card/3dproduct.png" desc="premium shoes - 3D Product Animation"/> 
    </div>
    <Footer/>
    </>
  )
}

export default Have;