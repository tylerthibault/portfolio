import React, { useEffect, useState } from 'react'
import AboutMeWidget from '../components/landingPage/AboutMeWidget'
import ContactMe from '../components/landingPage/ContactMe'
import EducationWidget from '../components/landingPage/EducationWidget'
import Footer from '../components/Footer'
import Hero from '../components/landingPage/Hero'
import Lorem from '../components/landingPage/Lorem'
import Navbar from '../components/landingPage/Navbar'
import ProjectWidget from '../components/landingPage/ProjectWidget'
import TechnologyWidget from '../components/landingPage/TechnologyWidget'
import WorkhistoryWidget from '../components/landingPage/WorkhistoryWidget'

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