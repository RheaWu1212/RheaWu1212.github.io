import './portfolio.css';
//import git from './image/git.svg';
import './image';
// import React, { useState, useEffect } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import HeaderBar from './components/HeaderBar';
// import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

export const Portfolio = () => {
  return (

    <div className='portfolio-p-wrapper'>
      <div className='portfolio-p'>
        <div className='portfolio-overlap'>
          <div className='portfolio-frame' />
          <h1 className='portfolio-name'>RHEA WU</h1>
        </div>
        <div className='portfolio-overlap-group'>
          <img className='portfolio-stack-gh' src={github.svg} />
          <div className='portfolio-overlap-group12'>
            <div className='portfolio-overlap-group11'>
              <div className='portfolio-overlap-group10'>
                <img className='portfolio-stack-git' src={git.svg} />
                <img className='portfolio-stack-docker' src={docker.svg} />
              </div>
              <div className='portfolio-overlap-group7'>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
