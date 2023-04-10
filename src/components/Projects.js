import React from 'react';
import git from '../image/git.svg';
import github from '../image/github.svg';
import docker from '../image/docker.svg';
import aws from '../image/aws.svg';
import css from '../image/css.svg';
import express from '../image/expressjs.svg';
import graphql from '../image/graphql.svg';
import html from '../image/html.svg';
import mongodb from '../image/mongodb.svg';
import node from '../image/nodejs.svg';
import postgresql from '../image/postgresql.svg';
import react from '../image/reactjs.svg';
import typescript from '../image/typescript.svg';
import webpack from '../image/webpack.svg';

const Projects = () => {
    return (
        <div className='projects'>

            <div className='projects-lightql'>
                <h2>LightQL</h2>
                <p>Client-side Caching Tool for GraphQL</p>
                <a href='https://lightql.com/' target='_blank'>
                    <button className='project-l'>Website Here</button>
                </a>
            </div>

            <div className='projects-GameBetter'>
                <h2>GameBetter</h2>
                <p>Easy and Quick Assess for Smart Games</p>
                <a href='https://github.com/RheaWu1212/pfaIteration' target='_blank'>
                    <button className='project-g'>More Info</button>
                </a>
            </div>

            <div className='projects-Jushin'>
                <h2>Jushin</h2>
                <p>Online Web Reception Chat Room</p>
                <a href='https://github.com/Geodudr/Geodudr' target='_blank'>
                    <button className='project-j'>More Info</button>
                </a>
            </div>

            <div className='projects-Quitr'>
                <h2>Quitr</h2>
                <p>Web App That Helps You Quit Bad Habits</p>
                <a href='https://github.com/quittersarewinners/Quitr' target='_blank'>
                    <button className='project-q'>More Info</button>
                </a>
            </div>

            <div className='tech-stack'>
                <p>IN CASE YOU WANT TO KNOW WHAT TECH I USE</p>
                <img className='portfolio-stack' src={mongodb} />
                <img className='portfolio-stack' src={express} />
                <img className='portfolio-stack' src={react} />
                <img className='portfolio-stack' src={node} />
                <img className='portfolio-stack' src={html} />
                <img className='portfolio-stack' src={css} />
                <img className='portfolio-stack' src={typescript} />
                <img className='portfolio-stack' src={postgresql} />
                <img className='portfolio-stack' src={graphql} />
                <img className='portfolio-stack' src={webpack} />
                <img className='portfolio-stack' src={aws} />
                <img className='portfolio-stack' src={docker} />
                <img className='portfolio-stack' src={git} />
                <img className='portfolio-stack' src={github} />
            </div>

            {/* <div className='projects-wrap'>
                <div className='swe-left-wrap'>
                    <div className='swe-left'>
                        <div className='tech-stack-1'>
                            <img className='portfolio-stack' src={mongodb} />
                            <img className='portfolio-stack' src={express} />
                            <img className='portfolio-stack' src={react} />
                            <img className='portfolio-stack' src={node} />
                            <img className='portfolio-stack' src={html} />
                            <img className='portfolio-stack' src={css} />
                        </div>
                        <div className='tech-stack-2'>
                            <img className='portfolio-stack' src={typescript} />
                            <img className='portfolio-stack' src={postgresql} />
                            <img className='portfolio-stack' src={graphql} />
                        </div>
                        <div className='tech-stack-3'>
                            <img className='portfolio-stack' src={webpack} />
                            <img className='portfolio-stack' src={aws} />
                            <img className='portfolio-stack' src={docker} />
                            <img className='portfolio-stack' src={git} />
                            <img className='portfolio-stack' src={github} />
                        </div>
                        <img className='vline-1' src={verLine} />
                    </div>
                </div>
                <div className='swe-right-wrap'>
                    <div className='swe-right'>
                        <a href='https://lightql.com/' target='_blank'>
                            <div className='project-l'>LightQL</div>
                        </a>
                        <a href='https://github.com/RheaWu1212/pfaIteration' target='_blank'>
                            <div className='project-g'>GameBetter</div>
                        </a>
                        <a href='https://github.com/Geodudr/Geodudr' target='_blank'>
                            <div className='project-j'>Jushin</div>
                        </a>
                        <a href='https://github.com/quittersarewinners/Quitr' target='_blank'>
                            <div className='project-q'>Quitr</div>
                        </a>
                        <img className='vline-2' src={verLine} />
                    </div>
                </div>
                
            </div> */}
        </div>
    )
};

export default Projects;