import React from 'react';
import { HashLink } from 'react-router-hash-link';
const HeaderBar = () => {
    return (
        <div className='header'>
                <div className='nav'>
                    <div className='nav-wrap'>
                        <HashLink smooth to='/#home'>
                            HOME
                        </HashLink>
                        <HashLink smooth to='/#projects'>
                            PROJECTS
                        </HashLink>
                        <HashLink smooth to='/#about'>
                            ABOUT
                        </HashLink>
                        <HashLink smooth to='/#contact'>
                            CONTACTS
                        </HashLink>
                    </div>  
                </div>
                <div  className='profile-name'>
                    {/* <h1>RHEA WU</h1> */}
                    <span>R</span>
                    <span>H</span>
                    <span>E</span>
                    <span>A</span>
                    <span> </span>
                    <span>W</span>
                    <span>U</span>
                </div>
        </div>
    )
}

export default HeaderBar;