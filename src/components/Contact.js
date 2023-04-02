import React from 'react';
import horLine from '../image/line-h.svg';

const Contact = () => {
    return (
        <>
        <div className='contact'>
            <a href='mailto:rheawu1212@gmail.com' target='_blank'>
                <div className='portfolio-contact-3'>EMAIL</div>
            </a>
            <a href='http://www.linkedin.com/in/rheawu-tech' target='_blank'>
                <div className='portfolio-contact-2'>LINKEDIN</div>
            </a>
            <a href='https://medium.com/@lightql/how-to-implement-client-side-caching-for-graphql-optimising-for-run-time-speed-cache-persistence-67cf72319163' target='_blank'>
                <div className='portfolio-contact-1'>MEDIUM</div>
            </a>
            <img className='hline' src={horLine} />
        </div>
        </>
    )
}

export default Contact;