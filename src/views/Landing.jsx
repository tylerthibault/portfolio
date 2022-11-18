import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Lorem from '../components/Lorem'
import Navbar from '../components/Navbar'

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
        <Navbar />
        <Hero 
        windowPos={windowPos}
        />
        <Lorem />
    </div>
  )
}

export default Landing