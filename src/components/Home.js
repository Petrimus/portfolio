import React, { useState } from 'react'
import { useScrollPosition } from '../hooks/hooks'

// import view components 
import Header from './header/Header'
// import Footer from './Footer'
import About from './About'
import Skills from './Skills'
import Projects from './projects/Projects'
import Contacts from './Contacts'
import Certificates from './Certificates'

const Home = ({ projects }) => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > prevPos.y
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  }, [hideOnScroll], 100)

  return (
    <div id='home'>
      <Header isOpen={hideOnScroll}/>
      <About />
      <Skills />
      <Projects projects={projects} />
      <Certificates />
      <Contacts />
    </div>
  )
}

export default Home