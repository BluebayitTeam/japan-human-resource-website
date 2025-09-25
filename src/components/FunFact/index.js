import React from 'react'
import shape from '../../images/cta-shape.png'


const FunFact = (props) => {

    const funfact = [
        {
            title: '250+',
            subTitle: 'Expert Volunteer',
        },
        {
            title: '1026+',
            subTitle: 'Happy Families',
        },
        {
            title: '25M',
            subTitle: 'Total Donation',
        },
        {
            title: '1250',
            subTitle: 'Successful Campains',
        },


    ]

    return (
        <section className="wpo-fun-fact-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funfact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="shape"><img src={shape} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;