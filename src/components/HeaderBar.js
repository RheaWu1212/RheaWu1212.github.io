import React from 'react';
import profilePic from '../image/profilePic-color.png';

const HeaderBar = () => {
    return (
        <div className='header'>
                <div className='nav'>
                    <div className='nav-wrap'>
                        <h3>HOME</h3>
                        <h3>PROJECTS</h3>
                        <h3>ABOUT</h3>
                        <h3>CONTACTS</h3>
                    </div>  
                </div>
                <div  className='profile-name'>
                    <h1>RHEA WU</h1>
                </div>
        </div>
    )
}

export default HeaderBar;