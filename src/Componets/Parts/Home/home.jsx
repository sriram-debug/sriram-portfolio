import React from 'react'
import './home.css'
import  Photo from '../../../assets/photo.png'

const Home = () => {
  return (
    <div className='home'>
      
        <div className="hero-txt">
            <h1 className='text'>Hey there, I'm Sriram.<br></br><h1 className='role'>
            Web Developer</h1> with a Designer’s Eye.</h1>
            <h3 className='text'>Turning vision into pixel-perfect web experiences.</h3>
            <button className="hire">Hire Me</button>

        </div>
        <div className="logo-img">
          <img src={Photo} alt="sriram" />

        </div>
    </div>
  )
}

export default Home