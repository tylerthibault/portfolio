import React, { useEffect, useState } from 'react'
import AboutMeWidget from '../components/AboutMeWidget'
import Hero from '../components/Hero'
import Lorem from '../components/Lorem'
import Navbar from '../components/Navbar'
import TechnologyWidget from '../components/TechnologyWidget'

function Landing() {
  const [windowPos, setWindowPos] = useState()

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
  }, [])

  const scrollHandler = () => {
    let pos = window.pageYOffset
    setWindowPos(pos)
    
  }

  return (
    <div>
        <Hero 
        windowPos={windowPos}
        />
        <Navbar />
        <AboutMeWidget />
        <TechnologyWidget />
        {/* <Lorem /> */}
    </div>
  )
}

export default Landing