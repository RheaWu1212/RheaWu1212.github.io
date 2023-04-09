import React from 'react';
import bg from '../image/bg.png';

const AboutMe = () => {
    return (
        <div className='aboutme'>
            <img className='bg-1' src={bg} />
            <div className='para'>
                <p>
                Welcome to my website. <br /><br />
                Here're my titles: full-stack software engineer, Muay Thai practitioner, <br />
                classical piano performer, cat mom, vintage collector, foodie and <span>more to explore</span>. <br /><br />
                But also, I'm a HUMAN - <br />
                that turns interests into <span>KNOWLEDGE</span>, <br />
                turns failure into <span>MOTIVATION</span>, <br />
                turns fear into <span>POWER</span>. <br /><br />
                <img className='bg-2' src={bg} />
                Hey, you might want to check out my
                <a href='https://www.linkedin.com/posts/rheawu-tech_i-was-recently-invited-to-speak-on-load-balancers-activity-7018955111016103936-8k89/?utm_source=share&utm_medium=member_desktop' target='_blank' className='link'> public speech </a> 
                as well.
                </p>
            </div>
        </div>
    )
};

export default AboutMe;
