import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { BASE_URL, GET_PDF_DATA } from "../../constant/constants";

const PdfShow = (props) => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${GET_PDF_DATA}${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => {});
  }, [id]);
  return (
    <>
      <div className="container w-50">
        <div className="pt-4 mx-2 text-center">
          <h3>{data?.title}</h3>
        </div>

        <div className="col-md-12 mt-4 mx-auto">
          <iframe
            // src={`${BASE_URL}${data?.file}`}
            src={`${BASE_URL}${data?.file}`}
            title="W3Schools Free Online Web Tutorials"
            height="600px"
            width="100%"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default PdfShow;
