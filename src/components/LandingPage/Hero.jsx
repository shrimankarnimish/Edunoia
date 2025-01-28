import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import heroImg from "../../images/BACKGROUND.jpg"
import "./Hero.css"

const Hero = () => {
    return (
        <>
            <div
                className="hero"
                id="hero"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100vh", // Set height as needed
                    marginTop: "-1rem"
                }}
            >
                <div>
                    <NavBar />
                </div>
                <div className="hero-container">
                    <h1 className="hero-heading">
                        <span className="normal-text" style={{fontWeight:"300"}}>We are your </span>
                        <span className="highlight1">Strategic</span>
                        <br />
                        <span className="highlight1">Brand Partners</span> 
                      

                        <span className="normal-text" style={{fontWeight:"300"}}> for the </span><br></br>
                        <span className="highlight1">Education Industry</span>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Hero;
