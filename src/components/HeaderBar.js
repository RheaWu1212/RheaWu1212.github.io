import React from 'react';
import profilePic from '../image/profile-pic.png';

const HeaderBar = () => {
    return (
        <>
            <div className='icon'>
                <img className='portfolio-aboutme' src={aboutMe} />
                <img className='portfolio-stack' src={stack} />
                <img className='portfolio-contact' src={contact} />
            </div>
            <div className='portfolio-frame' />
            <h1 className='portfolio-name'>RHEA WU</h1>

            <div className='profile-title'>
                <div className='profile-title-l'>
                    <div className='portfolio-title-l-1'>Full-stack</div>
                    <div className='portfolio-title-l'>Software Engineer</div>
                 </div>
                <div className='profile-title-m'>
                    <img className='portfolio-profile-pic' src={profilePic} />
                </div>
                <div className='profile-title-r'>
                    <div className='portfolio-title-r-1'>Passionate</div>
                    <div className='portfolio-title-r'>Builder & Creator</div>
                 </div>
            </div>
        </>
    )
}

export default HeaderBar;