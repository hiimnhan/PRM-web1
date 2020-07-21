import React from 'react';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';

export default function HomePage() {
  return (
    <div className='homepage-container'>
      <Navbar />
      <Carousel item='Banks' />
    </div>
  );
}
