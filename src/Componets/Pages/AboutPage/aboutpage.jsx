import React, { useEffect, useRef, useState } from "react";
import './aboutpage.css'
import Myimg from '../../../assets/myimg.png'


const aboutpage = () => {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true); 
        } 
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className='aboutpage' id='about' ref={ref}>
        
        <div className="my-img" style={{
            opacity: animated? '1':'0' ,
            transform:animated? "translateX(0)" : "translateX(-20rem)",
            transition: " 1s ease"
          }}>
            <img src={Myimg} alt='my-img'></img>

        </div>
        <div className="about-txt" style={{
            opacity: animated? '1':'0' ,
            transform:animated? "translateX(0)" : "translateX(20rem)",
            transition: " 1s ease"
          }}>
            <h1>About me</h1>
            
            <p>
                Hey! I'm Sriram. A passionate Web Developer with a Designer’s Eye.  
                I craft sleek, responsive, and engaging web experiences that don't just look good, but feel right.
                I'm the kind of developer who loves merging logic with creativity. From building dynamic websites to experimenting with animation and interactivity, I thrive at the intersection of code and design.
                Tech I vibe with:  
                HTML, CSS, JavaScript, React, Canvas API, and a bit of backend magic.  
                Tools I enjoy: Photoshop, Figma, and a good CSS gradient.
                I'm currently leveling up with real-world projects — from music players and interactive games to AI chatbots and portfolio UIs that stand out.
                Whether it's solving problems or designing pixel-perfect UIs, I’m all about building things that people *actually want to use*.
                Let’s build something cool together 

            </p>
            <button className="hire">Hire Me</button>
        </div>
        
    </div>
  )
}

export default aboutpage