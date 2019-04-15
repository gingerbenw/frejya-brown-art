import About from 'components/About';
import Hero from 'components/Hero';
import SideNav from 'components/SideNav';
import ImageGallery from 'containers/ImageGallery';
import React from 'react';
import artworks from 'utils/mocks/artwork';

const Index = () => (
  <div>
    {/* <Header /> */}
    {/* <SideNav /> */}
    <Hero />
    <About />
    <ImageGallery artworks={artworks} />
  </div>
);

export default Index;
