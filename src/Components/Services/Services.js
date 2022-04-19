import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';


 const Services = () => {
    let navigate = useNavigate();
    const handleServicebtn = () => {
        let path = `/checkout`;
        navigate(path);
    }
    return (
        <div>
            <h2 className='services-title'>Services</h2>
            <div>
                <div className='services-sec'>
                    <div className='card1'>
                        <h3>Personal Injury</h3>
                        <img className='card-img' src="https://www.smudailycampus.com/wp-content/uploads/2020/01/63393.jpg" alt="" srcset="" />
                        <p>The term “personal injury” encompasses a broad range of injuries. Some are minor, but some injuries can be catastrophic and life-changing.</p>
                        <p>Price:$200 </p>
                        <div >
                        <button onClick={handleServicebtn} className='checkout-btn' >Checkout</button>
                        </div>
                    </div>
                    <div className='card2'>
                        <h3>Defective Roadway</h3>
                        <img className='card-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6px7frCg9sngtnOybVm15cNL-a4YOws3qdLsQOlKsvjkNFehKsGndBrPMvmoUKIDhGs&usqp=CAU" alt="" srcset="" />
                        <p>Many things can contribute to a highway crash, including a possible defective roadway.</p>
                        <p>Price:$300 </p>
                        <div >
                        <button onClick={handleServicebtn} className='checkout-btn' >Checkout</button>
                        </div>
                    </div>
                    <div className='card3'>
                        <h3>Wrongful Death</h3>
                        <img className='card-img' src="https://cdn-bdkih.nitrocdn.com/pfSdWxsduJLFSvXIxUjfARwnMvWApKVV/assets/static/optimized/rev-da89f0b/wp-content/uploads/2018/10/death-1.jpg" alt="" srcset="" />
                        <p>Losing a loved one is always difficult. Losing someone to a tragedy can be especially traumatic. An experienced wrongful death lawyer will help guide you through this challenging time.</p>
                        <p>Price:$200 </p>
                        <div >
                        <button onClick={handleServicebtn} className='checkout-btn' >Checkout</button>
                        </div>
                    </div>
                    <div className='card4'>
                        <h3>Vehicle Accidents</h3>
                        <img className='card-img' src="https://valientemott.com/wp-content/uploads/2019/12/Crazy-Car-Accident.jpg" alt="" srcset="" />
                        <p>A number of factors contribute to the risk of collisions, including vehicle design, speed of operation, road design, weather, road environment, driving skills, impairment due to alcohol or drugs, and behavior, notably aggressive driving, distracted driving, speeding and street racing.</p>
                        <p>Price:$400 </p>
                        <div >
                        <button onClick={handleServicebtn} className='checkout-btn' >Checkout</button>
                        </div>
                    </div>
                    <div className='card5'>
                        <h3>Bankruptcy</h3>
                        <img className='card-img' src="https://media.istockphoto.com/photos/bankruptcy-document-with-wooden-gavel-picture-id915254108?k=20&m=915254108&s=612x612&w=0&h=VueEe_cqv8OFdfJZMGlYdyBqz3BarQQ4yH1AFb1-IA4=" alt="" srcset="" />
                        <p>Bankruptcy is a legal proceeding involving a person or business that is unable to repay their outstanding debts. The bankruptcy process begins with a petition filed by the debtor, which is most common, or on behalf of creditors, which is less common.</p>
                        <p>Price:$300 </p>
                        <div >
                        <button onClick={handleServicebtn} className='checkout-btn' >Checkout</button>
                        </div>
                    </div>
                    <div className='card6'>
                        <h3>Consumer Protection</h3>
                        <img className='card-img' src="https://mumbaimirror.indiatimes.com/photo/77057592.cms" alt="" srcset="" />
                        <p>Consumer protection is the practice of safeguarding buyers of goods and services, and the public, against unfair practices in the marketplace. Consumer protection measures are often established by law</p>
                        <p>Price:$400 </p>
                        <div >
                        <button onClick={handleServicebtn} className='checkout-btn' >Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;