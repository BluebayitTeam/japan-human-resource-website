import { Interweave } from "interweave";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import {
  BASE_URL,
  GET_CONTENTS_BY_MENU_ID,
  GET_IMAGE_BY_MENU_ID,
} from "../../constant/constants";

var settings = {
  dots: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
const OurCompanies = (props) => {
  const [contents, setContents] = useState({});
  const [contentsImage, setContentsImage] = useState({});

  const { id } = useParams();


  //for content images
  useEffect(() => {
    const menuId = props.id || id;
    if (!menuId) return;

    fetch(`${GET_IMAGE_BY_MENU_ID}/${menuId}`)
      .then((response) => response.json())
      .then((data) => {
        setContentsImage(data.content_images);

        //console.log("imagesContent", data);
      })
      .catch(() => { });
  }, [id, props.id]);

  //for content
  useEffect(() => {
    const menuId = props.id || id;
    if (!menuId) return;
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${menuId}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);

        //console.log("allmenucontent", data.menu_contents);
      })
      .catch(() => { });
  }, [id, props.id]);

  //for content items
  const newContents = items(contents);
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-features-section-s6 section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="wpo-section-title">
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === "Companies" ? (
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
        <div className="row">
          <Slider {...settings}>
            {newContents.map((service, index) =>
              Object.entries(service).map(
                ([contentKey, contentValue]) =>
                  contentKey === "About" ||
                    contentKey === "Partner" ||
                    contentKey === "Title" ||
                    contentKey === "Our Services" ||
                    contentKey === "Companies" ||
                    contentKey === "Featured Work" ? (
                    " "
                  ) : (
                    <div
                      className="col col-xl-4 col-lg-4 col-sm-6 col-12"
                      key={index}
                    >
                      <div
                        className="wpo-features-item"
                        style={{
                          margin: "10px",
                          padding: "50",
                          borderRadius: "20px",
                        }}
                      >
                        <div className="">
                          <div className="">
                            {contentsImage && Object?.entries(contentsImage)?.map(([key, value]) =>
                              key === contentKey ? (
                                <img
                                  style={{
                                    borderRadius: "50%",
                                    display: "block",
                                    width: "100px",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    height: "100px",
                                  }}
                                  src={`${BASE_URL}/media/${value}`}
                                  alt=""
                                />
                              ) : (
                                " "
                              )
                            )}
                          </div>
                        </div>
                        <div>
                          <Link
                            to={`company/${index + 1}/${contentKey}`}
                            onClick={ClickHandler}
                          >
                            <Interweave
                              allowAttributes
                              allowElements
                              disableLineBreaks={true}
                              content={`${contentValue.slice(
                                0,
                                300
                              )}   ...see more`}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )

                // && contentKey === "Surma Overseas Training Center" ? (
                //   <div
                //     className="col col-xl-4 col-lg-4 col-sm-6 col-12"
                //     key={index}
                //   >
                //     <div
                //       className="wpo-features-item"
                //       style={{
                //         margin: "10px",
                //         padding: "50",
                //         borderRadius: "20px",
                //       }}
                //     >
                //       <div className="">
                //         <div className="">
                //           {Object.entries(contentsImage).map(([key, value]) =>
                //             key === "Surma Overseas Training Center" ? (
                //               <img
                //                 style={{
                //                   borderRadius: "50%",
                //                   display: "block",
                //                   width: "100px",
                //                   marginLeft: "auto",
                //                   marginRight: "auto",
                //                   height: "100px",
                //                 }}
                //                 src={`${BASE_URL}/media/${value}`}
                //                 alt=""
                //               />
                //             ) : (
                //               " "
                //             )
                //           )}
                //         </div>
                //       </div>
                //       <div>
                //         <Link
                //           to={`company/${index + 1}/${contentKey}`}
                //           onClick={ClickHandler}
                //         >
                //           <Interweave
                //             allowAttributes
                //             allowElements
                //             disableLineBreaks={true}
                //             content={`${contentValue.slice(
                //               0,
                //               300
                //             )}   ...see more`}
                //           />
                //         </Link>
                //       </div>
                //     </div>
                //   </div>
                // ) : " " && contentKey === "Surma Language Institute" ? (
                //   <div
                //     className="col col-xl-4 col-lg-4 col-sm-6 col-12"
                //     key={index}
                //   >
                //     <div
                //       className="wpo-features-item"
                //       style={{
                //         margin: "10px",
                //         padding: "50",
                //         borderRadius: "20px",
                //       }}
                //     >
                //       <div className="">
                //         <div className="">
                //           {Object.entries(contentsImage).map(([key, value]) =>
                //             key === "Surma Language Institute" ? (
                //               <img
                //                 style={{
                //                   borderRadius: "50%",
                //                   display: "block",
                //                   width: "100px",
                //                   marginLeft: "auto",
                //                   marginRight: "auto",
                //                   height: "100px",
                //                 }}
                //                 src={`${BASE_URL}/media/${value}`}
                //                 alt=""
                //               />
                //             ) : (
                //               " "
                //             )
                //           )}
                //         </div>
                //       </div>
                //       <div>
                //         <Link
                //           to={`company/${index + 1}/${contentKey}`}
                //           onClick={ClickHandler}
                //         >
                //           <Interweave
                //             allowAttributes
                //             allowElements
                //             disableLineBreaks={true}
                //             content={`${contentValue.slice(
                //               0,
                //               300
                //             )}   ...see more`}
                //           />
                //         </Link>
                //       </div>
                //     </div>
                //   </div>
                // ) : " " && contentKey === "Surma International Ltd" ? (
                //   <div
                //     className="col col-xl-4 col-lg-4 col-sm-6 col-12"
                //     key={index}
                //   >
                //     <div
                //       className="wpo-features-item"
                //       style={{
                //         margin: "10px",
                //         padding: "50",
                //         borderRadius: "20px",
                //       }}
                //     >
                //       <div className="">
                //         <div className="">
                //           {Object.entries(contentsImage).map(([key, value]) =>
                //             key === "Surma International Ltd" ? (
                //               <img
                //                 style={{
                //                   borderRadius: "50%",
                //                   display: "block",
                //                   width: "100px",
                //                   marginLeft: "auto",
                //                   marginRight: "auto",
                //                   height: "100px",
                //                 }}
                //                 src={`${BASE_URL}/media/${value}`}
                //                 alt=""
                //               />
                //             ) : (
                //               " "
                //             )
                //           )}
                //         </div>
                //       </div>
                //       <div>
                //         <Link
                //           to={`company/${index + 1}/${contentKey}`}
                //           onClick={ClickHandler}
                //         >
                //           <Interweave
                //             allowAttributes
                //             allowElements
                //             disableLineBreaks={true}
                //             content={`${contentValue.slice(
                //               0,
                //               300
                //             )}   ...see more`}
                //           />
                //         </Link>
                //       </div>
                //     </div>
                //   </div>
                // ) : (
                //   " "
                // )
              )
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurCompanies;
