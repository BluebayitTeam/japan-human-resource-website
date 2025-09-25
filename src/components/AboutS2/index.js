import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {
  BASE_URL,
  GET_CONTENTS_BY_MENU_ID,
  GET_IMAGE_BY_MENU_ID,
} from '../../constant/constants';
import shape from '../../images/ab-shape-2.png';
import { Interweave } from 'interweave';

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

const AboutS2 = (props) => {
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

  const imageHeight = windowWidth < 600 ? '400px' : '600px';


  const newContents = items(contents);

  return (
    <section className='wpo-about-section section-padding'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-4 col-md-12 col-12'>
            <div className='wpo-about-wrap'>
              {Object.entries(contentsImage ? contentsImage : {}).map(
                ([key, value]) =>
                  key === 'Who We Are' ? (
                    <div className='wpo-about-img' key={key}>
                      <img
                        style={{ height: imageHeight }}
                        src={`${BASE_URL}/media/${value}`}
                        alt=''
                      />
                      <div className='wpo-ab-shape-1'>
                        <div className='s-s1'></div>
                        <div className='s-s2'></div>
                      </div>
                      <div className='wpo-ab-shape-2'>
                        <img src={shape} alt='' />
                      </div>
                    </div>
                  ) : (
                    ' '
                  )
              )}
            </div>
          </div>
          <div className='col-lg-8 col-md-12 col-12'>
            <div className='px-2'>
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === 'Who We Are' ? (
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
      </div>
    </section>
  );
};

export default AboutS2;
