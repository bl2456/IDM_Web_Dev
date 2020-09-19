import React from 'react';
import '../css/HeroModule.css';
import video from "../media/planetEarth.mp4";


const HeroModule = () => {
    return(
        <div className="hero-container">
            <h1>Welcome!</h1>
            <video src={video} autoPlay loop muted></video>
        </div>
    );
};

export default HeroModule;
