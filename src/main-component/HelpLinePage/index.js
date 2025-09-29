import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import MonitoringsInfo from "../../components/MonitoringsInfo";
import HelpPage from "../../components/HelpPage";

const HelpLinePage = () => {
  return (
    <Fragment>
      <PageTitle
        pageTitle={"Helpline for Trainees"}
        pagesub={"Helpline for Trainees"}
      />
      <HelpPage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HelpLinePage;
