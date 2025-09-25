import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BASE_URL,
  GET_IMAGE_BY_MENU_ID,
  GET_MENUS_ALL_NESTED,
} from "../../constant/constants";

const PageTitle = (props) => {
  const [homeId, setHomeId] = useState();
  const [contentsImage, setContentsImage] = useState();

  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) => (e.name === "Home" ? setHomeId(e.id) : null));
      })
      .catch(() => {});
  }, []);
  //console.log("nnnnnnn", homeId);

  //for content images
  useEffect(() => {
    fetch(`${GET_IMAGE_BY_MENU_ID}/${homeId}`)
      .then((response) => response.json())
      .then((data) => {
        // setContentImages(data.content_images);
        //console.log("imagesContent", data.content_images);
        Object.entries(data.content_images).map(([key, value]) =>
          key === "Title" ? setContentsImage(value) : " "
        );
      })
      .catch(() => {});
  }, [homeId]);
  //console.log("contentsImageTitle", contentsImage);
  return (
    <div
      className='wpo-breadcumb-area'
     
        style={{ backgroundImage: 'url("/background.png")' }}
>
      <div className='container'>
        <div className='row'>
          <div className='col-12 '>
            <div className='wpo-breadcumb-wrap'>
              <h2 className="pt-5">{props.pageTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
