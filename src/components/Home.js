import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import StruglingWorkers from './StruglingWorkers'
import BusinessWorker from './BusinessWorker'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <StruglingWorkers />
      <BusinessWorker/>
    </div>
  )
}

export default Home

// import React from 'react'
// import Test from './Test'

// const Home = () => {
//   return (
//     <div>
//       <Test/>
//     </div>
//   )
// }

// export default Home
