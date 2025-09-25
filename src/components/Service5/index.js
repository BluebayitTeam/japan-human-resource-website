import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_CONTENTS_BY_MENU_ID } from "../../constant/constants";
// const parse = require("html-react-parser");
import { Interweave } from "interweave";
import Slider from "react-slick";
var settings = {
  dots: true,
  arrows: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
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
const Service5 = (props) => {
  const { id } = useParams();
  const [contents, setContents] = useState("");

  //console.log("menuID", id);

  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };

  //for get menu
  useEffect(() => {
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);

        //console.log("allmenucontent", [data.menu_contents]);
      })
      .catch(() => {});
  }, [id, props.id]);

  //for content items
  const newContents = items(contents);
  //console.log("content", newContents);

  return (
    <section className="wpo-features-section-s6 section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="wpo-section-title">
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === "Our Services" ? (
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
              Object.entries(service).map(([key, value]) =>
                key === "Our Services" ? (
                  ""
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
                      <div>
                        <Interweave
                          allowAttributes
                          allowElements
                          disableLineBreaks={true}
                          content={value}
                        />
                      </div>
                    </div>
                  </div>
                )
              )
            )}
          </Slider>
        </div>
        {/* <div className="row">
          <Slider {...settings}>
            {newContents.map((service, index) =>
              Object.entries(service).map(([key, value]) =>
                key === "Hotel Booking" ? (
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
                      <div>
                        <h2>
                          <Link onClick={ClickHandler}>{key}</Link>
                        </h2>
                        <Interweave
                          allowAttributes
                          allowElements
                          disableLineBreaks={true}
                          content={value}
                        />
                      </div>
                    </div>
                  </div>
                ) : " " && key === "Air Ticketing" ? (
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
                      <div>
                        <h2>
                          <Link onClick={ClickHandler}>{key}</Link>
                        </h2>
                        <Interweave
                          allowAttributes
                          allowElements
                          disableLineBreaks={true}
                          content={value}
                        />
                      </div>
                    </div>
                  </div>
                ) : " " && key === "Hajj and Umrah" ? (
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
                      <div>
                        <h2>
                          <Link onClick={ClickHandler}>{key}</Link>
                        </h2>
                        <Interweave
                          allowAttributes
                          allowElements
                          disableLineBreaks={true}
                          content={value}
                        />
                      </div>
                    </div>
                  </div>
                ) : " " && key === "Visa Processing" ? (
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
                      <div>
                        <h2>
                          <Link onClick={ClickHandler}>{key}</Link>
                        </h2>
                        <Interweave
                          allowAttributes
                          allowElements
                          disableLineBreaks={true}
                          content={value}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  " "
                )
              )
            )}
          </Slider>
        </div> */}
      </div>
    </section>
  );
};

export default Service5;
