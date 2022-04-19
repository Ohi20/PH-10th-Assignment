import React from 'react';
import { useNavigate } from 'react-router-dom';
import ExtraSection from '../ExtraSection/ExtraSection';
import './Home.css';

const Home = () => {
    let navigate = useNavigate();
    const handleLearnmorebtn = () => {
        let path = `/services`;
        navigate(path);
    }
    return (
        <div className='home'>
            <h2 className='home-title'>Home</h2>
            <div className='banner-sec'>
                <div className='banner-img-sec'>
                    <img className='banner-img' src="https://media.istockphoto.com/photos/smiling-lawyer-sitting-at-desk-in-office-picture-id104821116?k=20&m=104821116&s=612x612&w=0&h=y3lfuULb1SWjL0FKtNh2ser1NMYGuJQfQoz77QKOiYI=" alt="" />
                </div>
                <div className='banner-text-sec'>
                    <div>
                    <h1>John Leader</h1>
                    <h2>THE RIGHT LAWYER</h2>
                    <h3>MAKES ALL THE DIFFERENCE</h3>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='services-title'>Services</h2>
                <div className='services-sec'>
                    <div className='card1'>
                        <h3>Personal Injury</h3>
                        <img className='card-img' src="https://www.smudailycampus.com/wp-content/uploads/2020/01/63393.jpg" alt="" srcset="" />
                        <p>The term “personal injury” encompasses a broad range of injuries. Some are minor, but some injuries can be catastrophic and life-changing.</p>
                        <p>Price:$200 </p>
                        <button onClick={handleLearnmorebtn} className='learn-btn' >Learn more..</button>
                    </div>
                    <div className='card2'>
                        <h3>Defective Roadway</h3>
                        <img className='card-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6px7frCg9sngtnOybVm15cNL-a4YOws3qdLsQOlKsvjkNFehKsGndBrPMvmoUKIDhGs&usqp=CAU" alt="" srcset="" />
                        <p>Many things can contribute to a highway crash, including a possible defective roadway.</p>
                        <p>Price:$300 </p>
                        <button onClick={handleLearnmorebtn} className='learn-btn' >Learn more..</button>
                    </div>
                    <div className='card3'>
                        <h3>Wrongful Death</h3>
                        <img className='card-img' src="https://cdn-bdkih.nitrocdn.com/pfSdWxsduJLFSvXIxUjfARwnMvWApKVV/assets/static/optimized/rev-da89f0b/wp-content/uploads/2018/10/death-1.jpg" alt="" srcset="" />
                        <p>Losing a loved one is always difficult. Losing someone to a tragedy can be especially traumatic. An experienced wrongful death lawyer will help guide you through this challenging time.</p>
                        <p>Price:$200 </p>
                        <button onClick={handleLearnmorebtn} className='learn-btn' >Learn more..</button>
                    </div>
                </div>
            </div>
            <ExtraSection></ExtraSection>
            <div className='footer'>
                <footer>
                    
                    <div class="footer-basic">
        <footer>
            <div class="social"><a href="facebook.com"><i class="icon ion-social-instagram"></i></a><a href="facebook.com"><i class="icon ion-social-snapchat"></i></a><a href="facebook.com"><i class="icon ion-social-twitter"></i></a><a href="facebook.com"><i class="icon ion-social-facebook"></i></a></div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="facebook.com">Home</a></li>
                <li class="list-inline-item"><a href="facebook.com">Services</a></li>
                <li class="list-inline-item"><a href="facebook.com">About</a></li>
                <li class="list-inline-item"><a href="facebook.com">Terms</a></li>
                <li class="list-inline-item"><a href="facebook.com">Privacy Policy</a></li>
            </ul>
            <p class="copyright">AshrafOhi © 2022</p>
        </footer>
    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;