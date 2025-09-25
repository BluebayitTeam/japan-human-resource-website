import { Interweave } from "interweave";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_CONTENTS_BY_MENU_ID } from "../../constant/constants";
import ContactForm from "../ContactFrom";

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
const Contactpage = (props) => {
  const { id } = useParams();
  const [contents, setContents] = useState("");

  // //console.log("menuID", id);

  //for get menu
  useEffect(() => {
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);

        // //console.log("ContactContent", data);
      })
      .catch(() => {});
  }, [id, props.id]);

  //for content items
  const newContents = items(contents);
  // //console.log("content Contact", newContents);

  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-placeholder"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      {newContents.map((service, index) =>
                        Object.entries(service).map(([key, value]) =>
                          key === "Address" ? (
                            <>
                              <Interweave
                                allowAttributes
                                allowElements
                                disableLineBreaks={true}
                                content={value}
                              />
                            </>
                          ) : (
                            " "
                          )
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-email"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      {newContents.map((service, index) =>
                        Object.entries(service).map(([key, value]) =>
                          key === "Email Us" ? (
                            <>
                              <h2>{key}</h2>
                              <Interweave
                                allowAttributes
                                allowElements
                                disableLineBreaks={true}
                                content={value}
                              />
                            </>
                          ) : (
                            " "
                          )
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-phone-call"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      {newContents.map((service, index) =>
                        Object.entries(service).map(([key, value]) =>
                          key === "Call Now" ? (
                            <>
                              <h2>{key}</h2>
                              <Interweave
                                allowAttributes
                                allowElements
                                disableLineBreaks={true}
                                content={value}
                              />
                            </>
                          ) : (
                            " "
                          )
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpo-contact-title">
              <h2>Have Any Question?</h2>
              <p>
                It is a long established fact that a reader will be distracted
                content of a page when looking.
              </p>
            </div>
            <div className="wpo-contact-form-area" style={{ margin: "30px" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <section className="wpo-contact-map-section">
        <div className="wpo-contact-map">
          {newContents.map((service, index) =>
            Object.entries(service).map(([key, value]) =>
              key === "Map" ? (
                <>
                  <iframe title="Map" src={value.slice(3, -4)}></iframe>
                </>
              ) : (
                " "
              )
            )
          )}
        </div>
      </section>
    </section>
  );
};

export default Contactpage;
