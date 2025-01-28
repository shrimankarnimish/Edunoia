import React from 'react';
import './intro.css'
import { Link } from 'react-router-dom';



const Intro = () => {
    return (
        <>
            <div className="about-container" id="about">
                <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    <div className="intro-container">
                        <h1 className="intro-heading">
                            <span className="highlight" style={{ fontSize: "45px" }}>Edunoia is an advisory</span> for the Universities, Colleges, Schools,
                            <br />
                            <span style={{ fontSize: "45px" }}>EdTech companies and other Purpose-driven</span>

                            <br />
                            <span style={{ fontSize: "45px" }}>organizations in the learning space  </span>
                        </h1>
                        <div className="springboard">
                        </div>
                    </div>
                    <div
                        className="text-container flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                    ></div>
                </div>
            </div>
        </>
    )
}


export default Intro;