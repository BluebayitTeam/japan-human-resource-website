import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BASE_URL,
  GET_CONTENTS_BY_MENU_ID,
  GET_EMPLOYEES_WITHOUT_PAGINATION,
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

const OurEmployees = () => {
  const { id } = useParams();
  const [employees, setEmpoyees] = useState([]);
  const [contents, setContents] = useState("");

  useEffect(() => {
    fetch(`${GET_CONTENTS_BY_MENU_ID}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setContents(data.menu_contents);

      })
      .catch(() => { });
  }, [id]);

  const newContents = items(contents);

  //for content
  useEffect(() => {
    fetch(`${GET_EMPLOYEES_WITHOUT_PAGINATION}`)
      .then((response) => response.json())
      .then((data) => {
        const top = data.employees.filter(emp => emp.username === "simozumder");
        const others = data.employees.filter(emp => emp.username !== "simozumder");

        const reordered = [...top, ...others];
        setEmpoyees(reordered);
      })
      .catch(() => { });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#ffffff" }}>
        {newContents.map((service, index) =>
          Object.entries(service).map(([key, value]) =>
            key === "Meet the Team" ? (
              <section className="wpo-about-text" style={{ padding: "50px 0 50px 0", background: "#ffff" }} key={index}>
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
        <section className="wpo-features-section-s6 section-padding ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">{/* Title Section */}</div>
            </div>
            <div className="row d-flex align-items-stretch">
              {employees.map((employee) => (
                <div key={employee.id} className="col col-xl-4 col-lg-4 col-sm-6 col-12 d-flex">
                  <div
                    className="wpo-features-item d-flex flex-column text-center"
                    style={{
                      margin: "10px",
                      padding: "20px",
                      borderRadius: "20px",
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      minHeight: "300px", // Ensures equal height
                    }}
                  >
                    <div>
                      <img
                        style={{
                          borderRadius: "50%",
                          display: "block",
                          width: "130px",
                          height: "130px",
                          margin: "0 auto",
                        }}
                        src={`${BASE_URL}${employee.image}`}
                        alt=""
                      />
                    </div>
                    <div>
                      <h4 style={{ marginTop: "20px" }}>
                        {employee.first_name} {employee.last_name}
                      </h4>
                      <h6 className="text-xs">{employee?.designation?.name}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>


  );
};

export default OurEmployees;
