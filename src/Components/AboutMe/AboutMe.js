import React from 'react';
import './AboutMe.css';
import pic from "../../Assets/me.png";

const AboutMe = () => {
    return (
        <div className='aboutme-container'>
            <h2 className='aboutme-title'>About me</h2>
            <div className='about-me'>
            <div>
               <img className='my-img' src={pic} alt="" />
               </div>
                <h2 className='aboutme-title'>Shahed Ashraf Ohi</h2>
               
                <p>As a Web developer, I want to be able to design Web pages and also code that can effectively display material, provide interactivity, and be artistically pleasing to the user. In order to do this, I need to know the nuances of Web developing and delivery and the various tools and software applications i can use.My goal is to be updated that i can do any kind of work. I want to create a new startup someday. That's why i am trying my best to reach there.  </p>

            </div>
        </div>
    );
};

export default AboutMe;
