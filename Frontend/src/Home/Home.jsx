import React from 'react'

import Navbar from '../Components/Navbar';
import HomePage from '../Components/HomePage';
import Footer from '../Components/Footer';
import Freebook from '../Components/Freebook';

function Home() {
  return (
    <div><>
    <Navbar/>
    <HomePage/>
    <Freebook />
    <Footer/>  
    </></div>
  )
}

export default Home