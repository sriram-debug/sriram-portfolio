import React, { useEffect, useRef, useState } from "react";
import "./skillbar.css"

const SkillBar = ({ name, Icon, level }) => {
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
    <div className="score" ref={ref}>
      <div className="icon">
        <h3>{name}</h3>
        <Icon />
      </div>
      <div className="line">
        <div className="progress">
          <span
            className="progress-bar"
            
            style={{
              width: animated ? level : "0%",
              transition: "width 1s cubic-bezier(0.4,0,0.2,1)"
            }}
          ></span>
          
        </div>
        <p>{level}</p>
      </div>
      
    </div>
  );
};

export default SkillBar;
