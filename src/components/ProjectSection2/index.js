import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Projects from '../../api/projects';

class ProjectSection2 extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: false,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }

        return (
            <section className="wpo-project-section-s2 section-padding">
                <div className="container-fluid">
                    <div className="sortable-gallery">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="project-grids gallery-active">
                                    <Slider {...settings}>
                                        {Projects.slice(6,11).map((project, pitem)=>(
                                                <div className="grid" key={pitem}>
                                                    <div className="img-holder">
                                                        <img src={project.projectImg} alt=""/>
                                                        <div className="hover-content">
                                                            <Link onClick={ClickHandler} className="plus" to={`/project-single/${project.id}`}><i className="ti-plus"></i></Link>
                                                            <h4><Link onClick={ClickHandler} to={`/project-single/${project.id}`}>{project.title}</Link></h4>
                                                            <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSection2;