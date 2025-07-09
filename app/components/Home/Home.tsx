import React from 'react'
import Hero from './Hero/Hero'
import About from '../About/About'
import Feature from './Feature/Feature'
import Services from './Services/Services'
import Reviews from './Reviews/Reviews'
import Team from './Team/Team'

const Home = () => {
  return (
    <>
    <div className="overflow-hidden ">
      <Hero />
      <About />
      <Feature />
      <Services />
      <Reviews />
      <Team />
      </div>
    </>
  )
}

export default Home