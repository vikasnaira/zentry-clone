import React from 'react'
import Page1 from './Page1/Page1'
import Page3 from './Page3/Page3'
import Page2 from './Page2/Page2'
import Page4 from './Page4/Page4'
import Page5 from './Page5/Page5'
import Page6 from './Page6/Page6'
import Footer from './Footer/Footer'
const Home = () => {
  return (
    <div className='bg-zinc-300 w-full overflow-hidden'>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Footer/>

    </div>
  )
}

export default Home
