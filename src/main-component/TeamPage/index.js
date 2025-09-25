import React, { Fragment, useEffect, useState } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { GET_MENUS_ALL_NESTED } from "../../constant/constants";
import AboutS2 from "../../components/AboutS2";
import Vision from "../../components/Vision";
import OurEmployees from "../../components/OurEmployees";

const TeamPage = () => {
  const [homeId, setHomeId] = useState();

  useEffect(() => {
    fetch(`${GET_MENUS_ALL_NESTED}`)
      .then((response) => response.json())
      .then((data) => {
        data.menus.find((e) => (e.name === "Home" ? setHomeId(e.id) : null));
      })
      .catch(() => {});
  }, []);

  return (
    <Fragment>
      <PageTitle pageTitle={"Meet the Team"} pagesub={"About"} />

      <OurEmployees />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TeamPage;
