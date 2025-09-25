import React from 'react'
import { Link } from 'react-router-dom'
import Projects from '../../api/projects'

const ProjectSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(

    <section className={`wpo-project-section section-padding ${props.pbClass}`}>
        <div className="container-fluid">
            <div className="sortable-gallery">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project-grids gallery-container clearfix">
                            {Projects.slice(0,6).map((project, pitem)=>(
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ProjectSection;