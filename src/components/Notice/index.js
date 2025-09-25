import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  BASE_URL,
  GET_NOTICES_WITHOUT_PAGINATION,
} from "../../constant/constants";
import { useState } from "react";
import { useEffect } from "react";

const Notice = (props) => {
  const [notices, setNotices] = useState([]);

  //for content
  useEffect(() => {
    fetch(`${GET_NOTICES_WITHOUT_PAGINATION}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log("notices", data.notices);
        setNotices(data.notices);
      })
      .catch(() => { });
  }, []);
  return (
    <>
      <div className="container">
        <div className="pt-4 mx-2 text-center">
          <h3>Notices</h3>
        </div>
        <table
          style={{}}
          className="table table-hover table-responsive"
        >
          <thead>
            <tr className="bg-secondary text-white">
              <th scope="col" style={{ textAlign: "center" }}>
                SL
              </th>
              <th scope="col center" className="text-center">Title</th>
              <th scope="col" style={{ textAlign: "center" }}>
                Date
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Show
              </th>
              <th scope="col" style={{ textAlign: "center" }}>
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <tr
                key={index}
                style={{ backgroundColor: index % 2 === 0 && "#E4F8FF" }}
              >
                <th scope="row" style={{ textAlign: "center" }}>
                  {index + 1}
                </th>

                <td className="p-2 text-center">{notice?.title}</td>
                <td className="p-2 text-center">{notice?.date}</td>
                <td className="p-2 text-center">
                  <Link
                    to={`/pdfShow/notice/${notice.id}`}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa-regular fa-eye  "></i>
                  </Link>
                </td>
                <td className="p-2 text-center">
                  <i
                    className="fa-solid fa-download  text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => window.open(`${BASE_URL}${notice.file}`)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Notice;
