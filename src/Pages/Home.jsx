import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Home/HeroSection'
import Service from '../components/Home/Service'
import Trusted from '../components/Home/Trusted'
import FeatureProduct from '../components/Home/FeatureProduct'
import Slider from '../components/Home/Slider'
import Paralax from '../components/Home/Paralax'
import Discount from '../components/Home/Discount'
import Satisfied from '../components/Home/Satisfied'


function Home() {

  return (
    <>
     <Herosection name="TRIARD"/>   
     <Slider/>
     <Discount/>
     <Paralax/> 
     <Satisfied/>
     <FeatureProduct/>
     <Service/> 
     <Trusted/>
     
    </>
  )
}

export default Home