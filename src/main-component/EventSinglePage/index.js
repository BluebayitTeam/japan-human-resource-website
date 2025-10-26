import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Scrollbar from "../../components/scrollbar";
import Events from "../../api/event";
import EventTabs from "./alltab";
import EventSidebar from "./sidebar";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, GET_CONTENTS_BY_MENU_ID, GET_IMAGE_BY_MENU_ID, GET_MENUS_ALL_NESTED } from "../../constant/constants";
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


const EventSinglePage = () => {
  const { title } = useParams();
  const [contentsImage, setContentsImage] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [contents, setContents] = useState("");
  const [eventPageId, setEventPageId] = useState();

  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) => (e.name === "News & Events" ? setEventPageId(e.id) : null));
      })
      .catch(() => { });
  }, []);


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
    if (!eventPageId) return;
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${eventPageId}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);


      })
      .catch(() => { });
  }, [eventPageId]);


  useEffect(() => {
    fetch(`${GET_IMAGE_BY_MENU_ID}/${eventPageId}`)
      .then((response) => response.json())
      .then((data) => {
        setContentsImage(data.content_images);
      })
      .catch(() => { });
  }, [eventPageId]);

  const newContents = items(contents);
  // const imageHeight = windowWidth < 600 ? '400px' : '500px';
  const imageHeight = 'auto'




  return (
    <Fragment>
      <PageTitle pageTitle={title} pagesub={"Event"} />

      <div className="container" style={{ padding: "50px 0" }}>
        <div className="row align-items-center justify-content-center g-4">

          <div className='col-lg-6 col-md-6 col-12'>
            <div className='wpo-about-wrap'>
              {Object.entries(contentsImage ? contentsImage : {}).map(
                ([key, value]) =>
                  key === title ? (
                    <div className='wpo-about-img p-3' key={`${title}-image`}>
                      <img
                        style={{ height: imageHeight, width: '100%', objectFit: 'cover' }}
                        src={`${BASE_URL}/media/${value}`}
                        alt=''
                      />

                    </div>
                  ) : (
                    ' '
                  )
              )}
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <div className="wpo-about-text text-center">
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === title ? (
                    <div key={`${title}`}>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default EventSinglePage;
