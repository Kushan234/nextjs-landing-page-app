"use client" 
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Feature from '@/app/Features/page'
import About from '@/app/About/page'
import Services from '@/app/Services/page'
import Reviews from '@/app/Reviews/page'
import Team from '@/app/Team/page'
import Pricing from '@/app/Pricing/page'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      Aos.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
  };
    initAOS();
  }, []); 

  return (
    <>
    <div className="overflow-hidden ">
      <Hero />
      <About />
      <Feature />
      <Services />
      <Reviews />
      <Team />
      <Pricing />
      </div>
    </>
  )
}

export default Home