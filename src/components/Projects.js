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
import verLine from '../image/line-v.svg';

const Projects = () => {
    return (
        <>
        <div className='swe-left'>
            <div className='tech-stack-1'>
                <img className='portfolio-stack-mongodb' src={mongodb} />
                <img className='portfolio-stack-express' src={express} />
                <img className='portfolio-stack-react' src={react} />
                <img className='portfolio-stack-node' src={node} />
                <img className='portfolio-stack-html' src={html} />
                <img className='portfolio-stack-css' src={css} />
            </div>
            <div className='tech-stack-2'>
                <img className='portfolio-stack-typescript' src={typescript} />
                <img className='portfolio-stack-postgresql' src={postgresql} />
                <img className='portfolio-stack-graphql' src={graphql} />
            </div>
            <div className='tech-stack-3'>
                <img className='portfolio-stack-webpack' src={webpack} />
                <img className-='portfolio-stack-aws' src={aws} />
                <img className='portfolio-stack-docker' src={docker} />
                <img className='portfolio-stack-git' src={git} />
                <img className='portfolio-stack-gh' src={github} />
            </div>
            <img className='vline-1' src={verLine} />
        </div>
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
        </>
    )
};

export default Projects;