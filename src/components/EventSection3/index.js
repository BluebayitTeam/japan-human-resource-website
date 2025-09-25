import React from 'react'
import {Link} from 'react-router-dom'
import Events from '../../api/event'

const EventSection3 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className="wpo-event-area-s2 bg-green section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Events</span>
                            <h2>Fundraising Events</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form,</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-event-wrap">
                    <div className="row justify-content-center">
                        <div className="col col-lg-10">
                            {Events.slice(3,6).map((event, eitem)=>(
                                <div className="wpo-event-single" key={eitem}>
                                    <div className="wpo-event-item">
                                        <div className="wpo-event-img">
                                            <img src={event.eImg} alt=""/>
                                        </div>
                                        <div className="wpo-event-content">
                                            <div className="wpo-event-text-top">
                                                <span>{event.date}</span>
                                                <h2><Link onClick={ClickHandler} to={`/event-single/${event.id}`}>{event.eTitle}</Link></h2>
                                                <p>{event.dec}</p>
                                                <Link onClick={ClickHandler} className="read-more" to={`/event-single/${event.id}`}>Learn More...</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSection3;