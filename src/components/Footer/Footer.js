import React from 'react';
import './Footer.css';
import fbIcon from '../../Photo/Facebook.png';
import twitterIcon from'../../Photo/Twitter.png';
import youTubeIcon from '../../Photo/YouTube.png'

const Footer = () => {
    return (
        <div className="footer-header">
            <div className="team-about">
            <p> The UEFA Champions League (abbreviated as UCL) is an annual club football competition
                    organised by the Union of European Football Associations (UEFA) and contested by top-division European
                    clubs, deciding the competition winners through a round robin group stage to qualify for a
                    double-legged knockout format, and a single leg final. It is one of the most prestigious football 
                       
                    tournaments in the world and the most prestigious club competition in European football,
                    played by the national league champions (and, for some nations, one or more runners-up)
                   of their national associations.
               </p>
            </div>
            <div className="footer-container">
                <a href="https://www.facebook.com/Arsenal" target="_blank" rel="noopener noreferrer">
                <img src={fbIcon} alt="" />
                </a>
                <a href="https://twitter.com/arsenal" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="" />
                </a>
                <a href="https://www.youtube.com/channel/UCpryVRk_VDudG8SHXgWcG0w" target="_blank" rel="noopener noreferrer">
                 <img src={youTubeIcon} alt="" />
                </a>
            </div>
            
        </div>
    );
};

export default Footer;