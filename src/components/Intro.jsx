import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <div className="about-container" id="about">
            <div className="flex flex-col-reverse lg:flex-row py-8 justify-center text-center lg:text-left" data-aos="fade-up">
                <div className="intro-container">
                    <h1 className="intro-heading">
                        <span className="highlight">Edunoia is an advisory</span> for Universities, Colleges, Schools,
                        <br />
                        EdTech companies and other Purpose-driven
                        <br />
                        organizations in the learning space
                    </h1>
                    <div className="springboard"></div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
