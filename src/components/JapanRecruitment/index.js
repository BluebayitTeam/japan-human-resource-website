import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Interweave } from "interweave";
import { BASE_URL, GET_CONTENTS_BY_MENU_ID, GET_IMAGE_BY_MENU_ID, GET_MENUS_ALL_NESTED } from "../../constant/constants";

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

const JapanRecruitment = (props) => {
  const { id } = useParams();
  //console.log("aboutID", props.id);
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

        //console.log("allmenucontent", data);
      })
      .catch(() => { });
  }, [id, props.id]);
  //console.log("contents", contents);

  useEffect(() => {
    fetch(`${GET_IMAGE_BY_MENU_ID}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setContentsImage(data.content_images);
        console.log('imagesContent', data.content_images);
      })
      .catch(() => { });
  }, [id]);

  const newContents = items(contents);
  const imageHeight = windowWidth < 600 ? '400px' : '500px';
  // const imageHeight = 'auto'
  //console.log("content", newContents); 


  return (
    <section className="wpo-about-text" style={{ margin: "30px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="wpo-about-text">
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === "Japan & Korean Language Center" ? (
                    <div key={index}>
                      <Interweave
                        allowAttributes
                        allowElements
                        disableLineBreaks={true}
                        content={value}
                      />
                    </div>
                  ) : (
                    " "
                  )
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        {/* About our company */}
        <div className='container row align-items-center justify-content-between'>
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='px-2'>
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === 'About Language Center' ? (
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
          <div className='col-lg-6 col-md-6 col-12'>
            <div className='wpo-about-wrap'>
              {Object.entries(contentsImage ? contentsImage : {}).map(
                ([key, value]) =>
                  key === 'About Language Center' ? (
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
        </div>

        {/* HR services */}
        <div className="container" style={{ marginTop: '50px' }}>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="wpo-section-title">
                {newContents.map((service, index) =>
                  Object.entries(service).map(([key, value]) =>
                    key === "HR Services" ? (
                      <div className="" key={index}>
                        <Interweave
                          allowAttributes
                          allowElements
                          disableLineBreaks={true}
                          content={value}
                        />
                      </div>
                    ) : (
                      " "
                    )
                  )
                )}
              </div>
            </div>
          </div>
          {/* Training Programs */}
          <div className='container row g-4'>
            <div className="col">
              <div className="row g-4">
                <div className='col-lg-12 col-md-12 col-12'>
                  <div className='px-2 pt-5'>
                    {newContents.map((service, index) =>
                      Object.entries(service).map(([key, value]) =>
                        key === 'SSW & Technical Internship (TITP) Support' ? (
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
            <div className="col">
              <div className="row g-4">
                <div className='col-lg-12 col-md-12 col-12'>
                  <div className='px-2 pt-5'>
                    {newContents.map((service, index) =>
                      Object.entries(service).map(([key, value]) =>
                        key === 'Visa Processing & Consultation' ? (
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
            <div className="col" style={{ background: "#FDFDFD" }}>
              <div className="row g-4">
                <div className='col-lg-12 col-md-12 col-12' >
                  <div className='px-2 pt-5'>
                    {newContents.map((service, index) =>
                      Object.entries(service).map(([key, value]) =>
                        key === 'Japanese Language & Cultural Training' ? (
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default JapanRecruitment;
