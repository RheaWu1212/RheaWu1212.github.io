import React from 'react';

const AboutMe = () => {
    return (
        <div>
        <h2>Something you might want to know </h2>
        <p className='intro-swe'>
            I'm a full-stack engineer, with expertise in MERN, SQL, GraphQL, Typescript end-to-end application. I like to give <a href='https://www.linkedin.com/posts/rheawu-tech_i-was-recently-invited-to-speak-on-load-balancers-activity-7018955111016103936-8k89?utm_source=share&utm_medium=member_desktop'>public speech</a> and co-founded Typescript <a href='https://medium.com/@lightql/how-to-implement-client-side-caching-for-graphql-optimising-for-run-time-speed-cache-persistence-67cf72319163'>application</a> for GraphQL.
        </p>
        <h2>But that's not everything about me </h2>
        <p className='intro-self'>
            I'm a cat mom, Muay Thai practitioner, food lover, vintage collector, and more to explore 
        </p>
    </div>
    )
};

export default AboutMe;