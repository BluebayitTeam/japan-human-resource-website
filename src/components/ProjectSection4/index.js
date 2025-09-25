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
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
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
const ProjectSection4 = (props) => {
  const [contents, setContents] = useState("");
  const [contentsImage, setContentsImage] = useState("");

  const { id } = useParams();
  //console.log("projecID", id);

  //for content images
  useEffect(() => {
    fetch(`${GET_IMAGE_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        // setContentImages(data.content_images);
        setContentsImage(data.content_images);
        //console.log("imagesContent", data.content_images);
      })
      .catch(() => {});
  }, [id, props.id]);

  //for content
  useEffect(() => {
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);

        //console.log("allmenucontent", data.menu_contents);
      })
      .catch(() => {});
  }, [id, props.id]);

  //for content items
  const newContents = items(contents);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <section className="wpo-project-section-s2 pb-0 section-padding">
      <div className="container-fluid">
        <div className="sortable-gallery">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-grids gallery-active">
                <div className={`wpo-campaign-area section-padding `}>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        <div className="wpo-section-title">
                          {newContents.map((service, index) =>
                            Object.entries(service).map(([key, value]) =>
                              key === "Featured Work" ? (
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
                  </div>
                </div>
                <Slider {...settings}>
                  {Object.entries(contentsImage).map(([key, value]) =>
                    key === "Featured Work"
                      ? value.map((n) => (
                          <div className="grid">
                            <div className="img-holder">
                              <img src={`${BASE_URL}/media/${n}`} alt="" />

                              <div className="hover-content">
                                <Link onClick={ClickHandler} className="plus">
                                  <i className="ti-plus"></i>
                                </Link>
                                <h4>
                                  <Link onClick={ClickHandler}>home</Link>
                                </h4>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      : " "
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection4;
