import React, { useEffect, useState } from 'react'
import AboutMeWidget from '../components/AboutMeWidget'
import ContactMe from '../components/ContactMe'
import EducationWidget from '../components/EducationWidget'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Lorem from '../components/Lorem'
import Navbar from '../components/Navbar'
import ProjectWidget from '../components/ProjectWidget'
import TechnologyWidget from '../components/TechnologyWidget'
import WorkhistoryWidget from '../components/WorkhistoryWidget'

function Landing() {
  const [windowPos, setWindowPos] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
  }, [])

  const scrollHandler = () => {
    let pos = window.pageYOffset
    setWindowPos(pos)
    
  }

  return (
    <div className='flex flex-col gap-10'>
        <Hero 
        windowPos={windowPos}
        />
        <Navbar 
        windowPos={windowPos}
        />
        <AboutMeWidget />
        <TechnologyWidget />
        <EducationWidget />
        {/* <ProjectWidget /> */}
        <WorkhistoryWidget />
        <ContactMe />
        <Footer />
    </div>
  )
}

export default Landing