import React from 'react';
import Aboutbox from './Aboutbox/Aboutbox';
import './About.css';
const About = () => {
  return (
    <section className='about_container'>
        <div className='aboutbg'>
          <h1>About Us</h1>
        </div>
      <Aboutbox />
      <Aboutbox />
      <Aboutbox />
    </section>
  )
}

export default About