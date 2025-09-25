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
const TestimonialsfromAlumni = (props) => {
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
    <section
      className={`partners-section section-padding ${props.tNone}`}
      style={{
        padding: "50px 0 50px 0",
        margin: "50px 0",
        background: "#e9fafa",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="wpo-section-title">
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === "Testimonials from Alumni" ? (
                    <div className="bg-yellow-500" key={index}>
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
    </section>
  );
};

export default TestimonialsfromAlumni;
