import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import {
  BASE_URL,
  GET_CONTENTS_BY_MENU_ID,
  GET_IMAGE_BY_MENU_ID,
} from "../../constant/constants";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Interweave } from "interweave";

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

const LicensingInfo = (props) => {
  const [contentsImage, setContentsImage] = useState([]);
  const { id } = useParams();
  const [contents, setContents] = useState("");

  useEffect(() => {
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);

        //console.log("allmenucontent", data);
      })
      .catch(() => {});
  }, [id, props.id]);
  //console.log("contents", contents);

  const newContents = items(contents);

  useEffect(() => {
    fetch(`${GET_IMAGE_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContentsImage(data.content_images);
      })
      .catch(() => {});
  }, [id, props.id]);

  const images = Object.entries(contentsImage)
    .map(([key, value]) =>
      key === "Licensing Information"
        ? value.map((n) => `${BASE_URL}/media/${n}`)
        : []
    )
    .flat();

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

  return (
    <>
      <section
        style={{
          backgroundColor: "#e9fafa",
        }}
      >
        <div className="container" style={{ padding: "50px 0" }}>
          <h3>
            {/* Skill Training Program Center */}
            {newContents.map((service, index) =>
              Object.entries(service).map(([key, value]) =>
                key === "Licensing Information" ? (
                  <div className="text-center mb-2" key={index}>
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
          <div className="row justify-content-start m-2">
            {newContents.map((service, index) =>
              Object.entries(service).map(([key, value]) =>
                ["Government License", "Certifications"].includes(key) ? (
                  <div className="col-sm-6 mb-4 " key={index + key}>
                    <div
                      style={{
                        border: "1px solid #eee",
                        borderRadius: "10px",
                        padding: "55px",
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
                      <Link to={`/ethics/${key}`}>
                        <Interweave
                          allowAttributes
                          allowElements
                          disableLineBreaks={true}
                          content={value}
                          className="text-justify"
                        />
                      </Link>
                    </div>
                  </div>
                ) : null
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LicensingInfo;
