import React from 'react';
import "./About.css";
import aboutImg from "../components/images/about.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>BookHub</h2>
            <p className='fs-17'>BookHub is my capstone project, a Node.js and React-driven application that utilizes an API to search for books. This project served as a culmination of my skills in both backend and frontend development. It provided an opportunity to put into practice everything I've learned, allowing me to create a centralized platform for discovering and exploring a vast collection of books.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
