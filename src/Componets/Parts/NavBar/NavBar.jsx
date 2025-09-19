import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return ( 
        <div className="navbar">
        <nav>
            <li className='About me'><a href='#about'>About me</a></li>
            <li className='Projects'><a href='#project'>Projects</a></li>
            <li className='Skills'><a href='#skills'>Skills</a></li>
            <li className='Contact'><a href='#contact'>Contact Me</a></li>
        </nav> 
        <div className="title">
            <h2 >Sriram</h2> 
        </div>  
        <div className="email">
        <h3>Say Hi! <a href='#'>sriramwalker@gmail.com</a></h3>
        </div>
        
        </div>
    
  )
}

export default NavBar