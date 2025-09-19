import React from 'react';
import './skills.css';
import SkillBar from '../../Parts/SkillBar/skillbar';

import { FaCss3Alt, FaHtml5, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';





const Skills = () => {
    
  return (
    <div className='skills' id='skills'>
      <div className="technical-skill">
        <h1>Skills</h1>
        <div className="stats">
          <SkillBar name="PYTHON" Icon={FaPython} level="80%" />
          <SkillBar name="CSS" Icon={FaCss3Alt} level="75%" />
          <SkillBar name="HTML" Icon={FaHtml5} level="90%" />
          <SkillBar name="JAVASCRIPT" Icon={IoLogoJavascript} level="70%" />
          <SkillBar name="REACT JS" Icon={FaReact} level="75%" />
        </div>
      </div>
      <div className="other-skill">
      
      </div>
    </div>
  )
}

export default Skills;
