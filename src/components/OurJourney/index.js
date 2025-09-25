import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, GET_CONTENTS_BY_MENU_ID, GET_IMAGE_BY_MENU_ID, GET_MENUS_ALL_NESTED } from "../../constant/constants";
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

const OurJourney = (props) => {
  const { id } = useParams();
  const [profileId, setProfileId] = useState();
  const [contentsImage, setContentsImage] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [contents, setContents] = useState("");



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
    if (!id && !props.id) return;
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);


      })
      .catch(() => { });
  }, [id, props.id]);


  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) =>
          e.name === "A Journey from Dhaka to Tokyo" ? setProfileId(e.id) : null
        );
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    fetch(`${GET_IMAGE_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data_img", data)
        setContentsImage(data.content_images);
      })
      .catch(() => { });
  }, [id, props.id]);

  const newContents = items(contents);
  const imageHeight = windowWidth < 600 ? '400px' : '500px';

  const sections = [
    "A Journey from Dhaka to Tokyo",
  ];

  return (
    <section className="wpo-about-text">
      {/* Text sections */}
      {sections.map((title) => (
        <div key={title} className="" style={{ padding: "60px 20px 60px 20px", background: "#E9FAFA" }}>
          <div className="row align-items-center justify-content-center g-4">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="wpo-about-text text-center">
                {newContents.map((service, index) =>
                  Object.entries(service).map(([key, value]) =>
                    key === title ? (
                      <div key={`${title}-${index}`}>
                        <Interweave
                          allowAttributes
                          allowElements
                          disableLineBreaks={true}
                          content={value}
                        />
                      </div>
                    ) : null
                  )
                )}
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <div className='wpo-about-wrap'>
                {Object.entries(contentsImage ? contentsImage : {}).map(
                  ([key, value]) =>
                    key === "A Journey from Dhaka to Tokyo" ? (
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurJourney;


