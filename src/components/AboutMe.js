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
                classical piano performer, cat mom, vintage collector, foodie and more to explore. <br /><br />
                But also, I'm a HUMAN - <br />
                that turns interests into KNOWLEDGE, <br />
                turns failure into MOTIVATION, <br />
                turns fear into POWER. <br /><br />
                Hey, you might want to check out my
                <a href='https://www.linkedin.com/posts/rheawu-tech_i-was-recently-invited-to-speak-on-load-balancers-activity-7018955111016103936-8k89/?utm_source=share&utm_medium=member_desktop' target='_blank' className='link'> public speech </a> 
                as well.
                </p>
                <img className='bg-2' src={bg} />
            </div>


            {/* <div className='aboutMe-1'>
                <p className='aboutme-sum'>
                    but also a human that turns interests into KNOWLEDGE
                    <br />
                    <br />
                    turns failure into MOTIVATION <br />
                    <br />
                    turns fear into POWER
                </p>
            </div>
            <div className='aboutme-wrap'>
                <div className='circle-wrap-1'>
                    <div className='aboutMe-2'>
                        <a href='https://www.linkedin.com/posts/rheawu-tech_i-was-recently-invited-to-speak-on-load-balancers-activity-7018955111016103936-8k89/?utm_source=share&utm_medium=member_desktop' target='_blank'>
                            <p className='aboutme-speech'>I've conquered my fear of public speaking</p>
                        </a>
                        <img className='circle' src={circle} />                   
                    </div>
                </div>
                <div className='circle-wrap-2'>
                    <div className='aboutMe-3'>
                        <p className='aboutme-mt'>
                            I'm a Muay Thai practitioner, <br />
                            classical piano performer
                        </p>
                        <img className='circle' src={circle} />
                    </div>
                </div>
                <div className='circle-wrap-3'>
                    <div className='aboutMe-4'>
                        <p className='aboutme-cat'>
                            a cat mom, foodie, <br />
                            vintage collector,
                        </p>
                        <div className='aboutme-more'>more to explore</div>
                        <img className='circle' src={circle} />
                    </div>
                </div>
            </div> */}
        </div>
    )
};

export default AboutMe;
