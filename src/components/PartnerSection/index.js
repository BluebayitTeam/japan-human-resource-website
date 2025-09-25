import { Interweave } from "interweave";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        slidesToShow: 2,
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
const PartnerSection = (props) => {
  const [contents, setContents] = useState("");

  const { id } = useParams();
  //console.log("projecID", id);

  const [contentsImage, setContentsImage] = useState("");

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

  return (
    <section className={`partners-section section-padding ${props.tNone}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="wpo-section-title">
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === "Partner" ? (
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
          <div className="col col-xs-12">
            <div className="partner-grids partners-slider owl-carousel">
              <Slider {...settings}>
                {Object.entries(contentsImage).map(([key, value]) =>
                  key === "Partner"
                    ? value.map((n) => (
                        <div className="grid" key={key}>
                          <img src={`${BASE_URL}/media/${n}`} alt="" />
                        </div>
                      ))
                    : " "
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
