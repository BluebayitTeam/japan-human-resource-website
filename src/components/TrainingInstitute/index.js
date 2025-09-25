import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BASE_URL,
  GET_CONTENTS_BY_MENU_ID,
  GET_IMAGE_BY_MENU_ID,
  GET_MENUS_ALL_NESTED,
} from "../../constant/constants";
import { Interweave } from "interweave";

import JapaneseLanguagePreparation from "../JapaneseLanguagePreparation";
import TestimonialsfromAlumni from "../TestimonialsfromAlumni";

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

const TrainingInstitute = (props) => {
  const { id } = useParams();
  //console.log("aboutID", props.id);
  const [contents, setContents] = useState("");
  const [contentsImage, setContentsImage] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [homeId, setHomeId] = useState();

  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("homeId, ", data.menus);
        data.menus.find((e) => (e.name === "Home" ? setHomeId(e.id) : null));
        // data.menus.find((e) =>
        //   e.name === "Service" ? setServiceId(e.id) : null
        // );
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);

        //console.log("allmenucontent", data);
      })
      .catch(() => {});
  }, [id]);

  useEffect(() => {
    fetch(`${GET_IMAGE_BY_MENU_ID}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setContentsImage(data.content_images);
        console.log("imagesContent", data.content_images);
      })
      .catch(() => {});
  }, [id]);

  const newContents = items(contents);
  const imageHeight = windowWidth < 600 ? "400px" : "600px";
  // const imageHeight = 'auto'
  const trainingsImageHeight = windowWidth < 600 ? "300px" : "450px";

  return (
    <section className="wpo-about-text">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="wpo-about-text">
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === "Programs & Training" ? (
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
      {/* About */}
      <div className="container">
        <div className="g-4 row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="wpo-about-wrap">
              {Object.entries(contentsImage ? contentsImage : {}).map(
                ([key, value]) =>
                  key === "About Training Institute" ? (
                    <div className="wpo-about-img" key={key}>
                      <img
                        style={{
                          height: imageHeight,
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src={`${BASE_URL}/media/${value}`}
                        alt=""
                      />
                    </div>
                  ) : (
                    " "
                  )
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="px-2">
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === "About Training Institute" ? (
                    <div className="px-3" key={index}>
                      <Interweave
                        allowAttributes
                        allowElements
                        disableLineBreaks={true}
                        content={value}
                        className="text-justify"
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

      {/* Training programs */}

      <div className="container" style={{ marginTop: "50px" }}>
        <h3>
          {/* Skill Training Program Center */}
          {newContents.map((service, index) =>
            Object.entries(service).map(([key, value]) =>
              key === "Skill Training Program" ? (
                <div className="text-center mb-5" key={index}>
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
        </h3>
        <div className="row justify-content-start">
          {newContents.map((service, index) =>
            Object.entries(service).map(([key, value]) =>
              [
                "TITP/SSW",
                "Caregiving",
                "Construction",
                "Food Service",
              ].includes(key) ? (
                <div className="col-sm-4 mb-4" key={index + key}>
                  <div
                    style={{
                      border: "1px solid #eee",
                      borderRadius: "10px",
                      padding: "20px",
                      textAlign: "center",
                      backgroundColor: "#fff",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      transition: "0.3s",
                      minHeight: "150px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0,0,0,0.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 2px 6px rgba(0,0,0,0.1)")
                    }
                  >
                    <Interweave
                      allowAttributes
                      allowElements
                      disableLineBreaks={true}
                      content={value}
                      className="text-justify"
                    />
                  </div>
                </div>
              ) : null
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TrainingInstitute;
