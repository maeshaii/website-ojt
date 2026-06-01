import React from 'react';
import Navbar from '../components/Navbar';
import Hero from './Landingpage/hero';
import AboutUs from './Landingpage/aboutus';
import Services from './Landingpage/services';
import Footer from '../components/Footer';

export default function WelcomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services/>
      <Footer/>
    </>
  );
}