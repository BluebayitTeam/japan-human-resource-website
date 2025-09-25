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

const SuccessMetrics = (props) => {
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
      <div
        className="container"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <div className="row">
          <h2 className="text-center">Success Metrics</h2>
          <div className="col-md-4 col-6">
            <div className="stat-box box-1">
              <h4 className="stat-number">
                500<span className="stat-symbol">+</span>
              </h4>
              <div className="divider"></div>
              <p className="stat-label">Student Placed</p>
            </div>
          </div>

          <div className="col-md-4 col-6">
            <div className="stat-box box-1">
              <h3 className="stat-number">
                85 <span className="stat-symbol">%</span>
              </h3>
              <div className="divider"></div>
              <p className="stat-label">JLPT Pass Rate</p>
            </div>
          </div>

          <div className="col-md-4 col-6">
            <div className="stat-box box-1">
              <h3 className="stat-number">
                100<span className="stat-symbol">%</span>
              </h3>
              <div className="divider"></div>
              <p className="stat-label">programme CompleSon Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
