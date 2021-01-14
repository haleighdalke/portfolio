import React from 'react'
import ResumeIcon from '../assets/img/resume.png'
import GitHubIcon from '../assets/img/github.png'
import LinkedInIcon from '../assets/img/linkedin.png'
import MediumIcon from '../assets/img/medium.png'


function SocialLinks() {

    return(
        <div className="social-links">
            <a href="../assets/files/Haleigh-Dalke-Resume.pdf" target="_blank" rel="noopener noreferrer"><img src={ResumeIcon} alt="Resume" className="social-icon"/></a>
            <a href="https://github.com/haleighdalke" target="_blank" rel="noopener noreferrer"><img src={GitHubIcon} alt="GitHub" className="social-icon"/></a>
            <a href="https://www.linkedin.com/in/haleighdalke/" target="_blank" rel="noopener noreferrer"><img src={LinkedInIcon} alt="LinkedIn" className="social-icon" /></a>
            <a href="https://medium.com/@haleighdalke" target="_blank" rel="noopener noreferrer"><img src={MediumIcon} alt="Medium" className="social-icon" /></a>
        </div>
    )
}

export default SocialLinks