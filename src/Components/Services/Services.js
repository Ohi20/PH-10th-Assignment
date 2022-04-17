import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div>
            <h2>This is services</h2>
            <div>
                <div className='services-sec'>
                    <div className='card1'>
                        <h3>Personal Injury</h3>
                        <p>The term “personal injury” encompasses a broad range of injuries. Some are minor, but some injuries can be catastrophic and life-changing.</p>
                        <button>Checkout</button>
                    </div>
                    <div className='card2'>
                        <h3>Defective Roadway</h3>
                        <p>Many things can contribute to a highway crash, including a possible defective roadway.</p>
                        <button>Checkout</button>
                    </div>
                    <div className='card3'>
                        <h3>Wrongful Death</h3>
                        <p>Losing a loved one is always difficult. Losing someone to a tragedy can be especially traumatic. An experienced wrongful death lawyer will help guide you through this challenging time.</p>
                        <button>Checkout</button>
                    </div>
                    <div className='card4'>
                        <h3>Vehicle Accidents</h3>
                        <p>A number of factors contribute to the risk of collisions, including vehicle design, speed of operation, road design, weather, road environment, driving skills, impairment due to alcohol or drugs, and behavior, notably aggressive driving, distracted driving, speeding and street racing.</p>
                        <button>Checkout</button>
                    </div>
                    <div className='card5'>
                        <h3>Bankruptcy</h3>
                        <p>Bankruptcy is a legal proceeding involving a person or business that is unable to repay their outstanding debts. The bankruptcy process begins with a petition filed by the debtor, which is most common, or on behalf of creditors, which is less common.</p>
                        <button>Checkout</button>
                    </div>
                    <div className='card6'>
                        <h3>Consumer Protection</h3>
                        <p>Consumer protection is the practice of safeguarding buyers of goods and services, and the public, against unfair practices in the marketplace. Consumer protection measures are often established by law</p>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;