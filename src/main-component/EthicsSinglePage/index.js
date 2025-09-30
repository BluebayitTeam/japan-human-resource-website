import React, { Fragment, useCallback, useEffect, useState } from "react";
import PageTitle from "../../components/pagetitle";
import Scrollbar from "../../components/scrollbar";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageViewer from "react-simple-image-viewer";
import {
  BASE_URL,
  GET_CONTENTS_BY_MENU_ID,
  GET_IMAGE_BY_MENU_ID,
  GET_MENUS_ALL_NESTED,
} from "../../constant/constants";
import { Interweave } from "interweave";

function items(obj) {
  let content = [];
  for (let key in obj) {
    let contentItem = {};
    contentItem[`${key}`] = obj[key];
    content.push(contentItem);
  }
  return content;
}

const EthicsSinglePage = () => {
  const { title } = useParams();
  const [contentsImage, setContentsImage] = useState([]); // always array
  console.log("gfjgfjgf", title);
  const [contents, setContents] = useState({});
  const [eventPageId, setEventPageId] = useState();

  const isMobile = useMediaQuery("(max-width:600px)");
  const numCols = isMobile ? 1 : 3;

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) =>
          e.name === "Licensing Information" ? setEventPageId(e.id) : null
        );
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!eventPageId) return;
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${eventPageId}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents || {});
      })
      .catch(() => {});
  }, [eventPageId]);

  useEffect(() => {
    if (!eventPageId) return;
    fetch(`${GET_IMAGE_BY_MENU_ID}/${eventPageId}`)
      .then((response) => response.json())
      .then((data) => {
        let images = data.content_images?.[title];
        // ✅ Normalize to array of URLs
        if (Array.isArray(images)) {
          setContentsImage(images.map((img) => `${BASE_URL}/media/${img}`));
        } else if (typeof images === "object" && images !== null) {
          let flatImgs = Object.values(images).flat();
          setContentsImage(flatImgs.map((img) => `${BASE_URL}/media/${img}`));
        } else {
          setContentsImage([]);
        }
      })
      .catch(() => {});
  }, [eventPageId]);

  return (
    <Fragment>
      <PageTitle pageTitle={title} pagesub={"Event"} />

      <div className="container" style={{ padding: "50px 0" }}>
        <div className="row align-items-center justify-content-center ">
          <div className="col-lg-12 col-md-12 col-12">
            {/* Image Grid */}
            <ImageList
              sx={{ width: "100%", height: "auto" }}
              cols={numCols}
              rowHeight={300}
              style={{ margin: "10px 0" }}
            >
              {contentsImage.map((url, index) => (
                <ImageListItem key={index}>
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    src={url}
                    alt={`img-${index}`}
                    onClick={() => openImageViewer(index)}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>

            {/* Image Viewer */}
            {isViewerOpen && (
              <ImageViewer
                src={contentsImage}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default EthicsSinglePage;
