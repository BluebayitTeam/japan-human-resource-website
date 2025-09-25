import React, { useEffect, useState } from "react";
import AllRoute from "../router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../sass/style.scss";
import { BASE_URL, GET_SITESETTINGS } from "../../constant/constants";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
  const [siteSetting, setSiteSetting] = useState({});

  useEffect(() => {
    fetch(`${GET_SITESETTINGS}`)
      .then((response) => response.json())
      .then((data) => {
        setSiteSetting(data.general_settings[0]);
      })
      .catch(() => { });
  }, []);
  useEffect(() => {
    const favicon = document.getElementById("favicon");
    const title = document.getElementById("title");
    favicon.href = `${BASE_URL}${siteSetting.favicon}`;
    title.href = `${BASE_URL}${siteSetting.title}`;

  }, [siteSetting.favicon, siteSetting.title]);

  return (
    <div className="App" id="scrool">
      <HelmetProvider>
        <Helmet>
          <title>
            {siteSetting.title ? siteSetting.title : BASE_URL?.slice(12, -5)}
          </title>
        </Helmet>
        <AllRoute logo={siteSetting.logo} />
        <ToastContainer />
      </HelmetProvider>
    </div>
  );
};

export default App;
