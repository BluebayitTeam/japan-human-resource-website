import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Services from "../../api/service";
import { GET_CONTENTS_BY_MENU_ID } from "../../constant/constants";

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

const Service = (props) => {
  const { id } = useParams();
  //console.log("aboutID", id);
  const [contents, setContents] = useState("");
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  useEffect(() => {
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);

        //console.log("allmenucontent", data);
      })
      .catch(() => {});
  }, [id]);
  //console.log("contents", contents);

  const newContents = items(contents);
  //console.log("content", newContents);

  return (
    <section
      className={`${props.Fclass} section-padding  ${props.vclassClass}`}
    >
      <div className="container">
        <div className="row">
          {Services.slice(0, 4).map((service, sitem) => (
            <div className="col col-xl-3 col-lg-6 col-sm-6 col-12" key={sitem}>
              <div className="wpo-features-item">
                <div className="wpo-features-icon">
                  <div className="icon">
                    <i className={`fi  ${service.fIcon1}`}></i>
                  </div>
                </div>
                <div className="wpo-features-text">
                  <h2>
                    <Link
                      onClick={ClickHandler}
                      to={`/service-single/${service.id}`}
                    >
                      {service.title}
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
