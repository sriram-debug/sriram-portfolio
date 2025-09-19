import React, { useEffect, useState } from 'react'
import './App.css'
import Screen from './Componets/Parts/Screen/screen'
import Landingpage from './Componets/Pages/LandingPage/landingpage'
import Project from './Componets/Pages/Projects/project'
import AboutPage from './Componets/Pages/AboutPage/aboutpage'
import Skills from './Componets/Pages/SkillPage/skills'
import Contact from './Componets/Pages/Contact Me/contact'

import bgVid from './assets/vid.mp4'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, []);



  



  return (
    
    <div>

      <video loop plays-Inline autoPlay muted className='bg-vid'>
        <source src={bgVid} type="video/mp4" />
      </video>

      <div className="app">
        {isLoading ? <Screen /> :
         <div className="content"><Landingpage /> <AboutPage/> <Project/> <Skills/> <Contact/></div>}

      </div>
      
      
      
    </div>
  )
}

export default App