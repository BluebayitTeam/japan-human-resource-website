import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageViewer from 'react-simple-image-viewer';
import { BASE_URL, GET_CONTENTS_BY_MENU_ID, GET_IMAGE_BY_MENU_ID } from '../../constant/constants';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Interweave } from 'interweave';

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


const Gallery = (props) => {
  const [contentsImage, setContentsImage] = useState([]);
  const { id } = useParams();
  const [contents, setContents] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);

      })
      .catch(() => { });
  }, [id, props.id]);

  const newContents = items(contents);

  useEffect(() => {
    fetch(`${GET_IMAGE_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContentsImage(data.content_images);
      })
      .catch(() => { });
  }, [id, props.id]);

  const images = Object.entries(contentsImage)
    .map(([key, value]) =>
      key === 'Gallery' ? value.map((n) => `${BASE_URL}/media/${n}`) : []
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

  // Use media queries to determine the number of columns
  const isMobile = useMediaQuery('(max-width:600px)');
  const numCols = isMobile ? 1 : 3;

  return (
    <>
      {newContents.map((service, index) =>
        Object.entries(service).map(([key, value]) =>
          key === "Success Stories Gallery" ? (
            <section className="wpo-about-text" style={{ padding: "50px 0 0 0", background: "#ffff" }} key={index}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="wpo-about-text">
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
                </div>
              </div>
            </section>
          ) : (
            " "
          )
        )
      )}
      <ImageList
        sx={{ width: '100%' }}
        cols={numCols}
        rowHeight={windowWidth < 600 ? 'auto' : 500}
        style={{ margin: '50px 0' }}
      >
        {images.map((item, index) => (
          <ImageListItem key={index} gap={8}>
            <img
              style={{ height: windowWidth < 600 ? 'auto' : '100%', width: '100%', objectFit: windowWidth < 600 ? 'contain' : 'cover', }}
              src={`${item}`}
              srcSet={`${item}`}
              alt=''
              onClick={() => openImageViewer(index)}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
};

export default Gallery;
