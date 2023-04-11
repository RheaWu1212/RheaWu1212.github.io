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
    <section className='portfolio-header' id='home'>
      <HeaderBar />
    </section>
    <section className='portfolio-body'>
      <section id='projects'>
        <Projects />
      </section>
      <section id='about'>
        <AboutMe />
      </section>
    </section>  
    <section className='portfolio-footer' id='contact'>
      <Contact />
    </section>
    </>
  )
}