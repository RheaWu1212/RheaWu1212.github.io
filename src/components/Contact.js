import React from 'react';
import horLine from '../image/line-h.svg';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-wrap-a'>
                <a href='mailto:rheawu1212@gmail.com' target='_blank' className='contact-3'>
                    <div className='portfolio-contact'>EMAIL</div>
                </a>
                <a href='http://www.linkedin.com/in/rheawu-tech' target='_blank' className='contact-2'>
                    <div className='portfolio-contact'>LINKEDIN</div>
                </a>
                <a href='https://medium.com/@lightql/how-to-implement-client-side-caching-for-graphql-optimising-for-run-time-speed-cache-persistence-67cf72319163' target='_blank' className='contact-1'>
                    <div className='portfolio-contact'>MEDIUM</div>
                </a>
            </div>
            <img className='hline' src={horLine} />
        </div>
    )
}

export default Contact;