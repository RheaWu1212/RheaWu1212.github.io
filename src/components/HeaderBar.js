import React from 'react';
import profilePic from '../image/profilePic-color.png';
import contact from '../image/contact.svg';
import aboutMe from '../image/aboutme.svg';
import stack from '../image/stack.svg';

const HeaderBar = () => {
    return (
        <div className='header'>
            
                <div className='icon'>
                    <img className='profile-aboutme' src={aboutMe} />
                    <img className='profile-stack' src={stack} />
                    <img className='profile-contact' src={contact} />
                </div>
                <div className='profile-frame' />
                <h1 className='profile-name'>RHEA WU</h1>

                <div className='profile-title'>
                    <div className='profile-title-l'>
                        <div className='title-wrap-l'>
                            <>
                            <div className='profile-title-l-1'>Full-stack</div>
                            <div className='profile-title-l-2'>Software Engineer</div>
                            </>
                        </div>
                    </div>

                    <div className='profile-title-m'>
                        <img className='profile-pic' src={profilePic} />
                    </div>

                    <div className='profile-title-r'>
                        <div className='title-wrap-r'>
                            <div className='profile-title-r-1'>Passionate</div>
                            <div className='profile-title-r-2'>Builder & Creator</div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default HeaderBar;