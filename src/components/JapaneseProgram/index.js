import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BASE_URL,
  GET_CONTENTS_BY_MENU_ID,
  GET_IMAGE_BY_MENU_ID,
  GET_MENUS_ALL_NESTED,
} from "../../constant/constants";
import { Interweave } from "interweave";

// import JapaneseLanguagePreparation from "../JapaneseLanguagePreparation";
import TestimonialsfromAlumni from "../TestimonialsfromAlumni";
import JapaneseLanguagePreparation from "../JapaneseLanguagePreparation";

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

const JapaneseProgram = (props) => {
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
      <JapaneseLanguagePreparation />
    </section>
  );
};

export default JapaneseProgram;
