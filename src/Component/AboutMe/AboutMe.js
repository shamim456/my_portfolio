import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='w-full h-screen relative about-container'>
            <h1 className='text-8xl font-extrabold text-white'>ABOUT ME</h1>
            <div className="w-full h-full opacity-90 absolute bottom-0 left-0 upper-layer"></div>
        </div>
    );
};

export default AboutMe;