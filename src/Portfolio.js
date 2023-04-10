import './Portfolio.css';
// import React, { useState, useEffect } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

export const Portfolio = () => {
  return (
    <>
    <section className='portfolio-header'>
      <HeaderBar />
    </section>
    <section className='portfolio-body'>
      <Projects />
      <AboutMe />
    </section>  
    <section className='portfolio-footer'>
      <Contact />
    </section>
    </>
  )
}

