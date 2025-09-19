import React, { useEffect, useRef, useState } from "react";
import './project.css'
import Card from '../../Parts/Card/card'
import MusicImg from "../../../assets/music-player.png"
import chatBot from "../../../assets/chat-bot.png"
import quizApp from "../../../assets/quiz-app.png"


const Project = () => {

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
    <div className='project' id='project' ref={ref}>
       <div className="projects-tittle">
            <h1>Projects</h1>
       </div>
      <div className="cards" >
        <Card
          projectName="MusicPlayer"
          projectDescription="A React music player app with rating, sorting and backend integration."
          projectUrl={MusicImg}
          projectLink="https://github.com/yourname/music-player"
          style={{
            
            opacity: animated ? '1' : '0',
            transform: animated ? 'translateY(0)' : 'translateY(10rem)',
            transition: 'all 0.6s ease',
            transitionDelay: '0s',
          }}
        />

        <Card
          projectName="QuizApp"
          projectDescription="The Quiz App is a responsive and interactive web application built using React."
          projectUrl={quizApp}
          projectLink="https://github.com/yourname/quiz-app"
          style={{
            opacity: animated ? '1' : '0',
            transform: animated ? 'translateY(0)' : 'translateY(10rem)',
            transition: 'all 0.6s ease',
            transitionDelay: '0.3s',
          }}
        />

        <Card
          projectName="ChatBot"
          projectDescription="The College Assistant Chatbot is an AI-driven web application"
          projectUrl={chatBot}
          projectLink="https://github.com/yourname/chat-bot"
          style={{
            opacity: animated ? '1' : '0',
            transform: animated ? 'translateY(0)' : 'translateY(10rem)',
            transition: 'all 0.6s ease',
            transitionDelay: '0.6s',
          }}
        />

      </div>
    </div>
  )
}

export default Project