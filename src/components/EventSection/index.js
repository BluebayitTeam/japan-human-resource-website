import { Link } from 'react-router-dom'
import Events from '../../api/event'
import { Interweave } from 'interweave';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {
    BASE_URL,
    GET_CONTENTS_BY_MENU_ID,
    GET_IMAGE_BY_MENU_ID,
} from '../../constant/constants';


function items(obj) {
    let content = [];

    // eslint-disable-next-line no-unused-vars
    for (let key in obj) {
        let contentItem = {};
        let objs = obj;

        contentItem[`${key}`] = objs[key];
        content.push(contentItem);
    }
    return content;
}


const EventSection = (props) => {
    const { id } = useParams();
    const [contents, setContents] = useState('');
    const [contentsImage, setContentsImage] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //for content images
    useEffect(() => {
        fetch(`${GET_IMAGE_BY_MENU_ID}/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setContentsImage(data.content_images);
                console.log('imagesContent', data.content_images);
            })
            .catch(() => { });
    }, [id]);

    useEffect(() => {
        fetch(`${GET_CONTENTS_BY_MENU_ID}/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setContents(data.menu_contents);
                console.log('allmenucontent', data);
            })
            .catch(() => { });
    }, [id]);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', updateWindowDimensions);

        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        };
    }, []);

    const imageHeight = windowWidth < 600 ? '400px' : '400px';


    const newContents = items(contents);


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const sections = [
        "Help Children Raise Out Of Proverty",
        "Provideing Education Is The Valuable Gift",
    ];

    return (
        <div >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            {newContents.map((service, index) =>
                                Object.entries(service).map(([key, value]) =>
                                    key === 'News & Events' ? (
                                        <div className='px-3' key={index}>
                                            <Interweave
                                                allowAttributes
                                                allowElements
                                                disableLineBreaks={true}
                                                content={value}
                                                className='text-justify'
                                            />
                                        </div>
                                    ) : (
                                        ' '
                                    )
                                )
                            )}
                        </div>
                    </div>
                </div>
                <div className="wpo-event-wrap">
                    <div className="row">
                        {sections.map((title) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={title}>
                                <div className="wpo-event-single">
                                    <div className="wpo-event-item">
                                        {Object.entries(contentsImage ? contentsImage : {}).map(
                                            ([key, value]) =>
                                                key === title ? (
                                                    <div className='wpo-about-img' key={`${title}-image`}>
                                                        <img
                                                            style={{ height: imageHeight, width: '100%', objectFit: 'cover' }}
                                                            src={`${BASE_URL}/media/${value}`}
                                                            alt=''
                                                        />

                                                    </div>
                                                ) : (
                                                    ' '
                                                )
                                        )}
                                        <div className="wpo-event-content">
                                            <div className="wpo-event-text-top">
                                                {newContents.map((service, index) =>
                                                    Object.entries(service).map(([key, value]) =>
                                                        key === title ? (
                                                            <div key={`${title}-${index}`}>
                                                                <Link to={`/event/${title}`}>
                                                                    <Interweave
                                                                        allowAttributes
                                                                        allowElements
                                                                        disableLineBreaks={true}
                                                                        content={value?.slice(0, 250) + '...'}
                                                                    />
                                                                </Link>
                                                            </div>
                                                        ) : null
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSection;