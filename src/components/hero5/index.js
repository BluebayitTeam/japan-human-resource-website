import React from "react";
import { Link } from 'react-router-dom'
import simg from '../../images/slider/right-img4.png'
import simg2 from '../../images/slider/right-img5.png'

const Hero5 =() => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-hero-section-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title-top">
                                <span>Save The World</span>
                            </div>
                            <div className="wpo-hero-title">
                                <h2>Mask Can Protect You From <span>CoronaVirus</span></h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>We help local nonprofits access the funding, tools, training, and support they need
                                    to become more.</p>
                            </div>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/about" className="btn theme-btn">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-vec">
                            <div className="right-items-wrap">
                                <div className="right-item">
                                    <div className="r-img">
                                        <img src={simg} alt=""/>
                                        <div className="r-shape"><img src={simg2} alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero5;
