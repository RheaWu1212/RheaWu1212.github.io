import './app.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  
  return (
    <div>
      <HeaderBar />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;