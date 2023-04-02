import React from 'react';

const AboutMe = () => {
    return (
        <>
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
        <div className='aboutMe-2'>
            <a href='https://www.linkedin.com/posts/rheawu-tech_i-was-recently-invited-to-speak-on-load-balancers-activity-7018955111016103936-8k89/?utm_source=share&utm_medium=member_desktop' target='_blank'>
                <p className='aboutme-speech'>I've conquered mu fear of public speaking</p>
            </a>
            <div className='bg-circle-1' />
        </div>
        
        <div className='aboutMe-3'>
            <p className='aboutme-mt'>
                I'm a Muay Thai practitioner, <br />
                classical piano performer
            </p>
            <div className='bg-circle-2' />
        </div>
        <div className='aboutMe-4'>
            <p className='aboutme-cat'>
                a cat mom, foodie, <br />
                vintage collector,
            </p>
            <div className='aboutme-more'>more to explore</div>
            <div className='bg-circle-3' />
        </div>
        </>
    )
};

export default AboutMe;