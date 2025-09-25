import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-3.jpg'
import hero2 from '../../images/slider/slide-5.jpg'
import hero3 from '../../images/slider/slide-6.jpg'



class Hero6 extends Component {
    render() {

        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className={`wpo-hero-slider ${this.props.heroClass}`}>
                <div className="hero-container">
                    <div className="hero-wrapper">
                        <Slider {...settings}>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="wpo-hero-title">
                                                <h2>Green is for hope just as gray is for death.</h2>
                                            </div>
                                            <div className="wpo-hero-subtitle">
                                                <p>We help local nonprofits access the funding, and support they need to become more.</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/about" className="theme-btn">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="wpo-hero-title">
                                                <h2>Green is for hope just as gray is for death.</h2>
                                            </div>
                                            <div className="wpo-hero-subtitle">
                                                <p>We help local nonprofits access the funding, and support they need to become more.</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/about" className="theme-btn">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="wpo-hero-title">
                                                <h2>Green is for hope just as gray is for death.</h2>
                                            </div>
                                            <div className="wpo-hero-subtitle">
                                                <p>We help local nonprofits access the funding, and support they need to become more.</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/about" className="theme-btn">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero6;