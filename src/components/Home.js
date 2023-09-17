import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import StruglingWorkers from './StruglingWorkers'
import BusinessWorker from './BusinessWorker'
import FindWork from './PopupForm'
import Logo from './Logo'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Logo/>
      <StruglingWorkers />
      <BusinessWorker/>
      <FindWork/>
    </div>
  )
}

export default Home

