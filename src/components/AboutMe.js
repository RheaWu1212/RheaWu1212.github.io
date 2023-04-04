import React from 'react';
import circle from '../image/circle.svg';

const AboutMe = () => {
    return (
        <div className='aboutme'>
            <div className='aboutMe-1'>
                <p className='aboutme-sum'>
                    but also a human that turns interests into knowledge
                    <br />
                    <br />
                    turns failure into motivation <br />
                    <br />
                    turns fear into power
                </p>
            </div>
            <div className='aboutme-wrap'>
                <div className='aboutMe-2'>
                    <a href='https://www.linkedin.com/posts/rheawu-tech_i-was-recently-invited-to-speak-on-load-balancers-activity-7018955111016103936-8k89/?utm_source=share&utm_medium=member_desktop' target='_blank'>
                        <p className='aboutme-speech'>I've conquered my fear of public speaking</p>
                    </a>
                    <img className='circle' src={circle} />                   
                </div>
        
                <div className='aboutMe-3'>
                    <p className='aboutme-mt'>
                        I'm a Muay Thai practitioner, <br />
                        classical piano performer
                    </p>
                    <img className='circle' src={circle} />
                </div>
                <div className='aboutMe-4'>
                    <p className='aboutme-cat'>
                        a cat mom, foodie, <br />
                        vintage collector,
                    </p>
                    <div className='aboutme-more'>more to explore</div>
                    <img className='circle' src={circle} />
                </div>
            </div>
        </div>
    )
};

export default AboutMe;