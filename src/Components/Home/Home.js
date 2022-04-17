import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
            <div className='banner-sec'>
                <div className='banner-img-sec'>
                    <img className='banner-img' src="" alt="" />
                </div>
                <div className='banner-text-sec'>
                    <h2>John Leader</h2>
                    <h2>THE RIGHT LAWYER</h2>
                    <h3>MAKES ALL THE DIFFERENCE</h3>
                </div>
            </div>
            <div>
                <h2 className='services-title'>Services</h2>
                <div className='services-sec'>
                    <div className='card1'>
                        <h3>Personal Injury</h3>
                        <p>The term “personal injury” encompasses a broad range of injuries. Some are minor, but some injuries can be catastrophic and life-changing.</p>
                        <button>Learn more..</button>
                    </div>
                    <div className='card2'>
                        <h3>Defective Roadway</h3>
                        <p>Many things can contribute to a highway crash, including a possible defective roadway.</p>
                        <button>Learn more..</button>
                    </div>
                    <div className='card3'>
                        <h3>Wrongful Death</h3>
                        <p>Losing a loved one is always difficult. Losing someone to a tragedy can be especially traumatic. An experienced wrongful death lawyer will help guide you through this challenging time.</p>
                        <button>Learn more..</button>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <footer>
                    <p>All right reserves</p>
                </footer>
            </div>
        </div>
    );
};

export default Home;