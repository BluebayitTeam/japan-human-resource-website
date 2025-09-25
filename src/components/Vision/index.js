import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, GET_CONTENTS_BY_MENU_ID, GET_IMAGE_BY_MENU_ID } from "../../constant/constants";
import { Interweave } from "interweave";

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

const Vision = (props) => {
  const { id } = useParams();
  const [contents, setContents] = useState("");
  const [contentsImage, setContentsImage] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);

      })
      .catch(() => { });
  }, [id, props.id]);

  useEffect(() => {
    fetch(`${GET_IMAGE_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContentsImage(data.content_images);
      })
      .catch(() => { });
  }, [id, props.id]);

  const newContents = items(contents);
  const imageHeight = windowWidth < 600 ? '400px' : '500px';


  return (
    <>
      {/* mission */}
      <section className="wpo-about-text" style={{ padding: "50px 0 50px 0", background: "#e9fafa" }}>
        <div className="container">
          <div className='row align-items-center justify-content-between' >
            <div className='col-lg-6 col-md-6 col-12'>
              <div className='wpo-about-wrap'>
                {Object.entries(contentsImage ? contentsImage : {}).map(
                  ([key, value]) =>
                    key === 'Our Vision' ? (
                      <div className='wpo-about-img' key={key}>
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
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <div className=''>
                {newContents.map((service, index) =>
                  Object.entries(service).map(([key, value]) =>
                    key === 'Our Vision' ? (
                      <div className='px-3 wpo-about-text' key={index}>
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
    </>
  );
};

export default Vision;
