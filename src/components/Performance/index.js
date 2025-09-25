import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_CONTENTS_BY_MENU_ID } from "../../constant/constants";
import { Interweave } from "interweave";
import CollaborationModels from "../CollaborationModels";
import MoUTemplates from "../MoUTemplates";

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

const Performance = (props) => {
  const { id } = useParams();
  //console.log("aboutID", props.id);
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
  //console.log("content", newContents);

  return (
    <section className="wpo-about-text">
      <div className="wpo-about-text">
        {newContents.map((service, index) =>
          Object.entries(service).map(([key, value]) =>
            key === "Why Partner With Us" ? (
              <div className="text-center fw-bold  fs-1" key={index}>
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

      <div className="container" style={{ padding: "50px 0" }}>
        <h3>
          {/* Skill Training Program Center */}
          {newContents.map((service, index) =>
            Object.entries(service).map(([key, value]) =>
              key === "Skill Training Program" ? (
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
              [
                "Strict Compliance",
                "Government Approved",
                "Skilled Candidates",
              ].includes(key) ? (
                <div className="col-sm-4 mb-4" key={index + key}>
                  <div
                    style={{
                      border: "1px solid #eee",
                      borderRadius: "10px",
                      padding: "20px",
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
                    <Interweave
                      allowAttributes
                      allowElements
                      disableLineBreaks={true}
                      content={value}
                      className="text-justify"
                    />
                  </div>
                </div>
              ) : null
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Performance;
