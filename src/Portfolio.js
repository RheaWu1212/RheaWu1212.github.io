import './portfolio.css';
// import React, { useState, useEffect } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

export const Portfolio = () => {
  return (
    <div className='root-page'>
    <section className='header'>
      <HeaderBar />
    </section>
    <section className='body'>
      <Projects />
      <AboutMe />
    </section>  
    <section className='footer'>
      <Contact />
    </section>
    </div>

  )
}




    // <div className='portfolio-p-wrapper'>
    //   <div className='portfolio-p'>
    //     <div className='portfolio-overlap'>
    //       <div className='portfolio-frame' />
    //       <h1 className='portfolio-name'>RHEA WU</h1>
    //     </div>

    //     <div className='icon'>
    //       <img className='portfolio-aboutme' src={aboutMe} />
    //       <img className='portfolio-stack' src={stack} />
    //       <img className='portfolio-contact' src={contact} />
    //     </div>

    //     <div className='portfolio-overlap-group'>
    //       <img className='portfolio-stack-gh' src={github} />
    //       <div className='portfolio-overlap-group12'>
    //         <div className='portfolio-overlap-group11'>
    //           <div className='portfolio-overlap-group10'>
    //             <img className='portfolio-stack-git' src={git} />
    //             <img className='portfolio-stack-docker' src={docker} />
    //           </div>
    //           <div className='portfolio-overlap-group7'>
    //             <img className-='portfolio-stack-aws' src={aws} />
    //             <img className='portfolio-stack-webpack' src={webpack} />
    //             <img className='portfolio-stack-graphql' src={graphql} />
    //             <img className='portfolio-stack-express' src={express} />
    //             <img className='portfolio-stack-mongodb' src={mongodb} />
    //             <img className='portfolio-line-v' src={verLine} />
    //           </div>
    //         </div>
    //         <div className='portfolio-overlap-group9'>
    //           <img className='portfolio-stack-html' src={html} />
    //           <img className='portfolio-stack-css' src={css} />
    //           <img className='portfolio-stack-node' src={node} />
    //         </div>
    //         <img className='portfolio-stack-react' src={react} />
    //       </div>
    //       <img className='portfolio-stack-postgresql' src={postgresql} />
    //       <img className='portfolio-stack-typescript' src={typescript} />
    //       <div className='portfolio-overlap-group8'>
    //         <img className='portfolio-line-v.1' src={verLine} />
    //         <a href='https://github.com/quittersarewinners/Quitr' target='_blank'>
    //           <div className='portfolio-text-wrapper-q'>Quitr</div>
    //         </a>
    //         <a href='https://github.com/Geodudr/Geodudr' target='_blank'>
    //           <div className='portfolio-text-wrapper-j'>Jushin</div>
    //         </a>
    //         <a href='https://github.com/RheaWu1212/pfaIteration' target='_blank'>
    //           <div className='portfolio-text-wrapper-g'>GameBetter</div>
    //         </a>
    //         <a href='https://lightql.com/' target='_blank'>
    //           <div className='portfolio-text-wrapper-l'>LightQL</div>
    //         </a>
    //       </div>
    //     </div>
        
    //     <div className='portfolio-overlap-group1'>
    //       <div className='portfolio-bg-circle' />
    //       <div className='portfolio-self-description'>more to explore</div>
    //       <p className='portfolio-self-description-4'>
    //         a cat mom, foodie, <br />
    //         vintage collector,
    //       </p>
    //     </div>
    //     <div className='portfolio-overlap-group2'>
    //       <div className='portfolio-bg-circle-2' />
    //       <div className='portfolio-bg-circle-1' />
    //       <p className='portfolio-self-description-3'>
    //         I'm a Muay Thai practitioner, <br />
    //         classical piano performer
    //       </p>
    //       <a href='https://www.linkedin.com/posts/rheawu-tech_i-was-recently-invited-to-speak-on-load-balancers-activity-7018955111016103936-8k89/?utm_source=share&utm_medium=member_desktop' target='_blank'>
    //         <p className='portfolio-self-description-2'>I've conquered mu fear of public speaking</p>
    //       </a>
    //     </div>
    //     <p className='portfolio-self-description-1'>
    //       but also a human that turns interests into knowledge
    //       <br />
    //       <br />
    //       turns failure into motivation <br />
    //       <br />
    //       turns fear into power
    //     </p>

    //     <div className='profile-title'>
    //       <div className='profile-title-l'>
    //         <div className='portfolio-title-l-1'>Full-stack</div>
    //         <div className='portfolio-title-l'>Software Engineer</div>
    //       </div>
    //       <div className='profile-title-m'>
    //         <img className='portfolio-profile-pic' src={profilePic} />
    //       </div>
    //       <div className='profile-title-r'>
    //         <div className='portfolio-title-r-1'>Passionate</div>
    //         <div className='portfolio-title-r'>Builder & Creator</div>
    //       </div>
    //     </div>
        

        
        
    //     <div className='portfolio-overlap-group3'>
    //       <img className='portfolio-line-h' src={horLine} />
    //       <a href='https://medium.com/@lightql/how-to-implement-client-side-caching-for-graphql-optimising-for-run-time-speed-cache-persistence-67cf72319163' target='_blank'>
    //         <div className='portfolio-contact-1'>MEDIUM</div>
    //       </a>
    //       <a href='http://www.linkedin.com/in/rheawu-tech' target='_blank'>
    //         <div className='portfolio-contact-2'>LINKEDIN</div>
    //       </a>
    //       <a href='mailto:rheawu1212@gmail.com' target='_blank'>
    //         <div className='portfolio-contact-3'>EMAIL</div>
    //       </a>
    //     </div>

    //   </div>
    // </div> 
