import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_CONTENTS_BY_MENU_ID } from "../../constant/constants";
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

const Mission = (props) => {
  const { id } = useParams();
  // //console.log("aboutID", props.id);
  const [contents, setContents] = useState("");

  useEffect(() => {
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${id || props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);

        // //console.log("allmenucontent", data);
      })
      .catch(() => { });
  }, [id, props.id]);
  // //console.log("contents", contents);

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
                  key === "Compliance & Ethics" ? (
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

export default Mission;
