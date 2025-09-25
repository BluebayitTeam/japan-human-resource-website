import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";

import { BASE_URL, GET_IMAGE_BY_MENU_ID } from "../../constant/constants";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
// function items(obj) {
//   let content = [];

//   // eslint-disable-next-line no-unused-vars
//   for (let key in obj) {
//     let contentItem = {};
//     let objs = obj;

//     contentItem[`${key}`] = objs[key];
//     content.push(contentItem);
//   }
//   return content;
// }
const Document = (props) => {
  // const [contents, setContents] = useState("");
  const [contentsImage, setContentsImage] = useState([]);

  const { id } = useParams();
  // //console.log("projecID", id);
  // //console.log("contents", contents);

  //for content images
  useEffect(() => {
    fetch(`${GET_IMAGE_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContentsImage(data.content_images);
        // //console.log("imagesContent", data.content_images);
      })
      .catch(() => {});
  }, [id, props.id]);
  const images = Object.entries(contentsImage).map(([key, value]) =>
    key === "OUR DOCUMENT" ? value.map((n) => `${BASE_URL}/media/${n}`) : " "
  );

  //for content
  // useEffect(() => {
  //   fetch(`${GET_CONTENTS_BY_MENU_ID}/${id || props.id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setContents(data.menu_contents);

  //       // //console.log("allmenucontent", data.menu_contents);
  //     })
  //     .catch(() => {});
  // }, [id, props.id]);

  //for content items
  // const newContentsImage = items(contentsImage);
  // //console.log("newContentsImage", newContentsImage);

  // for image viewer
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  // const images = [
  //   "http://192.168.0.100:8009/media/cms/ContentImage/1.png",
  //   "http://192.168.0.100:8009/media/cms/ContentImage/1.png",
  //   "http://192.168.0.100:8009/media/cms/ContentImage/1.png",
  // ];

  const openImageViewer = useCallback((index) => {
    // //console.log("indexImage", index);
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  // //console.log("currentImage", currentImage);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <ImageList
        sx={{ width: 500 }}
        cols={3}
        rowHeight={500}
        style={{ margin: "50px" }}
      >
        {images.map((item, index) =>
          item.map((item, index) => (
            <ImageListItem key={item.img} gap={8}>
              <img
                style={{ height: "100%", width: "100%" }}
                src={`${item}`}
                srcSet={`${item}`}
                alt=""
                onClick={() => openImageViewer(index)}
                loading="lazy"
              />
            </ImageListItem>
          ))
        )}
      </ImageList>

      {isViewerOpen &&
        images.map((n) => (
          <ImageViewer
            src={n}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        ))}
    </>
  );
};

export default Document;
