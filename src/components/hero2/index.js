import React from "react";
import { Link } from 'react-router-dom'


import hero1 from '../../images/slider/right-img3.png'

import shape1 from '../../images/slider/sp1.png'
import shape2 from '../../images/slider/sp2.png'
import shape3 from '../../images/slider/sp3.png'




const Hero2 =() => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-hero-section-2">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title">
                                <h2>Giving <span>Education</span> is The Best Gift Ever</h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>We help local nonprofits access the funding, tools, training, and support they need to become more.</p>
                            </div>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/about" className="btn theme-btn-s2">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-vec">
                            <div className="right-items-wrap">
                                <div className="right-item">
                                    <div className="r-img">
                                        <img src={hero1} alt=""/>
                                    </div>
                                    <div className="sp-1"><img src={shape1} alt=""/></div>
                                    <div className="sp-2"><img src={shape2} alt=""/></div>
                                    <div className="sp-3"><img src={shape3} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero2;
