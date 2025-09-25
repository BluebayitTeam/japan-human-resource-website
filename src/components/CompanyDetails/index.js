import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  GET_CONTENTS_BY_MENU_ID,
  GET_MENUS_ALL_NESTED,
} from "../../constant/constants";
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

const CompanyDetails = (props) => {
  const { companyName } = useParams();
  // //console.log("companyName", id, companyName);
  const [contents, setContents] = useState("");

  const [homeId, setHomeId] = useState();

  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) => (e.name === "Home" ? setHomeId(e.id) : null));
      })
      .catch(() => {});
  }, []);
  useEffect(() => {
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${homeId}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);

        // //console.log("allmenucontent", data);
      })
      .catch(() => {});
  }, [homeId]);

  const newContents = items(contents);
  // //console.log("content", newContents);

  return (
    <section className="wpo-about-text" style={{ margin: "30px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="wpo-about-text">
              {newContents.map((service, index) =>
                Object.entries(service).map(([key, value]) =>
                  key === companyName ? (
                    <div className="" key={index}>
                      <Interweave
                        allowAttributes
                        allowElements
                        disableLineBreaks={true}
                        content={value}
                      />
                    </div>
                  ) : (
                    " "
                  )
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;
