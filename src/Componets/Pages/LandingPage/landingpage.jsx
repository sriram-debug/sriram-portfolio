import React from 'react'
import "./landingpage.css"
import NavBar from '../../Parts/NavBar/NavBar'
import Home from '../../Parts/Home/home'




const Landingpage = () => {
  return (
    <div className='landingpage'>
      
      <NavBar/>
      <Home/>
    </div>
  )
}

export default Landingpage