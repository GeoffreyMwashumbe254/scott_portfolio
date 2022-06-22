import React, {useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import './About.scss';
import{images} from '../../constants'


const abouts = [
  { title: 'Blockchain Developer', description: 'I am a good Blockchain Developer', imgUrl: images.about01},
  { title: 'Fullstack Developer', description: 'I am a good Fullstack Developer', imgUrl: images.about02},
  { title: 'IT Consultation', description: 'I am a good IT Consultant', imgUrl: images.about03},
]

const About = () => {

  

  return (
    <>
    <h2 className="head-text"> I know that <span>Good Dev</span> <br/> means <span>Good Business</span></h2>

    <div className="app__profiles">

      {abouts.map((about, index) => (
        <motion.div
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: 'tween'}}
        className="app__profile-item"
        key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title}/>
          <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
          <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
        </motion.div>
      ))}

    </div>
    
    </>
  )
}

export default About