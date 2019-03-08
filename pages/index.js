import React from 'react';
import Gallery from 'components/Gallery';
import Header from 'components/Header';
import About from 'components/About';
import SideNav from 'components/SideNav';
import Hero from 'components/Hero';

const Index = () => (
  <div>
    {/* <Header /> */}
    <SideNav />
    <Hero />
    <About />
    <Gallery />
  </div>
);

export default Index;
